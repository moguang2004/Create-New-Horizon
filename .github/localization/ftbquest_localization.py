"""Generate translation-key based FTB Quests files for CTNH builds.

The checked-in quest files remain readable Chinese source.  This script writes a
second tree with the text fields replaced by translation keys and emits the
matching OpenLoader language resources used by packaged clients and servers.
"""

from __future__ import annotations

import ast
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys

try:
    import ftb_snbt_lib as snbt
    from ftb_snbt_lib.tag import Compound, List, String
except ModuleNotFoundError as exc:
    raise SystemExit(
        "Missing ftb-snbt-lib. Run: python -m pip install -r "
        ".github/localization/requirements.txt"
    ) from exc


REPO_ROOT = Path(__file__).resolve().parents[2]
QUEST_PATH = REPO_ROOT / "config/ftbquests/quests"
QUEST_LOCALIZED_PATH = REPO_ROOT / ".github/localization/quests"
LANG_FILE_PATH = (
    REPO_ROOT
    / "config/openloader/resources/ctnh_quests/assets/ctnh/lang"
)

SOURCE_LANGUAGE = "zh_cn"
# These locale files are initialized from the Chinese source and can then be
# replaced with AI or human translations without changing the quest SNBT.
TARGET_LANGUAGES = ("en_us", "ja_jp", "ru_ru")
PACK_SHORT_KEY = "ctnh"

SOURCE_KEYS: dict[str, str] = {}

ESCAPE_SUBS = {
    "%": "%%",
    '"': r'\"',
}

MODE = sys.argv[1] if len(sys.argv) > 1 else None
PUSH_BEFORE_COMMIT = sys.argv[2] if len(sys.argv) > 2 else None


def get_file_at_commit(file_path: Path, commit_sha: str) -> dict[str, str]:
    """Read a generated language file from a previous git commit."""
    try:
        relative_path = file_path.relative_to(REPO_ROOT).as_posix()
        result = subprocess.run(
            ["git", "-C", str(REPO_ROOT), "show", f"{commit_sha}:{relative_path}"],
            capture_output=True,
            text=True,
            check=True,
        )
        value = json.loads(result.stdout)
        return value if isinstance(value, dict) else {}
    except Exception as exc:
        print(f"[ERROR] git show failed for {file_path} at {commit_sha}: {exc}")
        return {}


def get_pr_base_commit_sha() -> str | None:
    """Return the first parent of a merge commit, when one is available."""
    try:
        result = subprocess.run(
            ["git", "-C", str(REPO_ROOT), "rev-list", "--parents", "-n", "1", "HEAD"],
            capture_output=True,
            text=True,
            check=True,
        )
        parts = result.stdout.strip().split()
        return parts[1] if len(parts) > 2 else None
    except Exception as exc:
        print(f"[ERROR] get_pr_base_commit_sha failed: {exc}")
        return None


def escape_string(text: str) -> str:
    for match, replacement in ESCAPE_SUBS.items():
        text = text.replace(match, replacement)
    return text


def text_filter(text: str) -> bool:
    """Skip empty strings, existing key references, and markup directives.

    Author-written ``{Chinese}`` text must still be key-ized; only values that
    are already translation keys (``{ctnh.*}``, ``{ftbquests.*}``) or markup
    directives (``{image:...}``, ``{https://...}``) are left untouched.
    """
    if not text:
        return False
    if text.startswith("{") and text.endswith("}"):
        inner = text[1:-1]
        if inner.startswith("ctnh.") or inner.startswith("ftbquests."):
            return False
        if re.match(r"^[A-Za-z_][A-Za-z0-9_]*:", inner):
            return False
    return True


def strip_brace_wrap(text: str) -> str:
    """Unwrap author-written {Chinese} text so the stored value is plain text."""
    if text.startswith("{") and text.endswith("}"):
        inner = text[1:-1]
        if not inner.startswith("ctnh.") and not inner.startswith("ftbquests."):
            return inner
    return text


def _is_string_list(value: object) -> bool:
    if not isinstance(value, List):
        return False
    try:
        return issubclass(value.subtype, String)
    except TypeError:
        return False


def _is_compound_list(value: object) -> bool:
    if not isinstance(value, List):
        return False
    try:
        return issubclass(value.subtype, Compound)
    except TypeError:
        return False


def convert(file_path: Path) -> Compound:
    with file_path.open("r", encoding="utf-8", newline="") as source:
        data = snbt.load(source)

    _convert(data, f"{PACK_SHORT_KEY}.{file_path.stem}")
    return data


def _convert(data: Compound, lang_key: str) -> None:
    for key in list(data):
        value = data[key]
        if not value:
            continue

        if isinstance(value, Compound):
            _convert(value, f"{lang_key}.{key}")
            continue

        if _is_compound_list(value):
            for index, tag in enumerate(value):
                if "id" in tag:
                    child_key = f"{key}.{tag['id']}"
                else:
                    child_key = f"{key}{index}"
                _convert(tag, f"{lang_key}.{child_key}")
            continue

        if key not in {"title", "subtitle", "description"}:
            continue

        if isinstance(value, String) and text_filter(value):
            translation_key = f"{lang_key}.{key}"
            SOURCE_KEYS[translation_key] = escape_string(strip_brace_wrap(value))
            data[key] = snbt.String(f"{{{translation_key}}}")
            continue

        if not _is_string_list(value):
            continue

        # Description arrays may contain either plain lines or JSON rich text.
        for text_index, index in enumerate(
            filter(lambda i: text_filter(value[i]), range(len(value)))
        ):
            line = value[index]
            if line.startswith("[") and line.endswith("]"):
                parsed_list = ast.literal_eval(
                    line.replace("true", "True").replace("false", "False")
                )
                for rich_index, item_index in enumerate(
                    filter(lambda i: parsed_list[i] != "", range(len(parsed_list)))
                ):
                    item = parsed_list[item_index]
                    translation_key = (
                        f"{lang_key}.{key}{text_index}.rich_text{rich_index}"
                    )
                    if isinstance(item, str):
                        SOURCE_KEYS[translation_key] = escape_string(strip_brace_wrap(item))
                        parsed_list[item_index] = {"translate": translation_key}
                    else:
                        SOURCE_KEYS[translation_key] = escape_string(
                            strip_brace_wrap(item.pop("text"))
                        )
                        item["translate"] = translation_key
                if parsed_list:
                    if parsed_list[0] != "":
                        parsed_list.insert(0, "")
                    value[index] = json.dumps(parsed_list, ensure_ascii=False)
            else:
                translation_key = f"{lang_key}.{key}{text_index}"
                SOURCE_KEYS[translation_key] = escape_string(strip_brace_wrap(line))
                value[index] = snbt.String(f"{{{translation_key}}}")


def unescape_json_string(text: str) -> str:
    # json.dump will apply the correct JSON escaping for literal quotes.
    return text.replace(r'\"', '"')


def sync_language_files_incremental(source_language: str, target_language: str) -> None:
    """Update one target language without overwriting unchanged translations."""
    zh_cn_path = LANG_FILE_PATH / f"{source_language}.json"
    target_path = LANG_FILE_PATH / f"{target_language}.json"

    new_zh_cn = json.loads(zh_cn_path.read_text(encoding="utf-8"))

    old_zh_cn: dict[str, str] = {}
    if MODE == "push":
        old_zh_cn = get_file_at_commit(zh_cn_path, PUSH_BEFORE_COMMIT) if PUSH_BEFORE_COMMIT else {}
    elif MODE == "pr":
        base_commit = get_pr_base_commit_sha()
        old_zh_cn = get_file_at_commit(zh_cn_path, base_commit) if base_commit else {}

    try:
        target = json.loads(target_path.read_text(encoding="utf-8"))
        if not isinstance(target, dict):
            target = {}
    except (FileNotFoundError, json.JSONDecodeError):
        target = {}

    if old_zh_cn and MODE == "push":
        changed_keys = {
            key
            for key in new_zh_cn
            if old_zh_cn.get(key) != new_zh_cn[key]
            or (key in new_zh_cn and key not in target)
        }
        print(f"[INFO] Changed keys: {len(changed_keys)}")
        for key in sorted(changed_keys):
            print(f"- {key}: {old_zh_cn.get(key, '<not present>')} -> {new_zh_cn[key]}")
        for key in changed_keys:
            target[key] = new_zh_cn[key]
    else:
        newly_added_keys = [key for key in new_zh_cn if key not in target]
        print(f"[WARN] No old zh_cn found, only add {len(newly_added_keys)} new keys.")
        for key in newly_added_keys:
            target[key] = new_zh_cn[key]

    for key in list(target):
        if key.startswith("a.comment"):
            continue
        if key not in new_zh_cn:
            del target[key]

    target_path.write_text(
        json.dumps(dict(sorted(target.items())), ensure_ascii=False, indent=4),
        encoding="utf-8",
    )


def main() -> None:
    if not QUEST_PATH.is_dir():
        raise SystemExit(f"Quest source directory does not exist: {QUEST_PATH}")

    shutil.rmtree(QUEST_LOCALIZED_PATH, ignore_errors=True)
    QUEST_LOCALIZED_PATH.mkdir(parents=True, exist_ok=True)
    LANG_FILE_PATH.mkdir(parents=True, exist_ok=True)
    # The ctnh_quests resource pack is a per-build artifact (not tracked in
    # git); keep it loadable by OpenLoader for the Chinese quest locales.
    quest_pack_dir = LANG_FILE_PATH.parent.parent.parent
    quest_pack_dir.mkdir(parents=True, exist_ok=True)
    (quest_pack_dir / "pack.mcmeta").write_text(
        json.dumps(
            {
                "id": "ctnh_quests",
                "pack": {"description": "CTNH quest localization", "pack_format": 15},
            },
            ensure_ascii=False,
            indent=4,
        ),
        encoding="utf-8",
    )
    SOURCE_KEYS.clear()

    source_files = sorted(QUEST_PATH.rglob("*.snbt"))
    if not source_files:
        raise SystemExit(f"No SNBT files found below {QUEST_PATH}")

    for file_path in source_files:
        localized_data = convert(file_path)
        relative_path = file_path.relative_to(QUEST_PATH)
        localized_path = QUEST_LOCALIZED_PATH / relative_path
        localized_path.parent.mkdir(parents=True, exist_ok=True)
        with localized_path.open("w", encoding="utf-8", newline="") as target:
            snbt.dump(localized_data, target)

    json_safe_keys = {
        key: unescape_json_string(value) for key, value in SOURCE_KEYS.items()
    }
    source_language_path = LANG_FILE_PATH / f"{SOURCE_LANGUAGE}.json"
    source_language_path.write_text(
        json.dumps(dict(sorted(json_safe_keys.items())), ensure_ascii=False, indent=4),
        encoding="utf-8",
    )
    for target_language in TARGET_LANGUAGES:
        sync_language_files_incremental(SOURCE_LANGUAGE, target_language)
    print(
        f"Generated {len(source_files)} localized SNBT files and "
        f"{len(SOURCE_KEYS)} translation keys."
    )


if __name__ == "__main__":
    main()

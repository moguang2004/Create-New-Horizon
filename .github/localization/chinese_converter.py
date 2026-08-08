"""Generate Traditional Chinese locale files from the generated zh_cn file."""

from __future__ import annotations

import json
from pathlib import Path

try:
    import opencc
except ModuleNotFoundError as exc:
    raise SystemExit(
        "Missing opencc. Run: python -m pip install -r "
        ".github/localization/requirements.txt"
    ) from exc


REPO_ROOT = Path(__file__).resolve().parents[2]
LANG_DIR = (
    REPO_ROOT
    / "config/openloader/resources/ctnh_quests/assets/ctnh/lang"
)
INPUT_FILE_PATH = LANG_DIR / "zh_cn.json"

# OpenCC handles the character conversion; these terms match the terminology
# used by the Minecraft client and the existing CTNH language assets.
ZH_TW_FIXES = {
    "服務器": "伺服器",
    "鼠標": "滑鼠",
    "默認": "預設",
    "創建": "建立",
    "設置": "設定",
    "鏈接": "連結",
    "網絡": "網路",
    "信息": "資訊",
    "圖標": "圖示",
    "文件": "檔案",
    "界面": "介面",
    "激活": "啟用",
    "導出": "匯出",
    "導入": "匯入",
}


def _fix(text: str, fixes: dict[str, str]) -> str:
    for source, target in fixes.items():
        text = text.replace(source, target)
    return text


def _convert_value(value: object, converter: opencc.OpenCC, fixes: dict[str, str]) -> object:
    if isinstance(value, str):
        return _fix(converter.convert(value), fixes)
    if isinstance(value, list):
        return [_convert_value(item, converter, fixes) for item in value]
    if isinstance(value, dict):
        return {key: _convert_value(item, converter, fixes) for key, item in value.items()}
    return value


def convert_locale(name: str, config: str) -> None:
    output_path = LANG_DIR / f"{name}.json"
    data = json.loads(INPUT_FILE_PATH.read_text(encoding="utf-8"))
    converted = _convert_value(data, opencc.OpenCC(config), ZH_TW_FIXES)
    output_path.write_text(
        json.dumps(converted, ensure_ascii=False, indent=4), encoding="utf-8"
    )


def main() -> None:
    if not INPUT_FILE_PATH.is_file():
        raise SystemExit(f"Missing generated source locale: {INPUT_FILE_PATH}")
    convert_locale("zh_tw", "s2tw.json")
    convert_locale("zh_hk", "s2hk.json")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
import json
import os
import shutil
import tempfile
import urllib.error
import urllib.request
import zipfile
from urllib.parse import urlparse
from pathlib import Path

API_ARTIFACTS = "https://api.github.com/repos/CTNH-Team/CTNH-Core/actions/artifacts?per_page=100"


def get_token() -> str:
    return os.environ.get("GITHUB_TOKEN", "").strip() or os.environ.get("GH_TOKEN", "").strip()


def build_api_headers() -> dict[str, str]:
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "ctnh-build-sync-script",
    }
    token = get_token()
    if token:
        headers["Authorization"] = f"token {token}"
    return headers


def github_get_json(url: str) -> dict:
    headers = build_api_headers()
    req = urllib.request.Request(url, headers=headers, method="GET")
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def github_download(url: str, dest: Path) -> None:
    headers = build_api_headers()

    no_redirect_opener = urllib.request.build_opener(NoRedirect())
    req = urllib.request.Request(url, headers=headers, method="GET")

    try:
        with no_redirect_opener.open(req, timeout=60) as response:
            dest.write_bytes(response.read())
            return
    except urllib.error.HTTPError as exc:
        if exc.code not in (301, 302, 303, 307, 308):
            raise
        redirect_url = exc.headers.get("Location", "").strip()
        if not redirect_url:
            raise RuntimeError("Artifact download redirect missing Location header") from exc

    redirect_host = (urlparse(redirect_url).hostname or "").lower()
    github_hosts = ("github.com", "api.github.com")
    redirect_headers = {
        "User-Agent": "ctnh-build-sync-script",
        "Accept": "application/octet-stream",
    }
    if redirect_host.endswith(github_hosts):
        token = get_token()
        if token:
            redirect_headers["Authorization"] = f"token {token}"

    redirect_req = urllib.request.Request(redirect_url, headers=redirect_headers, method="GET")
    with urllib.request.urlopen(redirect_req, timeout=120) as response:
        dest.write_bytes(response.read())


def pick_latest_artifact() -> dict:
    data = github_get_json(API_ARTIFACTS)
    artifacts = data.get("artifacts", [])
    valid = [a for a in artifacts if not a.get("expired", True)]
    if not valid:
        raise RuntimeError("No valid artifacts found in CTNH-Team/CTNH-Core")
    valid.sort(key=lambda x: x.get("created_at", ""), reverse=True)
    return valid[0]


def pick_jar(extract_dir: Path) -> Path:
    jars = sorted(extract_dir.rglob("CTNH*.jar"))
    if not jars:
        jars = sorted(extract_dir.rglob("*.jar"))
    if not jars:
        raise RuntimeError("No jar file found inside downloaded artifact")
    return jars[0]


def ensure_packwizignore(repo_root: Path) -> None:
    target = repo_root / ".packwizignore"
    line = "!mods/CTNH*.jar"
    text = target.read_text(encoding="utf-8")
    lines = text.splitlines()
    if line not in lines:
        if text and not text.endswith("\n"):
            text += "\n"
        text += f"{line}\n"
        target.write_text(text, encoding="utf-8")


def main() -> None:
    repo_root = Path.cwd()
    mods_dir = repo_root / "mods"
    pw_file = mods_dir / "ctnh-core.pw.toml"
    if not mods_dir.is_dir():
        raise RuntimeError("Run this script from Create-New-Horizon root")

    artifact = pick_latest_artifact()
    artifact_name = artifact.get("name", "")
    download_url = artifact.get("archive_download_url", "")
    if not download_url:
        raise RuntimeError("Artifact missing archive_download_url")

    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        zip_path = tmp_dir / "artifact.zip"
        extract_dir = tmp_dir / "artifact"
        extract_dir.mkdir(parents=True, exist_ok=True)

        github_download(download_url, zip_path)
        with zipfile.ZipFile(zip_path, "r") as zf:
            zf.extractall(extract_dir)

        jar_file = pick_jar(extract_dir)
        jar_name = jar_file.name

        for old in mods_dir.glob("CTNH*.jar"):
            old.unlink()

        dest_jar = mods_dir / jar_name
        shutil.copy2(jar_file, dest_jar)

    if pw_file.exists():
        pw_file.unlink()

    ensure_packwizignore(repo_root)

    print(f"Synced CTNH core from artifact '{artifact_name}' -> mods/{dest_jar.name}, removed mods/ctnh-core.pw.toml")


if __name__ == "__main__":
    main()

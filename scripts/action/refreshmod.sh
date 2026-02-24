#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd -- "$SCRIPT_DIR/../.." && pwd)"

cd "$ROOT_DIR/mods"
echo "正在清理 mods 中的 .jar 文件（保留 ctpp和CTNHCore）..."
EXCLUDE_LIST=("ctpp*.jar" "CTNHCore*.jar")
EXCLUDE_CLAUSE=()
for jar in "${EXCLUDE_LIST[@]}"; do
  EXCLUDE_CLAUSE+=('!' -name "$jar")
done
find . -maxdepth 1 -type f -name "*.jar" "${EXCLUDE_CLAUSE[@]}" -delete
cd "$ROOT_DIR"
java -jar "$ROOT_DIR/scripts/action/packwiz-installer-bootstrap.jar" ./pack.toml
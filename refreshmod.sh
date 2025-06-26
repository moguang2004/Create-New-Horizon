cd mods
echo "正在清理 mods 中的 .jar 文件（保留 ctpp和CTNHCore）..."
EXCLUDE_LIST=("ctpp*.jar" "CTNHCore*.jar")
EXCLUDE_CLAUSE=()
for jar in "${EXCLUDE_LIST[@]}"; do
  EXCLUDE_CLAUSE+=('!' -name "$jar")
done
find . -maxdepth 1 -type f -name "*.jar" "${EXCLUDE_CLAUSE[@]}" -delete
java -jar packwiz-installer-bootstrap.jar ./pack.toml
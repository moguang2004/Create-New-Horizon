#!/bin/bash

# 检查是否在 Git 仓库中
if [ ! -d ".git" ]; then
  echo "❌ 当前目录不是 Git 仓库！"
  exit 1
fi

# 创建 .git/hooks 目录（如果不存在）
mkdir -p .git/hooks

# ========================
# 1. 配置 pre-push 钩子
# ========================
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

echo "🚀 Running pre-push hook..."

#更新index.toml和pack.toml文件
packwiz curseforge detect
bash fixup.sh
packwiz refresh

echo "✅ pre-push 检查通过，允许推送！"
exit 0
EOF

# ========================
# 2. 配置 post-merge 钩子
# ========================
cat > .git/hooks/post-merge << 'EOF'
#!/bin/bash

echo "🔄 Running post-merge hook..."

#删除原有的mods文件
TARGET_DIR="/mods"
if [ ! -d "$TARGET_DIR" ]; then
  echo "错误：目录 $TARGET_DIR 不存在！"
  exit 1
fi
cd "$TARGET_DIR" || exit 1
echo "正在清理 $TARGET_DIR 中的 .jar 文件（保留 ctpp和CTNHCore）..."
EXCLUDE_LIST=("ctpp*.jar" "CTNHCore*.jar")
EXCLUDE_CLAUSE=()
for jar in "${EXCLUDE_LIST[@]}"; do
  EXCLUDE_CLAUSE+=('!' -name "$jar")
done
find . -maxdepth 1 -type f -name "*.jar" "${EXCLUDE_CLAUSE[@]}" -delete

echo "✅ post-merge 操作完成！"
exit 0
EOF

# ========================
# 3. 设置可执行权限
# ========================
chmod +x .git/hooks/pre-push
chmod +x .git/hooks/post-merge

echo "🎉 Git hooks 配置完成！"
echo "  - pre-push:  在 git push 前运行"
echo "  - post-merge: 在 git pull 后运行"
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

# 检查是否由本脚本触发的推送（避免循环）
if [ -n "$IS_AUTO_PUSH" ]; then
    echo "🔁 跳过自动推送触发的pre-push检查（避免循环）"
    exit 0
fi

echo "🚀 Running pre-push hook..."

# 检查 mods/ 目录是否有变化（新增/修改/删除文件）
if git diff --cached --quiet --exit-code -- "mods/" && 
   git diff --quiet --exit-code -- "mods/"; then
    echo "⏩ mods/ 目录无变化，跳过后续操作"
    exit 0
fi

#更新index.toml和pack.toml文件
packwiz curseforge detect
bash fixup.sh
packwiz refresh

# 检查是否有文件被修改
if git diff --quiet --exit-code; then
    echo "✅ 没有检测到文件变更。"
else
    echo "📦 检测到文件变更，正在自动提交..."
    
    # 添加标记环境变量
    export IS_AUTO_PUSH=1
    
    # 提交并推送
    git add .
    git commit -m "自动提交: 由pre-push钩子更新的配置文件 [$(date +'%Y-%m-%d %H:%M:%S')]"
    git push origin "$(git rev-parse --abbrev-ref HEAD)"
    
    # 清除标记
    unset IS_AUTO_PUSH
fi

echo "✅ pre-push 检查通过，允许推送！"
exit 0
EOF

# ========================
# 2. 配置 post-merge 钩子
# ========================
cat > .git/hooks/post-merge << 'EOF'
#!/bin/bash

echo "🔄 Running post-merge hook..."

# 检查本次合并是否修改了 mods/ 目录
if ! git diff --name-only HEAD@{1} HEAD -- "mods/" | grep -q .; then
    echo "⏩ mods/ 目录无变化，跳过清理操作"
    exit 0
fi

echo "🔍 检测到 mods/ 目录变更，正在清理..."

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
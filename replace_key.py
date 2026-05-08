import os
import json
import re

# 路径配置
base_dir = os.path.dirname(os.path.abspath(__file__))
lang_path = os.path.join(base_dir, 'kubejs', 'assets', 'ftbquestlocalizer', 'lang', 'zh_cn.json')
chapters_dir = os.path.join(base_dir, 'config', 'ftbquests', 'quests', 'chapters')

with open(lang_path, encoding='utf-8') as f:
    mapping = json.load(f)


pattern = re.compile(r'\{([^{}]+)\}')

for filename in os.listdir(chapters_dir):
    if filename.endswith('.snbt'):
        snbt_path = os.path.join(chapters_dir, filename)
        with open(snbt_path, encoding='utf-8') as f:
            lines = f.readlines()
        new_lines = []
        for line in lines:
            def repl(m):
                key = m.group(1)
                if key.strip() == "@pagebreak":
                    return "{@pagebreak}"
                return mapping.get(key, key)
            new_lines.append(pattern.sub(repl, line))
        with open(snbt_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f'已处理: {filename}')

print('全部替换完成！')
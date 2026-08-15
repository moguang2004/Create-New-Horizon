# CTNH Quest Localization

The checked-in files under `config/ftbquests/quests` are the authoring source
and remain in Chinese. Only release builds run `ftbquest_localization.py` to
create a temporary `.github/localization/quests` tree, replacing translatable
text with `{ctnh.*}` keys. Push and manually dispatched builds retain the
Chinese source quest tree. The matching `zh_cn.json`, `en_us.json`,
`ja_jp.json`, and `ru_ru.json` files are written to the OpenLoader resource
pack at `config/openloader/resources/ctnh_quests/assets/ctnh/lang`.

The English, Japanese, and Russian files are updated incrementally: unchanged
translations are preserved, new keys start with the Chinese source text, and
removed quest keys are deleted. When a Chinese source value changes in `push`
mode, the corresponding target value is reset to that new source text so it is
ready for retranslation. Translators or an external translation sync can then
replace the seeded values. The traditional Chinese converter derives
`zh_tw.json` and `zh_hk.json` from the generated Simplified Chinese file.

To regenerate locally from the repository root:

```text
python -m pip install -r .github/localization/requirements.txt
python .github/localization/ftbquest_localization.py
python .github/localization/chinese_converter.py
```

The generated quest tree is build staging data and is intentionally ignored by
Git. The source quest files are never changed by the generator itself.

# CTNH Quest Localization

The checked-in files under `config/ftbquests/quests` are the authoring source
and remain in Chinese. The build workflow runs `ftbquest_localization.py` to
create a temporary `.github/localization/quests` tree, replacing translatable
text with `{ctnh.*}` keys. The matching `zh_cn.json` and `en_us.json` files are
written to the OpenLoader resource pack at
`config/openloader/resources/ctnh_quests/assets/ctnh/lang`.

`en_us.json` is updated incrementally: existing translations are preserved,
new keys start with the Chinese source text, and removed quest keys are
deleted. Translators can edit that file after running the generator. The
traditional Chinese converter derives `zh_tw.json` and `zh_hk.json` from the
generated Simplified Chinese file.

To regenerate locally from the repository root:

```text
python -m pip install -r .github/localization/requirements.txt
python .github/localization/ftbquest_localization.py
python .github/localization/chinese_converter.py
```

The generated quest tree is build staging data and is intentionally ignored by
Git. The source quest files are never changed by the generator itself.

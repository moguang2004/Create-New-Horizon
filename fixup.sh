#!/usr/bin/env bash
# This script fixups .pw.toml files for better modrinth support
# For every file:
# - if it has a modrinth version, it will be used as link (this won't impact curse forge exports, as they only care about ids)
# - if it does not have a modrinth version, curseforge cdn will be used as link

set -euo pipefail

function has_prefix() {
    [ "${1#${2}}" != "${1}" ]
}
function fixup_file() {
    file="$1"
    echo >&2 ''
    echo >&2 "File: $file"
    if modrinth_ver="$(tomlq -re '.update.modrinth.version' < "$file")"; then
        echo >&2 "Has modrinth ($modrinth_ver)"
        url="$(tomlq -r '.download.url' < "$file")"
        if has_prefix "$url" "https://cdn.modrinth.com"; then
            echo >&2 "Already has modrinth url"
            output="$(cat "$file")"
        else
            echo >&2 "Does not have modrinth url"
            if res="$(curl -sSf "https://api.modrinth.com/v2/version/$modrinth_ver")"; then
                modrinth_url="$(echo "$res" | jq -re '.files[0].url')"
                output="$(tomlq -t -re ".download.url = \"$modrinth_url\" | del(.download.mode)" < "$file")"
            else
                echo >&2 "Error while making modrinth request (api.modrinth.com/v2/version/$modrinth_ver)."
                echo >&2 "Skipping $file"
                output="$(cat "$file")"
            fi
        fi
    elif curseforge_fid="$(tomlq -re '.update.curseforge."file-id"' < "$file")"; then
        echo >&2 "Has curseforge ($curseforge_fid)"
        url="$(tomlq -r '.download.url' < "$file")"
        if has_prefix "$url" "https://edge.forgecdn.net"; then
            echo >&2 "Already has curseforge url"
            output="$(cat "$file")"
        else
            filename="$(tomlq -re '.filename' < "$file")"
            curseforge_url="https://edge.forgecdn.net/files/${curseforge_fid:0:4}/${curseforge_fid:4}/$filename"
            output="$(tomlq -t -re ".download.url = \"$curseforge_url\" | del(.download.mode)" < "$file")"
        fi
    else
        echo >&2 "Does not have modrinth neither curseforge, not touching."
        output="$(cat "$file")"
    fi
    echo "$output" > "$file"
}

if [ $# -eq 0 ]; then
    echo "No file specified. Fixing all .pw.toml files."
    files=(**/*.pw.toml)
else
    files="$@"
fi

for f in "${files[@]}"; do
    fixup_file "$f"
done

echo >&2 "Updating index"
packwiz refresh

wait
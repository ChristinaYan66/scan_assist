#!/usr/bin/env sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$repo_root"

if command -v node >/dev/null 2>&1 && node --version >/dev/null 2>&1; then
  exec node server.js
fi

for node_bin in "$HOME"/.nvm/versions/node/*/bin/node; do
  if [ -x "$node_bin" ]; then
    exec "$node_bin" server.js
  fi
done

echo "Node.js was not found. Install Node.js 18+ or enable nvm, then run this script again."
exit 1

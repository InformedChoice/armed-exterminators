#!/usr/bin/env bash
set -euxo pipefail

# 1. Build site
hugo --gc --minify --panicOnWarning

# 2. Internal‑link & HTML validity
htmltest --conf .htmltest.yml ./public

# 3. Markdown style (disabled for CI)
# markdownlint "**/*.md"

# 4. Performance & SEO audit (top page only to keep runtime short)
# lighthouse public/index.html \
#   --preset=desktop \
#   --chrome-flags="--headless --disable-dev-shm-usage" \
#   --output=json --output-path=./lh-report.json \
#   --quiet
# echo "✅ Lighthouse score written to lh-report.json"

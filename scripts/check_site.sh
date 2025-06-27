#!/usr/bin/env bash
set -euxo pipefail

# 1. Build site
hugo --gc --minify --panicOnWarning

# 2. Internal‑link & HTML validity
htmltest --skip-external --conf .htmltest.yml ./public

# 3. Markdown style (disabled for CI)
markdownlint "**/*.md"

# 4. Performance & SEO audit (top page only to keep runtime short)
if command -v lighthouse >/dev/null && command -v chromium-browser >/dev/null; then
  CHROME_PATH=$(command -v chromium-browser)
  lighthouse public/index.html \
    --preset=desktop \
    --chrome-flags="--headless --disable-dev-shm-usage" \
    --output=json --output-path=./lh-index.json \
    --quiet

  lighthouse public/locations/index.html \
    --preset=desktop \
    --chrome-flags="--headless --disable-dev-shm-usage" \
    --output=json --output-path=./lh-service-areas.json \
    --quiet
  echo "✅ Lighthouse scores written"
else
  echo "⚠️  Lighthouse skipped (Chrome missing)"
fi

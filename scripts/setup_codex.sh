#!/usr/bin/env bash
# Bootstrap tooling for Codex & CI
set -euxo pipefail

HUGO_VERSION="0.147.9"     # latest long‑term release 2025‑06‑23 ﻿ [oai_citation:0‡github.com](https://github.com/cloudposse/packages?utm_source=chatgpt.com)
HTMLTEST_VERSION="0.17.0"  # internal‑link checker               ﻿ [oai_citation:1‡github.com](https://github.com/cloudposse/packages?utm_source=chatgpt.com)
LH_VERSION="12.6.1"        # Lighthouse CLI                      ﻿ [oai_citation:2‡npmjs.com](https://www.npmjs.com/package/%40lhci/cli?utm_source=chatgpt.com)

# --- Hugo (extended) ---
wget -qO- https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz | \
  tar -xz hugo && install -m0755 hugo /usr/local/bin/hugo

# --- htmltest ---
wget -qO- https://github.com/wjdp/htmltest/releases/download/v${HTMLTEST_VERSION}/htmltest_${HTMLTEST_VERSION}_linux_amd64.tar.gz | \
  tar -xz htmltest && install -m0755 htmltest /usr/local/bin/htmltest

# --- Lighthouse CLI ---
npm install -g lighthouse@${LH_VERSION} @lhci/cli@latest

# --- Markdown linter ---
npm install -g markdownlint-cli@0.39.0

echo "✅ Toolchain ready"
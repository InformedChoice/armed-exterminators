#!/bin/bash

# Minify CSS script for Armed Exterminators
# This script creates a minified version of the main CSS file

INPUT_CSS="/Users/chrisrodgers/Projects/armed-exterminators/themes/armed-neon/static/css/style.css"
OUTPUT_CSS="/Users/chrisrodgers/Projects/armed-exterminators/themes/armed-neon/static/css/style.min.css"

# Create minified CSS by:
# 1. Removing comments
# 2. Removing unnecessary whitespace
# 3. Removing empty lines
# 4. Compressing rules

echo "Minifying CSS..."

# Use sed and tr to minify
cat "$INPUT_CSS" | \
  sed 's/\/\*[^*]*\*\+\([^/*][^*]*\*\+\)*\///g' | \
  tr '\n' ' ' | \
  sed 's/\s\+/ /g' | \
  sed 's/; /;/g' | \
  sed 's/: /:/g' | \
  sed 's/ {/{/g' | \
  sed 's/} /}/g' | \
  sed 's/ ,/,/g' | \
  sed 's/, /,/g' > "$OUTPUT_CSS"

echo "CSS minified successfully!"
echo "Original size: $(wc -c < "$INPUT_CSS") bytes"
echo "Minified size: $(wc -c < "$OUTPUT_CSS") bytes"
echo "Savings: $(($(wc -c < "$INPUT_CSS") - $(wc -c < "$OUTPUT_CSS"))) bytes"
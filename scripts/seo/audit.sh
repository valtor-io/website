#!/bin/bash
# SEO Technical Audit Script for valtor.io
# Runs against the built output to validate SEO fundamentals.
# Usage: ./scripts/seo/audit.sh [base_url]

set -euo pipefail

BASE_URL="${1:-https://www.valtor.io}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
ARTIFACTS_DIR="$SITE_DIR/artifacts/seo"
HISTORY_DIR="$ARTIFACTS_DIR/history"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
DATE_SLUG=$(date -u +"%Y-%m-%d")

mkdir -p "$HISTORY_DIR"

PASS=0
FAIL=0
WARN=0
RESULTS=()

check() {
  local status="$1" name="$2" detail="$3"
  if [ "$status" = "pass" ]; then ((PASS++)); fi
  if [ "$status" = "fail" ]; then ((FAIL++)); fi
  if [ "$status" = "warn" ]; then ((WARN++)); fi
  RESULTS+=("{\"status\":\"$status\",\"check\":\"$name\",\"detail\":\"$detail\"}")
}

echo "=== Valtor.io SEO Audit — $TIMESTAMP ==="
echo ""

# 1. Check robots.txt exists
echo "Checking robots.txt..."
if curl -sf "$BASE_URL/robots.txt" > /dev/null 2>&1; then
  ROBOTS=$(curl -sf "$BASE_URL/robots.txt")
  if echo "$ROBOTS" | grep -qi "sitemap"; then
    check "pass" "robots.txt" "Exists and contains sitemap reference"
  else
    check "warn" "robots.txt" "Exists but missing sitemap reference"
  fi
else
  check "fail" "robots.txt" "Not found at $BASE_URL/robots.txt"
fi

# 2. Check sitemap.xml
echo "Checking sitemap.xml..."
if curl -sf "$BASE_URL/sitemap.xml" > /dev/null 2>&1; then
  SITEMAP=$(curl -sf "$BASE_URL/sitemap.xml")
  URL_COUNT=$(echo "$SITEMAP" | grep -c "<url>" || true)
  check "pass" "sitemap.xml" "Exists with $URL_COUNT URL(s)"
else
  check "fail" "sitemap.xml" "Not found at $BASE_URL/sitemap.xml"
fi

# 3. Check homepage HTML
echo "Checking homepage HTML..."
HTML=$(curl -sf "$BASE_URL" 2>/dev/null || echo "")

if [ -z "$HTML" ]; then
  check "fail" "homepage" "Could not fetch homepage"
else
  # Title tag
  if echo "$HTML" | grep -q "<title>"; then
    TITLE=$(echo "$HTML" | grep -oP '(?<=<title>).*?(?=</title>)' | head -1)
    if [ ${#TITLE} -gt 10 ]; then
      check "pass" "title_tag" "Present: ${TITLE:0:60}..."
    else
      check "warn" "title_tag" "Title too short: $TITLE"
    fi
  else
    check "fail" "title_tag" "Missing title tag"
  fi

  # Meta description
  if echo "$HTML" | grep -qi 'name="description"'; then
    check "pass" "meta_description" "Present"
  else
    check "fail" "meta_description" "Missing meta description"
  fi

  # Canonical
  if echo "$HTML" | grep -qi 'rel="canonical"'; then
    check "pass" "canonical" "Present"
  else
    check "fail" "canonical" "Missing canonical tag"
  fi

  # Open Graph
  if echo "$HTML" | grep -qi 'property="og:title"'; then
    check "pass" "og_tags" "Open Graph tags present"
  else
    check "fail" "og_tags" "Missing Open Graph tags"
  fi

  # Twitter card
  if echo "$HTML" | grep -qi 'name="twitter:card"'; then
    check "pass" "twitter_card" "Twitter card present"
  else
    check "warn" "twitter_card" "Missing Twitter card tags"
  fi

  # JSON-LD structured data
  if echo "$HTML" | grep -q 'application/ld+json'; then
    check "pass" "structured_data" "JSON-LD present"
  else
    check "fail" "structured_data" "Missing JSON-LD structured data"
  fi

  # hreflang
  if echo "$HTML" | grep -qi 'hreflang'; then
    check "pass" "hreflang" "hreflang tags present"
  else
    check "warn" "hreflang" "Missing hreflang tags"
  fi

  # Viewport meta
  if echo "$HTML" | grep -qi 'name="viewport"'; then
    check "pass" "viewport" "Viewport meta present"
  else
    check "fail" "viewport" "Missing viewport meta"
  fi

  # H1 tag
  if echo "$HTML" | grep -qi "<h1"; then
    check "pass" "h1_tag" "H1 tag present"
  else
    check "warn" "h1_tag" "Missing H1 tag (may be client-rendered)"
  fi

  # Lang attribute
  if echo "$HTML" | grep -qi 'lang="de"'; then
    check "pass" "lang_attr" "HTML lang attribute set to de"
  elif echo "$HTML" | grep -qi 'lang='; then
    check "pass" "lang_attr" "HTML lang attribute present"
  else
    check "fail" "lang_attr" "Missing lang attribute"
  fi
fi

# 4. Check llms.txt
echo "Checking llms.txt..."
if curl -sf "$BASE_URL/llms.txt" > /dev/null 2>&1; then
  check "pass" "llms_txt" "llms.txt present for AI crawlers"
else
  check "warn" "llms_txt" "No llms.txt found"
fi

# 5. Check OG image
echo "Checking OG image..."
if curl -sf -o /dev/null -w "%{http_code}" "$BASE_URL/opengraph-image" 2>/dev/null | grep -q "200"; then
  check "pass" "og_image" "OG image endpoint returns 200"
else
  check "warn" "og_image" "OG image endpoint not reachable"
fi

# Generate JSON results
echo ""
echo "=== Results: $PASS passed, $FAIL failed, $WARN warnings ==="

CHECKS_JSON=$(printf '%s,' "${RESULTS[@]}" | sed 's/,$//')

cat > "$ARTIFACTS_DIR/metrics.json" <<EOF
{
  "timestamp": "$TIMESTAMP",
  "base_url": "$BASE_URL",
  "summary": {
    "passed": $PASS,
    "failed": $FAIL,
    "warnings": $WARN,
    "total": $((PASS + FAIL + WARN))
  },
  "checks": [$CHECKS_JSON]
}
EOF

# Copy to history
cp "$ARTIFACTS_DIR/metrics.json" "$HISTORY_DIR/metrics-$DATE_SLUG.json"

echo "Metrics written to artifacts/seo/metrics.json"
echo "History saved to artifacts/seo/history/metrics-$DATE_SLUG.json"

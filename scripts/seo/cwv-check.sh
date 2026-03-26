#!/bin/bash
# Core Web Vitals check via PageSpeed Insights API
# Usage: ./scripts/seo/cwv-check.sh [api_key]
# Without API key: uses public endpoint (rate-limited)

set -euo pipefail

BASE_URL="https://www.valtor.io"
API_KEY="${1:-}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
ARTIFACTS_DIR="$SITE_DIR/artifacts/seo"
DATE_SLUG=$(date -u +"%Y-%m-%d")

mkdir -p "$ARTIFACTS_DIR/history"

PAGES=("/de" "/en" "/de/blog" "/en/blog")
STRATEGIES=("mobile" "desktop")

echo "=== Core Web Vitals Check — $(date -u +%Y-%m-%d) ==="
echo ""

RESULTS="[]"

for page in "${PAGES[@]}"; do
  for strategy in "${STRATEGIES[@]}"; do
    URL="${BASE_URL}${page}"
    echo "Checking $URL ($strategy)..."

    API_URL="https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}&strategy=${strategy}&category=performance&category=accessibility&category=seo&category=best-practices"
    if [ -n "$API_KEY" ]; then
      API_URL="${API_URL}&key=${API_KEY}"
    fi

    RESPONSE=$(curl -sf "$API_URL" 2>/dev/null || echo '{"error": true}')

    if echo "$RESPONSE" | grep -q '"error"'; then
      echo "  ✗ Failed to fetch (rate limited or error)"
      continue
    fi

    # Extract scores
    PERF=$(echo "$RESPONSE" | grep -o '"performance":{"id":"performance","title":"Performance","score":[0-9.]*' | grep -o '[0-9.]*$' || echo "N/A")
    A11Y=$(echo "$RESPONSE" | grep -o '"accessibility":{"id":"accessibility","title":"Accessibility","score":[0-9.]*' | grep -o '[0-9.]*$' || echo "N/A")
    SEO=$(echo "$RESPONSE" | grep -o '"seo":{"id":"seo","title":"SEO","score":[0-9.]*' | grep -o '[0-9.]*$' || echo "N/A")
    BP=$(echo "$RESPONSE" | grep -o '"best-practices":{"id":"best-practices","title":"Best Practices","score":[0-9.]*' | grep -o '[0-9.]*$' || echo "N/A")

    # Extract CWV metrics from lighthouse
    FCP=$(echo "$RESPONSE" | grep -o '"first-contentful-paint":{"id":"first-contentful-paint"[^}]*"numericValue":[0-9.]*' | grep -o '"numericValue":[0-9.]*' | grep -o '[0-9.]*' || echo "N/A")
    LCP=$(echo "$RESPONSE" | grep -o '"largest-contentful-paint":{"id":"largest-contentful-paint"[^}]*"numericValue":[0-9.]*' | grep -o '"numericValue":[0-9.]*' | grep -o '[0-9.]*' || echo "N/A")
    CLS=$(echo "$RESPONSE" | grep -o '"cumulative-layout-shift":{"id":"cumulative-layout-shift"[^}]*"numericValue":[0-9.]*' | grep -o '"numericValue":[0-9.]*' | grep -o '[0-9.]*' || echo "N/A")
    TBT=$(echo "$RESPONSE" | grep -o '"total-blocking-time":{"id":"total-blocking-time"[^}]*"numericValue":[0-9.]*' | grep -o '"numericValue":[0-9.]*' | grep -o '[0-9.]*' || echo "N/A")

    echo "  Performance: $PERF | Accessibility: $A11Y | SEO: $SEO | Best Practices: $BP"
    if [ "$FCP" != "N/A" ]; then
      echo "  FCP: ${FCP}ms | LCP: ${LCP}ms | CLS: $CLS | TBT: ${TBT}ms"
    fi

    ENTRY="{\"url\":\"$URL\",\"strategy\":\"$strategy\",\"scores\":{\"performance\":$PERF,\"accessibility\":$A11Y,\"seo\":$SEO,\"best_practices\":$BP},\"cwv\":{\"fcp_ms\":$FCP,\"lcp_ms\":$LCP,\"cls\":$CLS,\"tbt_ms\":$TBT}}"

    # Append to results
    if [ "$RESULTS" = "[]" ]; then
      RESULTS="[$ENTRY]"
    else
      RESULTS="${RESULTS%]}, $ENTRY]"
    fi

    # Rate limit: 1 request per 2 seconds for public API
    if [ -z "$API_KEY" ]; then
      sleep 2
    fi
  done
done

# Save results
cat > "$ARTIFACTS_DIR/cwv-$DATE_SLUG.json" << EOF
{
  "date": "$DATE_SLUG",
  "results": $RESULTS
}
EOF

echo ""
echo "Results saved to artifacts/seo/cwv-$DATE_SLUG.json"
echo "=== Done ==="

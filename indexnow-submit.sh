#!/bin/bash
API_KEY="0bc07b65d8f21290876f65897de42d1a"
HOST="infinitystim.com"
URL="$1"
if [ -z "$URL" ]; then echo "Usage: $0 <url>"; exit 1; fi
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"$HOST\",\"key\":\"$API_KEY\",\"keyLocation\":\"https://$HOST/$API_KEY.txt\",\"urlList\":[\"$URL\"]}"
echo "Submitted $URL to IndexNow"

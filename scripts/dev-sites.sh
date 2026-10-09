#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PORTAL_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
BLOG_DIR="${MILES_BLOG_DIR:-"$PORTAL_DIR/../miles-blog-astrowind-20261008"}"
HOST="${MILES_DEV_HOST:-127.0.0.1}"
PORTAL_PORT="${MILES_PORTAL_PORT:-4321}"
BLOG_PORT="${MILES_BLOG_PORT:-4322}"

if ! command -v npm >/dev/null 2>&1; then
  printf 'error: npm is required but was not found in PATH\n' >&2
  exit 1
fi

if [[ ! -f "$PORTAL_DIR/package.json" ]]; then
  printf 'error: Portal package.json was not found: %s\n' "$PORTAL_DIR/package.json" >&2
  exit 1
fi

if [[ ! -f "$BLOG_DIR/package.json" ]]; then
  printf 'error: Blog package.json was not found: %s\n' "$BLOG_DIR/package.json" >&2
  printf 'Set MILES_BLOG_DIR to the Blog checkout when it is elsewhere.\n' >&2
  exit 1
fi

child_pids=()

stop_children() {
  local exit_code=$?
  trap - EXIT INT TERM

  for pid in "${child_pids[@]}"; do
    kill "$pid" 2>/dev/null || true
  done

  for pid in "${child_pids[@]}"; do
    wait "$pid" 2>/dev/null || true
  done

  exit "$exit_code"
}

trap stop_children EXIT INT TERM

printf 'Portal: http://localhost:%s\n' "$PORTAL_PORT"
printf 'Blog:   http://localhost:%s\n' "$BLOG_PORT"
printf 'Press Ctrl-C to stop both development servers.\n'

(
  cd "$BLOG_DIR"
  exec env ASTRO_DEV_BACKGROUND=0 npm run dev -- --host "$HOST" --port "$BLOG_PORT"
) &
child_pids+=("$!")

(
  cd "$PORTAL_DIR"
  exec env ASTRO_DEV_BACKGROUND=0 npm run dev -- --host "$HOST" --port "$PORTAL_PORT"
) &
child_pids+=("$!")

wait -n "${child_pids[@]}"

#!/usr/bin/env bash
set -e

IMAGE_NAME="dentary-front"
CONTAINER_NAME="godentary"
HOST_PORT="8080"
CONTAINER_PORT="80"

# Stop and remove any previous container with the same name
podman stop "$CONTAINER_NAME" 2>/dev/null || true
podman rm -f "$CONTAINER_NAME" 2>/dev/null || true

# Optional cleanup of stale local image
podman image rm "$IMAGE_NAME:latest" 2>/dev/null || true

# Build the container image
podman build -t "$IMAGE_NAME" .

# Run the container and expose it on localhost:8080
podman run -d \
  --name "$CONTAINER_NAME" \
  -p "$HOST_PORT:$CONTAINER_PORT" \
  "$IMAGE_NAME"

echo "App is running at: http://localhost:$HOST_PORT"


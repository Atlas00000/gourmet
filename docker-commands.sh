#!/bin/bash

# Docker commands for Gourmet Fusion

echo "Gourmet Fusion Docker Commands"
echo "=============================="

case "$1" in
  "build")
    echo "Building Docker image..."
    docker build -t gourmet-fusion .
    ;;
  "run")
    echo "Running container..."
    docker run -p 3000:3000 gourmet-fusion
    ;;
  "compose-up")
    echo "Starting with Docker Compose..."
    docker-compose up -d
    ;;
  "compose-down")
    echo "Stopping Docker Compose..."
    docker-compose down
    ;;
  "logs")
    echo "Showing logs..."
    docker-compose logs -f
    ;;
  "clean")
    echo "Cleaning up Docker resources..."
    docker system prune -f
    docker image prune -f
    ;;
  *)
    echo "Usage: $0 {build|run|compose-up|compose-down|logs|clean}"
    echo ""
    echo "Commands:"
    echo "  build        - Build Docker image"
    echo "  run          - Run container directly"
    echo "  compose-up   - Start with Docker Compose"
    echo "  compose-down - Stop Docker Compose"
    echo "  logs         - Show container logs"
    echo "  clean        - Clean up Docker resources"
    ;;
esac

#!/bin/bash

echo "Select the operation ************"
echo "  1) Starts Next.js in development mode" 
echo "  2) Export Static HTML to {out} directory"
echo "  3) Rebuild docker image" 
echo "  4) Ssh into the container" 
echo "  5) Rebuild CSS for the front-end template."

read n
case $n in
  1) 
    docker-compose up next 
    ;;
  2) 
    docker-compose up export 
    ;;
  3) 
    # docker build --no-cache -t docker-nextjs .
    docker-compose build
    ;;
  4)
    docker run --rm -it -v "$PWD":/docker docker-nextjs sh
    ;;
  5)
    docker-compose up build-css 
    ;;
  *) echo "invalid option";;
esac

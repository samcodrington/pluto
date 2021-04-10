#!/bin/bash
BUILD=0
while getopts "bh" option;
do 
  case $option in
  b)
    BUILD=1
    echo "Building stack before running"
    ;;
  h)
    echo `
      -b        Run stack with build options
      -h        Display this message
    `
  esac
done
if [ $BUILD -eq 1 ] 
then
  echo "Build started"
  docker-compose build
  echo "Build complete"
fi

docker-compose up
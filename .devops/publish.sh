#! /bin/bash

AFFECTED=$(npx nx print-affected --type=lib --select=projects)
LIBS=($(echo $AFFECTED | tr ", " "\n"))

echo $LIBS

for LIB in "${LIBS[@]}"
do
  printf "Publishing $LIB... \n"
  npx nx publish $LIB --args="--version=1.0.0"
  wait
done

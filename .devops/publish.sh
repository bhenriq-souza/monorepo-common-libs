#! /bin/bash

AFFECTED=$(npx nx print-affected --base=origin/main~1 --head=origin/main --select=projects)
LIBS=($(echo $AFFECTED | tr ", " "\n"))

echo $LIBS

for LIB in "${LIBS[@]}"
do
  printf "Publishing $LIB... \n"
  npx nx publish $LIB --args="--version=1.0.0"
  wait
done

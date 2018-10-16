gulp rimraf

nodemon \
 -e js,yml,yaml,html,css \
 -w index.yml \
 -w templates/  \
 -w gulpfile.js \
 -x gulp template &

nodemon \
 -e js,yml,yaml,html,css \
 -w style/ \
 -w gulpfile.js \
 -x gulp css &

nodemon \
 -e js,yml,yaml,html,css \
 -w static/ \
 -w gulpfile.js \
 -x gulp static &

 # ../temple/index.js \
 #   -c index.yml \
 #   -t templates/ \
 #   -s static/ \
 #   -o out/

budo --live -d out  &

wait

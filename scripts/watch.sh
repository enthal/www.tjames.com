gulp rimraf

DEBUG=please \
nodemon \
 -e js,yml,yaml,html,css \
 -w index.yml \
 -w content/  \
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

budo --live -d out  &

wait

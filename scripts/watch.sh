gulp rimraf

DEBUG=please \
nodemon \
 -e js,yml,yaml,html \
 -w index.yml \
 -w content/  \
 -w templates/  \
 -w gulpfile.js \
 -x gulp template &

nodemon \
 -e css \
 -w index.css \
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

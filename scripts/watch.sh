gulp rimraf

DEBUG=please \
nodemon \
 -e js,yml,yaml,html \
 -w index.yml \
 -w content/  \
 -w templates/  \
 -w gulpfile.js \
 -x gulp template &

gulp watch &

nodemon \
 -e js,yml,yaml,html,css \
 -w static/ \
 -w gulpfile.js \
 -x gulp static &

budo --live -d out  &

wait

nodemon \
 -w ../temple/index.js  \
 -e js,yml,yaml,html,css \
 -w static/ \
 -w content.yml \
 -w templates/  \
 -x gulp ''

 # ../temple/index.js \
 #   -c content.yml \
 #   -t templates/ \
 #   -s static/ \
 #   -o out/

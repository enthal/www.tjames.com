const gulp = require('gulp')
const sequence = require('gulp-sequence').use(gulp)
const temple = require('temple-cms').gulp
const gulpStaticWeb = require('gulp-static-web')

gulpStaticWeb(gulp, {
  postcss: [
    require('postcss-import'),
    require('precss'),
    require('autoprefixer'),
    require('lost'),
    require('postcss-nested-vars'),
    require('postcss-color-function'),
  ],
})

gulp.task('default', sequence('static', ['template', 'postcss']))

gulp.task('template', () =>
  gulp.src('./templates/*.html')
    .pipe(temple('./index.yml'))
    .pipe(gulp.dest('out'))
)

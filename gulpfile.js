const gulp = require('gulp');
const sequence = require('gulp-sequence');
const temple = require('temple-cms').gulp;

gulp.task('default', sequence('rimraf', 'static', ['template', 'css']));

gulp.task('template', () =>
  gulp.src('./templates/*.html')
    .pipe(temple('./content.yml'))
    .pipe(gulp.dest('out'))
);

gulp.task('css', () => {
  const postcss    = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp.src('style/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([
      require('precss'),
      require('autoprefixer'),
      ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('out/') );
});

gulp.task('static', () =>
  gulp.src('./static/**')
    .pipe(gulp.dest('out'))
);

gulp.task('rimraf', (cb) =>
  require('rimraf')('./out', cb)
);

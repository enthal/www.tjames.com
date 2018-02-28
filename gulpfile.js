const gulp = require('gulp');
const sequence = require('gulp-sequence');
const rev = require("gulp-rev");
const revReplace = require("gulp-rev-replace");
const temple = require('temple-cms').gulp;

gulp.task('default', sequence('static', ['template', 'css']));
gulp.task('build', sequence('rimraf', 'default', 'rev-replace'));

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
      require('lost'),
      require('postcss-nested-vars'),
      ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('out/') );
});

gulp.task('static', () =>
  gulp.src('./static/**')
    .pipe(gulp.dest('out'))
);

gulp.task('revision', () =>
  gulp.src(['out/**', '!**/*.html', '!**/favicon.ico'])
    .pipe(rev())
    .pipe(gulp.dest('build'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('build'))
);

gulp.task('no-revision', () =>
  gulp.src(['out/**/*.html', 'out/**/favicon.ico'])
    .pipe(gulp.dest('build'))
);

gulp.task('rev-replace', ['revision', 'no-revision'], () =>
  gulp.src(['build/**/*.html', 'build/**/*.css', 'build/**/*.js'])
    .pipe(revReplace({manifest: gulp.src('./build/rev-manifest.json')}))
    .pipe(gulp.dest('build'))
);

gulp.task('rimraf', (cb) => {
  const rimraf = require('rimraf');
  rimraf('./out', () => rimraf('./build', cb))
});

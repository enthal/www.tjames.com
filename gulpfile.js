const gulp = require('gulp');
const temple = require('temple-cms').gulp;

gulp.task('default', [ 'static', 'template' ]);   // TODO: rimraf?

gulp.task('template', () =>
  gulp.src('./templates/*.html')
    .pipe(temple('./content.yml'))
      .on('error', console.log)
    .pipe(gulp.dest('out'))
);

gulp.task('static', () =>
  gulp.src('./static/**')
    .pipe(gulp.dest('out'))
);

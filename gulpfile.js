var gulp = require('gulp');
var browserify = require('browserify');
var connect = require('gulp-connect');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

var paths = {
  sass: ['sass/**/*.scss'],
  app_js: ['./js/app.js.jsx'],
  js: ['js/*.js.jsx', 'js/**/*.js.jsx'],
};

gulp.task('connect', function(){
  connect.server({
    port: 8888
  });
});

gulp.task('js', function() {
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function(){
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});
 
// The default task (called when we run `gulp` from cli)
gulp.task('default', ['connect', 'watch', 'sass', 'js']);

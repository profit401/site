var gulp = require('gulp'),
  less = require('gulp-less'),
  rename = require("gulp-rename"),
  livereload = require('gulp-livereload'),
  watch = require('gulp-watch');

gulp.task('less', function () {
  gulp.src('import/less/main.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(''))
});

gulp.task('watch', function(){
  livereload.listen();
	gulp.watch('import/less/main.less', ['less']).on('change', livereload.changed);
});

gulp.task('default', ['less', 'watch']);


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');
gulp.task('sass', function() {
    return gulp.src('./src/theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('theme.css'))
        .pipe(gulp.dest('./src'));
});
gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compact'
};
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('default', ['css_sass','css_prefix']);

// app
gulp.task('css_sass', function() {

    return gulp
        .src('./resources/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        //.pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./assets/css'));

});
gulp.task('css_prefix', ['css_sass'], function(){
    return gulp
        .src('./assets/css/app.css')
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./assets/css'))

});

gulp.task('watch', function() {
    gulp.watch(['resources/sass/**/*.scss'], ['css_sass','css_prefix']);
});

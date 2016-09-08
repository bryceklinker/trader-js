var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    Server = require('karma').Server

var paths = {
    src: {
        js: path.join(__dirname, 'src/**/*.js'),
        sass: path.join(__dirname, 'src/**/*.scss')
    },
    test: {
        js: path.join(__dirname, 'src/**/*.spec.js')
    },
    dist: {
        indexjs: 'index.min.js',
        js: path.join(__dirname, 'dist/js'),
        css: path.join(__dirname, 'dist/css')
    }
}

gulp.task('build:js', function() {
    return gulp.src([paths.src.js, '!' + paths.test.js])
        .pipe(concat(paths.dist.indexjs))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js))
})

gulp.task('build:sass', function() {
    return gulp.src(paths.src.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist.css))
})

gulp.task('build', ['build:js', 'build:sass'])

gulp.task('unit:test', ['build'], function(done) {
    new Server({
        configFile: path.join(__dirname, 'karma.conf.js'),
        singleRun: true
    }, done).start();
})

gulp.task('watch', ['build', 'unit:test'], function(){
    gulp.watch(paths.src.js, ['build:js'])
    gulp.watch(paths.src.sass, ['build:sass'])
    gulp.watch(paths.test.js, ['unit:test'])
})

gulp.task('default', ['build', 'unit:test'])
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    path = require('path'),
    rimraf = require('rimraf'),
    Server = require('karma').Server

var paths = {
    src: {
        js: path.join(__dirname, 'src/**/*.js'),
        sass: path.join(__dirname, 'src/**/*.scss'),
        html: path.join(__dirname, 'src/**/*.html')
    },
    test: {
        js: path.join(__dirname, 'src/**/*.spec.js')
    },
    dist: {
        indexjs: 'index.min.js',
        js: path.join(__dirname, 'dist/js'),
        css: path.join(__dirname, 'dist/css'),
        root: path.join(__dirname, 'dist')
    }
}

gulp.task('build:js', ['clean'], function() {
    return gulp.src([paths.src.js, '!' + paths.test.js])
        .pipe(concat(paths.dist.indexjs))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js))
})

gulp.task('build:sass', ['clean'], function() {
    return gulp.src(paths.src.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist.css))
})

gulp.task('copy:html', ['clean'], function() {
    return gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.dist.root))
})

gulp.task('clean', function(cb) {
    rimraf(paths.dist.root, cb)
})

gulp.task('build', ['clean', 'build:js', 'build:sass', 'copy:html'])

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

gulp.task('default', ['clean', 'build', 'unit:test'])
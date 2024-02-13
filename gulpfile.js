const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const obfuscator = require('gulp-javascript-obfuscator');

// Minify HTML
gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('docs'));
});

// Minify CSS
gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('docs/css'));
});

// Minify and obfuscate JavaScript
gulp.task('js', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(obfuscator())
    .pipe(gulp.dest('docs/js'));
});

//Copy Images
gulp.task('images', () => {
  return gulp.src('src/image/*')
    .pipe(gulp.dest('docs/image'));
});


// Default task
gulp.task('default', gulp.parallel('html', 'css', 'js', 'images'));
// gulp.task('default', gulp.parallel('html', 'css', 'js'));

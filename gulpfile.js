let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

gulp.task('sass', function () {
    var stream = gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('style.css'));
    return stream;
});

gulp.task('minify-css', () => {
  return gulp.src('css/style.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./css/'));
});

gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

let js_files = ['js/bootstrap.js', 'js/scrollTop.js'];

gulp.task('compile-js', () => {
  return gulp.src(js_files)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'))
});

gulp.task('minify-js', () => {
  return gulp.src('js/al.js')
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('scripts', function(callback){
	gulpSequence('combine-js', 'minify-js')(callback)
});

gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['styles']);
});

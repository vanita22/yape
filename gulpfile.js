var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require('gulp-uglify');

var routes = {
    scss: "./src/qassets/scss/*.scss",
    js: "./src/assets/js/*.js"
}

gulp.task('watch-sass', function(){
    gulp.src(routes.scss)
    .pipe(sass())
    .pipe(gulp.dest("./public/css"))
});

gulp.task('watch-js', function(){
    gulp.src(routes.js)
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});

gulp.task("default", function(){
    gulp.watch(routes.scss,["watch-sass"]);
    gulp.watch(routes.js,["watch-js"]);
});

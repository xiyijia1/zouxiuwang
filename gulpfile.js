const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const imageMin = require("gulp-imagemin");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");



gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
})
gulp.task("html",function(){
	gulp.src("html/**")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload())
})
gulp.task("sass",function(){
	gulp.src("sass/**")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
})
gulp.task("image",function(){
	gulp.src("img/**")
	.pipe(imageMin())
	.pipe(gulp.dest("dist/img"))
})
gulp.task("scripts",function(){
	gulp.src("js/**")
	.pipe(sourcemaps.init())
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("sever",function(){
	connect.server({
		root:"dist",
		livereload:true
		})
})

gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("html/**",["html"]);
	gulp.watch("sass/**",["sass"]);
	gulp.watch("img/**",["image"]);
	gulp.watch("js/**",["scripts"]);
//	gulp.watch(["json/**","xml/**","!xml/a.xml"],["copy-data"])
})

gulp.task("default",["sever","watch"])

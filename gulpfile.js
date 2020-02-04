var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-ruby-sass"),
	plumber = require("gulp-plumber");	

gulp.task("styles", function(){
	
		return sass("main.scss")
		.on("error",sass.logError)
		.pipe(gulp.dest("build/css/"));	
	
	});
	
gulp.task("scripts", function(){
	
		gulp.src("main.js")
		.pipe(uglify())
		.pipe(plumber())
		.pipe(gulp.dest("build/js/"));
	
	
	});

gulp.task("watch",function(){
		
	gulp.watch("main.scss", ["styles"])
	gulp.watch("_about.scss", ["styles"])
	gulp.watch("_variables.scss", ["styles"])
	gulp.watch("main.js", ["scripts"])
	
	});

gulp.task("default", ["scripts","styles", "watch"]);

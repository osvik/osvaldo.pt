'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

var DESTJS = 'dist/js/';
var DESTCSS = 'dist/css/';


// CSS UTILS

gulp.task('sass', function () {
  return gulp.src(['src/sass/*.scss'])
  
    .pipe(sass( {outputStyle: 'expanded'} ).on('error', sass.logError))
    
  	// This will output 
	.pipe(gulp.dest( DESTCSS ));
	
});

//gulp.task('sass:watch', function () {
//  gulp.watch('./src/sass/**/*.scss', ['sass']);
//});

gulp.task('minify-css', function() {
    return gulp.src([ DESTCSS + 'styles.css'])
	
		// Concatenate all the files
		// .pipe(concat('styles.css'))
	
	  	// This will output the non-minified version
    	// .pipe(gulp.dest(DESTCSS))
	
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
	
		// Rename the minified version
		.pipe(rename({ extname: '.min.css' }))
	
		// This will output the minified version
        .pipe(gulp.dest(DESTCSS));
});


// JS UTILS

gulp.task('minify-picturefill', function() {
  return gulp.src(['node_modules/picturefill/dist/picturefill.js'])
    
  	// This will output the non-minified version
    .pipe(gulp.dest(DESTJS))
    
  	// This will minify
    .pipe(uglify())
  
  	// Rename the minified version
    .pipe(rename({ extname: '.min.js' }))
  
   	// This will output the minified version
    .pipe(gulp.dest(DESTJS));
  
});

gulp.task('build-bootstrap', function() {
  return gulp.src([
	  // 'node_modules/bootstrap/js/dist/alert.js',
	  // 'node_modules/bootstrap/js/dist/button.js',
	  // 'node_modules/bootstrap/js/dist/carousel.js',
	  // 'node_modules/bootstrap/js/dist/collapse.js',
	  'node_modules/bootstrap/js/dist/dropdown.js',
	  // 'node_modules/bootstrap/js/dist/modal.js',
	  // 'node_modules/bootstrap/js/dist/popover.js',
	  // 'node_modules/bootstrap/js/dist/scrollspy.js',
	  // 'node_modules/bootstrap/js/dist/tab.js',
	  // 'node_modules/bootstrap/js/dist/tooltip.js',
	  'node_modules/bootstrap/js/dist/util.js'
  ])
  	
  	// Concatenate all the files
  	.pipe(concat('bootstrap-custom.js'))
    
  	// This will output the non-minified version
    .pipe(gulp.dest(DESTJS))
    
  	// This will minify
    .pipe(uglify())
  
  	// Rename the minified version
    .pipe(rename({ extname: '.min.js' }))
  
 	// This will output the minified version
    .pipe(gulp.dest(DESTJS));
});

gulp.task('minify-js', function() {
  return gulp.src([
	  'node_modules/jquery/dist/jquery.js', 
	  'node_modules/tether/dist/js/tether.js', 
	  DESTJS + 'bootstrap-custom.js',
	  // 'node_modules/jquery-validation/dist/jquery.validate.js',
	  // 'src/js/validation.js', 
	  'src/js/interaction.js'
  ])
  	
  	// Concatenate all the files
  	.pipe(concat('scripts.js'))
    
  	// This will output the non-minified version
    .pipe(gulp.dest(DESTJS))
    
  	// This will minify
    .pipe(uglify())
  
  	// Rename the minified version
    .pipe(rename({ extname: '.min.js' }))
  
 	// This will output the minified version
    .pipe(gulp.dest(DESTJS));
});

gulp.task('minify-analytics', function() {
  return gulp.src([
	  'src/js/analytics.js'
  ])
  	
  	// This will output the non-minified version
    .pipe(gulp.dest(DESTJS))
    
  	// This will minify
    .pipe(uglify())
  
  	// Rename the minified version
    .pipe(rename({ extname: '.min.js' }))
  
 	// This will output the minified version
    .pipe(gulp.dest(DESTJS));
});

gulp.task('copy', function() {
    
	// This will copy some files from src/ to dist/
	
	gulp.src(['src/images/**/*'])
		
    .pipe(gulp.dest('dist/images/'));
	
	gulp.src(['src/favicon.ico', 'src/robots.txt', 'src/index.html', 'src/contacto-inc.html'])
	
	.pipe(gulp.dest('dist/'));
		
});


gulp.task('default', ['minify-css', 'minify-js']);

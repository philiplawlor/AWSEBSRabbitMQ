var gulp 	= require('gulp');
var replace = require('gulp-replace');
var zip     = require('gulp-zip');

var getVersion = function ()
{
    var today      = new Date();
    var month      = today.getMonth() + 1;
    var day        = today.getDate();
    var version    = String(today.getFullYear()) + (month < 10 ? '0' : '') + String(month) + (day < 10 ? '0' : '') + String(day) + '_' + String(today.getTime());

    return version;
};

gulp.task('default', function () {
	var zipName = 'rabbitmq-' + getVersion() + '.zip';
	
	console.log('Running... zip file will be called: ' + zipName);
	
    return gulp.src(['aws/**/*', 'aws/.*', 'aws/.*/*'])
	    .pipe(replace('	', '    '))
        .pipe(zip(zipName))
        .pipe(gulp.dest('dist'));
});
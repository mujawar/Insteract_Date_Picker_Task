/**
 * Created by arif on 15/06/17.
 */

var gulp = require('gulp'),
    connect = require('gulp-connect');
var exec = require('child_process').exec;
var webserver = require('gulp-webserver');

gulp.task('webserver', function(cb) {
    exec('node serverDate.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});





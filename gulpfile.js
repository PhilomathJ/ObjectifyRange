const gulp = require('gulp');
const exec = require('child_process').exec;

// Push code files to online GAS project
gulp.task('push', function (cb) {
	exec('clasp push', function (err, stdout, stderr) {
		cb(err);
	});
});

// Create watch task
gulp.task('watch', function (done) {
  gulp.watch('**/*.ts').on('change', gulp.parallel('push', 'message_code'));
  gulp.watch('**/*.js').on('change', gulp.parallel('push', 'message_code'));
  gulp.watch('**/*.html').on('change', gulp.parallel('push', 'message_html'));
});

// Logs code push message
gulp.task('message_code', function () {
	return console.log('Gulp pushing code...');
});

// Logs html push message
gulp.task('message_html', function () {
	return console.log('Gulp pushing HTML...');
});

// Generate documentation with TypeDoc
// const typedoc = require("gulp-typedoc");
// gulp.task("typedoc", function () {
//   console.log('Generating documentation...');
//   return gulp
//     .src(["src/**/*.ts"])
//     .pipe(typedoc({
//       module: "commonjs",
//       target: "es5",
//       out: "docs/",
//       name: "My project title"
//     }))
//     ;
// });

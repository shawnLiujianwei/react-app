/**
 * Created by Shawn Liu on 2015/12/9.
 */
var gulp = require('gulp'),
  clean = require('gulp-clean'),
  eslint = require('gulp-eslint'),
  gutil = require("gulp-util");
var Server = require('karma').Server;
process.env.NODE_ENV = process.env.NODE_ENV || "development";
gulp.task('clean', function (callback) {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task("build", ["clean"], function (callback) {
  const compiler = require('webpack')(
    require('./webpack.config')
  );
  compiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError("gulp:build", err);
    console.log(stats.toString({
      chunks: false,
      chunkModules: false,
      colors: true
    }));
    callback();
  });
});

gulp.task("test", function (done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('lint:tests', function () {
  return gulp.src(['./tests/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("serve", function () {
  const server = require('./server/app');
  const debug = require('debug')('kit:bin:server');
  var host = "127.0.0.1";
  var port = 3000;

  server.listen(port, host, function () {
    debug('Server is now running at ' + host + ':' + port + '.');
  });
})

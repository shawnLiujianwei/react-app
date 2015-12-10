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
  return gulp.src('public/*', {read: false})
    .pipe(clean());
});

gulp.task("prod", function () {
  process.env.NODE_ENV = "production";
  return "";
})

gulp.task("build:prod", ["prod", "build"]);

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

gulp.task("test:dev", function (done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true,
    autoWatch: true
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

gulp.task("serve",["serve:nw"]);

gulp.task("serve:nw", function () {
  process.env.nw = true;
  require('./server-webpack/app');
});
gulp.task("default",["serve"]);

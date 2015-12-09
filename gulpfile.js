/**
 * Created by Shawn Liu on 2015/12/9.
 */
var gulp = require('gulp'),
  clean = require('gulp-clean'),
  gutil = require("gulp-util");

gulp.task('clean', function (callback) {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task("build",["clean"], function (callback) {
  const compiler = require('webpack')(
    require('./webpack.config')
  );
  compiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    console.log(stats.toString({
      chunks: false,
      chunkModules: false,
      colors: true
    }));
    callback();
  });
});


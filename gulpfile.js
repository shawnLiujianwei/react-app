/**
 * Created by Shawn Liu on 2015/12/9.
 */
var gulp = require('gulp'),
  gutil = require("gulp-util");
gulp.task("build", function (callback) {
  const compiler = require('webpack')(
    require('./webpack.config')
  );
  compiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  })
})

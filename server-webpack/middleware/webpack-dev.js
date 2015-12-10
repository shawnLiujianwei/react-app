//import WebpackDevMiddleware from 'webpack-dev-middleware';
//import config               from '../../config';
'use strict';
//const paths = config.utils_paths;
let WebpackDevMiddleware = require("webpack-dev-middleware");
module.exports = function ( compiler, publicPath ) {
  console.log('Enable Webpack dev middleware.');

  return WebpackDevMiddleware(compiler, {
    publicPath:publicPath,
    contentBase : require("path").join(__dirname,"../../src"),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : {
      colors : true
    }
  });
}

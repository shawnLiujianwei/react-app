//import WebpackHotMiddleware from 'webpack-hot-middleware';
'use strict';
let WebpackHotMiddleware = require("webpack-hot-middleware");
module.exports = function (compiler) {
  console.log('Enable Webpack Hot Module Replacement (HMR).');
  return WebpackHotMiddleware(compiler);
}

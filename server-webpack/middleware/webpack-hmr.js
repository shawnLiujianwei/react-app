//import WebpackHotMiddleware from 'webpack-hot-middleware';
'use strict';
let WebpackHotMiddleware = require("webpack-hot-middleware");
const debug = require('debug')('kit:server:webpack-hmr');

module.exports = function (compiler) {
  debug('Enable Webpack Hot Module Replacement (HMR).');

  return WebpackHotMiddleware(compiler);
}

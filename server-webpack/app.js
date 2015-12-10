//import express              from 'express';
//import historyApiFallback   from 'connect-history-api-fallback';
//import config               from '../config';
'use strict';
let express = require("express");
let historyApiFallback = require("connect-history-api-fallback");
const app = express();
const debug = require('debug')('kit:server');
let config = require("config");
app.use(historyApiFallback({
  verbose: false
}));

// Enable webpack middleware if the application is being
// run in development mode.
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('./middleware/webpack-dev')(compiler, webpackConfig.output.publicPath));
  app.use(require('./middleware/webpack-hmr')(compiler));
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  );
}


app.listen(config.server.dev.port, function () {
  debug('Webpack dev server is now running at ' + config.server.dev.port + '.');
});
module.exports = app;

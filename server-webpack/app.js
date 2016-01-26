//import express              from 'express';
//import historyApiFallback   from 'connect-history-api-fallback';
//import config               from '../config';
'use strict';
let express = require("express");
let historyApiFallback = require("connect-history-api-fallback");
let path = require("path");
const app = express();
let config = require("config");
app.use(historyApiFallback({
    verbose: false
}));
// Enable webpack middleware if the application is being
// run in development mode.
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
app.use(require('./middleware/webpack-dev')(compiler, webpackConfig.output.publicPath));
app.use(require('./middleware/webpack-hmr')(compiler));

app.listen(config.server.dev.port, function () {
    console.log('Webpack dev server is now running at ' + config.server.dev.port + '.');
});
//require("../server/app");
module.exports = app;

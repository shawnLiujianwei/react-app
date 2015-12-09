/**
 * Created by Shawn Liu on 15/12/9.
 */
//import { argv } from 'yargs';
//import config   from '../config';


const KARMA_ENTRY_FILE = 'karma.entry.js';
const webpackConfig = require('./webpack.config');
var path = require("path");
const karmaConfig = {
  files: [
    path.join(__dirname, './node_modules/phantomjs-polyfill/bind-polyfill.js'),
    path.join(__dirname, `./tests/**/*.js`),
    KARMA_ENTRY_FILE
  ],
  singleRun: !process.env.watch,
  frameworks: ['mocha', 'sinon-chai', 'chai-as-promised', 'chai'],
  preprocessors: {
    [KARMA_ENTRY_FILE]: ['webpack'],
    [`tests/**/*.js`]: ['webpack']
  },
  reporters: ['spec'],
  browsers: ['PhantomJS'],
  webpack: {
    devtool: 'inline-source-map',
    resolve: webpackConfig.resolve,
    plugins: webpackConfig.plugins
      .filter(plugin => !plugin.__KARMA_IGNORE__),
    module: {
      loaders: webpackConfig.module.loaders
    },
    sassLoader: webpackConfig.sassLoader
  },
  webpackMiddleware: {
    noInfo: true
  },
  coverageReporter: {
    reporters: [
      {type: 'text-summary'},
      {type: 'html', dir: 'coverage'}
    ]
  }
};

karmaConfig.reporters.push('coverage');
karmaConfig.webpack.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  include: new RegExp("src"),
  loader: 'isparta'
}];

//export default (cfg) => cfg.set(karmaConfig);
module.exports = function (cfg) {
  cfg.set(karmaConfig);
}

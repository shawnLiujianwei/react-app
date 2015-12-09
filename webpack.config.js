/**
 * Created by Shawn Liu on 2015/12/9.
 */
//import webpack           from 'webpack';
//import cssnano           from 'cssnano';
//import HtmlWebpackPlugin from 'html-webpack-plugin';
//import config            from '../../config';
const path = require("path");
const webpack = require("webpack");
const cssnano = require("cssnano");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const debug = require('debug')('kit:webpack:_base');
debug('Create configuration.');
const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      './src/app.js'
    ],
    vendor: [
      'history',
      'react',
      'react-redux',
      'react-router',
      'redux',
      'redux-simple-router'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: "./dist",
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': process.env.NODE_ENV,
      '__DEV__': process.env.NODE_ENV === 'development',
      '__PROD__': process.env.NODE_ENV === 'production',
      '__DEBUG__': process.env.NODE_ENV === 'development' && !process.no_debug,
      '__DEBUG_NW__': !!process.nw
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: [
      'actions',
      'components',
      'constants',
      'containers',
      'layouts',
      'reducers',
      'routes',
      'services',
      'store',
      'styles',
      'utils',
      'views'
    ].reduce((acc, dir) => {
        acc[dir] = path.join(__dirname, "./src/" + dir);
        return acc;
      }, {})
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          stage: 0,
          optional: ['runtime'],
          env: {
            development: {
              plugins: ['react-transform'],
              extra: {
                'react-transform': {
                  transforms: [{
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }]
                }
              }
            }
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader'
        ]
      },
      /* eslint-disable */
      {
        test: /\.woff(\?.*)?$/,
        loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2"
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {test: /\.eot(\?.*)?$/, loader: "file-loader?prefix=fonts/&name=[path][name].[ext]"},
      {
        test: /\.svg(\?.*)?$/,
        loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml"
      }
      /* eslint-enable */
    ]
  },
  sassLoader: {
    includePaths: "./src/styles"
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      discardComments: {
        removeAll: true
      }
    })
  ]
};

// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);
commonChunkPlugin.__KARMA_IGNORE__ = true;
webpackConfig.plugins.push(commonChunkPlugin);


if (process.env.NODE_ENV === "production") {
  webpackConfig.module.loaders = webpackConfig.module.loaders.map(function (loader) {
    if (/css/.test(loader.test)) {
      //const [first, ...rest] = loader.loaders;
      const first = loader.loaders.shift();
      const rest = loader.loaders;

      loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
      delete loader.loaders;
    }

    return loader;
  });

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        'unused': true,
        'dead_code': true
      }
    })
  );
} else {
  webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig;

/**
 * Created by Shawn on 2015/11/23.
 */
var http = require('http');
var path = require('path');
var logger = require("log4js").getLogger('c-commerce');
var morgan = require('morgan');
var Promise = require('bluebird');
var MongoDB = Promise.promisifyAll(require('mongodb'));
var serviceLocator = require('./serviceLocator');
var express = require('express');
var bodyParser = require('body-parser');
var dbUrl = require('config').db.productDB;
//var port = process.env.PORT || 2000;
var config = require("config");
var port = config.server.api.port;
var app = express();
var theHTTPLog = morgan('combined', {
  stream: {
    write: function (str) {
      logger.trace(str);
    }
  }
});

app.use(theHTTPLog);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return next();
});
if (process.env.NODE_ENV === 'production') {
  require('./authentication')(app);
}

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/products', require("./products"));
//app.use('/api/product-manager', productManager(express.Router()));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});


MongoDB.connectAsync(dbUrl).then(function (connection) {
  serviceLocator.registerService('mongo', connection);
  http.createServer(app).listen(port, function () {
    logger.trace('Server listening on port ' + port);
  });
});


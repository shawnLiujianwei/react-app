/**
 * Created by Shawn Liu on 2015/11/25.
 */

var serviceLoader = require("../serviceLocator");
var db = serviceLoader.getService("mongo");
var proCol = db.collection("products");
exports.findProducts = function (query) {
    return proCol.findAsync({}).call("toArray");
}

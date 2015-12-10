/**
 * Created by Shawn Liu on 2015/11/25.
 */
'use strict';

var express = require('express');
var controller = require('./product.controller');
var router = express.Router();
router.get('/', controller.listAll);
module.exports = router;
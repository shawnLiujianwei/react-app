/**
 * Created by Shawn Liu on 2015/11/25.
 */
'use strict';
var logger = require("log4js").getLogger("server/products/product.controller.js");
var Promise = require("bluebird");
exports.listAll = function (req, res) {
    return res.json([
        {
            "title": "饥饿鲨(OCZ) Radeon R7系列 240G 高性能固态硬盘",
            "image": ["http://img12.360buyimg.com/n5/jfs/t514/68/406290043/84295/d2e42e8e/5465657bN8413335b.jpg"],
            "description": "dfdfdfdfdf",
            "category": "电脑周边",
            "details": {
                "price_now": "￥999.00",
                "price_was": "",
                "offers": [
                    "手机专享价 ￥997.00",
                    "加价购 满50.00另加39.00元，或满51.00另加79.00元，即可购买热销商品"
                ]
            }

        }
    ]);
}

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
      "id":"00001",
      "image": ["http://img12.360buyimg.com/n5/jfs/t514/68/406290043/84295/d2e42e8e/5465657bN8413335b.jpg"],
      "description": "dfdfdfdfdf",
      "category": "000000003",
      "details": {
        "price_now": "￥999.00",
        "price_was": "",
        "offers": [
          "手机专享价 ￥997.00",
          "加价购 满50.00另加39.00元，或满51.00另加79.00元，即可购买热销商品"
        ]
      }

    }, {
      "id":"00002",
      "title": "尼康（Nikon） COOLPIX P530 数码相机 黑色 (1605万有效像素 3英寸屏 42倍光变 24mm广角 1cm微距拍摄)",
      "image": ["http://img10.360buyimg.com/n5/g16/M00/0B/1F/rBEbRVOELl8IAAAAAAGywrycYJsAACVQQK6kzwAAbLa154.jpg"],
      "description": "单反相机..............",
      "category": "000000002",
      "details": {
        "price_now": "￥1499.00",
        "price_was": "",
        offers: [
          "满100.00另加699.00元，或满200.00另加789.00元，即可购买热销商"
        ]
      }
    }
  ]);
}

let Constants = require("../constants");
export default {
    //increment: () => ({ type : COUNTER_INCREMENT })
    fetchProducts: function () {
        console.log("Action:", new Date())
        return {type: Constants.Fetch_Product};
    }
};

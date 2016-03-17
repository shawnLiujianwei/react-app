import { createReducer }     from '../utils/index.js';
let Constants = require("../constants");

const initialState = 0;
export default createReducer(initialState, {
    //[COUNTER_INCREMENT] : (state) => state + 1
    [Constants.Counter_Increment]: function (state) {
        console.log("Reducer ", new Date())
        return state + 1
    }
});

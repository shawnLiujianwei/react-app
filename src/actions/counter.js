import { COUNTER_INCREMENT } from 'constants/counter';

export default {
    //increment: () => ({ type : COUNTER_INCREMENT })
    increment: function () {
        console.log("Action:", new Date())
        return {type: COUNTER_INCREMENT}
    }
};

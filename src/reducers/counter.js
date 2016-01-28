import { createReducer }     from '../utils';
import { COUNTER_INCREMENT } from 'constants';

const initialState = 0;
export default createReducer(initialState, {
    //[COUNTER_INCREMENT] : (state) => state + 1
    [COUNTER_INCREMENT]: function (state) {
        console.log("Reducer ", new Date())
        return state + 1
    }
});

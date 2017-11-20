import { FETCH_TODOS } from "../actions/types";
import { CREATE_TODO } from "../actions/types";

export default function(state = [], action) {
    console.log("ACTION  : ",action);
    switch(action.type) {
        case FETCH_TODOS:
        console.log("PAYLOAD--:",action.payload);
        return action.payload;
        case CREATE_TODO:
            console.log("PAYLOAD--:",action.payload);
            return action.payload;
        default:
            return state;
    }
}

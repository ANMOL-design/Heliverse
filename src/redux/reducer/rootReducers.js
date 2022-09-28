import { combineReducers } from "redux";
import { cardReducers } from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
    cardReducers
});

export default rootReducer;
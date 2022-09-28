import { combineReducers } from "redux";
import { cardReducers } from "./cartReducer/cartReducer";
import { teamReducers } from "./cartReducer/teamReducer";

const rootReducer = combineReducers({
  cardReducers,
  teamReducers,
});

export default rootReducer;

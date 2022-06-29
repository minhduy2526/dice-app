import { combineReducers } from "redux";
import diceAppReducer from "./diceAppReducer";

const rootReducer = combineReducers({
  diceapp: diceAppReducer,
});

export default rootReducer;

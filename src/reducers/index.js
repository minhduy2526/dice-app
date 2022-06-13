import { combineReducers } from "redux";
import getSelectedReducer from "./getSelectedReducer";

const rootReducer = combineReducers({
    selected: getSelectedReducer,
});

export default rootReducer;

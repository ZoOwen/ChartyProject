import { combineReducers } from "redux";
import getEvent from "./HistoryReducers";
import getSignUp from "./RegisterReducers";

const rootReducer = combineReducers({ getEvent, getSignUp });

export default rootReducer;

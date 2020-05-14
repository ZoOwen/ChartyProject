import { combineReducers } from "redux";
import getEvent from "./HistoryReducers";
import getSignUp from "./RegisterReducers";
import getSignIn from "./LoginReducers";

const rootReducer = combineReducers({ getEvent, getSignUp, getSignIn });

export default rootReducer;

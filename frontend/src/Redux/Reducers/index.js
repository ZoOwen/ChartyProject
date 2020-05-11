import { combineReducers } from "redux";
import getEvent from "./HistoryReducers";

const rootReducer = combineReducers({ getEvent });

export default rootReducer;

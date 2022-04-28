import { combineReducers } from "redux";
import userreducer from "./reducer";

const rootreducer = combineReducers({users:userreducer})


export default rootreducer;
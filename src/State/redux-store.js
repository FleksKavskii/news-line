import {combineReducers, createStore} from "redux";
import addPostReducer from "./addPostReducer";


let redusers = combineReducers({messages: addPostReducer})
let store = createStore(redusers)

export default store
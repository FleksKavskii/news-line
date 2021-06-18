import {applyMiddleware, combineReducers, createStore} from "redux";
import addPostReducer from "./addPostReducer";
import newCommentsReducer from "./newCommentsReducer";
import userDataReducer from "./userDataReducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    messages: addPostReducer,
    comments: newCommentsReducer,
    userData: userDataReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
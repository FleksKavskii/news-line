import React from 'react';
import * as axios from "axios";

const getCommentsAction = 'SHOW-COMMENTS'

let initialStore = {
    comments: [],
}
const newCommentsReducer = (state = initialStore, action) => {
    if (action.type === getCommentsAction){
        return {...state, comments: [...action.comments]}
    }
    return state
}

export default newCommentsReducer

export const getCommentsActionCreator = (comments) => {
    return ({type: getCommentsAction, comments})
}
export const addCommentThunkCreator = (text, message_id, usersname) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/addComment", {
            comment: text,
            messages_id: message_id,
            userName: usersname
        })
        axios.post("http://localhost:3001/comments", {messages_id: message_id}).then(responce => {
            dispatch(getCommentsActionCreator(responce.data))
        })
    }
}
export const getCommentThunkActionCreator = (id) => {
    return (dispatch) =>{
        axios.post("http://localhost:3001/comments", {messages_id: id}).then(responce => {
            dispatch(getCommentsActionCreator(responce.data))
        })
    }
}

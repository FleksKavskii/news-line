import React from 'react';
import * as axios from "axios";

const newMessage = 'NEW-MESSAGE'
const likeAction = 'LIKE'
const unLikeAction = 'UNLIKE'
const toggleIsFetchingAction = 'TOGGLE-IS-FETCHING'

let initialStore = {
    messages: [],
    isFetching: true
}


const addPostReducer = (state = initialStore, action) => {
    if (action.type === newMessage) {
        return {...state, messages: [...action.newMessages]}

    } else if (action.type === likeAction) {
        return {
            ...state, messages: state.messages.map(m => {
                if (m.messages_id === action.messages_id) {
                    let number = m.likeNumber
                    let stateCopy = {...m, likes: true, likeNumber: number + 1}
                    axios.put("http://localhost:3001/put", {
                        messages_id: stateCopy.messages_id,
                        likeNumber: stateCopy.likeNumber
                    })
                    return {...m, likes: true, likeNumber: number + 1}
                }
                return m
            })
        }

    } else if (action.type === unLikeAction) {
        return {
            ...state, messages: state.messages.map(m => {
                if (m.messages_id === action.messages_id) {
                    let number = m.likeNumber
                    let stateCopy = {...m, likes: true, likeNumber: number - 1}
                    axios.put("http://localhost:3001/put", {
                        messages_id: stateCopy.messages_id,
                        likeNumber: stateCopy.likeNumber
                    })
                    return {...m, likes: false, likeNumber: number - 1}
                }
                return m
            })
        }

    } else if (action.type === toggleIsFetchingAction) {
        return {...state, isFetching: action.isFetching}
    }
    return state
}
export default addPostReducer

export const likeActionCreator = (messages_id) => {
    return ({type: likeAction, messages_id})
}
export const unLikeActionCreator = (messages_id) => {
    return ({type: unLikeAction, messages_id})
}
export const newMessageActionCreator = (newMessages) => {
    return ({type: newMessage, newMessages})
}
export const toggleIsFetchingActionCreator = (isFetching) => {
    return ({type: toggleIsFetchingAction, isFetching})
}
export const addMessageThunkCreator = (text, username) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(false))
        axios.post("http://localhost:3001/post", {
            username: username,
            message: text,
            likes: false,
            likeNumber: 0
        })
        axios.get("http://localhost:3001/messages").then(responce => {
            dispatch(toggleIsFetchingActionCreator(true))
            dispatch(newMessageActionCreator(responce.data))
        })
    }
}
export const deleteMessageThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(false))
        axios.post("http://localhost:3001/delete", {
            messages_id: id
        })
        axios.get("http://localhost:3001/messages").then(responce => {
            dispatch(toggleIsFetchingActionCreator(true))
            dispatch(newMessageActionCreator(responce.data))
        })
    }
}
export const newMessageThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(false))
        axios.get("http://localhost:3001/messages").then(responce => {
            dispatch(toggleIsFetchingActionCreator(true))
            dispatch(newMessageActionCreator(responce.data))
        })
    }
}


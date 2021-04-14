import React, {Component} from 'react';

const newMessage = 'NEW-MESSAGE'

let initialStore = {
    messages: []
}


const addPostReducer = (state = initialStore, action) => {
    if (action.type === newMessage) {
        return {...state, messages: [...action.newMessages]}
    }
    return state
}
export default addPostReducer;

export const newMessageActionCreator = (newMessages) => {
    return ({type: 'NEW-MESSAGE', newMessages})
}
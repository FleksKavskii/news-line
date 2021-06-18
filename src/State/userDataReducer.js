import React from 'react';

const newUserDataAction = 'NEW-USER-DATA'

let initialStore = {
    userData: []
}

const userDataReducer = (state = initialStore, action) => {
    if (action.type === newUserDataAction) {
        return {...state, userData: [...action.userData]}
    }
    return state
}

export default userDataReducer

export const newUserDataActionCreator = (userData) =>{
    return ({type: newUserDataAction, userData})
}
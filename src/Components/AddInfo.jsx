import React, {Component} from 'react'
import './AddInfo.css'
import {addPostActionCreator} from "../State/addPostReducer";

let newPostElement = React.createRef()
const AddInfo = (props) => {
    let addPost = () => {
        let text = newPostElement.current.value
        newPostElement.current.value = ''
        let action = addPostActionCreator(text)
        props.dispatch(action)

    }
    return (
        <div>
            <div>
                <input ref={newPostElement} className='info' type='text'></input>
            </div>
            <button onClick={addPost} className='button'>Отправить</button>
            <div className='bord'></div>
        </div>
    )
}

export default AddInfo
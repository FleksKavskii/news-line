import React, {Component} from 'react';
import './AddInfo.css'
import * as axios from "axios";


class AddInfoClass extends Component {

    newPostElement = React.createRef()

    addPost = () => {
        let text = this.newPostElement.current.value
        this.newPostElement.current.value = ''
        let username = this.props.userData[0].userName
        this.props.addMessageThink(text, username)
    }

    render() {
        return (
            <div>
                <div>
                    <div className='add-post-container'>
                        <div className='add-post-info'>
                            <input ref={this.newPostElement} className='info' type='text'/>
                        </div>
                        <button onClick={this.addPost} className='button'>Отправить</button>
                    </div>
                    <div className='bord'/>
                </div>
            </div>
        )
    }
}

export default AddInfoClass;
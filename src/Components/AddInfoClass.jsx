import React, {Component} from 'react';
import './AddInfo.css'
import * as axios from "axios";


class AddInfoClass extends Component {

    newPostElement = React.createRef()

    addPost = () => {
        let text = this.newPostElement.current.value
        this.newPostElement.current.value = ''
        axios.post("http://localhost:3001/post", {
            message: text
        })
        axios.get("http://localhost:3001/messages").then(responce => {
            this.props.newMessage(responce.data)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <input ref={this.newPostElement} className='info' type='text'></input>
                    </div>
                    <button onClick={this.addPost} className='button'>Отправить</button>
                    <div className='bord'></div>
                </div>
            </div>
        );
    }
}

export default AddInfoClass;
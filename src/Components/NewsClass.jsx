import React, {Component} from 'react';
import Ellipse from "../img/Ellipse.png";
import * as axios from "axios";
import {newMessageActionCreator} from "../State/addPostReducer";
import './News.css'
import likeNotActive from "../img/like-not-active.png"

class NewsClass extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:3001/messages").then(responce => {
            this.props.newMessage(responce.data)
        })
    }

    getUsers = () => {
        axios.get("http://localhost:3001/messages").then(responce => {
            this.props.newMessage(responce.data)
        })
    }
    reverseNews = () => {
        debugger
        return this.props.messages.reverse()
    }

    messagesElement = () => this.reverseNews().map(m => <this.NewsItem messages_id={m.messages_id}
                                                                       message={m.message}/>)

    NewsItem = (props) => {

        let deleteNews = () => {
            let id = props.messages_id
            axios.post("http://localhost:3001/delete", {
                messages_id: id
            })
            this.getUsers()
        }

        let likeFunc = () => {

        }

        return (
            <div>
                <div className='messages'>
                    <img src={Ellipse}/>
                    <div className='message'>{props.message}</div>
                    <img className='like-button' src={likeNotActive} onClick={likeFunc}/>
                    <button className='delete-button' onClick={deleteNews}>delete</button>
                </div>
                <div>
                    <div className='bord'></div>
                </div>
            </div>)
    }

    render() {
        return (
            <div>
                {this.messagesElement()}
                <button onClick={this.getUsers} className='button-News'>Загрузить еще</button>
            </div>)
    }
}

export default NewsClass;
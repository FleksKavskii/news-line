import React from 'react';
import Ellipse from "../img/Ellipse.png";
import * as axios from "axios";
import './News.css'
import likeNotActive from "../img/like-not-active.png"
import likeActive from "../img/like-active.png"
import commentsButton from "../img/comments.png"

class NewsClass extends React.Component {

    componentDidMount() {
        this.props.newMessageThunk()
    }

    getMessages = () => {
        this.props.newMessageThunk()
    }
    reverseNews = () => {
        return this.props.messages.reverse()
    }


    messagesElement = () => this.reverseNews().map(m => <this.NewsItem messages_id={m.messages_id}
                                                                       message={m.message}
                                                                       likes={m.likes}
                                                                       likeNumber={m.likeNumber}
                                                                       likeDis={m.likeA}
                                                                       unlikeDis={m.unLikeA}
                                                                       username={m.username}/>)

    NewsItem = (props) => {

        let newCommentElement = React.createRef()


        let commentsElement = () => this.props.comments.map(c => <CommentsItem comment={c.comment}
                                                                               usersname={c.usersname}/>)

        let CommentsItem = (props) => {
            return (
                <div>
                    <div className='comments-container'>
                        <div className='user-name-comment-container'>
                            <span className='user-name-comment'>{props.usersname}</span>
                        </div>
                        <div className='comment-text'>{props.comment}</div>
                    </div>
                    <div className='border-comment'/>
                </div>
            )
        }

        let addComment = () => {
            let text = newCommentElement.current.value
            newCommentElement.current.value = ''
            this.props.addCommentThunk(text, props.messages_id, this.props.userData[0].userName)
        }


        let deleteNews = () => {
            this.props.deleteMessageThunk(props.messages_id)
        }

        let getComments = () => {
            this.props.getCommentThunk(props.messages_id)
        }
        let comment

        if (this.props.comments[0] !== undefined) {
            let geniusMove = this.props.comments[0]

            if (geniusMove.messages_id === props.messages_id) {
                comment = commentsElement()
            }

        }

        return (
            <div>
                <div className='messages'>
                    <div className='profile'>
                        <img src={Ellipse}/>
                        <div className='user-name'>{props.username}</div>
                    </div>
                    <div className='message'>{props.message}</div>
                    <div className='messages-elements'>
                        {props.likes ?
                            <img className='like-button' src={likeActive} onClick={() => {
                                this.props.unLikeA(props.messages_id)
                            }}/> :
                            <img className='like-button' src={likeNotActive} onClick={() => {
                                this.props.likeA(props.messages_id)
                            }}/>}
                        <div className='like-number'>{props.likeNumber}</div>
                        <div className='comments-button'>
                            <img src={commentsButton} onClick={getComments}/>
                        </div>
                        {this.props.userData[0].userName === 'Fleks' &&
                        <button className='delete-button' onClick={deleteNews}>delete</button>
                        }
                    </div>
                </div>
                <div>
                    <div className='border-comment'/>
                    {comment}
                    <input className='comment-input' ref={newCommentElement} type='text'/>
                    <button className='comment-send-button' onClick={addComment}>Отправить</button>
                </div>
                <div>
                    <div className='bord'/>
                </div>
            </div>)
    }

    render() {
        return (
            <div>
                {this.props.isFetching &&
                this.messagesElement()
                }
                {!this.props.isFetching &&
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                }
                <button onClick={this.getMessages} className='button-News'>Загрузить еще</button>
            </div>)
    }
}

export default NewsClass

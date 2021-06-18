import {connect} from "react-redux";
import NewsClass from "./NewsClass";
import {
    deleteMessageThunkCreator,
    likeActionCreator,
    newMessageThunkCreator,
    unLikeActionCreator
} from "../State/addPostReducer";
import {
    addCommentThunkCreator,
    getCommentThunkActionCreator
} from "../State/newCommentsReducer";


let mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        comments: state.comments.comments,
        userData: state.userData.userData,
        isFetching: state.messages.isFetching
    }

}
let mapDispatchToProps = (dispatch) => {

    return {
        newMessageThunk: (newMessages) => {
            dispatch(newMessageThunkCreator(newMessages))
        },
        likeA: (messages_id) => {
            dispatch(likeActionCreator(messages_id))
        },
        unLikeA: (messages_id) => {
            dispatch(unLikeActionCreator(messages_id))
        },
        addCommentThunk: (text, message_id, usersname) => {
            dispatch(addCommentThunkCreator(text, message_id, usersname))
        },
        deleteMessageThunk: (id) => {
            dispatch(deleteMessageThunkCreator(id))
        },
        getCommentThunk: (id) => {
            dispatch(getCommentThunkActionCreator(id))
        },


    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsClass)
export default NewsContainer
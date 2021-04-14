import {connect} from "react-redux";
import NewsClass from "./NewsClass";
import {newMessageActionCreator} from "../State/addPostReducer";


let mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    }

}
let mapDispatchToProps = (dispatch) => {
    return {

        newMessage: (newMessages) => {
            debugger
            dispatch(newMessageActionCreator(newMessages))
        },

    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsClass)
export default NewsContainer
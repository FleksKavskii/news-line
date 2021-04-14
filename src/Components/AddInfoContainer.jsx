import {connect} from "react-redux";
import AddInfoClass from "./AddInfoClass";
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
const AddInfoContainer = connect(mapStateToProps, mapDispatchToProps)(AddInfoClass)
export default AddInfoContainer
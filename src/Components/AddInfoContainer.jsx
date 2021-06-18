import {connect} from "react-redux";
import AddInfoClass from "./AddInfoClass";
import {addMessageThunkCreator, newMessageActionCreator} from "../State/addPostReducer";
import {newUserDataActionCreator} from "../State/userDataReducer";

let mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        userData: state.userData.userData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (newMessages) => {
            dispatch(newMessageActionCreator(newMessages))
        },
        newUserData: (newUserData) =>{
            dispatch(newUserDataActionCreator(newUserData))
        },
        addMessageThink: (text, username) =>{
            dispatch(addMessageThunkCreator(text, username))
        }
    }
}
const AddInfoContainer = connect(mapStateToProps, mapDispatchToProps)(AddInfoClass)
export default AddInfoContainer
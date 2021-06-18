import {connect} from "react-redux";
import Registration from "./Registration";
import {newUserDataActionCreator} from "../State/userDataReducer";

let mapStateToProps = (state) => {
    return {
        userData: state.userData.userData
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        newUserData: (newUserData) =>{
            dispatch(newUserDataActionCreator(newUserData))
        }
    }
}

const registrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)
export default registrationContainer
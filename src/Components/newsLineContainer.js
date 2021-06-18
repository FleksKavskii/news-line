import {connect} from "react-redux";
import newsLine from "./newsLine";

let mapStateToProps = (state) => {
    return {
        userData: state.userData.userData
    }
}

const newLineContainer = connect(mapStateToProps, null)(newsLine)
export default newLineContainer
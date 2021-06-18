import React from "react";
import './App.css';
import Header from "./Header";
import AddInfoContainer from "./AddInfoContainer";
import NewsContainer from "./NewsContainer";

function newsLine(props){
    if(props.userData[0] === undefined){
        props.history.push("/")
    }
    return (
        <div className='app'>
            <Header/>
            <AddInfoContainer/>
            <NewsContainer/>
        </div>
    )
}
export default newsLine
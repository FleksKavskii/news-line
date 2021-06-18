import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import registrationContainer from "./registrationContainer";
import React from "react";
import newsLineContainer from "./newsLineContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className='all'>
                <Route exact path='/' component={registrationContainer}/>
                <Route path='/line' component={newsLineContainer}/>
            </div>
        </BrowserRouter>)
}

export default App;

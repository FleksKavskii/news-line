import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import store from "./State/redux-store";
import {Provider} from "react-redux";

export let renderFunc = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <meta name='viewport' content='width=device-width'/>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

renderFunc(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

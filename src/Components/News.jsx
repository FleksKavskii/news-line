// import React, {Component, useState} from 'react';
// import './News.css'
// import Ellipse from './../img/Ellipse.png'
// import {newMessageActionCreator} from "../State/addPostReducer";
// import * as axios from "axios";
//
//
// let first = false
// const NewsItem = (props) => {
//     return (
//         <div>
//             <div className='messages'>
//                 <img src={Ellipse}/>
//                 <div className='message'>{props.message}</div>
//             </div>
//             <div>
//                 <div className='bord'></div>
//             </div>
//         </div>)
// }
//
// const News = (props) => {
//     let getUsers = () => {
//         if (first === false) {
//             axios.get("http://localhost:3001/messages").then(responce => {
//                 let action = newMessageActionCreator(responce.data)
//                 debugger
//                 props.dispatch(action)
//             })
//         }
//     }
//     let addMoreNews = () => {
//         let action = newMessageActionCreator()
//     }
//     first = true
//     let messagesElement = props.messages.map(m => <NewsItem message={m.message}/>)
//     return (
//         <div>
//             {messagesElement}
//             <button onClick={addMoreNews} className='button-News'>Загрузить еще</button>
//         </div>
//     );
// }
//
//
// export default News;
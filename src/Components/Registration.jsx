import React, {useEffect, useState} from 'react';
import "./Registration.css"
import * as axios from "axios";

let pidCrypt = require("pidcrypt")
require("pidcrypt/aes_cbc")

function Registration(props) {

    const aes = new pidCrypt.AES.CBC()
    const [registrationSuccess, setReg] = useState(true)
    const [authSuccess, setAuth] = useState(true)

    let newPassElement = React.createRef()
    let newLoginElement = React.createRef()


    let sendRegistration = () => {
        let key = 'key'
        let login = newLoginElement.current.value
        let pass = newPassElement.current.value
        newLoginElement.current.value = ''
        newPassElement.current.value = ''
        let encrypted = aes.encryptText(pass, key);
        if (pass !== '' || login !== '') {
            axios.post("http://localhost:3001/registration", {
                userName: login,
                userPassword: encrypted,
            }).then(response => {
                if (response.data === true) {
                    setReg(true)
                    props.newUserData([{userName: login, userPassword: pass}])
                    props.history.push("/line")
                } else {
                    setAuth(true)
                    setReg(false)
                }
            })
        } else {
            setAuth(true)
            setReg(false)
        }

    }
    let sendLogin = () => {
        let key = 'key'
        let login = newLoginElement.current.value
        let pass = newPassElement.current.value
        newLoginElement.current.value = ''
        newPassElement.current.value = ''
        if (pass !== '' || login !== '') {
            axios.post("http://localhost:3001/authorization", {
                userName: login,
            }).then(response => {
                console.log(response)
                let decrypt = aes.decryptText(response.data, key);
                if (decrypt === pass) {
                    setAuth(true)
                    props.newUserData([{userName: login, userPassword: pass}])
                    props.history.push("/line")
                } else {
                    setReg(true)
                    setAuth(false)
                }
            })
        } else {
            setReg(true)
            setAuth(false)
        }
    }


    return (
        <div>
            <div className='content'>
                <div className='registration-form'>
                    <div className='main-content'>
                        <div className='label-input'>
                            <label className='label'>Логин</label>
                            <input ref={newLoginElement} type='text' className='login-input'/><br/>
                        </div>
                        <div className='label-input'>
                            <label className='label'>Пароль</label>
                            <input ref={newPassElement} type='text' className='pass-input'/><br/>
                        </div>
                        <div className='answer-container'>
                            {!registrationSuccess &&
                            <div className='answer'>Пользователь уже существует или вы ввели некорректный логин или
                                пароль</div>
                            }
                            {!authSuccess &&
                            <div className='answer'>Пользователь не существует или неправильный логин, пароль</div>
                            }
                        </div>
                        <button className='registration-button' onClick={sendRegistration}>Регистрация</button>
                        <button className='authorization-button' onClick={sendLogin}>Авторизация</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
import React, { useState } from 'react';
import { message } from 'antd';

export default function Login({ logIn }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const enterLogin = (e) => {
        setLogin(e.target.value);
        console.log(login);
    }

    const enterPassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await logIn(login, password);
        }

        catch (err) {
            message.error("Something gome wrong");
        }

    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Авторизация</h2>

                <div className="login-form">
                    <div className="username form">

                        <p>Логин</p>

                        <input placeholder="Введите ваш логин" onChange={enterLogin}></input>

                    </div>

                    <div className="password form">
                        <p>Пароль</p>

                        <input placeholder="Введите ваш пароль" type="password" onChange={enterPassword}></input>

                    </div>
                </div>

                <div className="remember-me">
                    <input type="checkbox" />
                    <div>Remember Me</div>
                </div>

                <form action="" className="button-form" onSubmit={handleSubmit}>
                    <button >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

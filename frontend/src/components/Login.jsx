import React from 'react'

export default function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <h2>Авторизация</h2>

                <div className="login-form">
                    <div className="username form">
                        <p>Логин</p>
                        <input placeholder="Введите ваш логин"></input>
                    </div>

                    <div className="password form">
                        <p>Пароль</p>
                        <input placeholder="Введите ваш пароль"></input>
                    </div>

                </div>


                <div className="remember-me">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                </div>

                <form action="" className="button-form">
                    <button>
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

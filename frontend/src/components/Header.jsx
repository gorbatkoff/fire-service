import React from 'react'

import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <div className="nav">
                    <ul className="list">
                        <li className="nav-link"><a href="#about">О Нас</a></li>
                        <li className="nav-link"><a href="#study-main">Программы Обучения</a></li>
                        <li className="nav-link"><a href="#slider">Галерея</a></li>
                        <li className="nav-link"><Link to="/documents">Документы</Link></li>
                        <li className="nav-link"><a href="#contacts">Контакты</a></li>
                        <li className="nav-link" ><Link id="login" to="/login">Войти</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

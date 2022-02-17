import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <div className="nav">
                    <ul className="list">
                        <li className="nav-link"><a href="#about">О Нас</a></li>
                        <li className="nav-link"><a href="#study-main">Программы Обучения</a></li>
                        <li className="nav-link"><a href="#slider">Галерея</a></li>
                        <li className="nav-link"><a href="/documents">Документы</a></li>
                        <li className="nav-link"><a href="#contacts">Контакты</a></li>
                        <li className="nav-link" ><a className='selected' href="/login">Войти</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <div className="nav">
                    <ul className="list">
                        <li className="nav-link"><a href="">О Нас</a></li>
                        <li className="nav-link"><a href="">Программы Обучения</a></li>
                        <li className="nav-link"><a href="">Галерея</a></li>
                        <li className="nav-link"><a href="">Документы</a></li>
                        <li className="nav-link"><a href="">Контакты</a></li>
                        <li className="nav-link" ><a className='selected' href="">Войти</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

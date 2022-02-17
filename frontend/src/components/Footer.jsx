import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-info">

                <div className="footer-address">
                    <h2>664003, г. Ростов на Дону, ул. Красноармейская ,15</h2>
                </div>

                <div className="footer-mail">
                    <h2>E-mail: info@mchs-gov.ru</h2>
                </div>

                <div className="footer-phone">
                    <h2>01 или 101</h2>
                    <div className="">Единый телефон пожарных и спасателей</div>
                </div>

                <div className="footer-phone">
                    <h2>8 (3952) 453-221</h2>
                    <div>Приёмная начальника ГУ</div>
                </div>

                <div className="footer-phone">
                    <h2>8 (3952) 40-99-99</h2>
                    <div>Единый «телефон доверия»</div>
                </div>
            </div>

            <div className="footer-nav">
                <h2>Основные Разделы</h2>
                <ul className="footer-list">
                    <li className="footer-link"><a href="">О Нас</a></li>
                    <li className="footer-link"><a href="">Программы Обучения</a></li>
                    <li className="footer-link"><a href="">Галерея</a></li>
                    <li className="footer-link"><a href="">Документы</a></li>
                    <li className="footer-link"><a href="">Контакты</a></li>
                </ul>
            </div>

            <div className="footer-links">
                <h2>Ссылки</h2>
                <div className="links">
                    <li className="link">
                        <a href="">Президент Российской Федерации</a>
                    </li>
                    <li class="link">
                        <a href="">Правительство Российской Федерации</a>
                    </li>
                </div>
            </div>

        </footer>
    )
}

import React from 'react'
import Logo from "../images/logo.png";
import Line from '../images/header-line.svg';

import { Cascader } from 'antd';

export default function Main() {

    return (
        <main>
            <div className="main-wrapper">

                <div className="main-title">
                    <div className="main-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="main-title-text">
                        <h1>Учебная Пожарная Часть</h1>

                        <h3>Сайт Учебной Пожарной Части по Ростовской Области</h3>

                        <img src={Line} alt="" />

                        <h4>
                            Министерство Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий
                        </h4>
                    </div>
                </div>

                <div className="main-contacts">
                    <h2>Навигация По Сайту</h2>

                    <div main-contacts-links>
                        <a href="#" className="links">Деятельность</a>
                        <a href="#" className="links">Документы</a>
                        <a href="#" className="links">Контакты</a>
                        <a href="#" className="links" id="studying">Программы Обучения</a>
                    </div>

                    <div className="main-reception">
                        <div className="main-reception-phone">
                            8 (9876) 54 32-10
                        </div>

                        <div className="main-reception-text">
                            Приёмная Начальника Учебного Центра
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}

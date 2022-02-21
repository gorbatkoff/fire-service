import React from 'react'
import Logo from "../images/mchs.png";
import Line from '../images/header-line.svg';
import { PhoneTwoTone } from '@ant-design/icons';

export default function Main() {
    return (
        <div>
            <main className="main-header">
                <div className="header-wrapper">
                    <div className="header-title">
                        <div className="header-logo">
                            <img src={Logo} alt="" className="header-logo-img" />
                        </div>
                        <div className="header-text">
                            <h1>МЧС России</h1>

                            <h3>Сайт Учебной Пожарной Части по Ростовской Области</h3>

                            <img src={Line} alt="" />

                            <h4>Министерство Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и
                                ликвидации последствий стихийных бедствий</h4>
                        </div>
                    </div>

                    <div className="information">
                        <div className="information-contacts">
                            <div className="information-phone">
                                <PhoneTwoTone/> 8 (3952) 453-221
                            </div>
                            <p>Приёмная начальника учебного центра</p>
                        </div>

                        <div className="information-links">
                            <a href="" className="nav-link">Деятельность</a>
                            <a href="" className="nav-link">Документы</a>
                            <a href="" className="nav-link">Контакты</a>
                            <a href="" className="nav-link" id="study-center">Центр Обучения</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

import React from 'react'
import Logo from "../images/mchs.png";
import Line from '../images/header-line.svg';

export default function Main() {
    return (
        <div>
            <main>
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
                        <h5>МЧС Информирует</h5>

                        <div className="ticker">
                            <marquee>
                                <div className="wrapper-marque">
                                    <div>«Телефон доверия»: 8 (3952) 40-99-99</div>
                                    <div> 01 или 101 Единый телефон пожарных и спасателей</div>
                                </div>
                            </marquee>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

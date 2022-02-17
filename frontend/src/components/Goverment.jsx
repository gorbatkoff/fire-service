import React from 'react'
import Logo from'../images/ministery.png';

export default function Goverment() {
    return (
        <div>

            <div className="topbar">
                <div className="topbar-img">
                    <img src={Logo} alt="" />
                </div>

                <div>
                    <a href="http://government.ru/" className="government-link">
                        Правительство Российской Федерации
                    </a>
                </div>
            </div>

        </div>
    )
}

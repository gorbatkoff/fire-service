import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

export default function Contacts() {
    return (
        <section>
            <div className="contacts" id="contacts">
                <div className="communication">
                    <div className="address">
                        <div>
                            <h2>Адрес: </h2>ул. Максима Горького, 206, Ростов-на-Дону, Россия,
                        </div>
                        <div>Индекс: 304824</div>
                    </div>

                    <div className="phone">
                        <h2>Телефон: </h2>
                        +7 (495) 123-45-67
                        <br />
                        +7 (890) 765 43-21
                    </div>

                    <div className="mails">
                        <h2>
                            Электронный Адрес
                        </h2>
                        mail-address@mail.ru
                    </div>
                </div>

                <div className="map">
                    <h2>Карта</h2>

                    <YMaps>
                        <div style={{width: 850}}>
                            <Map defaultState={{ center: [47.230223, 39.732575], zoom: 17 }} 
                            style={{width: 850, height: 400}} />
                        </div>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}

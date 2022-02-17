import React from 'react'

export default function Contacts() {
    return (
        <section>
            <div class="contacts">
                <div class="communication">
                    <div class="address">
                        <div>
                            <h2>Адрес: </h2>ул. Максима Горького, 206, Ростов-на-Дону, Россия,
                        </div>
                        <div>Индекс: 304824</div>
                    </div>

                    <div class="phone">
                        <h2>Телефон: </h2>
                        +7 (495) 123-45-67
                        <br />
                        +7 (890) 765 43-21
                    </div>

                    <div class="mails">
                        <h2>
                            Электронный Адрес
                        </h2>
                        mail-address@mail.ru
                    </div>
                </div>

                <div class="map">
                    <h2>Карта</h2>

                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0054a8da1eecbc8bffb5244db332e1fcbc2ea787fe160a0945f52f532dc6b6b8&amp;width=800&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>
            </div>
        </section>
    )
}

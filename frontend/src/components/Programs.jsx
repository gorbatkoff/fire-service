import React from 'react'
import Card from '../components/Card';

import Photo from '../images/card-photo1.jfif';
import Photo2 from '../images/card-photo2.jpg';

export default function Programs() {
    return (
        <section className="programs">
            <Card
                title="Учебные Материалы"
                imageUrl={Photo}
                body="Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo"
            />

            <Card
                title="Система Тестирования"
                imageUrl={Photo2}
                body="Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo"
            />
        </section>
    )
}















{/* <div>
<section>
<div className="study-main" id="study-main">
    <div className="study">
        <h1>Программы Обучения</h1>
        <div className="programs">

            <div className="testing unit">
                <h4>Тестирования</h4>
                <hr/>
                <div className="unit-info">
                    <ul>
                        <li>Более 30 Тестов</li>
                        <li>Разбор Ошибок</li>
                        <li>Динамика Решений</li>
                    </ul>
                    <hr/>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas tenetur, praesentium fugit
                    ea earum voluptatibus aliquid illum eos officiis, laboriosam vero iure similique sed ullam
                    temporibus eligendi ipsum perferendis!
                </p>
                <hr/>

            </div>

            <div className="education unit">
                <h4>Учебные Материалы</h4>
                <hr/>
                <div className="unit-info">
                    <ul>
                        <li>Более 15 тем для Изучения</li>
                        <li>Все темы в одном файле</li>
                        <li>Ссылки на другие учебные материалы</li>
                    </ul>
                    <hr/>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur distinctio accusamus
                    perferendis temporibus voluptate minus ducimus eligendi sed cupiditate. Porro, itaque
                    maxime. Sequi nemo reiciendis iure deleniti quos quod! Soluta?
                </p>

                <hr/>
            </div>

        </div>

        <a href="">Узнать Больше</a>
    </div>
</div>
</section>
</div> */}
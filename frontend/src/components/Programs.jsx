import React, {useState} from 'react'
import Card from '../components/Card';
import { Divider } from 'antd';

import Photo from '../images/card-photo1.jfif';
import Photo2 from '../images/card-photo2.jpg';

import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function Programs() {

    const [type, setType] = useState("")

    return (
        <section className="programs">

            <Divider plain><h1>Список Реализуемых Программ Обучения</h1></Divider>

            <div className="cascader">
                <button onClick={() => alert("hello")}>Обучения</button>
                <button>Переподготовка</button>
                <button>Повышение</button>
            </div>

        </section>
    )
}




{/* <Card
                title="Учебные Материалы"
                imageUrl={Photo}
                body="Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo"
            />

            <Card
                title="Система Тестирования"
                imageUrl={Photo2}
                body="Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo Lorem ipsum dolor sit amet, consectetur adip lo"
            /> */}

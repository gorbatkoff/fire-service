import React, { useState } from 'react'
import { Divider } from 'antd';
import CardsList from '../components/Cards/CardsList';
export default function Programs() {

    const [type, setType] = useState("Study")

    const changeCard = (type) => {
        setType(type);
    }

    return (
        <section className="programs">

            <div>
                <Divider plain><h1>Список Реализуемых Программ Обучения</h1></Divider>
            </div>

            <div className="cascader">
                <button onClick={() => changeCard("Study")}>Обучения</button>
                <button onClick={() => changeCard("Retraining")}>Переподготовка</button>
                <button onClick={() => changeCard("Improvement")}>Повышение</button>
            </div>

            <div className="programs-cards">
                <CardsList type={type} />
            </div>

        </section>
    );
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
            /> 
*/}

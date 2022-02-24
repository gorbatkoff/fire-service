import React from 'react'
import '../../Cabinet.css'
import { LoginOutlined } from '@ant-design/icons';

import diagram from '../../images/pareto1.png';
import avatar from '../../images/img_avatar.png'

export default function Home() {
    return (
        <section className="home">
            <header className="home-header">
                <a href="">
                    <LoginOutlined style={{ fontSize: '46px' }} />
                </a>
            </header>

            <div className="links">
                <a href="">Тестирование</a>
                <a href="">Расписание</a>
                <a href="">Учебные Материалы</a>
            </div>

            <div className="cabinet">
                <div className="profile">
                    <div className="avatar">
                        <img src={avatar} alt="" width="85%" />
                    </div>

                    <div className="fio">Иванов Иван Иванович</div>

                    <hr />

                    <div className="statistic">
                        <div className="solved">

                            <h3>Решено тестов</h3>

                            <div>
                                <h3>39</h3>
                            </div>
                        </div>

                        <div className="average">
                            <h3>Средняя оценка</h3>

                            <div>
                                <h3>4,5</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="diagram">
                    <img src={diagram} width="80%" alt="" />
                </div>
            </div>
        </section>
    )
}

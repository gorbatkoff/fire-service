import React from 'react'
import { Image, Divider, Carousel } from 'antd';

import Sertificate from '../images/12345.jpg';

import Photo1 from '../images/XXXL.jfif';
import Photo2 from '../images/XXXL (1).jfif';
import Photo3 from '../images/XXXL (2).jfif';
import Photo4 from '../images/XXXL (3).jfif';

export default function Documents() {

    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#023665',
        padding: "1em"
    };


    return (
        <section>
            <div className="documents">

                <div className="documents-header">
                        <h2>Юридическая Основа Ведения Образовательной Деятельности</h2>
                </div>
                <div className="license">

                    <div className="sertificate">
                        <Image
                            width={300}
                            src={Sertificate}
                        />

                        <div className="about-sertificate">
                            Лицензия  на Осуществление Образовательной Деятельности
                        </div>
                    </div>
                </div>

                <div className="photos-of-department">

                </div>

            </div>
        </section>
    )
}


{/* <Carousel autoplay>
    <div className="carousel-line">
        <h3 style={contentStyle} className="carousel">
            <img src={Photo1} alt="" />
        </h3>
    </div>
    <div>
        <h3 style={contentStyle} className="carousel">
            <img src={Photo2} alt="" />
        </h3>
    </div>
    <div>
        <h3 style={contentStyle} className="carousel">
            <img src={Photo3} alt="" />
        </h3>
    </div>
    <div>
        <h3 style={contentStyle} className="carousel">
            <img src={Photo4} alt="" />
        </h3>
    </div>
</Carousel> */}
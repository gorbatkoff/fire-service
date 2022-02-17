import React, { useState, useEffect } from 'react'

import Photo1 from '../images/XXXL.jfif';
import Photo2 from '../images/XXXL (1).jfif';
import Photo3 from '../images/XXXL (2).jfif';
import Photo4 from '../images/XXXL (3).jfif';

export default function Carousel() {

    const [currentPhoto, setCurrentPhoto] = useState(Photo1);
    const [numberOfPhoto, setNumberOfPhoto] = useState(1);

    const arrayOfPhoto = [Photo1, Photo2, Photo3, Photo4];

    const toPrev = () => {
        if (numberOfPhoto - 1 === 0) {
            setCurrentPhoto(Photo4);
            setNumberOfPhoto(4);
        }

        else {
            setCurrentPhoto(arrayOfPhoto[numberOfPhoto - 1]);
            setNumberOfPhoto(numberOfPhoto - 1);
        }
    }

    const toNext = () => {
        if(numberOfPhoto + 1 == 5){
            setCurrentPhoto(Photo1);
            setNumberOfPhoto(1);
        }

        else{
            setCurrentPhoto(arrayOfPhoto[numberOfPhoto]);
            setNumberOfPhoto(numberOfPhoto + 1);
        }
    }

    useEffect(() => console.log("Change photo in slider"), [currentPhoto]);

    return (
        <div className="container">
            <div className="slider" id="slider">
                <h2>Галерея</h2>
                <div className="slider-line">

                    <img src={currentPhoto} width="768" height="576" />

                </div>
            </div>
            <div className="slider-button">
                <button onClick={toPrev}>Назад</button>
                <button onClick={toNext}>Далее</button>
            </div>

        </div>
    )
}

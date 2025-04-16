import React from "react";
import Card from './Card.jsx';
import firstImg from '../../../public/assets/img/landing-pages/landing1.jpg';
import secondImg from '../../../public/assets/img/landing-pages/landing2.jpg';
import thirdImg from '../../../public/assets/img/landing-pages/landing3.jpg';
import fourthImg from '../../../public/assets/img/landing-pages/landing4.jpg';

const CardList = () => {

    return (
        <ul className="landing-page__cards cards-list">
            <li className="landing-page__cards-item card-item">
                <Card img={firstImg} text="Landing 1" id="landing1"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={secondImg} text="Landing 2" id="landing2"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={thirdImg} text="Landing 3" id="landing3"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fourthImg} text="Landing 4" id="landing4"/>
            </li>
        </ul>
    );
};

export default CardList;
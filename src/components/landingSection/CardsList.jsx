import React from "react";
import Card from './Card.jsx';
import firstImg from '../../../public/assets/img/landing-pages/landing1.jpg';
import secondImg from '../../../public/assets/img/landing-pages/landing2.jpg';
import thirdImg from '../../../public/assets/img/landing-pages/landing3.jpg';
import fourthImg from '../../../public/assets/img/landing-pages/landing4.jpg';

const CardList = () => {
    return (
        <ul className="landing-page__cards">
            <li className="landing-page__cards-item">
                <Card img={firstImg} text="Landing 1"/>
            </li>
            <li className="landing-page__cards-item">
                <Card img={secondImg} text="Landing 2"/>
            </li>
            <li className="landing-page__cards-item">
                <Card img={thirdImg} text="Landing 3"/>
            </li>
            <li className="landing-page__cards-item">
                <Card img={fourthImg} text="Landing 4"/>
            </li>
        </ul>
    );
};

export default CardList;
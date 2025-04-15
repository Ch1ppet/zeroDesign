import React from "react";
import Card from './Card.jsx';
import firstImg from '../../../public/assets/img/company-section/company1.jpg';
import secondImg from '../../../public/assets/img/company-section/company2.jpg';
import thirdImg from '../../../public/assets/img/company-section/company3.jpg';
import fourthImg from '../../../public/assets/img/company-section/company4.jpg';
import fifthImg from '../../../public/assets/img/company-section/company5.jpg';
import sixthImg from '../../../public/assets/img/company-section/company6.jpg';
import seventhImg from '../../../public/assets/img/company-section/company7.jpg';

const CardList = () => {
    return (
        <ul className="landing-page__cards cards-list">
            <li className="landing-page__cards-item card-item">
                <Card img={firstImg} text="about 1"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={secondImg} text="about 2"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={thirdImg} text="contact 1"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fourthImg} text="contact 2"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fifthImg} text="contact 3"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={sixthImg} text="team"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={seventhImg} text="faq"/>
            </li>
        </ul>
    );
};

export default CardList;
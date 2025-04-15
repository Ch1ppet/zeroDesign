import React from "react";
import Card from './Card.jsx';
import firstImg from '../../../public/assets/img/utility-section/utility1.jpg';
import secondImg from '../../../public/assets/img/utility-section/utility2.jpg';
import thirdImg from '../../../public/assets/img/utility-section/utility3.jpg';
import fourthImg from '../../../public/assets/img/utility-section/utility4.jpg';
import fifthImg from '../../../public/assets/img/utility-section/utility5.jpg';

const CardList = () => {
    return (
        <ul className="landing-page__cards cards-list">
            <li className="landing-page__cards-item card-item">
                <Card img={firstImg} text="Coming soon" id="comingsoon"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={secondImg} text="404" id="404" />
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={thirdImg} text="password" id="password"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fourthImg} text="privacy policy" id="privacypolicy"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fifthImg} text="terms and condition" id="termsandcondition"/>
            </li>
        </ul>
    );
};

export default CardList;
import React from "react";
import Card from './Card.jsx';
import firstImg from '../../../public/assets/img/cms-pages-section/cmspages1.jpg';
import secondImg from '../../../public/assets/img/cms-pages-section/cmspages2.jpg';
import thirdImg from '../../../public/assets/img/cms-pages-section/cmspages3.jpg';
import fourthImg from '../../../public/assets/img/cms-pages-section/cmspages4.jpg';
import fifthImg from '../../../public/assets/img/cms-pages-section/cmspages5.jpg';
import sixthImg from '../../../public/assets/img/cms-pages-section/cmspages6.jpg';
import seventhImg from '../../../public/assets/img/cms-pages-section/cmspages7.jpg';
import eigthImg from '../../../public/assets/img/cms-pages-section/cmspages8.jpg';
import ninethImg from '../../../public/assets/img/cms-pages-section/cmspages9.jpg';
import tenthImg from '../../../public/assets/img/cms-pages-section/cmspages10.jpg';
import eleventhImg from '../../../public/assets/img/cms-pages-section/cmspages11.jpg';

const CardList = () => {
    return (
        <ul className="landing-page__cards cards-list">
            <li className="landing-page__cards-item card-item">
                <Card img={firstImg} text="Works"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={secondImg} text="blog 1"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={thirdImg} text="blog 2"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fourthImg} text="blog 3"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={fifthImg} text="shop 1"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={sixthImg} text="shop 2"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={seventhImg} text="careers"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={eigthImg} text="single product page"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={ninethImg} text="Single post page"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={tenthImg} text="single careers page"/>
            </li>
            <li className="landing-page__cards-item card-item">
                <Card img={eleventhImg} text="Single work page"/>
            </li>
        </ul>
    );
};

export default CardList;
import React from "react";
import HeroMiniCard from './HeroMiniCard.jsx';
import crownImg from '../../../public/assets/img/hero-section/crown.svg';
import infinityImg from '../../../public/assets/img/hero-section/infinity.svg';
import squareImg from '../../../public/assets/img/hero-section/square.svg';
import clockImg from '../../../public/assets/img/hero-section/clock.svg';

const HeroLeft = () => {
    return (
        <div className="hero__left">
            <span className="hero__subtitle">
                Design addicted
            </span>
            <h1 className="hero__title">
                A stylish UI Kit <span className="hero__title--lower">for all web creatives</span>
            </h1>
            <p className="hero__undertitle-text">
                Zero is a Webflow Ecommerce and CMS UI kit including several carefully designed page layouts.
            </p>
            <div className="hero__cards">
                <HeroMiniCard imgSrc={crownImg} firstWord='smooth' secondWord='interactions'/>
                <HeroMiniCard imgSrc={infinityImg} firstWord='many' secondWord='page layouts'/>
                <HeroMiniCard imgSrc={squareImg} firstWord='fully' secondWord='responsive'/>
                <HeroMiniCard imgSrc={clockImg} firstWord='fast' secondWord='customization'/>
            </div>
        </div>
    );
};

export default HeroLeft;
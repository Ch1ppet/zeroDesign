import React, { useRef } from "react";
import './heroStyles/hero.scss';
import HeroMiniCard from './HeroMiniCard.jsx';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import heroRightImg from '../../../public/assets/img/hero-section/hero-big-image.jpg';
import crownImg from '../../../public/assets/img/hero-section/crown.svg';
import infinityImg from '../../../public/assets/img/hero-section/infinity.svg';
import squareImg from '../../../public/assets/img/hero-section/square.svg';
import clockImg from '../../../public/assets/img/hero-section/clock.svg';

const Hero = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.fromTo('.hero__title', {
            x: -100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
        })
    });

    return (
        <section className="hero">
            <div className="container hero__container">
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
                <div className="hero__right">
                    <img src={heroRightImg} className="hero__img" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
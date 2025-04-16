import React from "react";
import './heroStyles/hero.scss';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import HeroLeft from "./HeroLeft.jsx";
import heroRightImg from '../../../public/assets/img/hero-section/hero-big-image.jpg';

const Hero = () => {
    gsap.registerPlugin(useGSAP);
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
        tl.fromTo('.hero__img', {
            x: 100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
        })
        tl.fromTo('.hero__subtitle', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
        })
    });

    return (
        <section className="hero">
            <div className="container hero__container">
                <HeroLeft />
                <div className="hero__right">
                    <img src={heroRightImg} className="hero__img" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
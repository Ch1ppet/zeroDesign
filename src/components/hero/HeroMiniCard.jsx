import React from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const HeroMiniCard = ({ imgSrc, firstWord, secondWord }) => {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();
    
    useGSAP(() => {
        tl.fromTo('.hero__cards-item', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
        });
    });

    return (
        <div className="hero__cards-item">
            <img src={imgSrc} alt="" className="hero__cards-item-img" />
            <div className="hero__cards-item-first-word hero__cards-item-words">{firstWord}</div>
            <div className="hero__cards-item-second-word hero__cards-item-words">{secondWord}</div>
        </div>
    );
};

export default HeroMiniCard;
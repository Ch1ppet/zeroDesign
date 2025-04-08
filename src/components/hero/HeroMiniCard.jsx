import React from "react";

const HeroMiniCard = ({ imgSrc, firstWord, secondWord }) => {
    return (
        <div className="hero__cards-item">
            <img src={imgSrc} alt="" className="hero__cards-item-img" />
            <div className="hero__cards-item-first-word hero__cards-item-words">{firstWord}</div>
            <div className="hero__cards-item-second-word hero__cards-item-words">{secondWord}</div>
        </div>
    );
};

export default HeroMiniCard;
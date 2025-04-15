import React from "react";
import CardList from "./CardsList.jsx";
import './landingSectionStyles/card.scss';
import './landingSectionStyles/cardList.scss';
import './landingSectionStyles/landingSectionStyle.scss';


const LandingSection = () => {
    return (
        <section className="landing-page">
            <div className="container landing-page__container">
                <h2 className="landing-page__title section-title">
                    LANDING PAGES
                </h2>
                <CardList />
            </div>
        </section>
    );
};

export default LandingSection;
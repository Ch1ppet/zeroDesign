import React from "react";
import CardList from "./CardsList.jsx";
import './landingSectionStyles/landingSectionStyle.scss';

const LandingSection = () => {
    return (
        <section className="landing-page" id="Landing">
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
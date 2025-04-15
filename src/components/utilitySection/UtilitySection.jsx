import React from "react";
import CardList from "./CardsList.jsx";
import './utilityStyles/utility.scss';

const Utility = () => {
    return (
        <section className="utility" id="Utility">
            <div className="container">
                <h2 className="section-title">
                    Utility
                </h2>
                <CardList />
            </div>
        </section>
    );
};

export default Utility;
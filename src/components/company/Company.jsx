import React from "react";
import CardList from "./CardsList.jsx";
import './companyStyles/company.scss';

const Company = () => {
    return (
        <section className="company" id="Company">
            <div className="container company__container">
                <h2 className="section-title">
                    Company
                </h2>
                <CardList />
            </div>
        </section>
    );
};

export default Company;
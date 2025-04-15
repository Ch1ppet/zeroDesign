import React from "react";
import CardList from "./CardsList.jsx";
import './cmsPagesStyles/cmsPages.scss';

const CMSPages = () => {
    return (
        <section className="cmspages" id="CMSPages">
            <div className="container">
                <h2 className="section-title">
                    CMS Pages
                </h2>
                <CardList />
            </div>
        </section>
    );
};

export default CMSPages;
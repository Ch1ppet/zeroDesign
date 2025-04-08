import React from "react";
import ZeroDesignInfo from "./ZeroDesignInfo.jsx";
import './zerodesignStyles/zeroDesign.scss';
import './zerodesignStyles/zeroDesignInfo.scss';
import img from '../../../public/assets/img/zero-design-section/zeroDesignImg.jpg';

const ZeroDesign = () => {
    return (
        <section className="zero-design">
            <div className="container zero-design__container">
                <div className="zero-design__left">
                    <img src={img} alt="" />
                </div>
                <div className="zero-design__right">
                    <h2 className="zero-design__title">
                        Zero Design
                    </h2>
                    <p className="zero-design__text">
                        Includes a total of 10 static pages, divided like this: 4 Landing pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In addition to these, there are Webflow CMS driven pages: Blog (in 2 variations), Shop (in 2 variations), Works and Careers. All with their respective single pages!
                    </p>
                    <ZeroDesignInfo />
                </div>
            </div>
        </section>
    );
};

export default ZeroDesign;
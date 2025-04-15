import React from "react";
import { Link } from 'react-router-dom';
import FooterIconList from "./FooterIconList.jsx";
import FooterForm from "./FooterForm.jsx";
import LandingPagesFooterList from "./LandingPagesFooterList.jsx";
import CompanyFooterList from "./CompanyFooterList.jsx";
import CMSPagesFooterList from "./CMSPagesFooterList.jsx";
import UtilityFooterList from "./UtilityFooterList.jsx";
import FooterBottom from "./FooterBottom.jsx";
import './footerStyles/footer.scss';
import './footerStyles/footerForm.scss';
import './footerStyles/footerIcon.scss';
import './footerStyles/footerLists.scss';
import './footerStyles/footerBottom.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <div className="footer__left">
                        <FooterForm />
                        <FooterIconList />
                    </div>  
                    <div className="footer__rigth">
                        <div className="footer__right-two-block">
                            <LandingPagesFooterList />
                            <CompanyFooterList />
                        </div>
                        <CMSPagesFooterList />
                        <UtilityFooterList />
                    </div>
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
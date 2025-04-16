import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/img/header/logo.svg';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const HeaderLogo = () => {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();
    
    useGSAP(() => {
        tl.fromTo('.header__logo-img', {
            y: -100, 
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
        })
    });

    return (
        <div className="header__logo">
            <Link to="/"><img src={logo} alt="logo" className="header__logo-img" /></Link>
        </div>
    );
};

export default HeaderLogo;
import React from "react";
import { HashLink } from 'react-router-hash-link';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


const HeaderNav = () => {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();
    
    useGSAP(() => {
        tl.fromTo('.nav__list-item1', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
        })
        tl.fromTo('.nav__list-item2', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
        })
        tl.fromTo('.nav__list-item3', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
        })
        tl.fromTo('.nav__list-item4', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
        })
    });

    return (
        <div className="header__nav">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item nav__list-item1">
                        <HashLink smooth to="/#Landing">Landing</HashLink>
                    </li>
                    <li className="nav__list-item nav__list-item2">
                        <HashLink smooth to="/#Company">Company</HashLink>
                    </li>
                    <li className="nav__list-item nav__list-item3">
                        <HashLink smooth to="/#CMSPages">CMS Pages</HashLink>
                    </li>
                    <li className="nav__list-item nav__list-item4">
                        <HashLink smooth to="/#Utility">Utility</HashLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderNav;
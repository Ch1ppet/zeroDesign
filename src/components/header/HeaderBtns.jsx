import React, { useState } from "react";
import { Link } from 'react-router-dom';
import searchLogo from '../../../public/assets/img/header/search.svg';
import cartLogo from '../../../public/assets/img/header/cart.svg';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const HeaderBtns = () => {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();
        
    useGSAP(() => {
        tl.fromTo('.header__btns-buy', {
            y: -100, 
        }, {
            y: 0,
            duration: 1,
        })
        tl.fromTo('.img-btn', {
            y: -150, 
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
        })
    });

    return (
        <div className="header__btns">
            <ul className="header__btns-list">
                <li className="header__btns-list-item header__btns-buy">
                    <Link>$129 Buy Now</Link>
                </li>
                <li className="header__btns-list-item">
                    <search className="search">
                        <button>
                            <img src={searchLogo} alt="" className="search__img img-btn"/>
                        </button>
                    </search>
                </li>
                <li className="header__btns-list-item">
                    <Link to="/cart"><img src={cartLogo} alt="" className="cart__img img-btn" /></Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderBtns;

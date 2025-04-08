import React from "react";
import { Link } from 'react-router-dom';
import searchLogo from '../../../public/assets/img/header/search.svg';
import cartLogo from '../../../public/assets/img/header/cart.svg';

const HeaderBtns = () => {
    return (
        <div className="header__btns">
            <ul className="header__btns-list">
                <li className="header__btns-list-item">
                    <Link className="header__btns-buy">$129 Buy Now</Link>
                </li>
                <li className="header__btns-list-item">
                    <search className="search">
                        <img src={searchLogo} alt="" className="search__img img-btn" />
                    </search>
                </li>
                <li className="header__btns-list-item">
                    <Link><img src={cartLogo} alt="" className="cart__img img-btn" /></Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderBtns;

import React from "react";
import { Link } from 'react-router-dom';
import HeaderNav from "./HeaderNav.jsx";
import HeaderBtns from "./HeaderBtns.jsx";
import HeaderLogo from "./HeaderLogo.jsx";
import './headerStyles/header.scss';
import './headerStyles/headerBtns.scss';
import './headerStyles/headerNav.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                    <div className="header__left">
                        <HeaderLogo />
                        <HeaderNav />
                    </div>
                    <HeaderBtns />
            </div>
        </header>
    );
};

export default Header;
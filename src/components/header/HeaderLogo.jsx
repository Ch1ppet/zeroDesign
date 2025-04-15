import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/img/header/logo.svg';

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <Link to="/"><img src={logo} alt="logo" className="header__logo-img" /></Link>
        </div>
    );
};

export default HeaderLogo;
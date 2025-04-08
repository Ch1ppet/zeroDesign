import React from "react";
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className="header__nav">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link className="nav__list-item-link">Landing</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link className="nav__list-item-link">Company</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link className="nav__list-item-link">CMS Pages</Link>
                    </li>
                    <li className="nav__list-item">
                        <Link className="nav__list-item-link">Utility</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderNav;
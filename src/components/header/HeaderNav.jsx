import React from "react";
import { HashLink } from 'react-router-hash-link';

const HeaderNav = () => {
    return (
        <div className="header__nav">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <HashLink smooth to="/#Landing">Landing</HashLink>
                    </li>
                    <li className="nav__list-item">
                        <HashLink smooth to="/#Company">Company</HashLink>
                    </li>
                    <li className="nav__list-item">
                        <HashLink smooth to="/#CMSPages">CMS Pages</HashLink>
                    </li>
                    <li className="nav__list-item">
                        <HashLink smooth to="/#Utility">Utility</HashLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderNav;
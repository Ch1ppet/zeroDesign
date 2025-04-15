import React from "react";
import { Link } from 'react-router-dom';

const LandingPagesFooterList = () => {
    return (
        <div className="footer__right-list-wrapper footer__landing-pages-mb">
            <h3 className="footer__right-list-title">
                Landing Pages
            </h3>
            <ul className="footer__right-list">
                <li className="footer__right-list-item">
                    <Link to="/landing1">
                        Landing 1
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link to="/landing2">
                        Landing 2
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link to="/landing3">
                        Landing 3
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link to="/landing4">
                        Landing 4
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LandingPagesFooterList;
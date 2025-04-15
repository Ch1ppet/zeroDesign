import React from "react";
import { Link } from 'react-router-dom';

const UtilityFooterList = () => {
    return (
        <div className="footer__right-list-wrapper">
            <h3 className="footer__right-list-title">
                Utility
            </h3>
            <ul className="footer__right-list">
                <li className="footer__right-list-item">
                    <Link>
                        Coming Soon
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Password
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Privacy Policy
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Terms And Conditions
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        404
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Licensing
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Style Guide
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default UtilityFooterList;
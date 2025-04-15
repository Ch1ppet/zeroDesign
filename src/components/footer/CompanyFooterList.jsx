import React from "react";
import { Link } from 'react-router-dom';

const CompanyFooterList = () => {
    return (
        <div className="footer__right-list-wrapper">
            <h3 className="footer__right-list-title">
                Company
            </h3>
            <ul className="footer__right-list">
                <li className="footer__right-list-item">
                    <Link>
                        About 1
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        About 2
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Contact 1
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Contact 2
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Contact 3
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Team
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        FAQ
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CompanyFooterList;
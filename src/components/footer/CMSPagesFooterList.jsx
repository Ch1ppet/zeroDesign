import React from "react";
import { Link } from 'react-router-dom';

const CMSPagesFooterList = () => {
    return (
        <div className="footer__right-list-wrapper">
            <h3 className="footer__right-list-title">
                CMS Pages
            </h3>
            <ul className="footer__right-list">
                <li className="footer__right-list-item">
                    <Link>
                        Blog 1
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Blog 2
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Blog 3
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Single Post Page
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Shop 1
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Shop 2
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Single Product Page
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Careers
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Single Careers Page
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Works
                    </Link>
                </li>
                <li className="footer__right-list-item">
                    <Link>
                        Single Work Page
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CMSPagesFooterList;
import React from "react";
import { Link } from 'react-router-dom';
import firstImg from '../../../public/assets/img/footer/footer-icon1.svg';
import secondImg from '../../../public/assets/img/footer/footer-icon2.svg';
import thirdImg from '../../../public/assets/img/footer/footer-icon3.svg';

const FooterIconList = () => {
    return (
        <ul className="footer__icon-list">
            <li className="footer__icon-list-item">
                <Link>
                    <img src={firstImg} alt="" />
                </Link>
            </li>
            <li className="footer__icon-list-item">
                <Link>
                    <img src={secondImg} alt="" />
                </Link>
            </li>
            <li className="footer__icon-list-item">
                <Link>
                    <img src={thirdImg} alt="" />
                </Link>
            </li>
        </ul>
    );
};

export default FooterIconList;
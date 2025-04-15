import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, text }) => {
    return (
        <Link to={`/${text}`}>
            <div className="card">
                <div className="card__wrappper">
                    <img src={img} alt="" className="card__img" />
                </div>
                <div className="card__text">
                    {text}
                </div>
            </div>
        </Link>
    );
};

export default Card;
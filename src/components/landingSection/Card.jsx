import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, text, id }) => {

    return (
        <Link to={`/${id}`}>
            <div className="card landing-page__card">
                <div className="card__wrappper">
                    <img src={img} alt="" className="landing-page__card-img card__img" />
                </div>
                <div className="card__text">
                    {text}
                </div>
            </div>
        </Link>
    );
};

export default Card;
import React from 'react';

const Card = ({ img, text }) => {
    return (
        <div className="card">
            <div className="card__wrappper">
                <img src={img} alt="" className="card__img" />
            </div>
            <div className="card__text">
                {text}
            </div>
        </div>
    );
};

export default Card;
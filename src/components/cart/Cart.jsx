import React from "react";
import './cart.scss';
import Header from "../header/Header.jsx";

const Cart = () => {
    return (
        <div>
            <Header />
            <section className="cart">
            <div className="container cart__container">
                <ul className="cart__list">
                    <li className="cart__list-item">
                        Some Item
                    </li>
                    <li className="cart__list-item">
                        Some Item
                    </li>
                    <li className="cart__list-item">
                        Some Item
                    </li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default Cart;
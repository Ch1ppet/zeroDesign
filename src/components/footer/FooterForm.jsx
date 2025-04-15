import React, { useState } from "react";

const FooterForm = () => {
    const [value, setValue] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();

        setTimeout(() => {
            Promise.resolve(console.log(`Email address is "${value}"`));
        }, 2000);
        setValue("");
    }

    const onInputChange = (e) => {
        setValue(e.target.value);
    };
 
    return (
        <form action="#" className="footer__form" id='footer__form' onSubmit={onSubmitForm}>
            <label htmlFor="footer__form-input" className="footer__form-label">Subscribe our newsletter</label>
            <input type="email" className="footer__form-input" id="footer__form-input" value={value} onChange={onInputChange}/>
            <button className="footer__form-btn" type='submit'>
                SUBMIT
            </button>
        </form>
    );
};

export default FooterForm;
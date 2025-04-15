import React from "react";
import './pageNotFoundStyles/pageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="page-not-found__error">
                404 Page Not Found
            </div>
        </div>
    );
}

export default PageNotFound;
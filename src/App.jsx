import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './components/home/Home.jsx'
import PageNotFound from './components/pageNotFound/PageNotFound.jsx'
import Cart from "./components/cart/Cart.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="cart" element={<Cart />}/>
                <Route path="/:productId" element={``}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
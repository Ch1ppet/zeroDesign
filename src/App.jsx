import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/header/Header.jsx';
import Landing from './components/landingSection/LandingSection.jsx';
import Company from './components/company/Company.jsx';
import CMSPages from './components/cmspages/CMSPages.jsx';
import Utility from './components/utilitySection/UtilitySection.jsx';
import Footer from './components/footer/Footer.jsx';
import Hero from './components/hero/Hero.jsx';
import ZeroDesign from './components/zerodesign/ZeroDesign.jsx';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Hero />
                <ZeroDesign />
                <Landing />
                <Company />
                <CMSPages />
                <Utility />
                <Footer />
            </Router>
        </div>
    );
};

export default App;
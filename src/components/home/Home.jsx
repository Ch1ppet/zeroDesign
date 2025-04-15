import React from 'react';

import Header from '.././header/Header.jsx';
import Landing from '../landingSection/LandingSection.jsx';
import Company from '.././company/Company.jsx';
import CMSPages from '.././cmspages/CMSPages.jsx';
import Utility from '.././utilitySection/UtilitySection.jsx';
import Footer from '.././footer/Footer.jsx';
import Hero from '.././hero/Hero.jsx';
import ZeroDesign from '.././zerodesign/ZeroDesign.jsx';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ZeroDesign />
            <Landing />
            <Company />
            <CMSPages />
            <Utility />
            <Footer />
        </div>
    );
};

export default Home;
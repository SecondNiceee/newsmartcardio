'use client'
import React from 'react';
import "./styles/_index.scss";
import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import InteractiveSection from './sections/InteractiveSection';
import Indicators from './sections/Indicators';
import Technologys from './sections/Technologys';
import HowItWorks from './sections/HowItWorks';
import Steps from './sections/Steps';
import HowOrder from './sections/HowOrder';
import SmartcardioSlider from './sections/SmartcardioSlider';

export const Home = () => {
    return (

        <>
        
            <Smartcardio />
            <Downloads />
            <InteractiveSection />
            <Indicators />
            <Technologys />
            <HowItWorks />
            <Steps />
            <HowOrder />
            <SmartcardioSlider />
        
        </>
        
    );
};


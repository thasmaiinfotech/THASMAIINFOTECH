import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import Process from './Process';
import Solutions from './Solutions';
import AIExplainer from './AIExplainer';
import WhyUs from './WhyUs';
import Insights from './Insights';
import TeamSection from './TeamSection';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Industries />
            <Process />
            <Solutions />
            <AIExplainer />
            <WhyUs />
            <Insights />
            <TeamSection />
            <Contact />
        </>
    );
};

export default Home;

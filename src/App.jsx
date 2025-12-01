import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Solutions from './components/Solutions';
import AIExplainer from './components/AIExplainer';
import WhyUs from './components/WhyUs';
import Insights from './components/Insights';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;

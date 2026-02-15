import React, { useState } from 'react';
import Navbar from './components/Navbar1';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StrategyConsultant from './components/StrategyConsultant';
import Dashboard from './components/Dashboard';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar onNavigate={scrollToSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero onGetStarted={() => scrollToSection('services')} />
        </section>

        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <Services />
        </section>

        <section id="dashboard" className="py-20 bg-gray-50">
          <Dashboard />
        </section>

        <section id="strategy-consultant" className="py-20 bg-blue-900 text-white overflow-hidden">
          <StrategyConsultant />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

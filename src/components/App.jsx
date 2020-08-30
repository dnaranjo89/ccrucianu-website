import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Timeline from './Timeline/Timeline';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  return (
    <PortfolioProvider
      value={{
        hero: heroData,
        about: aboutData,
        projects: projectsData,
        contact: contactData,
        footer: footerData,
      }}
    >
      <Hero />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importálás a Routerhez
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAnimation from './components/IntroAnimation';
import Prices from './components/Prices';
import Services from './components/Services';
import Offer from './components/Offer';
import UsSection from './components/UsSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

// pages
import Contact from './Pages/Contact/Contact';
import Website from './Pages/Website/Website';
import Portfolio from './Pages/Portfolio/Portfolio';
import SEO from './Pages/SEO/SEO';
import './i18n';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='wrapper'>
        <Helmet>
          <title>GRLab | Egyedi digitális megoldások</title>
          <meta
            name="description"
            content="Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://grlab.vercel.app" />
        </Helmet>
        <Navbar />
        <Routes>
          {/* Főoldal */}
          <Route
            path="/"
            element={
              <>
                <ScrollAnimation />
                <IntroAnimation />
                <Hero />
                <Services />
                <UsSection />
                <Prices />
                <Offer />
                <CTA />
              </>
            }
          />
          {/* Contact page */}
          <Route path="/website" element={<Website />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/seo" element={<SEO />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

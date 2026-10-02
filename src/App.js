import './App.css';
// import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importálás a Routerhez
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAnimation from './components/IntroAnimation';
import Prices from './components/Prices';
import Services from './components/Services';
import Offer from './components/Offer';
// import UsSection from './components/UsSection';
// import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

// pages
import Contact from './Pages/Contact/Contact';
import Website from './Pages/Website/Website';
import Portfolio from './Pages/Portfolio/Portfolio';
import SEO from './Pages/SEO/SEO';
import './i18n';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Helmet>
          <title>GM Website Design</title>
          <meta
            name="description"
            content="GM Design is a web development agency that specializes in creating modern, responsive websites and SEO optimization."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://gmdesign.vercel.app" />
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
                <Prices />
                <Offer />
                { /* <UsSection /> */ }
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
      <Analytics/>
      <SpeedInsights/>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlackMagicHighlight from './components/BlackMagicHighlight';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-cosmic-deep min-h-screen text-gray-100 antialiased selection:bg-mystic-red/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* High-Priority Black Magic Highlight Section */}
      <BlackMagicHighlight />

      {/* Standard Astrology Services Grid */}
      <Services />

      {/* Client Testimonials */}
      <Testimonials />

      {/* About Section */}
      <About />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer & Contact */}
      <Footer />

      {/* Sticky Mobile/Desktop Interaction Badges */}
      <FloatingButtons />
    </div>
  );
}

export default App;

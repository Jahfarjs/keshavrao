import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlackMagicHighlight from './components/BlackMagicHighlight';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Blog from './components/Blog';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentPath(hash);

      if (hash.startsWith('#/blog')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial check for hash scrolling on load
    if (window.location.hash && !window.location.hash.startsWith('#/blog')) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isBlog = currentPath.startsWith('#/blog');

  return (
    <div className="bg-cosmic-deep min-h-screen text-gray-100 antialiased selection:bg-mystic-red/30 selection:text-white">
      {/* Navigation */}
      <Navbar currentPath={currentPath} />

      {isBlog ? (
        <Blog currentPath={currentPath} />
      ) : (
        <>
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
        </>
      )}

      {/* Footer & Contact */}
      <Footer />

      {/* Sticky Mobile/Desktop Interaction Badges */}
      <FloatingButtons />
    </div>
  );
}

export default App;


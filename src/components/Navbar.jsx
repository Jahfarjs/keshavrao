import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Black Magic Remedy', href: '#black-magic' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cosmic-deep/80 backdrop-blur-md border-b border-mystic-red/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
              <a href="#home" className="flex items-center group">
                <div className="h-10 md:h-12 flex items-center">
                  <img
                    src="/Keshavrao Astrocentre logo.png"
                    alt="Keshavrao Astro Centre Logo"
                    className="h-full w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center gap-2 text-mystic-red">
                    <Compass className="w-8 h-8 animate-spin-slow" />
                    <span className="font-serif text-lg font-bold">KESHAVRAO</span>
                  </div>
                </div>
              </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-gray-300 hover:text-mystic-red hover:translate-y-[-1px] transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-mystic-red bg-mystic-red/10 text-mystic-red font-semibold text-sm hover:bg-mystic-red hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.15)] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                <Phone className="w-4 h-4" />
                Book Consult
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-mystic-red focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[70px] bg-cosmic-dark z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-6 pb-8 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-mystic-red py-2 block w-full text-center transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-[280px] mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-mystic-red text-white font-bold hover:bg-mystic-red-light transition-all duration-300 text-center shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Phone, MapPin, Mail, Clock, MessageSquare, Compass } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-cosmic-deep border-t border-mystic-red/10 pt-20 pb-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="h-10 flex items-center">
              <img
                src="/Keshavrao Astrocentre logo.png"
                alt="Keshavrao Astro Centre Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Empowering individuals through authentic Vedic principles and precise astrological computations. Reclaiming your mental peace, career success, and family harmony since 2000.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-mystic-red/20 flex items-center justify-center bg-cosmic-accent hover:bg-mystic-red hover:text-white text-mystic-red transition-colors shadow-sm"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
              <a
                href="tel:+919740693845"
                className="w-10 h-10 rounded-full border border-mystic-red/20 flex items-center justify-center bg-cosmic-accent hover:bg-mystic-red hover:text-white text-mystic-red transition-colors shadow-sm"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/18KSRFMcSC/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-mystic-red/20 flex items-center justify-center bg-cosmic-accent hover:bg-mystic-red hover:text-white text-mystic-red transition-colors shadow-sm"
                aria-label="Facebook Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/keshavrao_astro_centre?igsh=MWpjNHQ0Z3BkdXdwag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-mystic-red/20 flex items-center justify-center bg-cosmic-accent hover:bg-mystic-red hover:text-white text-mystic-red transition-colors shadow-sm"
                aria-label="Instagram Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Blog', 'Black Magic Remedy', 'About'].map((item, idx) => {
                const target = item === 'Blog' ? '#/blog' : '#' + item.toLowerCase().replace(/ /g, '-');
                return (
                  <li key={idx}>
                    <a
                      href={target}
                      className="text-gray-400 hover:text-mystic-red text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-mystic-red mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call / WhatsApp</span>
                  <a href="tel:+919740693845" className="text-gray-300 hover:text-mystic-red text-sm sm:text-base font-medium">
                    9740693845
                  </a>
                </div>
              </li>
              
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-mystic-red mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Our Address</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    2nd Main Rd, West Of Chord Road,<br />
                    Rajaji Nagar Industrial Town, Rajajinagar,<br />
                    Bengaluru, Karnataka 560079
                  </p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-mystic-red mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Timing</span>
                  <span className="text-gray-300 text-sm">
                    9:00 AM – 8:00 PM (Everyday)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Integrated Mini Map Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Our Location
            </h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-mystic-red/15 bg-cosmic-accent/40 relative shadow-inner">
              <iframe
                title="Keshavrao Astro Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6836173003055!2d77.5451996!3d12.9920803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8db4ff8f39%3A0xc3be17b2b73796cb!2s2nd%20Main%20Rd%2C%20West%20Of%20Chord%20Road%2C%20Rajajinagar%20Industrial%20Town%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560079!5e0!3m2!1sen!2sin!4v1717769938450!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=2nd+Main+Rd,+West+Of+Chord+Road,+Rajaji+Nagar+Industrial+Town,+Rajajinagar,+Bengaluru,+Karnataka+560079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-mystic-red hover:text-white uppercase tracking-wider flex items-center gap-1 group/map"
            >
              Open in Google Maps
              <span className="group-hover/map:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
        </div>

        {/* Legal bar */}
        <div className="mt-16 pt-8 border-t border-mystic-red/10 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© {currentYear} Keshavrao Astro Centre. All rights reserved.</p>
          <p>
            Vedic Astrology is an ancient interpretive guidance science. All client consults are held in absolute 100% confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}

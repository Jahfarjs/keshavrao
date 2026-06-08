import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href="tel:+919740693845"
        className="w-14 h-14 rounded-full bg-mystic-red hover:bg-mystic-red-light text-white flex items-center justify-center shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Call Astrologer"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all origin-right bg-cosmic-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-mystic-red/20 whitespace-nowrap pointer-events-none">
          Call: 9740693845
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="WhatsApp Astrologer"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all origin-right bg-cosmic-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-mystic-red/20 whitespace-nowrap pointer-events-none">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}

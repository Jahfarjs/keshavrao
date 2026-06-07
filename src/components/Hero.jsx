import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-cosmic-accent/30 via-cosmic-deep to-cosmic-deep"
    >
      {/* Mystical Floating Celestial Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glowing nebulas */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-mystic-gold/5 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[120px] animate-pulse-slow" />
        
        {/* Floating Constellation Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * -30 - 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle trust tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mystic-gold/10 border border-mystic-gold/20 text-mystic-gold text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(255,184,80,0.05)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Bengaluru's Premier Vedic Astrology Centre
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight max-w-5xl mx-auto leading-tight"
        >
          Align Your Life with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold via-mystic-gold-light to-white">
            Vedic Wisdom
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed font-light"
        >
          Over 25 years of divine guidance. Get accurate predictions & powerful ancient remedies for your love marriage, career obstacles, family disputes, and complete protection from negative energies.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astrocentre%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-mystic-gold text-cosmic-dark font-bold text-base hover:bg-mystic-gold-light transition-all duration-300 shadow-[0_0_30px_rgba(255,184,80,0.2)] hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            WhatsApp Consultation
          </a>
          
          <a
            href="tel:+919740693845"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-mystic-gold bg-transparent text-mystic-gold font-bold text-base hover:bg-mystic-gold/10 transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now: 9740693845
          </a>
        </motion.div>

        {/* Central emblem / logo frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative w-64 h-36 sm:w-80 sm:h-44 mx-auto animate-float"
        >
          {/* Pulsing card border glow */}
          <div className="absolute inset-0 rounded-2xl border border-mystic-gold/20 animate-pulse-slow" />
          
          {/* Glass background container */}
          <div className="absolute inset-0 rounded-2xl border-2 border-mystic-gold/40 p-3 bg-gradient-to-b from-cosmic-accent/80 to-cosmic-deep/90 shadow-[0_0_40px_rgba(255,184,80,0.15)] flex items-center justify-center overflow-hidden">
            <img
              src="/Keshavrao Astrocentre logo.jpg"
              alt="Keshavrao Astrocentre Logo"
              className="w-full h-full object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-mystic-gold/10 max-w-5xl mx-auto text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-mystic-gold font-serif">25+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Years of Vedic Mastery</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-mystic-gold font-serif">100%</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Confidential & Safe</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-mystic-gold font-serif">12,000+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-mystic-gold font-serif">Bengaluru</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Top-Rated Centre</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

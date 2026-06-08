import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-mystic-red" />,
      text: '100% Strict Confidentiality of client issues.',
    },
    {
      icon: <Award className="w-5 h-5 text-mystic-red" />,
      text: 'Solutions backed by ancient Vedic scriptures.',
    },
    {
      icon: <Compass className="w-5 h-5 text-mystic-red" />,
      text: 'Clear, practical, and easy-to-perform remedies.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-cosmic-deep via-cosmic-dark to-cosmic-deep relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual card representing heritage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-mystic-red/10 to-transparent blur-2xl rounded-3xl" />
            
            {/* The Badge Panel */}
            <div className="relative glass-panel rounded-3xl p-8 sm:p-10 border border-mystic-red/25 text-center overflow-hidden">
              <div className="h-16 w-full max-w-[240px] mx-auto bg-cosmic-deep/50 rounded-xl border-2 border-mystic-red/30 p-2 flex items-center justify-center mb-6">
                <img
                  src="/Keshavrao Astrocentre logo.png"
                  alt="Keshavrao Astro Centre Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Keshavrao Astro Centre
              </h3>
              <p className="text-mystic-red font-serif text-sm tracking-wider uppercase mt-1">
                Established Vedic Legacy
              </p>
              
              <div className="mt-8 border-t border-mystic-red/10 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Z News Award Nominated Vedic Centre</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">4.9/5 Average Client Rating</span>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Bengaluru’s Most Trusted Advisors</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-mystic-red uppercase text-xs font-bold tracking-[0.2em] block">
              Our Legacy & Path
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Bengaluru’s Respected Gateway to Celestial Guidance
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              At <strong>Keshavrao Astro Centre</strong>, we bridge the gap between ancient astronomical physics and modern lifestyle hurdles. Led by renowned Vedic astrologers with more than <strong>25 years of ancestral experience</strong>, our consultations draw from genuine scriptures like Bhrigu Samhita, Lal Kitab, and Vastu Shastra texts.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              We understand that life’s obstacles can be heavy. Whether you are seeking solutions for late marriage, suffering from continuous losses in business, facing relationship splits, or struggling with negative energy symptoms (Black Magic), our remedies are personalized to align with your specific birth-chart dynamics (Jataka).
            </p>

            {/* Core commitments list */}
            <div className="pt-4 space-y-4">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-mystic-red/10 border border-mystic-red/20 flex-shrink-0">
                    {val.icon}
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base font-medium">
                    {val.text}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a
                href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20know%20more%20about%20your%20background%20and%20remedies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-mystic-red to-mystic-red-dark text-white font-bold hover:from-mystic-red-light hover:to-mystic-red transition-all duration-300 text-sm shadow-md"
              >
                Learn More About Remedies
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

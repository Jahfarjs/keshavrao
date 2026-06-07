import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Sparkles, Briefcase, DollarSign, Users, Flame, Home, Gem, ArrowRight, MessageSquare 
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: 'Love Marriage & Relationships',
      desc: 'Expert guidance to solve love objections, relationship distance, and secure parent approvals for marriages.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: 'Kundli & Jataka Matching',
      desc: 'Accurate horoscope compatibility checks. Detailed analysis of Ashtakoota Gunas and planetary balances.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      title: 'Career & Business Problems',
      desc: 'Remedies for career blockages, job insecurity, business losses, and decisions on the right career transition.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      title: 'Finance & Debt Solutions',
      desc: 'Identify planetary blockages responsible for loss of wealth, continuous debt, and poor financial returns.',
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Family & Children Disputes',
      desc: 'Resolving domestic friction, preventing divorce/separation, and addressing children education issues.',
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      title: 'Nadi & Mangal Dosha Remedies',
      desc: 'Complete planetary checks to resolve late marriage problems and neutralize heavy planetary doshas.',
    },
    {
      icon: <Home className="w-6 h-6 text-cyan-400" />,
      title: 'Vastu Shastra Consultation',
      desc: 'Expert home, office, and commercial property architectural alignments to channel prosperity.',
    },
    {
      icon: <Gem className="w-6 h-6 text-indigo-400" />,
      title: 'Gemstone & Numerology Therapy',
      desc: 'Detailed recommendation of lucky gemstones (Rashi Ratnas) and name corrections to optimize energy.',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-cosmic-deep relative"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-mystic-gold/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-mystic-gold uppercase text-xs font-bold tracking-[0.2em] block mb-2">
            Vedic Consultations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Astrology Services
          </h2>
          <p className="text-gray-400 mt-4 font-light text-base leading-relaxed">
            Harness the power of ancient wisdom. We offer precise planetary calculations and authentic Vedic remedial solutions to bring balance back into your life.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cosmic-accent/50 border border-mystic-gold/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mystic-gold/5">
                <a
                  href={`https://wa.me/919740693845?text=Hello%20Keshavrao%20Astrocentre%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-mystic-gold hover:text-white transition-colors uppercase tracking-wider group/link"
                >
                  Book Remedy
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Call Out Card */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cosmic-accent/30 via-cosmic-accent/60 to-cosmic-accent/30 border border-mystic-gold/10 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Not sure which planetary dosha is blocking your success?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-light leading-relaxed">
            Every individual has a unique birth chart. Let our senior Vedic astrologer analyze your planetary positions to find the exact root cause of your obstacles.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astrocentre%2C%20I%20want%20to%20schedule%20a%20full%20birth%20chart%20and%20kundali%20reading."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-mystic-gold text-cosmic-dark font-bold text-sm hover:bg-mystic-gold-light transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Request Birth Chart Analysis
            </a>
            <a
              href="tel:+919740693845"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-mystic-gold/40 hover:border-mystic-gold text-mystic-gold font-bold text-sm hover:bg-mystic-gold/5 transition-all duration-300"
            >
              Speak to Astrologer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

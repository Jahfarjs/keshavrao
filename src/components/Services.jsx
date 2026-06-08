import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Sparkles, Briefcase, DollarSign, Users, Flame, Home, Gem, ArrowRight, MessageSquare, Compass
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Heart className="w-5 h-5 text-red-400" />,
      title: 'Love Marriage & Relationships',
      desc: 'Find harmony and overcome parental or societal objections in love marriage. Secure alignment, mutual understanding, and compatibility through Vedic remedies.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      title: 'Kundli & Jataka Matching',
      desc: 'Ensure long-term marriage compatibility. Get detailed Kundli Analysis checking for Guna matching, Dosha detection, and astrological solutions for a happy married life.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      title: 'Career & Business Problems',
      desc: 'Unlock career growth and business success. Gain clear insights into planetary obstacles to choose the right career path, job transition, and financial stability.',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      title: 'Finance & Debt Solutions',
      desc: 'Identify planetary causes behind financial distress. Learn powerful remedial options to overcome debt, attract wealth, and achieve stable financial returns.',
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: 'Family & Children Disputes',
      desc: 'Restore domestic peace and resolve child-related obstacles. End disputes, strengthen familial bonds, and guide children toward educational excellence.',
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      title: 'Nadi & Mangal Dosha Remedies',
      desc: 'Neutralize harmful planetary influences that cause marriage delays or marital disharmony. Implement Vedic remedies for positive cosmic energy.',
    },
    {
      icon: <Home className="w-5 h-5 text-cyan-400" />,
      title: 'Vastu Shastra Consultation',
      desc: 'Align your home or office with structural energy flow to welcome wealth, health, and prosperity. Eliminate Vastu Dosha through practical, non-destructive remedies.',
    },
    {
      icon: <Gem className="w-5 h-5 text-indigo-400" />,
      title: 'Gemstone & Numerology Therapy',
      desc: 'Boost your luck and cosmic energy. Get authentic gemstone recommendations based on your birth chart along with name corrections to remove negative blocks.',
    },
    {
      icon: <Compass className="w-5 h-5 text-rose-400" />,
      title: 'Vashikaran & Love Attraction',
      desc: 'Traditional Vashikaran guidance rooted in astrological and spiritual practices. Personalized consultations are designed to help individuals address relationship concerns, improve communication, foster harmony, and gain clarity in matters of love and personal connections through time-honored wisdom.',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-cosmic-deep relative"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-mystic-red/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-mystic-red uppercase text-xs font-bold tracking-[0.2em] block mb-2">
            Vedic Consultations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Astrology Services
          </h2>
          <p className="text-gray-400 mt-4 font-light text-base leading-relaxed">
            Receive personalized astrological guidance for career, marriage, business, health, and life decisions through authentic Vedic astrology. We offer precise planetary calculations and authentic Vedic remedial solutions to bring balance back into your life.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Service image placeholder using fav.png */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5 bg-black/45 border border-mystic-red/10 flex items-center justify-center group-hover:border-mystic-red/30 transition-all">
                  <img
                    src="/fav.png"
                    alt={service.title}
                    className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-[0_0_8px_rgba(220,38,38,0.25)]"
                  />
                </div>

                <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mystic-red/10">
                <a
                  href={`https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-mystic-red hover:text-white transition-colors uppercase tracking-wider group/link"
                >
                  Book Remedy
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Call Out Card */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cosmic-accent/40 via-cosmic-accent/70 to-cosmic-accent/40 border border-mystic-red/20 text-center max-w-4xl mx-auto shadow-lg">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Not sure which planetary dosha is blocking your success?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-light leading-relaxed">
            Every individual has a unique birth chart. Let our senior Vedic astrologer analyze your planetary positions to find the exact root cause of your obstacles.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20want%20to%20schedule%20a%20full%20birth%20chart%20and%20kundali%20reading."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-mystic-red text-white font-bold text-sm hover:bg-mystic-red-light transition-all duration-300 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Request Birth Chart Analysis
            </a>
            <a
              href="tel:+919740693845"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-mystic-red/40 hover:border-mystic-red text-mystic-red font-bold text-sm hover:bg-mystic-red/5 transition-all duration-300"
            >
              Speak to Astrologer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

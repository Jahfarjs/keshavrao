import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, EyeOff, Flame, Compass, MessageSquare, AlertTriangle } from 'lucide-react';

export default function BlackMagicHighlight() {
  const symptoms = [
    {
      title: 'Unexplained Stagnation',
      image: '/unexpected-stagnation.webp',
      desc: 'Sudden, severe collapse in business or career, even when executing everything correctly.',
    },
    {
      title: 'Persistent Family Discord',
      image: '/persistent-family-discord.webp',
      desc: 'Frequent, aggressive arguments and misunderstandings between couples or family members.',
    },
    {
      title: 'Chronic Fatigue & Anxiety',
      image: '/chronic-fatigue.webp',
      desc: 'Waking up exhausted, feeling heavy, having bad dreams, or experiencing sudden panic attacks.',
    },
    {
      title: 'Vastu & Home Heaviness',
      image: '/home-heavyness.webp',
      desc: 'A persistent feeling of negative presence, cold spots, or a suffocating atmosphere at home.',
    },
  ];

  const remedies = [
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: 'Maha Pratyangira & Sudarshana Rituals',
      desc: 'Powerful ancient fire rituals (Homas) to completely neutralize the negative energy roots.',
    },
    {
      icon: <EyeOff className="w-6 h-6 text-mystic-red" />,
      title: 'Drishti (Evil Eye) Cleansing',
      desc: 'Purification techniques to strip away jealousy-induced blockages on your growth.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-green-500" />,
      title: 'Raksha Yantras & Shields',
      desc: 'Consecrated talismans and mantra locks that offer lifetime spiritual defense.',
    },
  ];

  return (
    <section
      id="black-magic"
      className="relative py-24 bg-gradient-to-b from-cosmic-deep via-cosmic-dark to-cosmic-deep overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-950/20 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />
            Urgent Vedic Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Black Magic Removal &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-mystic-gold">
              Negative Energy Protection
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-light leading-relaxed">
            Are you surrounded by unexpected failures, persistent blockages, or sudden distress? Ancient Vedic scriptures provide infallible methods to dissolve negative energies, black magic, and the evil eye.
          </p>
        </div>

        {/* Symptoms checklist */}
        <div className="mt-16">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-center text-red-300 mb-8 tracking-wide">
            Common Symptoms of Negative Energy & Evil Eye
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.map((symptom, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cosmic-accent/30 backdrop-blur-sm p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group shadow-md flex flex-col"
              >
                {/* Symptom image with cover fit */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-black/40 border border-red-500/10 group-hover:border-red-500/30 transition-all">
                  <img
                    src={symptom.image}
                    alt={symptom.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-red-950/80 backdrop-blur-md border border-red-500/30 flex items-center justify-center text-red-400 font-serif text-xs font-bold">
                    0{idx + 1}
                  </div>
                </div>
                
                <h4 className="text-white font-semibold text-lg font-serif tracking-wide">
                  {symptom.title}
                </h4>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {symptom.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Remedy Panel */}
        <div className="mt-16 bg-gradient-to-br from-cosmic-accent/40 to-cosmic-dark/80 rounded-3xl border border-mystic-red/20 p-6 sm:p-10 lg:p-12 shadow-[0_0_30px_rgba(220,38,38,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Explanatory text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                How Keshavrao Astro Centre Restores Peace
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                Led by expert Vedic practitioners, we combine meticulous horoscope analysis with specific scripture-ordained remedies. We identify the source of the curse or negative aura and execute divine protection protocols to restore harmony to your life and household.
              </p>
              
              <div className="space-y-4">
                {remedies.map((remedy, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 rounded-lg bg-cosmic-dark border border-mystic-red/10 flex-shrink-0">
                      {remedy.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        {remedy.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {remedy.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glowing CTA Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-red-500/5 border border-red-500/20 text-center relative overflow-hidden">
              {/* Pulsing ring inside */}
              <div className="absolute inset-0 border-2 border-red-500/10 rounded-2xl animate-pulse" />
              
              <ShieldAlert className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                100% Confidential Care
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xs leading-relaxed">
                Your problems will remain fully private. Consultations are carried out in a secure environment.
              </p>
              
              <a
                href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20have%20an%20urgent%20need%20regarding%20negative%20energy%20cleansing%20and%20black%20magic%20removal."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Urgent WhatsApp Assistance
              </a>
              <span className="text-[10px] text-gray-500 mt-2 font-mono">
                No charges for preliminary symptom screening
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What details are required for an astrology consultation?",
      answer: "To provide accurate predictions and detailed birth chart analysis, we require your date of birth, exact time of birth, and place of birth. If you do not have these details, our senior astrologer can also conduct readings through palmistry or Prashna Kundli (horoscope cast at the time of inquiry)."
    },
    {
      question: "How long does it take to see results from Vedic remedies?",
      answer: "Vedic remedies—including specific scripture-ordained poojas, homas, consecrated Raksha Yantras, and gemstone recommendations—work by channelling positive cosmic energy. While energy transitions begin immediately, most clients experience visible positive shifts in their career, marriage, or health within 11 to 41 days."
    },
    {
      question: "Are my personal details and problems kept confidential?",
      answer: "Yes, 100%. We adhere to strict privacy standards. All discussions regarding your career setbacks, marriage compatibility issues, family discord, or negative energy concerns remain completely private and secure."
    },
    {
      question: "What is negative energy/black magic removal, and how does it help?",
      answer: "Negative energy removal dissolves spiritual obstacles, jealousy-induced blockages (evil eye), or negative cosmic patterns in your life or home. By utilizing specific fire rituals (Homas) and protective shields (Yantras), we neutralize the negative force and restore peace, safety, and business growth."
    },
    {
      question: "Do I need to visit the centre in Rajajinagar, or can I consult online?",
      answer: "While you are always welcome to visit our physical centre in Rajajinagar, Bengaluru, we offer highly convenient remote consultations via phone calls and WhatsApp. Remedial items like consecrated yantras can be prepared and sent directly to your location."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-cosmic-deep relative overflow-hidden">
      {/* Background soft red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-red-950/10 blur-[110px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-mystic-red uppercase text-xs font-bold tracking-[0.2em] block mb-2">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 font-light text-sm sm:text-base">
            Get clear, simple answers regarding our Vedic consultations, horoscope matching, spiritual remedies, and privacy assurance.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-mystic-red/10 overflow-hidden transition-all duration-300 hover:border-mystic-red/35"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-white focus:outline-none group"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-mystic-red' : 'text-gray-500 group-hover:text-mystic-red'}`} />
                    <span className="font-serif font-medium text-base sm:text-lg tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-cosmic-accent border border-mystic-red/10 flex items-center justify-center text-mystic-red group-hover:border-mystic-red/30 transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-400 text-sm sm:text-base font-light leading-relaxed border-t border-mystic-red/5 bg-cosmic-accent/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

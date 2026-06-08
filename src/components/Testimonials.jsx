import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      location: "Rajajinagar, Bengaluru",
      service: "Love Marriage & Compatibility",
      text: "We were facing severe opposition from our families regarding our marriage. Keshavrao Astro Centre analyzed our charts, suggested a few simple remedies, and within 3 months, our families agreed. The guidance was highly professional and compassionate.",
      rating: 5,
    },
    {
      name: "Priyanka S.",
      location: "Jayanagar, Bengaluru",
      service: "Negative Energy Removal",
      text: "Our business was experiencing a sudden, major downfall with no logical reason. We felt a heavy, stressful aura at our shop. After the Evil Eye cleansing homa and installing the Raksha Yantra, our sales returned to normal. Highly recommended for spiritual protection.",
      rating: 5,
    },
    {
      name: "Ananth Prasad",
      location: "Malleshwaram, Bengaluru",
      service: "Career & Finance Consultation",
      text: "I was stuck in a stagnant job for over 4 years. The gemstone consultation and birth chart analysis helped me understand my planetary positions. Following their name correction and gemstone suggestions, I cleared an interview at a top MNC within a month.",
      rating: 5,
    },
    {
      name: "Deepa Hegde",
      location: "Whitefield, Bengaluru",
      service: "Kundli Matching & Dosha Remedy",
      text: "They checked the horoscope compatibility for my daughter. They identified a minor Nadi Dosha and provided practical, scriptural remedial steps to perform. Their transparency and deep knowledge gave us immense peace of mind.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-cosmic-deep via-cosmic-dark to-cosmic-deep relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-red-900/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-mystic-red uppercase text-xs font-bold tracking-[0.2em] block mb-2">
            Client Success
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by Thousands in Bengaluru
          </h2>
          <p className="text-gray-400 mt-4 font-light text-sm sm:text-base">
            Read stories of how authentic Vedic astrology and negative energy protection helped individuals reclaim their happiness, peace, and career success.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-mystic-red/10 relative hover:border-mystic-red/30 transition-all duration-300 group shadow-md"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-mystic-red/5 group-hover:text-mystic-red/10 transition-colors pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mystic-gold text-mystic-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed italic mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 border-t border-mystic-red/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-mystic-red/10 border border-mystic-red/25 flex items-center justify-center text-mystic-red font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-sm sm:text-base tracking-wide">
                    {review.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-xs text-gray-500 mt-0.5">
                    <span>{review.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-mystic-red font-medium">{review.service}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small badge linking to whatsapp reviews */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20have%20read%20your%20reviews%20and%20want%20to%20consult."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cosmic-accent/50 border border-mystic-red/25 text-xs font-semibold text-gray-300 hover:text-white hover:border-mystic-red/50 transition-all duration-300 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-mystic-red" />
            Have a question? Consult with us directly
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  BookOpen, 
  MessageSquare,
  Compass
} from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'is-gun-milan-important-before-marriage',
    title: 'Is Gun Milan Important Before Marriage?',
    category: 'Vedic Matchmaking',
    date: 'June 9, 2026',
    readTime: '5 min read',
    image: '/blog 1.jpeg',
    summary: 'Gun Milan Matchmaking through Ashta Koot is a traditional Vedic astrology method used to assess compatibility between prospective partners. It evaluates emotional, mental, physical, and spiritual harmony for a successful married life...',
    author: 'Acharya Keshavrao',
    content: {
      intro: 'Gun Milan Matchmaking through Ashta Koot is a traditional Vedic astrology method used to assess compatibility between prospective partners. It evaluates emotional, mental, physical, and spiritual harmony for a successful married life. Consulting the best astrologer in India in 2026 can help couples understand compatibility factors and make informed relationship decisions based on astrological principles.\n\nThe best astrologer in India in 2026 recommends Gun Milan to assess marital compatibility, relationship harmony, emotional understanding, and long-term happiness before marriage.',
      introSub: 'The best astrologer in India in 2026 recommends Gun Milan to assess marital compatibility, relationship harmony, emotional understanding, and long-term happiness before marriage.',
      sections: [
        {
          id: 'why-recommend',
          title: 'Why Should the Best Astrologer in India in 2026 Recommend Gun Milan with Best Astrologer?',
          text: 'Gun Milan remains an important part of Vedic matchmaking, helping assess compatibility between prospective partners. The best astrologer in India in 2026 may recommend Gun Milan to evaluate emotional, mental, and family harmony through Ashta Koot analysis. By identifying strengths and potential challenges in a relationship, Gun Milan supports informed marriage decisions and contributes to long-term compatibility and understanding between couples.'
        },
        {
          id: 'what-is-gun-milan',
          title: 'What Is Gun Milan Matchmaking in Vedic Astrology with Best Astrologer?',
          text: 'Gun Milan, also known as Kundli Matching, is a significant aspect of Vedic astrology. It helps determine the compatibility between two individuals planning to marry. The process evaluates multiple factors affecting married life and provides insights into emotional, physical, intellectual, and spiritual compatibility.\n\nAshta Koot Milan is the most widely accepted system for evaluating compatibility. It assigns points across eight categories, with a total possible score of 36.'
        }
      ],
      objectives: [
        'Assess relationship compatibility',
        'Understand emotional connection',
        'Evaluate family harmony',
        'Analyze future marital prospects',
        'Identify potential challenges',
        'Promote long-term marital success'
      ]
    }
  },
  {
    slug: 'what-is-nadi-dosha-in-kundli',
    title: 'What Is Nadi Dosha in Kundli and Why Is It So Important?',
    category: 'Kundli Matching',
    date: 'June 9, 2026',
    readTime: '6 min read',
    image: '/blog2.jpeg',
    summary: 'Nadi Dosha is one of the most critical factors in Ashta-Koota Milan (36-point matchmaking system in Vedic astrology). Learn why it causes marriage problems and how to resolve it.',
    author: 'Acharya Keshavrao',
    content: {
      intro: 'Nadi Dosha is one of the most critical factors in Ashta-Koota Milan (36-point matchmaking system in Vedic astrology). In Vedic matchmaking, Nadi holds the highest weight of 8 points (Gunas) out of 36. A clash in Nadi indicates potential health risks, childbirth issues, and disharmony.',
      introSub: "Understanding Nadi in Simple Terms:\n• Nadi represents genetic compatibility\n• It governs health, childbirth, and longevity\n• It reflects biological and karmic alignment",
      sections: [
        {
          id: 'why-cause-problems',
          title: 'Why Does Nadi Dosha Cause Marriage Problems Even After Horoscope Matching?',
          text: 'Many couples ask this question after experiencing:\n\n• Frequent conflicts and aggressive arguments\n• Delay or loss of childbirth\n• Chronic health issues for either partner\n• Complete emotional disconnect and sudden separation or divorce\n\nAstrological Reasons:\n• Genetic clash indicated in the Kundli chart\n• Unseen karmic debts carried by the individuals\n• Dosha ignored or overlooked due to an overall Guna score\n• Computerized matching done without expert human astrological judgment'
        }
      ],
      objectives: [
        'Identify biological and genetic compatibility',
        'Detect Adi, Madhya, and Antya Nadi alignments',
        'Implement Vedic remedies to neutralize Nadi Dosha',
        'Ensure safe lineage and healthy offspring',
        'Resolve marital friction caused by energy imbalances'
      ]
    }
  }
];

const ASHTA_KOOT_DATA = [
  { name: 'Varna', points: 1, area: 'Ego & Work', description: 'Evaluates the work compatibility, mental capabilities, and ego levels of the partners.' },
  { name: 'Vashya', points: 2, area: 'Mutual Attraction', description: 'Assesses the power equation, dominance, and mutual attraction between the couple.' },
  { name: 'Tara', points: 3, area: 'Destiny & Health', description: 'Calculates the birth star alignment to determine health, longevity, and overall destiny.' },
  { name: 'Yoni', points: 4, area: 'Intimacy & Subconscious', description: 'Evaluates physical, sexual compatibility, biological traits, and deep-seated instincts.' },
  { name: 'Maitri', points: 5, area: 'Intellectual & Friendship', description: 'Measures planetary friendship, communication ease, and general likeness of views.' },
  { name: 'Gana', points: 6, area: 'Temperament & Behavior', description: 'Analyzes behavioral compatibility and categorizes temperaments as Deva (divine), Manushya (human), or Rakshasa (demonic).' },
  { name: 'Bhakoot', points: 7, area: 'Family Welfare & Love', description: 'Evaluates the emotional bridge, family progression, and planetary placement relationships.' },
  { name: 'Nadi', points: 8, area: 'Genetics & Health', description: 'Determines the genetic compatibility, biological energy, and the health of future offspring. Crucial for matching.' }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Vedic Matchmaking', 'Kundli Matching'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 bg-cosmic-deep min-h-screen text-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-mystic-red/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mystic-red/10 border border-mystic-red/20 text-mystic-red text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Vedic Wisdom Portal
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            The Keshavrao Astro Blog
          </h1>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Unlock cosmological insights, Vedic compatibility blueprints, and Vastu formulas directly from our ancestral lineages.
          </p>
        </div>

        {/* Filter and Search Bar - Clean, Centered & Highly Responsive */}
        <div className="max-w-2xl mx-auto mb-16 px-4">
          <div className="space-y-4">
            {/* Search Input Box */}
            <div className="flex items-center w-full bg-cosmic-dark/80 border border-mystic-red/20 rounded-xl px-4 py-3 focus-within:border-mystic-gold/50 focus-within:ring-1 focus-within:ring-mystic-gold/20 transition-all shadow-inner">
              <Search className="w-5 h-5 text-mystic-gold/80 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none pl-3 pr-2 py-0.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
            
            {/* Category Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-mystic-red border-mystic-red text-white shadow-md shadow-mystic-red/25'
                      : 'bg-cosmic-dark/60 border-mystic-red/15 text-gray-400 hover:text-white hover:border-mystic-red/35'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Full Articles Stack */}
        {filteredPosts.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-20 sm:space-y-24">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="space-y-6 relative"
              >
                {/* Category & Title */}
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded bg-mystic-red/10 border border-mystic-red/20 text-mystic-red text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {post.title}
                  </h2>
                  
                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 font-light border-b border-mystic-red/10 pb-4">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-mystic-gold/75" />
                      <span className="font-medium text-gray-300">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-mystic-red/65" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-mystic-red/65" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Banner Image */}
                <div className="w-full h-56 sm:h-[400px] rounded-2xl overflow-hidden border border-mystic-red/10 relative shadow-md">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-95 hover:scale-[1.01] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/30 to-transparent" />
                </div>

                {/* Body Text Content */}
                <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light space-y-6">
                  
                  {/* First paragraph with dropcap */}
                  <div className="relative">
                    {(() => {
                      const paragraphs = post.content.intro.split('\n\n');
                      return (
                        <div className="space-y-4">
                          <p className="inline-block">
                            <span className="float-left text-5xl sm:text-6xl font-serif font-extrabold text-mystic-red mr-2.5 mt-1 leading-[0.8]">
                              {paragraphs[0].charAt(0)}
                            </span>
                            {paragraphs[0].slice(1)}
                          </p>
                          {paragraphs.slice(1).map((para, i) => (
                            <p key={i} className="text-sm sm:text-base">
                              {para}
                            </p>
                          ))}
                        </div>
                      );
                    })()}
                  </div>

                  {post.content.introSub && (
                    <p className="text-mystic-gold/90 font-serif italic text-base sm:text-lg md:text-xl border-l-4 border-mystic-gold/50 pl-5 my-6 leading-relaxed bg-cosmic-accent/20 py-3 pr-3 rounded-r-lg whitespace-pre-line">
                      {post.content.introSub}
                    </p>
                  )}

                  {/* Render Sections */}
                  {post.content.sections.map((section) => (
                    <div key={section.id} className="pt-4 space-y-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {section.title}
                      </h3>
                      <p className="whitespace-pre-line text-sm sm:text-base">
                        {section.text}
                      </p>
                      {section.subText && (
                        <p className="italic text-gray-400 text-xs sm:text-sm">
                          {section.subText}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Ashta Koot points table for Gun Milan */}
                  {post.slug === 'is-gun-milan-important-before-marriage' && (
                    <div className="pt-6 space-y-3">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                        The Ashta Koot Matching System (36 Points)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Below is the point breakdown used by astrologers in Vedic matching. High scores across these Koots denote harmonious compatibility.
                      </p>
                      
                      <div className="overflow-x-auto rounded-xl border border-mystic-red/10 bg-cosmic-dark/50">
                        <table className="min-w-full divide-y divide-mystic-red/10 text-xs sm:text-sm">
                          <thead className="bg-cosmic-accent/30 font-serif">
                            <tr>
                              <th scope="col" className="px-4 py-3 text-left font-bold text-mystic-gold">Koot Name</th>
                              <th scope="col" className="px-4 py-3 text-left font-bold text-mystic-gold">Max Points</th>
                              <th scope="col" className="px-4 py-3 text-left font-bold text-mystic-gold">Compatibility Area</th>
                              <th scope="col" className="px-4 py-3 text-left font-bold text-gray-300 hidden md:table-cell">Significance</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-mystic-red/5 font-sans">
                            {ASHTA_KOOT_DATA.map((koot, i) => (
                              <tr key={i} className="hover:bg-cosmic-accent/10 transition-colors">
                                <td className="px-4 py-2.5 font-semibold text-white">{koot.name}</td>
                                <td className="px-4 py-2.5 text-mystic-red font-bold">{koot.points} Pt{koot.points > 1 ? 's' : ''}</td>
                                <td className="px-4 py-2.5 text-gray-300">{koot.area}</td>
                                <td className="px-4 py-2.5 text-gray-400 text-xs leading-relaxed hidden md:table-cell">{koot.description}</td>
                              </tr>
                            ))}
                            <tr className="bg-mystic-red/5 font-semibold">
                              <td className="px-4 py-3 text-white">Total Max Points</td>
                              <td className="px-4 py-3 text-mystic-gold font-bold">36 Points</td>
                              <td className="px-4 py-3 text-gray-300" colSpan="2">Complete Vedic Harmony Assessment</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Objectives list */}
                  <div className="pt-6 space-y-3">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      Key Objectives of {post.slug === 'is-gun-milan-important-before-marriage' ? 'Gun Milan Matchmaking' : 'Nadi Dosha Assessment'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {post.content.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-cosmic-dark/40 border border-mystic-red/5">
                          <CheckCircle2 className="w-4 h-4 text-mystic-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs sm:text-sm font-medium leading-normal">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Consultation Contact box */}
                <div className="rounded-2xl p-6 border border-mystic-red/10 bg-gradient-to-r from-cosmic-accent/40 to-cosmic-dark/95 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
                  <div className="space-y-1 text-center md:text-left">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                      Want a Personal Consultation?
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light max-w-xl">
                      Consult Acharya Keshavrao for private, confidential chart analysis regarding {post.category.toLowerCase()}. Get practical remedies backed by ancestral legacy.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 w-full md:w-auto justify-center">
                    <a
                      href={`https://wa.me/919740693845?text=Hello%20Keshavrao%20Astro%20Centre%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(post.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-mystic-red hover:bg-mystic-red-light text-white font-bold text-xs uppercase tracking-wider transition-all min-w-[120px]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+919740693845"
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-mystic-gold/40 hover:bg-mystic-gold/10 text-mystic-gold font-bold text-xs uppercase tracking-wider transition-all min-w-[120px]"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      Call Direct
                    </a>
                  </div>
                </div>

                {/* Section Separator */}
                {idx < filteredPosts.length - 1 && (
                  <div className="pt-16 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-mystic-red/20 to-transparent" />
                    <Sparkles className="w-4 h-4 text-mystic-red/40 mx-4 flex-shrink-0 animate-pulse" />
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-mystic-red/20 to-transparent" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border-mystic-red/10 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-1">No articles found</h3>
            <p className="text-gray-400 text-sm font-light">
              Try adjusting your search queries or category filters.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

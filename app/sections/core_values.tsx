'use client';

import { ArrowRight, Book, Church, Cross, Heart, Users} from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const coreValuesData = [
  { icon: Book, title: 'Word', fullTitle: 'Supremacy of the Word', verse: '[John 1:3]', description: 'The Word of God is our compass and source of life. It defines who we are, shapes our speech, and transforms our thinking through unchanging truth.' },
  { icon: Heart, title: 'Love', fullTitle: 'Love is Our Foundation', verse: '[Ephesians 4:15]', description: 'Love is the heartbeat of our service. As Christ loved us, we serve with compassion and build communities rooted in His grace.' },
  { icon: Users, title: 'Purpose', fullTitle: 'Partners in Purpose', verse: '[2 Corinthians 5:20]', description: 'We are co-workers with God, called as ambassadors to reveal His mystery and advance His Kingdom with passion and unity.' },
  { icon: Cross, title: 'Creation', fullTitle: 'New Creation in Christ', verse: '[2 Corinthians 5:17]', description: 'In Christ, we are made new. we see everyone through the lens of redemption and the promise of a fresh start.' },
  { icon: Church, title: 'Spirit', fullTitle: 'Holy Spirit Empowerment', verse: '[Acts 1:8]', description: 'The Holy Spirit transforms lives and renews hearts. We are simply the vessels; all glory belongs to Him.' },
  { icon: ArrowRight, title: 'Mandate', fullTitle: 'The Gospel Mandate', verse: '[Matthew 28:19]', description: 'Making renewed disciples is our lifelong mandate. We live the Gospel daily to bring transformation to every community.' },
  { icon: Users, title: 'Unity', fullTitle: 'Together in Unity', verse: '[Psalm 133:1]', description: 'We believe in the power of collaboration. By working together, we amplify our impact and share the grace of God more effectively.' }
];

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the mobile tab bar to keep active item in view
  useEffect(() => {
    if (scrollRef.current) {
      const activeTab = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeTab) {
        scrollRef.current.scrollTo({
          left: activeTab.offsetLeft - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <section id="values" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-[10px] font-black tracking-[0.4em] text-[#7A1909] uppercase mb-4">
            Our Principles
          </h2>
          <p className="text-3xl md:text-5xl font-light text-[#0C2B85] leading-tight max-w-2xl">
            The values that <span className="font-semibold italic">anchor</span> our service.
          </p>
        </div>

        {/* Mobile View: Horizontal Scrollable Tabs */}
        <div className="lg:hidden mb-8 -mx-6 px-6 overflow-x-auto no-scrollbar flex gap-4 border-b border-slate-100" ref={scrollRef}>
          {coreValuesData.map((value, index) => {
            const Icon = value.icon;
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 flex items-center gap-2 pb-4 border-b-2 transition-all duration-300 ${
                  isActive ? 'border-[#7A1909] text-[#0C2B85]' : 'border-transparent text-slate-400'
                }`}
              >
                <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                <span className={`text-sm whitespace-nowrap ${isActive ? 'font-bold' : 'font-light'}`}>
                  {value.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Desktop View: Left Navigation List */}
          <div className="hidden lg:block lg:col-span-5 space-y-1">
            {coreValuesData.map((value, index) => {
              const Icon = value.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-full group relative flex items-center py-4 px-2 transition-all duration-300"
                >
                  <div className={`absolute left-0 w-0.5 transition-all duration-500 ${
                    isActive ? 'h-full bg-[#7A1909]' : 'h-0 bg-slate-200 group-hover:h-1/2'
                  }`} />
                  <div className={`flex items-center gap-5 pl-6 transition-all duration-300 ${isActive ? 'translate-x-2' : 'translate-x-0'}`}>
                    <Icon size={18} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-[#0C2B85]' : 'text-slate-400 group-hover:text-slate-600'} />
                    <span className={`text-lg transition-colors ${isActive ? 'font-bold text-[#0C2B85]' : 'font-light text-slate-500 group-hover:text-slate-800'}`}>
                      {value.fullTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display (Unified Mobile/Desktop) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-50/50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 border border-slate-100 min-h-[400px] flex flex-col justify-center"
              >
                {/* Number Watermark (Hidden on small mobile to reduce clutter) */}
                <div className="hidden sm:block absolute -top-6 -right-6 text-slate-100/50 -z-10">
                  <span className="text-[10rem] md:text-[12rem] font-black leading-none select-none">
                    0{activeIndex + 1}
                  </span>
                </div>
                
                <div className="space-y-6 md:space-y-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#7A1909]" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A1909] uppercase">
                      Scriptural Anchor
                    </span>
                  </div>

                  <blockquote className="text-xl md:text-3xl font-serif italic text-[#0C2B85] leading-relaxed">
                    &quot;{coreValuesData[activeIndex].verse === '[John 1:3]' 
                      ? 'Through Him all things were made; without Him nothing was made that has been made.' 
                      : coreValuesData[activeIndex].description.split('.')[0] + '.'}&quot;
                    <footer className="mt-4 md:mt-6 text-[10px] font-sans not-italic font-black text-slate-400 tracking-[0.2em] uppercase">
                       — {coreValuesData[activeIndex].verse}
                    </footer>
                  </blockquote>

                  <div className="pt-6 md:pt-10 border-t border-slate-200/60">
                    {/* Show Full Title on Mobile inside the card since it's hidden in the tabs */}
                    <h4 className="lg:hidden text-[#0C2B85] font-bold mb-2 uppercase tracking-tighter">
                      {coreValuesData[activeIndex].fullTitle}
                    </h4>
                    <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light">
                      {coreValuesData[activeIndex].description}
                    </p>
                  </div>

                  <div className="flex gap-1.5 pt-4">
                     <div className="w-10 h-1 bg-[#0C2B85] rounded-full" />
                     <div className="w-2 h-1 bg-[#7A1909] rounded-full" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CoreValues;
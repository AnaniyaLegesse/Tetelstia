'use client';

import { Book, Church, Heart, Music, Target, Users, LucideIcon, ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

interface Ministry {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ministriesData: Ministry[] = [
  { icon: Music, title: 'Music & Media Evangelism', description: 'Writing Gospel-centered songs and using digital media to share Christ’s message across global platforms.' },
  { icon: Users, title: 'Discipleship Training', description: 'A structured program dedicated to training believers to become fully renewed disciples who multiply within their communities.' },
  { icon: Church, title: 'Church Partnerships', description: 'Collaborating with local churches to establish new ministry branches and strengthen existing community outreach.' },
  { icon: Heart, title: 'Compassionate Service', description: 'Engaging in holistic community development initiatives to meet physical and spiritual needs with Christ-like love.' },
  { icon: Book, title: 'Resource Development', description: 'Creating and distributing high-quality, Gospel-centered media and training materials for global impact.' },
  { icon: Target, title: 'Strategic Global Outreach', description: 'Building long-term collaborations with key partners to maximize our collective impact for God\'s Kingdom worldwide.' }
];

const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Modern Minimalist Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4 border-b border-slate-100 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-[#7A1909] uppercase mb-4">
              Our Work in Action
            </h2>
            <p className="text-4xl md:text-5xl font-light text-[#0C2B85] leading-tight">
              Key Areas of <span className="font-semibold italic">Ministry.</span>
            </p>
          </div>
          <p className="text-slate-400 font-light text-sm md:text-base max-w-xs">
            Holistic approaches to spreading the Gospel and empowering communities worldwide.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ministriesData.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                {/* Thin Line Accent */}
                <div className="w-12 h-[1px] bg-[#7A1909] mb-8 transition-all duration-500 group-hover:w-full" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="text-[#0C2B85] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={32} strokeWidth={1.2} />
                  </div>
                  <span className="text-slate-200 font-serif italic text-4xl group-hover:text-[#7A1909]/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0C2B85] mb-4 group-hover:text-[#7A1909] transition-colors duration-300">
                  {ministry.title}
                </h3>
                
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {ministry.description}
                </p>
                
                <a 
                  href={`#${ministry.title.replace(/\s/g, '').toLowerCase()}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0C2B85] group-hover:text-[#7A1909] transition-all"
                >
                  <span>Explore Ministry</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Ministries;
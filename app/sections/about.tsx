'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="relative">
              <span className="inline-block text-[10px] font-black tracking-[0.4em] text-[#7A1909] uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-[#0C2B85] leading-[1.1] mb-6">
                Driven by Faith, Committed to <span className="font-semibold italic">Community.</span>
              </h2>
              <div className="w-20 h-1 bg-[#7A1909] rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
              <p>
                Tetelestai Community Centered Service began in 2014 EC with five youth gathered 
                for Bible study and worship. Deeply moved by the truth of <span className="text-[#0C2B85] font-semibold italic underline decoration-[#7A1909]/30 underline-offset-4">Tetelestai</span>—"It is finished"—the movement was born.
              </p>
              <p>
                What started as a small gathering has grown into a vibrant movement of 
                <span className="text-[#0C2B85] font-medium"> over 40 members</span>, officially established in 2015 EC. We create 
                renewed disciples dedicated to bringing His Kingdom to earth through holistic change.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4">
              {['Gospel Centered', 'Community Led', 'Faith Driven', 'Holistic Impact'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-slate-700">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#7A1909]/20 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-[#7A1909] rounded-full" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#0C2B85]/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a 
                href="#story"
                className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0C2B85]"
              >
                <span className="relative">
                  Explore Our Full Story
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#7A1909] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#0C2B85] group-hover:text-white transition-all duration-500">
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Right Visual Column (Architectural Staggered Images) */}
          <div className="relative h-[550px] md:h-[650px] flex items-center justify-center">
            
            {/* Background Decorative Frame */}
            <div className="absolute inset-10 border border-slate-100 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />

            {/* Main Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-10 w-4/5 h-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white"
            >
              <Image
                src="/bg20.jpg" 
                alt="Community work"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            {/* Floating Detail Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute left-0 bottom-10 w-3/5 h-1/3 rounded-[2rem] border-[8px] border-white overflow-hidden shadow-2xl z-20"
            >
              <Image
                src="/bg3.jpg" 
                alt="Worship gathering"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Minimalist Data Badge */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="absolute -right-4 bottom-24 bg-[#0C2B85] text-white p-8 rounded-2xl z-30 shadow-xl"
            >
               <p className="text-4xl font-serif italic mb-1">TCCS</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
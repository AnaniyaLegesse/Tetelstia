'use client';

import { Eye, Target, Maximize, type LucideIcon } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  interface VMPCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
  }

  const VMPCard = ({ icon: Icon, title, description }: VMPCardProps) => (
    <motion.div 
      // variants={cardVariants}
      whileHover={{ y: -12 }}
      className="group relative p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0C2B85]/10"
    >
      {/* Ghost Icon background using your Deep Red */}
      <div className="absolute top-0 right-0 p-4 text-[#7A1909] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <Icon size={120} />
      </div>

      {/* Modern Icon Stack using both Brand Colors */}
      <div className="relative w-16 h-16 mb-8">
        {/* Background layer: Brand Red */}
        <div className="absolute inset-0 bg-[#7A1909] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
        {/* Top layer: Brand Navy */}
        <div className="absolute inset-0 bg-[#0C2B85] rounded-2xl flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
          <Icon size={30} className="text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0C2B85] mb-4 tracking-tight">
        {title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed font-light">
        {description}
      </p>

      {/* Decorative Brand Underline */}
      <div className="mt-8 flex gap-1">
        <div className="h-1.5 w-8 bg-[#7A1909] rounded-full group-hover:w-16 transition-all duration-500" />
        <div className="h-1.5 w-2 bg-[#0C2B85] rounded-full group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );

  return (
    <section id="vision" className="py-24 px-6 bg-[#FCFDFF] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="relative">
              {/* Badge using Brand Red */}
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.3em] text-[#7A1909] uppercase bg-[#7A1909]/5 rounded-full border border-[#7A1909]/10">
                Our Core Identity
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-[#0C2B85] leading-[1.1] mb-6">
                Vision, Mission &  <span className="font-semibold italic">Purpose.</span>
              </h2>
            </div>
         
          
          <div className="flex justify-center gap-2 mt-6">
             <div className="w-16 h-1 bg-[#0C2B85] rounded-full" />
             <div className="w-4 h-1 bg-[#7A1909] rounded-full" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          <VMPCard
            icon={Eye}
            title="Our Vision"
            description="To see God's community transformed globally by a sustainable, multiplying movement of renewed disciples."
          />

          <VMPCard
            icon={Target}
            title="Our Mission"
            description="To make renewed disciples who live out the Gospel, multiply disciples, and serve their communities holistically."
          />
          
          <VMPCard
            icon={Maximize} 
            title="Our Purpose"
            description="To foster spiritual growth and community development, ensuring holistic, long-term impact on people and environments."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
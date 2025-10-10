'use client';

import { Book, Church, Heart, Music, Target, Users, LucideIcon, ArrowRight } from 'lucide-react'
import React from 'react'


interface Ministry {
  icon: LucideIcon;
  title: string;
  description: string;
}


const ministriesData: Ministry[] = [
  { icon: Music, title: 'Music & Media Evangelism', description: 'Writing Gospel-centered songs, organizing worship nights, and using digital media to share Christ’s message broadly.' },
  { icon: Users, title: 'Discipleship Training', description: 'A structured program dedicated to training believers to become fully renewed disciples who serve and multiply within their communities.' },
  { icon: Church, title: 'Church Partnerships & Planting', description: 'Collaborating with local churches to establish new ministry branches and strengthen existing community outreach efforts.' },
  { icon: Heart, title: 'Compassionate Service', description: 'Engaging in holistic community development initiatives to meet physical, emotional, and spiritual needs with Christ-like love.' },
  { icon: Book, title: 'Resource Development', description: 'Creating and distributing high-quality, Gospel-centered media, study guides, and training materials for global use.' },
  { icon: Target, title: 'Strategic Global Outreach', description: 'Building long-term, strategic collaborations with key partners to maximize our collective impact for God\'s Kingdom worldwide.' }
];


const Ministries: React.FC = () => {
  return (
    <section id="ministries" className="py-24 px-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest text-center mb-2">
            Our Work in Action
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Key Areas of Ministry
          </h2>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministriesData.map((ministry, index) => {
            const Icon = ministry.icon; // Component assignment for rendering
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:bg-blue-700">
                  <Icon size={28} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{ministry.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{ministry.description}</p>
                
                {/* Read More Link */}
                <a href={`#${ministry.title.replace(/\s/g, '').toLowerCase()}`} className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Ministries

'use client';

import { ArrowRight, Users } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-2 border-blue-600/20 pb-2 mx-auto block">
          Our Journey & Mission
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column (Text) */}
          <div className="space-y-6">
            <p className="text-xl font-semibold text-blue-600 uppercase tracking-widest">
              Who We Are
            </p>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Driven by Faith, Committed to Community Transformation.
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Tetelestai Community Centered Service began in 2014 EC when five Christian youth gathered 
              for Bible study, prayer, and worship. Deeply moved by the truth of Tetelestai - &quot;It is finished&quot; - 
              they started writing and sharing songs that reflected their foundational faith.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small gathering has grown into a vibrant movement of over 40 members, 
              officially established in 2015 EC (2022/2023 GC). We are committed to creating <b>renewed disciples</b> who are rooted in Christ, empowered by His Spirit, and dedicated to bringing His Kingdom to earth through holistic change.
            </p>

            {/* CTA Link */}
            <a 
              href="#story"
              className="mt-6 inline-flex items-center space-x-3 text-blue-600 font-bold transition-all duration-300 hover:text-blue-800 group"
            >
              <span>Explore Our Full Story and Values</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Visual Column (img/Card) */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder img relevant to the mission */}
            <img 
              src="/bg1.jpg"
              alt="Community serving together"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            {/* Overlay card for key info */}
            <div className="absolute bottom-4 left-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <Users size={28} className="text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">From 5 to Over 40</h4>
                  <p className="text-sm text-gray-600">God&apos;s faithfulness in growing our community since 2007EC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

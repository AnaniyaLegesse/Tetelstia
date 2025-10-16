'use client';

import { Eye, Target, Maximize } from 'lucide-react'
import React from 'react'
import { IconType } from 'react-icons';

const Vision = () => {
  interface VMPCardProps {
  icon: IconType;
  title: string;
  description: string;
}
  // Define a single reusable card component for clarity and consistency
  const VMPCard = ({ icon: Icon, title, description }: VMPCardProps) => (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-t-4 border-blue-600">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section id="vision" className="py-24 px-6 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading aligned with About section */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest text-center mb-2">
            Our Core Identity
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Vision, Mission & Purpose
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Vision Card */}
          <VMPCard
            icon={Eye}
            title="Our Vision"
            description="To see God's community transformed globally by a sustainable, multiplying movement of renewed disciples."
          />

          {/* Mission Card */}
          <VMPCard
            icon={Target}
            title="Our Mission"
            description="To make renewed disciples who live out the Gospel, multiply disciples, and serve their communities holistically."
          />
          
          {/* Purpose Card - Using Maximize icon for growth/holistic impact */}
          <VMPCard
            icon={Maximize} 
            title="Our Purpose"
            description="To foster spiritual growth and community development, ensuring holistic, long-term impact on people and environments."
          />

        </div>
      </div>
    </section>
  )
}

export default Vision;

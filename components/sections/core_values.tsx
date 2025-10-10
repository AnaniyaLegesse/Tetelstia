'use client';

import { ArrowRight, Book, Church, Cross, Heart, Users, ChevronDown, LucideIcon } from 'lucide-react'
import React, { useState } from 'react'

/**
 * Type Definition for a single Core Value object.
 * icon is typed as LucideIcon to ensure it's a valid component from lucide-react.
 */
interface CoreValue {
  icon: LucideIcon;
  title: string;
  verse: string;
  description: string;
}

/**
 * Data for Core Values
 */
const coreValuesData: CoreValue[] = [
  { icon: Book,
    title: 'Supremacy of the Word',
    verse: '[John 1:3] "Through Him all things were made; without Him nothing was made that has been made."  ',
    description: 'The Word of God is our compass, our guide, and our source of life. It defines who we are, shapes what we say, and transforms how we think. As God’s family, we are who we are through His Word, and we build our lives on its unchanging truth.'
   },
  { icon: Heart,
    title: 'Love is Our Foundation',
    verse: '[Ephesians 4:15] "Instead, speaking the truth in love, we will grow to become in every respect the mature body of Him who is the head, that is, Christ."',
    description: 'Love is the heartbeat of everything we do. As Christ loved us, we love others—serving with compassion, speaking truth with grace, and building communities rooted in His love.' 
  },
  { icon: Users,
    title: 'Partners in God’s Purpose/co-workers with God', 
    verse: '[2 Corinthians 5:20] "We are therefore Christ’s ambassadors, as though God were making His appeal through us."', 
    description: 'We are co-workers with God, called to fulfill His purpose and reveal His mystery to the world. Together, we advance His Kingdom by living out His mission with passion and unity.' 
  },
  { icon: Cross, 
    title: 'New Creation in Christ', 
    verse: '[2 Corinthians 5:17] "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" ', 
    description: 'In Christ, we are made new. We know everyone through Christ.' 
  },
  { icon: Church, 
    title: 'Holy Spirit Empowerment', 
    verse: '[Acts 1:8] "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses..."', 
    description: 'We are witnesses for Jesus, called to share His love and truth with the world. Yet, it is the Holy Spirit who transforms lives, renews hearts, and brings lasting change. We are vessels through which He works, but all glory belongs to Him. He is the one who opens hearts, changes lives, and brings about true renewal.'
   },
  { icon: ArrowRight, 
    title: 'The Gospel Mandate: Renewed Disciples Making Renewed Disciples', 
    verse: '[Matthew 28:19] "Therefore go and make disciples of all nations..."', 
    description: 'Being renewed disciples and making renewed disciples is the lifelong mandate Jesus has given us. We are called to live out the Gospel daily, multiplying disciples and reason for transformation in every community.'
   },
  { icon: Users, 
    title: 'Together in purpose/ partners', 
    verse: '[Psalm 133:1] "How good and pleasant it is when God’s people live together in unity!"', 
    description: 'We believe in the power of unity and collaboration. By working together, we strengthen one another, share the grace of God, and amplify our impact for His Kingdom. '
   }
];

/**
 * Props Definition for AccordionItem Component
 */
interface AccordionItemProps {
    value: CoreValue;
    isOpen: boolean;
    toggleAccordion: () => void;
}

/**
 * Reusable Accordion Item Component
 */
const AccordionItem: React.FC<AccordionItemProps> = ({ value, isOpen, toggleAccordion }) => {
  // Use object destructuring for the icon property
  const { icon: Icon } = value; 

  return (
    <div className="border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      
      {/* Accordion Header/Button */}
      <button 
        className={`w-full flex items-center justify-between p-6 transition-all duration-300 ${isOpen ? 'bg-blue-600/10' : 'bg-white hover:bg-gray-50'}`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center space-x-4 text-left">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600' : 'bg-blue-100'}`}>
            <Icon size={20} className={`${isOpen ? 'text-white' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-800' : 'text-gray-900'}`}>
              {value.title}
            </h3>
          </div>
        </div>
        
        <ChevronDown 
          size={24} 
          className={`text-blue-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>

      {/* Accordion Content */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 space-y-3">
            <p className="text-gray-700 text-base leading-relaxed border-b pb-3 border-gray-100">
              {value.description}
            </p>
            <div className="text-sm font-semibold text-blue-600 flex items-center space-x-2">
              <Book size={16} className="text-blue-600" />
              <span>Scriptural Anchor: {value.verse}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * Core Values Section Component (Main)
 */
const CoreValues: React.FC = () => {
  // State to track the index of the currently active (open) accordion item
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // activeIndex is number or null

  const toggleAccordion = (index: number) => {
    // If the clicked item is already open, close it (set null), otherwise open the new one
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="values" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading aligned with About/Vision sections */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest text-center mb-2">
            What Guides Us
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Our Foundational Core Values
          </h2>
        </div>

        {/* Accordion List - Single Column Layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {coreValuesData.map((value, index) => (
            <AccordionItem
              key={index}
              value={value}
              isOpen={activeIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default CoreValues

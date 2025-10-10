import { ChevronRight, Play } from 'lucide-react'
import React from 'react'

// Define a simple keyframe for the motion effect
const style = {
  animation: 'fadeIn 1s ease-out forwards',
};

const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Hero = () => {
  // Inject the keyframes into the document head
  React.useEffect(() => {
    if (!document.getElementById('fadeInKeyframes')) {
      const styleTag = document.createElement('style');
      styleTag.id = 'fadeInKeyframes';
      styleTag.innerHTML = keyframes;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    // 1. Full Height, Background Image, and Dark Overlay
    <section 
      id="home" 
      // Removed 'justify-center' from the flex container to allow content to align left
      className="relative min-h-screen flex items-center p-6" 
      style={{
        backgroundImage: 'url("/bg2.jpg")', // Placeholder for a corporate background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gray-900/70"></div>
      
      {/* Content Container - NOW LEFT-ALIGNED */}
      <div 
        // Removed 'text-center' to allow text to align left by default
        className="relative z-10 container mx-auto max-w-5xl text-white"
        style={style} // Apply motion/fade-in effect to the whole content block
      >
        

        {/* 2. Bold Content Statement */}
        <h1 className="text-5xl sm:text-xl lg:text-5xl font-extrabold leading-none mb-6 max-w-4xl">
          <span className="block">Tetelestai</span>
          <span className="block text-blue-400">Community Centered Service.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-light max-w-3xl mb-10">
          {/* Removed 'mx-auto' so the paragraph aligns left */}
          Empowering renewed disciples to live out the Gospel and bring holistic, sustainable change to their communities worldwide.
        </p>

        {/* 3. CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4"> 
          {/* Removed 'justify-center' to align buttons left */}
          {/* Primary Button */}
          <button className="group w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
            <span>Join Our Mission Today</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary Button */}
          <button className="group w-full sm:w-auto px-10 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
            <Play size={20} className="group-hover:scale-105 transition-transform" />
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
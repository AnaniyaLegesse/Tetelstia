'use client'

import React from 'react'

const cta = () => {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Movement of Renewed Disciples
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of what God is doing through TCCS. Together, we can transform communities 
            with the love of Christ and the power of the Gospel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 font-medium">
              Get Involved Today
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>
  )
}

export default cta
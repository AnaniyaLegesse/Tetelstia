
import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
          <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <a href="#home" className="flex items-center space-x-2">
                    <div className="relative h-[60px] w-[60px]">
                      <Image
                        src="/Tccc.png"
                        alt="TCCS"
                        fill
                        className="object-contain transition-opacity duration-300"
                        sizes="60px"
                        priority={false}
                      />
                    </div>
                </a>
                {/* <span className="text-xl font-bold">TCCS</span> */}
              </div>
              <p className="text-gray-400">
                Tetelestai Community Centered Service - Making renewed disciples who transform communities.
              </p>
            </div>
            
            {[
              {
                title: 'About',
                links: ['Our Story', 'Vision & Mission', 'Core Values', 'Statement of Faith']
              },
              {
                title: 'Ministries',
                links: ['Discipleship', 'Music Evangelism', 'Church Planting', 'Community Service']
              },
              {
                title: 'Connect',
                links: ['Get Involved', 'Prayer Support', 'Contact Us', 'Partnership']
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tetelestai Community Centered Service. All rights reserved.</p>
            <p className="mt-2 text-sm">Proclaiming the finished work of Jesus Christ</p>
          </div>
        </div>
      </footer>
  )
}

export default footer
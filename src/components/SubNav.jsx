import React, { useState, useEffect } from 'react';

export default function SubNav() {
  const [activeSection, setActiveSection] = useState('overview');

  const links = [
    { label: 'Overview', id: 'overview' },
    { label: 'Fitness', id: 'fitness' },
    { label: 'Adventure', id: 'adventure' },
    { label: 'Sleep', id: 'sleep' },
    { label: 'Watch Faces', id: 'watch-faces' },
    { label: 'Heart Health', id: 'heart-health' },
    { label: 'Family Setup', id: 'family-setup' },
    { label: 'Safety', id: 'safety' },
    { label: 'Connectivity', id: 'connectivity' },
    { label: 'Fitness+', id: 'fitness-plus' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-11 z-40 bg-[#ffffff]/80 backdrop-blur-md border-b border-black/[0.08] transition-all">
      <div className="max-w-[1024px] mx-auto px-4 h-13 flex items-center justify-between">
        <a 
          href="#overview" 
          onClick={(e) => { e.preventDefault(); scrollTo('overview'); }}
          className="text-lg md:text-[21px] font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
        >
          Why Apple Watch
        </a>

        <div className="flex items-center space-x-2 md:space-x-5 overflow-x-auto no-scrollbar py-2">
          <div className="hidden lg:flex items-center space-x-6 text-[12px] text-[#6e6e73]">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-[#1d1d1f] font-semibold' 
                    : 'hover:text-[#0071e3]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('why-buy')}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] font-medium px-3.5 py-1 rounded-full transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

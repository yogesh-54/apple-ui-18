import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const [selectedWatch, setSelectedWatch] = useState(0);

  // Gallery of floating hero watches representing the iconic Apple Watch collage
  const heroWatches = [
    { name: 'Series 10 Starlight', bandColor: '#e3dfd7', caseColor: '#e3e4e6', screenType: 'activity' },
    { name: 'Ultra 2 Titanium Orange', bandColor: '#ff671f', caseColor: '#c7beaf', screenType: 'ultra', type: 'ultra' },
    { name: 'Series 10 Midnight', bandColor: '#1c2530', caseColor: '#2b2d35', screenType: 'workout' },
    { name: 'Series 10 Lavender', bandColor: '#d1c7e8', caseColor: '#e3e4e6', screenType: 'analog' },
    { name: 'Series 10 Product(RED)', bandColor: '#e11d48', caseColor: '#b91c1c', screenType: 'ecg' },
    { name: 'SE Sunshine Yellow', bandColor: '#facc15', caseColor: '#d1d5db', screenType: 'schooltime' },
    { name: 'Series 10 Mint Green', bandColor: '#86efac', caseColor: '#e3e4e6', screenType: 'activity' },
    { name: 'Ultra 2 Ocean Blue', bandColor: '#0284c7', caseColor: '#c7beaf', screenType: 'ultra', type: 'ultra' },
    { name: 'Series 10 Deep Navy', bandColor: '#1e3a8a', caseColor: '#1e293b', screenType: 'sleep' },
    { name: 'SE Pure White', bandColor: '#f8fafc', caseColor: '#e2e8f0', screenType: 'analog' },
  ];

  return (
    <section id="overview" className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-b from-[#fbfbfd] via-[#f5f5f7] to-[#ffffff]">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/50 via-rose-100/40 to-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Watch Constellation Grid */}
        <div className="relative py-6 mb-12">
          {/* Subtle grid of watches matching the Figma layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center items-center">
            {heroWatches.map((watch, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedWatch(idx)}
                className={`transition-all duration-500 cursor-pointer transform ${
                  selectedWatch === idx 
                    ? 'scale-105 z-20 -translate-y-2' 
                    : 'opacity-90 hover:opacity-100 hover:scale-105'
                }`}
              >
                <WatchRenderer 
                  type={watch.type || 'series'}
                  bandColor={watch.bandColor}
                  caseColor={watch.caseColor}
                  screenType={watch.screenType}
                  size="sm"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs font-medium text-[#86868b]">
            Shown: Apple Watch Series, Apple Watch Ultra 2, and Apple Watch SE.
          </div>
        </div>

        {/* Hero Copy */}
        <div className="max-w-[850px] mx-auto mt-6">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-[#6e6e73] mb-3">
            Why Apple Watch
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#1d1d1f] tracking-tight leading-[1.06] mb-6">
            Extremely insightful.<br />
            <span className="text-[#1d1d1f]">Exceptionally powerful.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-[22px] leading-relaxed text-[#424245] max-w-[680px] mx-auto font-normal mb-8">
            A healthy amount of innovation. It puts fitness, health, safety, and connectivity right on your wrist — in a way nothing else can.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#fitness"
              className="inline-flex items-center space-x-2 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
            >
              <span>Explore features</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => alert('Watch the film: Discover the power and innovation behind Apple Watch.')}
              className="inline-flex items-center space-x-2 bg-black/[0.05] hover:bg-black/[0.08] text-[#1d1d1f] font-medium text-sm sm:text-base px-5 py-3 rounded-full transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#0071e3]" />
              <span>Watch the film</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

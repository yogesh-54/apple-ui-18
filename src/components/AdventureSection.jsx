import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Compass, Shield, Mountain, Droplet, Sun, Moon, Volume2 } from 'lucide-react';

export default function AdventureSection() {
  const [nightMode, setNightMode] = useState(false);
  const [ejectingWater, setEjectingWater] = useState(false);

  const handleEjectWater = () => {
    setEjectingWater(true);
    setTimeout(() => {
      setEjectingWater(false);
    }, 2400);
  };

  return (
    <section id="adventure" className="py-24 bg-[#000000] text-white overflow-hidden relative">
      {/* Subtle orange aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6319]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#ff6319] block mb-2">
            Adventure & Extreme Sports
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-[800px] leading-[1.1]">
            Engineered for the extremes.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#86868b] max-w-[680px]">
            Meet Apple Watch Ultra. Built with aerospace-grade titanium, precision dual-frequency GPS, up to 36 hours of battery life, and specialized bands for every outdoor discipline.
          </p>
        </div>

        {/* Ultra Feature Card */}
        <div className="bg-[#161617] rounded-[36px] p-8 md:p-14 border border-[#2c2c2e] mb-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-[460px]">
            <div className="flex items-center space-x-3">
              <span className="bg-[#ff6319] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Titanium 49mm
              </span>
              <span className="text-xs text-[#86868b] font-medium">100m Water Resistant</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Wayfinder face with Night Mode.
            </h3>
            <p className="text-[#a1a1a6] leading-relaxed">
              Designed specifically for the larger Apple Watch Ultra display, the Wayfinder dial includes a live compass and space for up to eight complications. Turn the Digital Crown to activate Night Mode for vivid red visibility in low light.
            </p>

            {/* Interactive Night Mode Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setNightMode(!nightMode)}
                className={`inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  nightMode 
                    ? 'bg-[#ff3b30] text-black ring-4 ring-[#ff3b30]/30' 
                    : 'bg-[#2c2c2e] text-white hover:bg-[#3a3a3c]'
                }`}
              >
                {nightMode ? <Moon className="w-4 h-4 fill-current" /> : <Sun className="w-4 h-4" />}
                <span>{nightMode ? 'Night Mode: ON (Red Phosphor)' : 'Toggle Night Mode'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2c2c2e]">
              <div>
                <span className="text-xl font-black text-[#ff6319] block">L1 + L5 GPS</span>
                <span className="text-xs text-[#86868b]">Precision Dual-Frequency</span>
              </div>
              <div>
                <span className="text-xl font-black text-white block">86-Decibel</span>
                <span className="text-xs text-[#86868b]">Emergency Siren (180m)</span>
              </div>
            </div>
          </div>

          {/* Ultra Watch Mockup with Day/Night State */}
          <div className="relative">
            <div className={`transition-all duration-500 ${nightMode ? 'filter contrast-125' : ''}`}>
              <WatchRenderer 
                type="ultra"
                bandColor={nightMode ? '#ff3b30' : '#ff671f'}
                caseColor="#c7beaf"
                screenType="ultra"
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Water Resistance & Swimproof Card (matching the blue water section in Figma) */}
        <div id="water-resistance" className="bg-gradient-to-br from-[#0c2340] to-[#05111f] rounded-[36px] p-8 md:p-14 border border-[#1e3a8a]/40 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-[500px] space-y-4">
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Droplet className="w-4 h-4 fill-current" />
              <span>Water Resistance</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Water resistant 50m.<br />
              <span className="text-cyan-300">Ready for every splash.</span>
            </h3>

            <p className="text-cyan-100/80 leading-relaxed text-base">
              Apple Watch is rated swimproof for pool or ocean swimming, surfing, or water balloon fights. And when you exit the water, the speaker vibrates sound waves to clear out remaining droplets automatically.
            </p>

            {/* Interactive Water Ejection Button */}
            <div className="pt-2">
              <button
                onClick={handleEjectWater}
                disabled={ejectingWater}
                className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs px-5 py-3 rounded-full transition-all active:scale-95 cursor-pointer shadow-lg shadow-cyan-500/25"
              >
                <Volume2 className={`w-4 h-4 ${ejectingWater ? 'animate-bounce' : ''}`} />
                <span>{ejectingWater ? 'Ejecting Water (Buzzing...)' : 'Test Speaker Water Ejection'}</span>
              </button>
            </div>
          </div>

          {/* Animated Water Graphic */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className={`absolute inset-0 rounded-full border-2 border-cyan-400/30 transition-all duration-700 ${
              ejectingWater ? 'scale-125 opacity-100 animate-ping' : 'scale-100 opacity-40'
            }`}></div>
            <div className={`w-48 h-48 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/40 flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 ${
              ejectingWater ? 'scale-105' : ''
            }`}>
              <Droplet className={`w-12 h-12 text-cyan-400 mb-2 ${ejectingWater ? 'animate-bounce' : ''}`} />
              <span className="text-2xl font-black text-white">50 METERS</span>
              <span className="text-[10px] text-cyan-300 font-semibold tracking-wider uppercase mt-1">
                ISO standard 22810:2010
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

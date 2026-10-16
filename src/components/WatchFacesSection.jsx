import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Palette, Sparkles, Layers, Sliders } from 'lucide-react';

export default function WatchFacesSection() {
  const [selectedFace, setSelectedFace] = useState('modular');
  const [selectedBand, setSelectedBand] = useState('#2563eb');

  const faces = [
    { id: 'modular', name: 'Modular Ultra', category: 'Information' },
    { id: 'typography', name: 'Typography', category: 'Bold Numbers' },
    { id: 'nike', name: 'Nike Bounce', category: 'Athletic' },
    { id: 'california', name: 'California', category: 'Heritage' },
    { id: 'solar', name: 'Solar Analog', category: 'Astronomy' },
  ];

  const bands = [
    { name: 'Pacific Blue', hex: '#2563eb', material: 'Sport Loop' },
    { name: 'Starlight', hex: '#e2dfd5', material: 'Solo Loop' },
    { name: 'Product(RED)', hex: '#dc2626', material: 'Sport Band' },
    { name: 'Pine Green', hex: '#15803d', material: 'Braided Solo' },
    { name: 'Midnight', hex: '#0f172a', material: 'Milanese Loop' },
    { name: 'Sunflower', hex: '#eab308', material: 'Sport Band' },
    { name: 'Desert Clay', hex: '#c2410c', material: 'Alpine Loop' },
  ];

  // Custom face renderers
  const renderCustomFace = () => {
    switch (selectedFace) {
      case 'modular':
        return (
          <div className="w-full h-full p-3 bg-black flex flex-col justify-between text-left">
            <div className="flex justify-between items-center text-[10px] font-bold">
              <span className="text-[#00f0ff]">37° CUPERTINO</span>
              <span className="text-white">09:41</span>
            </div>
            <div className="bg-zinc-900/80 p-2 rounded-xl border border-zinc-800">
              <span className="text-[9px] text-[#fa114f] uppercase font-bold block">Heart Rate</span>
              <span className="text-lg font-black text-white">68 BPM</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-bold">
              <div className="bg-zinc-900 p-1 rounded-lg text-[#a1ff00]">RING 85%</div>
              <div className="bg-zinc-900 p-1 rounded-lg text-[#38bdf8]">WIND 8MPH</div>
              <div className="bg-zinc-900 p-1 rounded-lg text-[#fb923c]">UV 4 MOD</div>
            </div>
          </div>
        );
      case 'typography':
        return (
          <div className="w-full h-full p-2 bg-gradient-to-br from-indigo-950 to-black flex items-center justify-center text-center">
            <div className="space-y-0 leading-none">
              <div className="text-4xl font-black text-white tracking-tighter" style={{ color: selectedBand }}>09</div>
              <div className="text-4xl font-black text-white tracking-tighter">41</div>
            </div>
          </div>
        );
      case 'nike':
        return (
          <div className="w-full h-full p-3 bg-black flex flex-col justify-between items-center">
            <div className="text-[10px] font-black text-[#a1ff00] uppercase tracking-widest">
              JUST DO IT.
            </div>
            <div className="text-4xl font-black text-[#a1ff00] italic transform -skew-x-6">
              09:41
            </div>
            <div className="text-[9px] text-zinc-400 font-bold">
              STREAK: 14 DAYS
            </div>
          </div>
        );
      case 'california':
        return (
          <div className="w-full h-full p-3 bg-[#0a0a0c] flex items-center justify-center relative">
            <div className="w-24 h-24 rounded-full border border-zinc-800 flex items-center justify-center">
              <span className="absolute top-1 text-[10px] font-serif font-bold text-amber-200">XII</span>
              <span className="absolute right-1 text-[10px] font-serif font-bold text-amber-200">3</span>
              <span className="absolute bottom-1 text-[10px] font-serif font-bold text-amber-200">VI</span>
              <span className="absolute left-1 text-[10px] font-serif font-bold text-amber-200">9</span>
              <div className="w-1 h-7 bg-white rounded-full origin-bottom bottom-12 -rotate-30 absolute"></div>
              <div className="w-0.5 h-10 bg-amber-400 rounded-full origin-bottom bottom-12 rotate-45 absolute"></div>
            </div>
          </div>
        );
      case 'solar':
        return (
          <div className="w-full h-full p-3 bg-gradient-to-b from-sky-900 via-amber-700/50 to-black flex flex-col justify-between items-center">
            <div className="text-[10px] text-amber-300 font-semibold">GOLDEN HOUR</div>
            <div className="w-14 h-14 rounded-full border-2 border-amber-400/80 bg-amber-500/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div className="text-xs font-bold text-white">Sunset in 2h 14m</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="watch-faces" className="py-24 bg-[#ffffff] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#0071e3] block mb-2">
            Watch Faces & Bands
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Endless faces.<br />
            Endless styles.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Express yourself with faces designed for workouts, information, or pure style. Swap bands in seconds to match what you're wearing or where you're going.
          </p>
        </div>

        {/* Interactive Customizer Studio */}
        <div className="bg-[#f5f5f7] rounded-[36px] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Controls */}
          <div className="space-y-8 max-w-[480px]">
            {/* Step 1: Choose Watch Face */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-3">
                <Layers className="w-4 h-4 text-[#0071e3]" />
                <span>Select a Watch Face</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {faces.map((face) => (
                  <button
                    key={face.id}
                    onClick={() => setSelectedFace(face.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedFace === face.id
                        ? 'bg-[#1d1d1f] text-white shadow-sm'
                        : 'bg-white text-[#1d1d1f] hover:bg-gray-100 border border-black/[0.06]'
                    }`}
                  >
                    {face.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Band Color */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-3">
                <Palette className="w-4 h-4 text-[#0071e3]" />
                <span>Select Band Color</span>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                {bands.map((b) => (
                  <button
                    key={b.hex}
                    onClick={() => setSelectedBand(b.hex)}
                    title={`${b.name} (${b.material})`}
                    className={`w-9 h-9 rounded-full transition-all cursor-pointer shadow-sm relative ${
                      selectedBand === b.hex ? 'ring-2 ring-[#0071e3] ring-offset-2 scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: b.hex }}
                  />
                ))}
              </div>
              <div className="text-xs text-[#86868b] mt-2">
                Selected: <span className="font-semibold text-[#1d1d1f]">{bands.find(b => b.hex === selectedBand)?.name}</span> • {bands.find(b => b.hex === selectedBand)?.material}
              </div>
            </div>

            <p className="text-xs text-[#6e6e73] leading-relaxed pt-2 border-t border-black/[0.08]">
              Easily customize complications with sunrise/sunset, UV index, blood oxygen, Compass waypoints, and your favorite apps right on the dial.
            </p>
          </div>

          {/* Live Watch Preview */}
          <div className="relative p-6 flex flex-col items-center justify-center">
            <WatchRenderer 
              type="series"
              bandColor={selectedBand}
              caseColor="#e3e4e6"
              size="lg"
              customContent={renderCustomFace()}
            />
            <span className="text-xs font-semibold text-[#86868b] mt-6">
              Interactive Preview: Apple Watch Series 10
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

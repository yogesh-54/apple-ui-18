import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Play, Sparkles, Flame, Heart, Check, Users } from 'lucide-react';

export default function FitnessPlusSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const workouts = [
    { title: 'HIIT with Bakari', time: '20 min', music: 'Upbeat Anthems', intensity: 'High' },
    { title: 'Strength with Gregg', time: '30 min', music: 'Rock & Hip-Hop', intensity: 'Medium' },
    { title: 'Yoga with Jessica', time: '45 min', music: 'Chill Vibes', intensity: 'Moderate' },
    { title: 'Kickboxing with Nez', time: '20 min', music: 'Pure Energy', intensity: 'High' },
  ];

  return (
    <section id="fitness-plus" className="py-24 bg-[#0a0a0c] text-white overflow-hidden relative border-t border-zinc-800">
      {/* Neon green aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#a1ff00]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#a1ff00] block mb-2">
            Fitness+
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-[800px] leading-[1.1]">
            The ultimate fitness experience.<br />
            Powered by Apple Watch.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#a1a1a6] max-w-[650px]">
            12 workout types, from HIIT to Yoga. Meditations to restore. Live personal metrics from Apple Watch synced right onto your screen.
          </p>
        </div>

        {/* Video / TV Screen Showcase with Live Metrics Overlay */}
        <div className="bg-[#161617] rounded-[36px] p-6 md:p-10 border border-[#2c2c2e] mb-12 shadow-2xl relative overflow-hidden">
          {/* Simulated iPad / TV Frame */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-[500px] bg-gradient-to-br from-zinc-900 via-neutral-900 to-black flex items-center justify-center border border-zinc-700/60 shadow-inner">
            {/* Visual background artwork representing studio workout */}
            <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{
              backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(161,255,0,0.2) 0%, transparent 60%)'
            }}>
              <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#a1ff00] mb-2">
                  Live Workout • HIIT with Bakari
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-[500px]">
                  Sprint Intervals & Core
                </h3>
              </div>
            </div>

            {/* Apple Watch Live Metrics Overlay (Burn Bar & Heart Rate) */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md p-3 rounded-2xl border border-white/10 space-y-2 text-left">
              <div className="flex items-center space-x-2 text-[#fa114f] font-bold text-xs">
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span className="text-sm font-black text-white">158 BPM</span>
              </div>
              <div className="flex items-center space-x-2 text-[#ff9500] font-bold text-xs">
                <Flame className="w-4 h-4 fill-current" />
                <span className="text-sm font-black text-white">385 KCAL</span>
              </div>
              <div className="text-[10px] text-zinc-400">
                TIME: <span className="text-white font-bold">18:24</span>
              </div>
            </div>

            {/* Burn Bar (Apple Fitness+ exclusive feature) */}
            <div className="absolute bottom-4 inset-x-4 sm:inset-x-auto sm:left-4 sm:w-72 bg-black/75 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center text-[10px] font-bold mb-1">
                <span className="text-[#a1ff00] uppercase">Burn Bar</span>
                <span className="text-white">Ahead of Pack 🔥</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-700 overflow-hidden relative">
                <div className="h-full w-[82%] bg-gradient-to-r from-emerald-400 to-[#a1ff00] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Offer Banner */}
          <div className="mt-8 pt-6 border-t border-[#2c2c2e] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-white block">
                Get 3 months of Apple Fitness+ free when you buy an Apple Watch.<sup>1</sup>
              </span>
              <span className="text-xs text-[#86868b]">
                $9.99/month after free trial. Share with up to 5 family members.
              </span>
            </div>
            <button className="bg-[#a1ff00] hover:bg-[#8ee600] text-black font-bold text-xs px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-md">
              Try it free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

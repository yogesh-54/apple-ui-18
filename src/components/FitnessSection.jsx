import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Flame, Timer, Activity, TrendingUp, Compass, Award, ChevronRight } from 'lucide-react';

export default function FitnessSection() {
  const [activeZone, setActiveZone] = useState(3);
  const [pacerDelta, setPacerDelta] = useState('+14s');

  const hrZones = [
    { zone: 1, range: '< 120 BPM', label: 'Warm Up', color: '#60a5fa' },
    { zone: 2, range: '120 - 138 BPM', label: 'Fat Burn', color: '#34d399' },
    { zone: 3, range: '139 - 156 BPM', label: 'Aerobic', color: '#facc15' },
    { zone: 4, range: '157 - 174 BPM', label: 'Anaerobic', color: '#fb923c' },
    { zone: 5, range: '> 175 BPM', label: 'Peak / Redline', color: '#f87171' },
  ];

  return (
    <section id="fitness" className="py-24 bg-[#ffffff] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#0071e3] block mb-2">
            Fitness
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Move. Exercise. Stand.<br />
            Reach your goals, three rings at a time.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Activity rings track your daily activity, including your active calories, total steps, and workouts. Push yourself to close your rings every day.
          </p>
        </div>

        {/* Hero Fitness Device Showcases */}
        <div className="bg-[#f5f5f7] rounded-[32px] p-8 md:p-14 mb-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-[420px]">
            <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold text-[#1d1d1f]">
              <span className="w-2 h-2 rounded-full bg-[#fa114f]"></span>
              <span>Move</span>
              <span className="w-2 h-2 rounded-full bg-[#a1ff00] ml-2"></span>
              <span>Exercise</span>
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] ml-2"></span>
              <span>Stand</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
              Three rings. One goal: A healthier day.
            </h3>
            <p className="text-[#6e6e73] leading-relaxed text-base">
              The Move ring tracks active calories burned. The Exercise ring records your brisk activity. And the Stand ring reminds you to stand and move around for at least 1 minute in 12 different hours.
            </p>

            <div className="pt-2 flex items-center space-x-6 text-sm font-semibold">
              <div className="text-left">
                <span className="text-2xl font-bold text-[#fa114f] block">620</span>
                <span className="text-xs text-[#86868b]">CAL GOAL</span>
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold text-[#a1ff00] block">45</span>
                <span className="text-xs text-[#86868b]">MINUTES</span>
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold text-[#00f0ff] block">12/12</span>
                <span className="text-xs text-[#86868b]">HOURS</span>
              </div>
            </div>
          </div>

          {/* Dual Watch Mockups */}
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <WatchRenderer 
              type="series"
              bandColor="#93c5fd"
              caseColor="#e2e8f0"
              screenType="activity"
              size="md"
            />
            <WatchRenderer 
              type="series"
              bandColor="#cbd5e1"
              caseColor="#334155"
              screenType="workout"
              size="md"
            />
          </div>
        </div>

        {/* Feature Grid matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Workout App & Heart Rate Zones */}
          <div className="bg-[#f5f5f7] rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wide">
                Workout App
              </span>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mt-1 mb-3">
                Heart Rate Zones. Know how hard you're working.
              </h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Automatically calculated and personalized using your health data, or create them manually to track training intensity.
              </p>

              {/* Interactive Zone visualizer */}
              <div className="bg-black text-white p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-[#a1ff00]">ZONE TRAINING</span>
                  <span>CURRENT: ZONE {activeZone}</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 h-12 items-end">
                  {hrZones.map((z) => (
                    <button
                      key={z.zone}
                      onClick={() => setActiveZone(z.zone)}
                      className={`rounded-md transition-all cursor-pointer flex flex-col justify-end p-1 ${
                        activeZone === z.zone ? 'ring-2 ring-white scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ 
                        backgroundColor: z.color,
                        height: `${30 + z.zone * 14}%`
                      }}
                    >
                      <span className="text-[9px] font-black text-black">Z{z.zone}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between text-[11px] text-zinc-400 pt-1">
                  <span>Target: {hrZones[activeZone - 1].label}</span>
                  <span className="text-white font-bold">{hrZones[activeZone - 1].range}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#0071e3]">
              <span>Learn about Workout views</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Custom Workouts & Pacer with Route Graph */}
          <div className="bg-[#f5f5f7] rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wide">
                Training Tools
              </span>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mt-1 mb-3">
                Pacer and Race Route. Compete against yourself.
              </h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Receive pace alerts to know if you're on track. If it's an outdoor run or cycle you do frequently, race against your last or best result.
              </p>

              {/* Route & Elevation Profile Card */}
              <div className="bg-[#1c1c1e] text-white p-5 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#30d158]"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">Pacer Active</span>
                  </div>
                  <span className="text-xs font-bold text-[#30d158] bg-[#30d158]/20 px-2.5 py-0.5 rounded-full">
                    {pacerDelta} Ahead
                  </span>
                </div>

                {/* Simulated Green Route Waveform */}
                <div className="relative h-20 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 80">
                    <defs>
                      <linearGradient id="routeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#30d158" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#30d158" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 55 Q 50 15 90 40 T 170 25 T 230 50 T 290 20"
                      fill="none"
                      stroke="#30d158"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 55 Q 50 15 90 40 T 170 25 T 230 50 T 290 20 L 290 80 L 10 80 Z"
                      fill="url(#routeGrad)"
                    />
                    {/* Runner Position pin */}
                    <circle cx="170" cy="25" r="5" fill="#ffffff" stroke="#30d158" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] text-zinc-400 mt-2 font-medium">
                  <span>Start • Marina Bay</span>
                  <span>Dist: 7.42 KM</span>
                  <span>Finish: 10 KM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#0071e3]">
              <span>Explore Race Route</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card 3: Fitness app on iPhone */}
        <div className="bg-[#f5f5f7] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[480px]">
            <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wide">
              Fitness App on iPhone
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-1 mb-4">
              All your progress in one place.
            </h3>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              Track workout history, view detailed trend arrows for metrics like cardio fitness, walking speed, and distance, and celebrate your milestone award badges.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold text-[#1d1d1f]">Monthly Badges</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-bold text-[#1d1d1f]">Activity Trends</span>
              </div>
            </div>
          </div>

          {/* iPhone Mockup Preview */}
          <div className="w-[260px] bg-black p-3 rounded-[40px] shadow-2xl border-4 border-[#3a3a3c] text-white">
            <div className="w-24 h-4 bg-black mx-auto rounded-b-xl mb-2"></div>
            <div className="p-3 bg-[#1c1c1e] rounded-[28px] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold">Summary</span>
                <span className="text-[#30d158] text-[10px]">Today</span>
              </div>
              <div className="bg-[#2c2c2e] p-2.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 block">Activity</span>
                  <span className="text-sm font-bold text-white">640 / 600 CAL</span>
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-[#fa114f] flex items-center justify-center text-[9px] font-black">
                  106%
                </div>
              </div>
              <div className="bg-[#2c2c2e] p-2.5 rounded-xl space-y-1">
                <div className="flex justify-between text-[10px] text-zinc-400">
                  <span>Outdoor Cycle</span>
                  <span>Yesterday</span>
                </div>
                <div className="text-xs font-bold text-[#30d158]">18.4 KM • 48:12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

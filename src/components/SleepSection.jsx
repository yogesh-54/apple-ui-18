import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Moon, Bed, Clock, Sparkles } from 'lucide-react';

export default function SleepSection() {
  const [selectedStage, setSelectedStage] = useState('all');

  const sleepStages = [
    { name: 'Awake', duration: '28m', pct: 6, color: '#f59e0b', desc: 'Brief natural awakenings during sleep' },
    { name: 'REM', duration: '1h 52m', pct: 24, color: '#bf5af2', desc: 'Essential for learning, memory, and vivid dreams' },
    { name: 'Core', duration: '4h 12m', pct: 54, color: '#5e5ce6', desc: 'The bedrock of physical recovery and cellular repair' },
    { name: 'Deep', duration: '1h 10m', pct: 16, color: '#0a84ff', desc: 'Restorative phase for muscles and immune function' },
  ];

  return (
    <section id="sleep" className="py-24 bg-[#080811] text-white overflow-hidden relative border-t border-[#1d1d29]">
      {/* Indigo sleep ambience glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#5e5ce6]/12 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#bf5af2] block mb-2">
            Sleep
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-[800px] leading-[1.1]">
            Sleep stages.<br />
            Get insights into your night.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#a1a1a6] max-w-[650px]">
            The Sleep app doesn't just track your time in bed. It uses data from the accelerometer and heart rate sensor to estimate when you're in REM, Core, or Deep sleep.
          </p>
        </div>

        {/* Sleep Device Showcase */}
        <div className="bg-[#121324] rounded-[36px] p-8 md:p-14 border border-[#232545] flex flex-col lg:flex-row items-center justify-between gap-12 mb-8">
          {/* Watch mockup on left */}
          <div className="flex-shrink-0">
            <WatchRenderer 
              type="series"
              bandColor="#312e81"
              caseColor="#1e1b4b"
              screenType="sleep"
              size="lg"
            />
          </div>

          {/* Interactive Sleep Stages Dashboard (iPhone Health mockup) */}
          <div className="flex-1 w-full max-w-[540px] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#232545]">
              <div className="flex items-center space-x-2.5">
                <Moon className="w-5 h-5 text-[#bf5af2]" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Sleep Breakdown</span>
              </div>
              <span className="text-xs font-semibold text-[#86868b]">Last Night • 7h 42m</span>
            </div>

            {/* Stacked Percentage Bar */}
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-zinc-800">
              {sleepStages.map((stage) => (
                <div 
                  key={stage.name}
                  onClick={() => setSelectedStage(stage.name)}
                  style={{ width: `${stage.pct}%`, backgroundColor: stage.color }}
                  className="h-full transition-all cursor-pointer hover:opacity-80"
                  title={`${stage.name}: ${stage.duration}`}
                />
              ))}
            </div>

            {/* Stage Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sleepStages.map((stage) => (
                <button
                  key={stage.name}
                  onClick={() => setSelectedStage(stage.name)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedStage === stage.name 
                      ? 'bg-[#1e2040] border-[#bf5af2] ring-1 ring-[#bf5af2]' 
                      : 'bg-[#181a33] border-[#232545] hover:border-[#383a66]'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }}></span>
                    <span className="text-xs font-bold text-zinc-300">{stage.name}</span>
                  </div>
                  <div className="text-base font-extrabold text-white">{stage.duration}</div>
                  <div className="text-[10px] text-zinc-400">{stage.pct}% of night</div>
                </button>
              ))}
            </div>

            {/* Explanatory description card */}
            <div className="bg-[#181a33]/80 p-4 rounded-2xl border border-[#232545]/60 text-xs text-zinc-300 leading-relaxed">
              <span className="font-bold text-[#bf5af2] mr-1">
                {selectedStage === 'all' ? 'Sleep Stage Insights:' : `${selectedStage} Sleep:`}
              </span>
              {selectedStage === 'all' 
                ? 'Click on any sleep stage above to view how Apple Watch analyzes your nocturnal recovery cycles.'
                : sleepStages.find(s => s.name === selectedStage)?.desc}
            </div>

            <div className="flex items-center space-x-6 text-xs text-[#86868b] pt-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#bf5af2]" />
                <span>Consistent Bedtime: 11:15 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="w-4 h-4 text-[#5e5ce6]" />
                <span>Resting Heart Rate: 54 BPM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

// Highly customizable, realistic Apple Watch & Ultra vector mockup
export default function WatchRenderer({
  type = 'series', // 'series' | 'ultra' | 'se'
  bandColor = '#a2c4c9',
  caseColor = '#e3e4e6',
  screenType = 'activity',
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  customContent = null,
  active = true
}) {
  const sizeMap = {
    sm: { w: 140, h: 175, radius: 34, bezeled: 6 },
    md: { w: 200, h: 250, radius: 46, bezeled: 8 },
    lg: { w: 260, h: 325, radius: 56, bezeled: 10 },
    xl: { w: 320, h: 400, radius: 68, bezeled: 12 },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isUltra = type === 'ultra';

  return (
    <div className="relative inline-flex flex-col items-center justify-center select-none group">
      {/* Top Band */}
      <div 
        className="w-[58%] h-12 md:h-16 rounded-t-xl transition-all duration-300 relative shadow-inner overflow-hidden -mb-2"
        style={{ 
          backgroundColor: bandColor,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.18), transparent 30%, transparent 70%, rgba(0,0,0,0.18))'
        }}
      >
        {/* Band Texture detail */}
        <div className="absolute inset-x-0 bottom-1 flex justify-center space-x-1 opacity-25">
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
        </div>
      </div>

      {/* Watch Body / Case */}
      <div 
        className={`relative z-10 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] ${
          isUltra ? 'border-2 border-[#b5aba0]' : ''
        }`}
        style={{
          width: `${currentSize.w}px`,
          height: `${currentSize.h}px`,
          borderRadius: `${isUltra ? currentSize.radius * 0.9 : currentSize.radius}px`,
          backgroundColor: isUltra ? '#c7beaf' : caseColor,
          boxShadow: isUltra 
            ? '0 20px 40px -10px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(0,0,0,0.4)'
            : '0 20px 40px -10px rgba(0,0,0,0.35), inset 0 2px 5px rgba(255,255,255,0.8), inset 0 -3px 6px rgba(0,0,0,0.35)',
        }}
      >
        {/* Digital Crown (Right) */}
        <div 
          className="absolute -right-2 top-[24%] w-3 h-10 rounded-r-md border border-black/30 shadow-md"
          style={{
            background: isUltra 
              ? 'repeating-linear-gradient(90deg, #b0a495 0px, #e8dfd3 2px, #8c7e6c 4px)' 
              : 'repeating-linear-gradient(90deg, #d1d5db 0px, #ffffff 2px, #9ca3af 4px)'
          }}
        >
          {isUltra && <div className="absolute inset-y-1.5 left-0.5 w-1 rounded-sm bg-[#ff6319]"></div>}
        </div>

        {/* Side Button (Right) */}
        <div 
          className="absolute -right-1.5 top-[58%] w-2 h-12 rounded-r-sm border border-black/20"
          style={{ backgroundColor: isUltra ? '#b0a495' : caseColor }}
        ></div>

        {/* Action Button for Ultra (Left) */}
        {isUltra && (
          <div className="absolute -left-2 top-[32%] w-2.5 h-12 rounded-l-md bg-[#ff6319] border border-[#d44a07] shadow-sm flex items-center justify-center">
            <div className="w-0.5 h-6 bg-[#ff985f] rounded-full"></div>
          </div>
        )}

        {/* Screen Bezel and Display */}
        <div 
          className="w-[88%] h-[90%] bg-black overflow-hidden relative flex flex-col justify-between text-white"
          style={{
            borderRadius: `${currentSize.radius - 8}px`,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 16px rgba(0,0,0,0.9)'
          }}
        >
          {/* Subtle OLED Glass Reflection */}
          <div className="absolute -top-12 -left-12 w-36 h-36 bg-gradient-to-br from-white/10 to-transparent rounded-full pointer-events-none transform rotate-12"></div>

          {/* Render Custom or Predefined Screens */}
          {customContent ? (
            customContent
          ) : screenType === 'activity' ? (
            <ActivityScreen />
          ) : screenType === 'workout' ? (
            <WorkoutScreen />
          ) : screenType === 'ultra' ? (
            <UltraWayfinderScreen />
          ) : screenType === 'sleep' ? (
            <SleepScreen />
          ) : screenType === 'ecg' ? (
            <ECGScreen />
          ) : screenType === 'schooltime' ? (
            <SchooltimeScreen />
          ) : (
            <AnalogFaceScreen color={bandColor} />
          )}
        </div>
      </div>

      {/* Bottom Band */}
      <div 
        className="w-[58%] h-12 md:h-16 rounded-b-xl transition-all duration-300 relative shadow-inner overflow-hidden -mt-2"
        style={{ 
          backgroundColor: bandColor,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.18), transparent 30%, transparent 70%, rgba(0,0,0,0.18))'
        }}
      >
        <div className="absolute inset-x-0 top-1.5 flex justify-center space-x-1 opacity-25">
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
          <div className="w-1.5 h-3 rounded-full bg-black/40"></div>
        </div>
      </div>
    </div>
  );
}

// Sub-screens for Apple Watch
function ActivityScreen() {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between items-center bg-black">
      <div className="w-full flex justify-between items-center text-[10px] text-zinc-400 font-medium">
        <span>09:41</span>
        <span className="text-[#fa114f] font-semibold">MOVE</span>
      </div>

      {/* Concentric Rings */}
      <div className="relative w-28 h-28 flex items-center justify-center my-auto">
        {/* Move Ring (Red) */}
        <svg className="absolute w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" stroke="#4a0418" strokeWidth="9" fill="none" />
          <circle 
            cx="50" cy="50" r="42" 
            stroke="#fa114f" strokeWidth="9" fill="none" 
            strokeDasharray="264" strokeDashoffset="45" 
            strokeLinecap="round" 
            className="filter drop-shadow-[0_0_4px_#fa114f]"
          />
        </svg>

        {/* Exercise Ring (Green) */}
        <svg className="absolute w-22 h-22 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" stroke="#003d15" strokeWidth="10" fill="none" />
          <circle 
            cx="50" cy="50" r="38" 
            stroke="#a1ff00" strokeWidth="10" fill="none" 
            strokeDasharray="239" strokeDashoffset="60" 
            strokeLinecap="round" 
            className="filter drop-shadow-[0_0_4px_#a1ff00]"
          />
        </svg>

        {/* Stand Ring (Cyan) */}
        <svg className="absolute w-16 h-16 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="34" stroke="#002d38" strokeWidth="12" fill="none" />
          <circle 
            cx="50" cy="50" r="34" 
            stroke="#00f0ff" strokeWidth="12" fill="none" 
            strokeDasharray="213" strokeDashoffset="75" 
            strokeLinecap="round" 
            className="filter drop-shadow-[0_0_4px_#00f0ff]"
          />
        </svg>

        <div className="text-center z-10">
          <div className="text-[10px] text-zinc-400">CAL</div>
          <div className="text-xs font-bold text-white tracking-tight">540</div>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 text-center text-[9px] font-semibold tracking-tighter pb-1">
        <span className="text-[#fa114f]">540CAL</span>
        <span className="text-[#a1ff00]">38MIN</span>
        <span className="text-[#00f0ff]">10HRS</span>
      </div>
    </div>
  );
}

function WorkoutScreen() {
  return (
    <div className="w-full h-full p-3.5 flex flex-col justify-between bg-black text-left font-sans">
      <div className="flex justify-between items-center text-[#a1ff00] text-[10px] font-bold uppercase tracking-wider">
        <span>Outdoor Run</span>
        <span className="w-2 h-2 rounded-full bg-[#a1ff00] animate-ping"></span>
      </div>

      <div className="space-y-1 my-auto">
        <div>
          <div className="text-[9px] text-zinc-400 uppercase font-semibold">Heart Rate</div>
          <div className="text-xl font-black text-[#fa114f] flex items-baseline space-x-1">
            <span>152</span>
            <span className="text-[10px] font-medium text-zinc-400">BPM</span>
          </div>
        </div>

        <div>
          <div className="text-[9px] text-zinc-400 uppercase font-semibold">Rolling Pace</div>
          <div className="text-lg font-black text-white">
            5'14"<span className="text-[9px] font-normal text-zinc-400"> /KM</span>
          </div>
        </div>

        <div>
          <div className="text-[9px] text-zinc-400 uppercase font-semibold">Active Calories</div>
          <div className="text-lg font-black text-[#ff9500]">
            428 <span className="text-[9px] font-normal text-zinc-400">KCAL</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] font-bold pt-1 border-t border-zinc-800 text-white">
        <span>32:18</span>
        <span className="text-zinc-400 font-medium">5.82 KM</span>
      </div>
    </div>
  );
}

function UltraWayfinderScreen() {
  return (
    <div className="w-full h-full p-2.5 flex flex-col justify-between items-center bg-black relative">
      <div className="w-full flex justify-between items-center text-[9px] text-[#ff6319] font-bold">
        <span>N 37°20'08"</span>
        <span>720 FT</span>
      </div>

      {/* Compass Dial */}
      <div className="relative w-28 h-28 rounded-full border border-zinc-800 flex items-center justify-center">
        <div className="absolute inset-1 rounded-full border border-dashed border-[#ff6319]/40 animate-[spin_60s_linear_infinite]"></div>
        
        {/* Cardinal Directions */}
        <span className="absolute top-1 text-[10px] font-black text-[#ff6319]">N</span>
        <span className="absolute right-1 text-[8px] font-bold text-zinc-500">E</span>
        <span className="absolute bottom-1 text-[8px] font-bold text-zinc-500">S</span>
        <span className="absolute left-1 text-[8px] font-bold text-zinc-500">W</span>

        {/* Center Waypoint info */}
        <div className="text-center">
          <div className="text-[13px] font-extrabold text-white">315°</div>
          <div className="text-[8px] font-semibold text-[#ff6319]">NW</div>
        </div>
      </div>

      <div className="w-full flex justify-between text-[9px] text-zinc-400 font-semibold">
        <span className="text-emerald-400">WAYPOINTS: 4</span>
        <span className="text-cyan-400">DEPTH: 0.0M</span>
      </div>
    </div>
  );
}

function SleepScreen() {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between bg-[#0b0c16] text-white">
      <div className="flex justify-between items-center text-[9px] text-[#86868b]">
        <span className="text-[#bf5af2] font-semibold">SLEEP</span>
        <span>07:15 AM</span>
      </div>

      <div className="text-center my-auto space-y-1">
        <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Time Asleep</div>
        <div className="text-2xl font-black tracking-tight text-white">
          7<span className="text-sm font-semibold text-zinc-400">h</span> 42<span className="text-sm font-semibold text-zinc-400">m</span>
        </div>

        {/* Sleep Stages miniature bars */}
        <div className="flex items-center justify-center space-x-1 pt-1.5">
          <div className="w-6 h-1.5 rounded-full bg-[#bf5af2]" title="REM"></div>
          <div className="w-10 h-1.5 rounded-full bg-[#5e5ce6]" title="Core"></div>
          <div className="w-8 h-1.5 rounded-full bg-[#0a84ff]" title="Deep"></div>
          <div className="w-3 h-1.5 rounded-full bg-amber-400" title="Awake"></div>
        </div>
      </div>

      <div className="text-[9px] text-center text-zinc-400">
        In Bed: 8h 12m • 94% Goal
      </div>
    </div>
  );
}

function ECGScreen() {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between bg-black text-white relative overflow-hidden">
      <div className="flex justify-between items-center text-[10px] text-zinc-400 font-semibold">
        <span className="text-[#fa114f] flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fa114f] animate-pulse"></span>
          <span>ECG</span>
        </span>
        <span className="text-white font-bold">72 BPM</span>
      </div>

      {/* Animated Heartbeat Line */}
      <div className="w-full my-auto flex items-center justify-center h-16">
        <svg className="w-full h-14" viewBox="0 0 200 60">
          <path
            d="M 0 30 L 30 30 L 40 30 L 45 15 L 52 48 L 60 5 L 68 40 L 74 30 L 100 30 L 115 30 L 122 18 L 128 44 L 136 8 L 144 38 L 150 30 L 200 30"
            fill="none"
            stroke="#fa114f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ecg filter drop-shadow-[0_0_5px_#fa114f]"
          />
        </svg>
      </div>

      <div className="text-center text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">
        Sinus Rhythm
      </div>
    </div>
  );
}

function SchooltimeScreen() {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between items-center bg-[#ffe600] text-black">
      <div className="text-[10px] font-extrabold tracking-wider uppercase">
        Schooltime
      </div>

      <div className="text-center my-auto">
        <div className="text-3xl font-black tracking-tighter">02:30</div>
        <div className="text-[11px] font-bold text-black/75">UNTIL 3:00 PM</div>
      </div>

      <div className="text-[9px] font-semibold text-black/80 flex items-center space-x-1">
        <span>Turn Crown to unlock</span>
      </div>
    </div>
  );
}

function AnalogFaceScreen({ color }) {
  return (
    <div className="w-full h-full p-3 flex items-center justify-center bg-black relative">
      <div className="w-26 h-26 rounded-full border border-zinc-800 relative flex items-center justify-center">
        {/* Hour markers */}
        <span className="absolute top-1 text-[11px] font-bold text-white">12</span>
        <span className="absolute right-1 text-[11px] font-bold text-white">3</span>
        <span className="absolute bottom-1 text-[11px] font-bold text-white">6</span>
        <span className="absolute left-1 text-[11px] font-bold text-white">9</span>

        {/* Hands */}
        <div className="absolute w-1 h-8 bg-white rounded-full origin-bottom bottom-13 -rotate-45"></div>
        <div className="absolute w-0.5 h-11 bg-white rounded-full origin-bottom bottom-13 rotate-60"></div>
        <div 
          className="absolute w-0.5 h-12 rounded-full origin-bottom bottom-13 rotate-150"
          style={{ backgroundColor: color || '#ff9500' }}
        ></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white z-10 border border-black"></div>
      </div>
    </div>
  );
}

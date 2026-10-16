import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { ShieldAlert, Car, UserX, PhoneCall, AlertTriangle } from 'lucide-react';

export default function SafetySection() {
  const [sosSlid, setSosSlid] = useState(false);

  return (
    <section id="safety" className="py-24 bg-[#ffffff] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#dc2626] block mb-2">
            Safety Features
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Help is always within reach.<br />
            Even when you can't reach your phone.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Advanced sensors and machine learning algorithms detect severe car crashes and hard falls. Apple Watch can automatically connect you to emergency services, provide your location, and notify your emergency contacts.
          </p>
        </div>

        {/* 3 Safety Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Crash Detection */}
          <div className="bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-2">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">Crash Detection</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                A high-g accelerometer measures up to 256 Gs of impact, combined with gyroscopes and microphones to detect severe car crashes like front-impact, side-impact, and rollovers.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#dc2626] mt-6 block">
              Trained on 1M+ hours of real-world driving data
            </span>
          </div>

          {/* Pillar 2: Fall Detection */}
          <div className="bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                <UserX className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">Fall Detection</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Whether you're at home or out hiking, Apple Watch can detect if you take a hard fall. If you're immobile for 60 seconds, it will initiate an emergency call automatically.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#dc2626] mt-6 block">
              Optimized for workouts and daily life
            </span>
          </div>

          {/* Pillar 3: Emergency SOS */}
          <div className="bg-[#f5f5f7] rounded-[28px] p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-2">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">Emergency SOS</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Press and hold the side button to quickly call local emergency services and share your real-time coordinates. Your emergency contacts receive immediate updates.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#dc2626] mt-6 block">
              Works internationally while traveling
            </span>
          </div>
        </div>

        {/* Emergency SOS Interactive Screen Showcase */}
        <div className="bg-black text-white rounded-[36px] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-[480px] space-y-4">
            <div className="inline-flex items-center space-x-2 text-rose-500 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Simulated Emergency Interface</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">
              One slider can save a life.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              In an emergency, every second counts. The Emergency SOS screen gives you immediate access to dial local first responders, open your critical Medical ID (allergies & blood type), or sound the 86-decibel distress siren.
            </p>

            <button
              onClick={() => setSosSlid(!sosSlid)}
              className="mt-4 px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition-all cursor-pointer"
            >
              {sosSlid ? 'Reset Simulation' : 'Test SOS Slider Action'}
            </button>
          </div>

          {/* Watch Mockup with Emergency SOS display */}
          <div>
            <WatchRenderer 
              type="series"
              bandColor="#1c1917"
              caseColor="#292524"
              size="lg"
              customContent={
                <div className="w-full h-full p-3.5 bg-black flex flex-col justify-between text-white">
                  <div className="text-center">
                    <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                      Emergency SOS
                    </span>
                  </div>

                  <div className="space-y-2 my-auto">
                    {/* SOS Slider */}
                    <div 
                      onClick={() => setSosSlid(!sosSlid)}
                      className={`w-full py-2 px-3 rounded-full flex items-center justify-between cursor-pointer transition-all ${
                        sosSlid ? 'bg-[#dc2626] ring-2 ring-white' : 'bg-red-600/90'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-red-600 shadow-sm">
                        <PhoneCall className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-tight">
                        {sosSlid ? 'Calling 911...' : 'slide to call'}
                      </span>
                      <div className="w-4"></div>
                    </div>

                    {/* Medical ID button */}
                    <div className="w-full py-1.5 px-3 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                      Medical ID
                    </div>
                  </div>

                  <div className="text-[9px] text-center text-zinc-500 font-medium">
                    Cancel within 5s
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

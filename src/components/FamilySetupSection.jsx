import React from 'react';
import WatchRenderer from './WatchRenderer';
import { Users, ShieldCheck, MapPin, Smile, BookOpen, Clock } from 'lucide-react';

export default function FamilySetupSection() {
  return (
    <section id="family-setup" className="py-24 bg-[#ffffff] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#0284c7] block mb-2">
            Family Setup
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Apple Watch For Your Kids.<br />
            Independence for them. Peace of mind for you.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Your kids can have their own Apple Watch — even if they don't have their own iPhone. They can call, text, ask Siri questions, listen to music, and track their activity.
          </p>
        </div>

        {/* Feature Container */}
        <div className="bg-[#f0f9ff] rounded-[36px] p-8 md:p-14 border border-[#bae6fd]/50 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Details */}
          <div className="space-y-6 max-w-[480px]">
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-200/60 flex items-center justify-center text-sky-700 flex-shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0c4a6e]">Schooltime Mode</h4>
                  <p className="text-xs text-[#0369a1] leading-relaxed">
                    Keeps kids focused in class by limiting watch features to a distinctive yellow clock face and enabling Do Not Disturb automatically during school hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-200/60 flex items-center justify-center text-sky-700 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0c4a6e]">Find My Location Alerts</h4>
                  <p className="text-xs text-[#0369a1] leading-relaxed">
                    Get notifications when your child arrives at school, soccer practice, or comes home safely with live location tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-200/60 flex items-center justify-center text-sky-700 flex-shrink-0 mt-0.5">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0c4a6e]">Memoji & Messages</h4>
                  <p className="text-xs text-[#0369a1] leading-relaxed">
                    Kids can message and call only parent-approved contacts, express themselves with custom Memoji stickers, and use walkie-talkie.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#0369a1] font-semibold">
              Requires an Apple Watch (GPS + Cellular) model and an iPhone 8 or later for family organizer setup.
            </div>
          </div>

          {/* Watch Mockup showing Schooltime Yellow face */}
          <div className="flex flex-col items-center">
            <WatchRenderer 
              type="se"
              bandColor="#fde047"
              caseColor="#e2e8f0"
              screenType="schooltime"
              size="lg"
            />
            <span className="text-xs font-semibold text-sky-900 mt-4">
              Apple Watch SE with Schooltime Mode
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

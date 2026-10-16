import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Heart, Activity, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function HeartHealthSection() {
  const [activeTab, setActiveTab] = useState('ecg');

  return (
    <section id="heart-health" className="py-24 bg-[#f5f5f7] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#e11d48] block mb-2">
            Heart Health
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Heart health.<br />
            Always keeping an eye on your ticker.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Unusually high or low heart rates and irregular rhythms could be signs of a serious condition. Apple Watch can alert you to these irregularities so you can take immediate action and consult your physician.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: ECG App */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-black/[0.04] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#e11d48]">
                <Heart className="w-4 h-4 fill-current" />
                <span>ECG App</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
                An ECG on your wrist. Anytime, anywhere.
              </h3>

              <p className="text-[#6e6e73] text-sm leading-relaxed">
                With the ECG app, Apple Watch is capable of generating an ECG similar to a single-lead electrocardiogram. It's a momentous achievement for a wearable device that can provide critical data for doctors and peace of mind for you.
              </p>

              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
                <CheckCircle2 className="w-4 h-4" />
                <span>FDA-cleared & clinically validated</span>
              </div>
            </div>

            {/* Watch Mockup showing live ECG line */}
            <div className="pt-8 flex justify-center">
              <WatchRenderer 
                type="series"
                bandColor="#f43f5e"
                caseColor="#991b1b"
                screenType="ecg"
                size="md"
              />
            </div>
          </div>

          {/* Card 2: AFib History & Notifications */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-black/[0.04] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#e11d48]">
                <Activity className="w-4 h-4" />
                <span>Atrial Fibrillation History</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
                Receive notifications. Share reports with doctors.
              </h3>

              <p className="text-[#6e6e73] text-sm leading-relaxed">
                If you have been diagnosed with AFib, you can turn on the AFib History feature to see an estimate of how frequently your heart shows signs of AFib. You can also export a PDF of your history to share with your healthcare team.
              </p>

              {/* Simulated Health Graph */}
              <div className="bg-[#f5f5f7] p-5 rounded-2xl border border-black/[0.05]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#1d1d1f]">AFib Burden (Past 6 Weeks)</span>
                  <span className="text-xs font-bold text-emerald-600">Low (2%)</span>
                </div>

                {/* Bar chart */}
                <div className="grid grid-cols-6 gap-2 h-20 items-end pt-2">
                  {[2, 3, 2, 1, 2, 2].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div 
                        className="w-full bg-[#fa114f] rounded-t-md transition-all hover:bg-[#e11d48]"
                        style={{ height: `${val * 24}px` }}
                      ></div>
                      <span className="text-[9px] text-[#86868b] font-medium">W{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs text-[#0071e3] font-semibold border-t border-black/[0.06]">
              <span className="flex items-center space-x-1.5">
                <FileText className="w-4 h-4" />
                <span>Export Health Records PDF</span>
              </span>
              <span>Learn more &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

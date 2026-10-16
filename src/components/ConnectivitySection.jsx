import React, { useState } from 'react';
import WatchRenderer from './WatchRenderer';
import { Wifi, Phone, MessageSquare, CreditCard, Music, Radio, Send } from 'lucide-react';

export default function ConnectivitySection() {
  const [messages, setMessages] = useState([
    { from: 'Sarah', text: 'Hey! Are you heading to the track now? 🏃‍♀️' },
    { from: 'You', text: 'Yes, just warming up! See you in 5 mins.' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { from: 'You', text: inputValue }]);
    setInputValue('');
  };

  return (
    <section id="connectivity" className="py-24 bg-[#fafafa] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#9333ea] block mb-2">
            Connectivity
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight max-w-[800px] leading-[1.1]">
            Stay in touch.<br />
            Right from your wrist.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#6e6e73] max-w-[650px]">
            Leave your phone at home and still answer a call from the trail, send a quick text from the surf, or stream your favorite workout playlist.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Interactive Messaging Watch */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-black/[0.04] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#9333ea] mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Messages & Calls</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                Send a text, make a call, hear your voicemail.
              </h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Use your voice with Siri, dictate with the built-in keyboard, or swipe with QuickPath. It's effortless to stay in touch on the go.
              </p>
            </div>

            {/* Watch Mockup showing live iMessage */}
            <div className="flex justify-center pt-4">
              <WatchRenderer 
                type="series"
                bandColor="#c084fc"
                caseColor="#e2e8f0"
                size="md"
                customContent={
                  <div className="w-full h-full p-3 bg-black flex flex-col justify-between text-white text-left">
                    <div className="flex items-center space-x-1.5 pb-1 border-b border-zinc-800">
                      <div className="w-4 h-4 rounded-full bg-[#0071e3] text-[9px] flex items-center justify-center font-bold">S</div>
                      <span className="text-[10px] font-bold">Sarah Jenkins</span>
                    </div>

                    <div className="space-y-1.5 overflow-hidden my-auto py-1">
                      {messages.slice(-2).map((m, idx) => (
                        <div 
                          key={idx} 
                          className={`p-1.5 rounded-xl text-[9px] max-w-[85%] ${
                            m.from === 'You' 
                              ? 'bg-[#0071e3] text-white ml-auto rounded-tr-none' 
                              : 'bg-zinc-800 text-zinc-200 rounded-tl-none'
                          }`}
                        >
                          {m.text}
                        </div>
                      ))}
                    </div>

                    <div className="text-[9px] text-[#0071e3] font-bold pt-1 border-t border-zinc-900 flex justify-between">
                      <span>Dictate</span>
                      <span>Send ⏎</span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Card 2: Apple Pay & Wallet */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-black/[0.04] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#9333ea] mb-2">
                <CreditCard className="w-4 h-4" />
                <span>Apple Pay & Wallet</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                Pay instantly. Keep boarding passes and keys handy.
              </h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                Double-click the side button to pay in stores securely without opening your bag or taking out your wallet. Store your transit card, digital hotel keys, and house keys right on your wrist.
              </p>
            </div>

            {/* Apple Pay Card graphic */}
            <div className="bg-gradient-to-tr from-[#1e1b4b] to-[#4338ca] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Apple Card</span>
                <span className="text-sm font-black">Pay</span>
              </div>
              <div className="text-lg font-mono tracking-widest mb-4">•••• •••• •••• 4289</div>
              <div className="flex justify-between items-center text-[11px] text-indigo-200">
                <span>Hold Near Reader</span>
                <span className="text-emerald-300 font-bold">3% Daily Cash</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-[#0071e3] font-semibold">
              <span>Learn about Apple Wallet</span>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

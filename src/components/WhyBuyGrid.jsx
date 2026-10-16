import React from 'react';
import { RefreshCw, CreditCard, Truck, Users, ArrowUpRight } from 'lucide-react';

export default function WhyBuyGrid() {
  const perks = [
    {
      icon: <RefreshCw className="w-6 h-6 text-[#0071e3]" />,
      title: 'Apple Trade In',
      subtitle: 'Get up to $365 in credit when you trade in Apple Watch Series 5 or higher.',
      linkText: 'Estimate your trade-in value',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#0071e3]" />,
      title: 'Apple Card Monthly Installments',
      subtitle: 'Pay 0% APR over 12 months when you choose to check out with Apple Card.',
      linkText: 'Learn about Apple Card',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0071e3]" />,
      title: 'Fast, free delivery',
      subtitle: 'Enjoy free two-hour delivery in most metro areas or free pickup at your Apple Store.',
      linkText: 'Check delivery options',
    },
    {
      icon: <Users className="w-6 h-6 text-[#0071e3]" />,
      title: 'Personal Setup session',
      subtitle: 'Connect with a Specialist online to walk through watch setup and custom features.',
      linkText: 'Book a free session',
    },
  ];

  return (
    <section id="why-buy" className="py-24 bg-[#ffffff] border-t border-black/[0.05]">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide uppercase text-[#0071e3] block mb-2">
            Why Buy Apple
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">
            The best place to buy Apple Watch.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <div 
              key={idx}
              className="bg-[#f5f5f7] rounded-[28px] p-7 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  {perk.subtitle}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.05]">
                <a href="#" className="inline-flex items-center space-x-1 text-xs font-semibold text-[#0071e3] hover:underline">
                  <span>{perk.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

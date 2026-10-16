import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[11px] leading-[1.33337] border-t border-black/[0.08] pt-8 pb-12">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Footnotes */}
        <div className="space-y-3 pb-8 border-b border-black/[0.08] text-[10.5px] leading-relaxed">
          <p>
            1. New subscribers only. $9.99/month after free trial. Plan automatically renews until cancelled. Terms apply. Apple Fitness+ requires iPhone 8 or later with iOS 16.1 or later or Apple Watch Series 3 or later paired with iPhone 6s or later.
          </p>
          <p>
            2. The ECG app is available on Apple Watch Series 4 and later (excluding Apple Watch SE) and can generate an ECG similar to a single-lead electrocardiogram. Intended for use by people 22 years old and over.
          </p>
          <p>
            3. Apple Watch Series 10, Apple Watch Ultra 2, and Apple Watch SE have a water resistance rating of 50 meters under ISO standard 22810:2010. Apple Watch Ultra 2 has a water resistance rating of 100 meters under ISO standard 22810.
          </p>
          <p>
            4. Emergency SOS requires a cellular connection or Wi-Fi calling with an internet connection from your Apple Watch or nearby iPhone.
          </p>
          <p>
            5. Wireless service plan required for cellular service. Contact your service provider for more details. Connection may vary based on network availability.
          </p>
          <p>
            6. Crash Detection is designed for four-wheel passenger vehicle crashes with certain mass, G-force, and speed profiles conforming to severe, life-threatening crashes.
          </p>
        </div>

        {/* Directory Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-b border-black/[0.08]">
          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">Shop and Learn</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Store</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Mac</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">iPad</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">iPhone</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] text-[#1d1d1f] font-medium">Watch</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Vision</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">AirPods</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">TV & Home</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">AirTag</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Accessories</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">Apple Wallet</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Wallet</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Card</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Pay</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Cash</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">Account</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Manage Your Apple Account</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Store Account</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">Entertainment</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple One</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple TV+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Music</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Arcade</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Fitness+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple News+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Podcasts</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Books</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">App Store</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-2">Apple Store</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-[#1d1d1f]">Find a Store</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Genius Bar</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Today at Apple</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Group Reservations</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Apple Camp</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Apple Store App</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Certified Refurbished</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Financing</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Order Status</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f]">Shopping Help</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">For Business</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple and Business</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">For Education</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple and Education</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Shop for K-12</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Shop for College</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">For Healthcare</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple in Healthcare</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Health on Apple Watch</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">Apple Values</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Accessibility</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Education</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Environment</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Inclusion and Diversity</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Privacy</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Supply Chain</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2">About Apple</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#1d1d1f]">Newsroom</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Investors</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Ethics & Compliance</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Events</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f]">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between text-[#86868b] gap-2">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-[#1d1d1f]">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Site Map</a>
          </div>
          <div>
            United States
          </div>
        </div>
      </div>
    </footer>
  );
}

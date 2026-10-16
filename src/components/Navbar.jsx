import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState(null);

  const navLinks = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#', active: true },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#161617]/85 backdrop-blur-md border-b border-[#424245]/30 text-[#f5f5f7] transition-all">
      <nav className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between text-xs tracking-tight font-normal">
        {/* Apple Logo */}
        <a 
          href="#" 
          className="hover:opacity-70 transition-opacity text-white flex items-center"
          aria-label="Apple"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.83-11.9-13.68-25.26-17.55-40.09-3.87-14.82-5.81-28.77-5.81-41.84 0-16.71 4.31-30.49 12.93-41.34 8.62-10.86 19.34-16.44 32.17-16.75 4.58 0 9.87 1.25 15.88 3.75 6 2.5 10.14 3.79 12.43 3.86 2.12-.07 6.35-1.39 12.69-3.97 6.34-2.58 11.75-3.81 16.24-3.69 12.74.63 23.01 5.37 30.82 14.22-11.05 6.72-16.48 16.03-16.29 27.93.2 10.14 4.14 18.57 11.83 25.29 7.69 6.72 16.64 10.45 26.85 11.19-2.19 6.82-4.99 14.07-8.4 21.75zM119.22 31.42c0-7.39 2.65-14.38 7.95-20.97 5.3-6.59 11.86-10.45 19.68-11.58.42 1.48.63 2.94.63 4.38 0 7.42-2.73 14.47-8.19 21.15-5.46 6.68-12.16 10.59-20.1 11.72-.03-1.63.03-3.2.03-4.7z" />
          </svg>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-white transition-colors duration-150 ${
                link.active ? 'text-white font-medium' : 'text-[#d6d6d8]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button
            aria-label="Search"
            className="text-[#d6d6d8] hover:text-white transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
          <button
            aria-label="Shopping Bag"
            className="text-[#d6d6d8] hover:text-white transition-colors relative"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#d6d6d8] hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-11 bottom-0 bg-[#161617] p-6 z-40 overflow-y-auto">
          <div className="flex flex-col space-y-4 text-xl font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#2e2e30] flex items-center justify-between hover:text-white"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

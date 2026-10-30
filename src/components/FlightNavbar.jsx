import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function FlightNavbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full py-5 px-6 sm:px-10 lg:px-12 flex items-center justify-between z-30">
      {/* Brand Logo: UIXSHUVO */}
      <a href="#" className="flex items-center gap-2.5 group select-none">
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Logo Mark: circular glyph with dot matching reference */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-slate-950 group-hover:scale-105 transition-transform"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9.5"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeDasharray="48 10"
              strokeDashoffset="12"
              strokeLinecap="round"
            />
            <circle cx="12" cy="7" r="2.2" fill="currentColor" />
          </svg>
        </div>
        <span className="font-extrabold text-[17px] tracking-[0.14em] text-slate-950 uppercase font-sans">
          UIXSHUVO
        </span>
      </a>

      {/* Desktop Navigation Links: ABOUT, TOUR, PACKAGE, CONTACT */}
      <nav className="hidden md:flex items-center gap-10 lg:gap-14 select-none">
        {[
          { name: 'ABOUT', href: '#about' },
          { name: 'TOUR', href: '#destinations' },
          { name: 'PACKAGE', href: '#packages' },
          { name: 'CONTACT', href: '#contact' },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[12.5px] font-bold tracking-[0.14em] text-slate-800 hover:text-[#2A7FF6] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2A7FF6] hover:after:w-full after:transition-all after:duration-300"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Right Action CTA Button: Book Trip */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBookClick}
          className="bg-[#111111] hover:bg-black text-white px-7 py-2.5 sm:py-3 rounded-full text-[13px] font-bold tracking-wide transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          Book Trip
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-900 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-100 py-6 px-8 flex flex-col gap-4 md:hidden z-40 rounded-b-2xl">
          {[
            { name: 'ABOUT', href: '#about' },
            { name: 'TOUR', href: '#destinations' },
            { name: 'PACKAGE', href: '#packages' },
            { name: 'CONTACT', href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-widest text-slate-800 hover:text-[#2A7FF6] py-2 border-b border-slate-50"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick && onBookClick();
            }}
            className="mt-2 w-full bg-[#111111] text-white py-3 rounded-full text-xs font-bold tracking-wider"
          >
            Book Trip Now
          </button>
        </div>
      )}
    </header>
  );
}

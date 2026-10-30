import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Projects', href: '#initiatives' },
    { name: 'Resources', href: '#resources' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative z-30 pt-6 px-6 sm:px-10 lg:px-12 w-full">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Logo className="h-7 w-7" />

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[13px] font-medium transition-colors hover:text-[#245B38] ${
                item.active
                  ? 'text-[#131E18] font-semibold'
                  : 'text-[#48564E]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-semibold bg-[#D2F865] hover:bg-[#c3e857] text-[#131E18] transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
          >
            Get Involved
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#131E18] hover:bg-black/5 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E4EAE1] shadow-lg flex flex-col gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#131E18] py-2 px-3 rounded-lg hover:bg-[#F3F6F0]"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#get-involved"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-[#D2F865] hover:bg-[#c3e857] text-[#131E18] mt-2 shadow-xs"
          >
            Get Involved
          </a>
        </div>
      )}
    </nav>
  );
}

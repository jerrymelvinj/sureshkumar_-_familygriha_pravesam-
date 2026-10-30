import React from 'react';
import { Send } from 'lucide-react';

export default function FlightFooter() {
  return (
    <footer id="contact" className="w-full bg-[#111111] text-white pt-16 pb-12 rounded-t-[36px] sm:rounded-t-[44px] mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none">
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
              <span className="font-extrabold text-[18px] tracking-[0.14em] uppercase font-sans">
                UIXSHUVO
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-4">
              Modern air travel booking reimagined with simplicity, elegance, and unforgettable destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Our Fleet & Tours
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Press & Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Flight Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Baggage & Check-In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Stay In The Skies
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe to receive weekly flight fare drops and travel inspiration.
            </p>
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-full p-1 focus-within:border-[#2A7FF6]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none flex-1"
              />
              <button
                className="w-8 h-8 rounded-full bg-[#2A7FF6] hover:bg-[#1b6ee0] flex items-center justify-center text-white shrink-0 transition-transform hover:scale-105 cursor-pointer"
                aria-label="Subscribe"
              >
                <Send size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 UIXSHUVO Travel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function FlightVideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Video Canvas / Teaser Player */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center animate-pulse"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1400&q=80)',
              filter: 'brightness(0.85)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

          {/* Center Play Overlay */}
          <div className="relative z-10 text-center px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-4 border border-white/20">
              <Sparkles size={14} className="text-yellow-300" /> UIXSHUVO Flight Experience
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-sans">
              Experience The Magic Of Flight
            </h4>
            <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto mb-6">
              Take off with us into the serene sky and unlock breathtaking panoramic views from 35,000 feet.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="bg-[#2A7FF6] hover:bg-[#1b6ee0] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                Continue Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

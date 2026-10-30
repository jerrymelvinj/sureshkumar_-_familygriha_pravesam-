import React from 'react';
import { DeepamDiyaIcon, ToranGarland, SacredKalashIcon } from './SacredIcons';
import { MapPin, Calendar, Smartphone, Heart } from 'lucide-react';

export default function DivineHeader({ onOpenMobileCard }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-30 bg-gradient-to-b from-[#FFF5E6] via-[#FAF6F0] to-[#FAF6F0] border-b border-[#EADCC6]/60">
      {/* Traditional Marigold & Mango Leaves Toran */}
      <ToranGarland />

      {/* Auspicious Sacred Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-2 pb-3 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        {/* Left / Center: Sacred Hindu Invocation */}
        <div className="flex items-center gap-3">
          <DeepamDiyaIcon className="w-8 h-8 hidden sm:block" />
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#BA2428] uppercase font-serif">
                || ॐ श्री गणेशाय नमः ||
              </span>
              <span className="hidden sm:inline-block text-[#D4AF37]">•</span>
              <span className="hidden sm:inline-block text-xs md:text-sm font-medium tracking-wide text-[#9B4B27]">
                ஓம் கணபதயே நமஹ
              </span>
            </div>
            <p className="text-[11px] md:text-xs text-[#783F20]/80 font-serif italic">
              Griha Pravesam Subha Muhurtham • Divine House Warming Ceremony
            </p>
          </div>
          <DeepamDiyaIcon className="w-8 h-8 hidden sm:block" />
        </div>

        {/* Right Navigation & Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <button
            onClick={() => scrollTo('venue-location')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#783F20] border border-[#E8DCC4] shadow-xs transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E77A23]" />
            <span>Pennagaram, Dharmapuri</span>
          </button>

          <button
            onClick={() => scrollTo('ceremony-details')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#783F20] border border-[#E8DCC4] shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#BA2428]" />
            <span>Sun, 22 Nov 2026</span>
          </button>

          <button
            onClick={onOpenMobileCard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#9B4B27] hover:bg-[#803C1D] text-white shadow-xs transition-all cursor-pointer font-medium"
            title="View in mobile card invitation design format"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>Mobile Card View</span>
          </button>
        </div>
      </div>
    </header>
  );
}

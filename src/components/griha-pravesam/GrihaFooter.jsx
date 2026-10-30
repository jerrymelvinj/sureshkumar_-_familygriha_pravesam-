import React from 'react';
import { DeepamDiyaIcon, SacredKalashIcon, KolamMotif } from './SacredIcons';
import { Heart, MapPin, Phone, Calendar, Clock, Navigation } from 'lucide-react';

export default function GrihaFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FAF6F0] via-[#2A160A] to-[#1A0C06] text-[#FAF6F0] pt-14 pb-12 overflow-hidden border-t-2 border-[#D4AF37]/50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <KolamMotif className="w-96 h-96 text-[#FDE68A]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Centered Benediction */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="flex justify-center items-center gap-3">
            <DeepamDiyaIcon className="w-8 h-8" />
            <SacredKalashIcon className="w-10 h-10" />
            <DeepamDiyaIcon className="w-8 h-8" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FDE68A] font-serif tracking-tight">
            New Home • New Memories • Endless Blessings
          </h3>

          <p className="text-xs sm:text-sm text-[#F5E6D3]/90 font-serif italic max-w-lg mx-auto leading-relaxed">
            &ldquo;May this home be filled with health, warmth, and boundless harmony. We eagerly await to welcome you on our blessed day.&rdquo;
          </p>
        </div>

        {/* 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 pb-10 border-t border-white/10 text-xs text-[#EADCC6]">
          
          {/* Col 1: Family & Hosts */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-serif font-bold text-base text-[#FDE68A]">
              Sureshkumar &amp; Family
            </div>
            <p className="text-xs text-[#EADCC6]/80 leading-relaxed font-serif">
              Pennagaram, Dharmapuri District, Tamil Nadu. We seek your heartfelt prayers and blessings as we embark on this sacred new chapter.
            </p>
            <div className="pt-2 text-white/90 flex items-center justify-center md:justify-start gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span>Contact: +91 98765 43210</span>
            </div>
          </div>

          {/* Col 2: Auspicious Time & Venue */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-serif font-bold text-base text-[#FDE68A]">
              Sacred Occasion
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#FDBA74]" />
              <span>Sunday, 22 November 2026</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FDBA74]" />
              <span>Muhurtham: 8:30 AM – 10:00 AM</span>
            </div>
            <div className="flex items-start justify-center md:justify-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FDBA74] shrink-0 mt-0.5" />
              <span>Eargolpatti, Pennagaram, Dharmapuri, TN</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-center md:text-right">
            <div className="font-serif font-bold text-base text-[#FDE68A]">
              Quick Links
            </div>
            <div className="flex flex-col md:items-end gap-1.5">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Eargolpatti,+Pennagaram,+Dharmapuri,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-end gap-1"
              >
                <Navigation className="w-3 h-3 text-[#FDE68A]" />
                <span>Open Google Maps Directions</span>
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EADCC6]/60 gap-3">
          <div>
            © 2026 Sureshkumar Family Griha Pravesam Invitation. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Created with divine blessings &amp; love</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}

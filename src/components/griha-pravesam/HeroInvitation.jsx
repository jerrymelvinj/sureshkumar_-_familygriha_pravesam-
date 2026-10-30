import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Phone, Heart, Sparkles, Navigation, Share2 } from 'lucide-react';
import { DeepamDiyaIcon, SacredKalashIcon, KolamMotif } from './SacredIcons';

export default function HeroInvitation({ onOpenShare, onOpenMobileCard }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:py-16">
      {/* Background Decorative Watercolor Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#FDE68A]/35 via-[#FDBA74]/30 to-[#FCA5A5]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#E77A23]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Divine Text & Core Invitation Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Sacred Badges */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFF3E0] border border-[#FDBA74] text-[#A8420A] text-xs font-semibold shadow-xs">
              <span className="animate-spin" style={{ animationDuration: '8s' }}>🌸</span>
              <span className="tracking-wider uppercase font-serif">Auspicious Hindu Griha Pravesam</span>
              <span>🪔</span>
            </div>

            {/* Main Title - Preserving user content */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D1B0F] tracking-tight leading-[1.18] font-serif">
                A New Beginning, <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#CA5C0B] font-serif">
                  A Home Filled with Blessings
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#BA2428] via-[#E77A23] to-[#D4AF37] rounded-full mx-auto lg:mx-0 mt-3" />
            </div>

            {/* Formal Invitation Statement - Preserving exact user text */}
            <div className="bg-[#FFFDF9]/90 border border-[#EADBCE] rounded-2xl p-6 sm:p-7 shadow-xs backdrop-blur-xs relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-15">
                <KolamMotif className="w-20 h-20 text-[#D4AF37]" />
              </div>
              <p className="text-base sm:text-lg text-[#4A2E1B] leading-relaxed font-serif relative z-10">
                With the blessings of the Almighty, we cordially invite you and your family to our{' '}
                <span className="font-bold text-[#BA2428] underline decoration-[#FDBA74] decoration-2 underline-offset-4">
                  Griha Pravesam Ceremony
                </span>{' '}
                as we celebrate the joy of our new home.
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date & Auspicious Timings */}
              <div className="bg-white/80 border border-[#ECD9C6] rounded-xl p-4 text-left shadow-xs flex items-start gap-3.5 hover:border-[#D4AF37] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#FFF0E6] flex items-center justify-center shrink-0 border border-[#FDBA74]">
                  <Calendar className="w-5 h-5 text-[#BA2428]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#A8420A]">
                    Date & Muhurtham
                  </div>
                  <div className="font-bold text-[#2E1F16] text-base font-serif">
                    Sunday, 22 November 2026
                  </div>
                  <div className="text-xs text-[#783F20] font-medium flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#E77A23]" />
                    <span>8:30 AM – 10:00 AM (Subha Muhurtham)</span>
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="bg-white/80 border border-[#ECD9C6] rounded-xl p-4 text-left shadow-xs flex items-start gap-3.5 hover:border-[#D4AF37] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0 border border-[#FCD34D]">
                  <MapPin className="w-5 h-5 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#A8420A]">
                    Sacred Venue
                  </div>
                  <div className="font-bold text-[#2E1F16] text-base font-serif">
                    Eargolpatti, Pennagaram
                  </div>
                  <div className="text-xs text-[#783F20] font-medium">
                    Dharmapuri, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>

            {/* User Note & Signature */}
            <div className="pt-2">
              <p className="text-sm sm:text-base italic text-[#783F20] font-serif">
                &ldquo;Your gracious presence and blessings will make our special day truly memorable.&rdquo;
              </p>
              <div className="mt-2 flex items-center justify-center lg:justify-start gap-3">
                <div className="text-right">
                  <span className="text-xs text-[#9B4B27] font-semibold tracking-wider uppercase block">
                    With love,
                  </span>
                  <span className="text-2xl sm:text-3xl text-[#9B4B27] font-script">
                    Sureshkumar &amp; Family
                  </span>
                </div>
                <SacredKalashIcon className="w-10 h-10" />
              </div>
            </div>

            {/* Pill CTA Buttons - Echoing the reference image aesthetic */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              {/* Primary Pill Button with Circle Arrow like reference image */}
              <button
                onClick={() => scrollTo('venue-location')}
                className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#FFFDF9] hover:bg-white text-[#4A2810] border border-[#D9C4A6] shadow-md hover:shadow-lg transition-all cursor-pointer font-bold text-sm"
              >
                <span>Get Directions &amp; Map</span>
                <span className="w-9 h-9 rounded-full bg-[#9B4B27] group-hover:bg-[#803C1D] text-white flex items-center justify-center transition-all group-hover:translate-x-0.5">
                  <Navigation className="w-4 h-4" />
                </span>
              </button>

              {/* RSVP Button */}
              <button
                onClick={() => scrollTo('blessings-rsvp')}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#BA2428] hover:bg-[#9B1D20] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#FDE68A]" />
                <span>Confirm RSVP &amp; Blessings</span>
              </button>

              {/* Dummy Phone Direct Call Button */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-[#FFF9F2] text-[#783F20] border border-[#E0D0BC] text-sm font-medium shadow-xs transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E77A23]" />
                <span>+91 98765 43210</span>
              </a>

              {/* Share Button */}
              <button
                onClick={onOpenShare}
                className="p-3 rounded-full bg-white hover:bg-[#FFF9F2] text-[#783F20] border border-[#E0D0BC] shadow-xs transition-colors cursor-pointer"
                title="Share Invitation"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Tagline from User */}
            <div className="pt-2 text-xs font-serif tracking-widest uppercase text-[#A8420A]/90 font-semibold">
              ✨ New Home • New Memories • Endless Blessings ✨
            </div>
          </div>

          {/* Right Column: Architectural Watercolor Home Showcase (Harmonizing with Reference Image) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow & Aura */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#FDBA74]/40 via-[#FBBF24]/20 to-[#A4502E]/30 rounded-[42px] blur-xl" />

              {/* Phone Mockup Frame - Matching Reference Image */}
              <div className="relative bg-[#FFFDF8] rounded-[38px] p-3 shadow-2xl border-4 border-[#F5E6D3] overflow-hidden">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-5 pt-2 pb-1 text-xs text-[#4A2810] font-semibold select-none">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">5G</span>
                    <div className="w-5 h-2.5 border border-[#4A2810] rounded-xs p-0.5 flex items-center">
                      <div className="h-full w-3 bg-[#4A2810] rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Watercolor Image Canvas Container */}
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#FFF5E6] via-white to-[#FAF0E4] border border-[#F2DFCD]">
                  
                  {/* Top Auspicious Tag */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#FDBA74] text-[11px] font-bold text-[#A8420A] shadow-xs">
                    <DeepamDiyaIcon className="w-3.5 h-3.5" />
                    <span>Griha Pravesam 2026</span>
                  </div>

                  {/* House Illustration (from public/house_ref.png) */}
                  <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
                    <img
                      src="/house_ref.png"
                      alt="Modern House Watercolor Illustration"
                      className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                    />

                    {/* Warm Terracotta & Saffron Gradient Overlay matching reference image */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#7B3F1D] via-[#A4502E]/85 to-transparent flex flex-col justify-end p-5 text-white">
                      
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#FDE68A] font-serif">
                        Sureshkumar Family Residence
                      </p>
                      
                      <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                        Our Dream Home
                      </h3>

                      <p className="text-xs text-white/90 italic font-serif mt-0.5">
                        Pennagaram, Dharmapuri, Tamil Nadu
                      </p>

                      {/* Reference Style Indicator Dots & Pill CTA */}
                      <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between">
                        {/* Indicator Dots */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-1.5 rounded-full bg-white" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        </div>

                        {/* Interactive Pill Button inside phone frame */}
                        <button
                          onClick={onOpenMobileCard}
                          className="flex items-center gap-2 pl-3 pr-1 py-1 rounded-full bg-white text-[#4A2810] text-xs font-bold shadow-xs hover:bg-[#FFF8EE] transition-all cursor-pointer"
                        >
                          <span>Open Full Card</span>
                          <span className="w-6 h-6 rounded-full bg-[#A4502E] text-white flex items-center justify-center text-[10px]">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-32 h-1 bg-[#4A2810]/30 rounded-full mx-auto mt-2.5 mb-1" />
              </div>

              {/* Floating Auspicious Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border-2 border-[#D4AF37] rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <DeepamDiyaIcon className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-[#A8420A] tracking-wider">
                    Muhurtham Timings
                  </div>
                  <div className="text-xs font-bold text-[#2E1F16]">
                    8:30 AM – 10:00 AM
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Kalash Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white/95 border border-[#FDBA74] rounded-2xl p-2.5 shadow-lg flex items-center gap-2">
                <SacredKalashIcon className="w-7 h-7" />
                <div className="text-left pr-1">
                  <div className="text-[9px] uppercase font-bold text-[#BA2428] tracking-wider">
                    Paal Kaichuthal
                  </div>
                  <div className="text-[11px] font-bold text-[#783F20]">
                    22 Nov 2026
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

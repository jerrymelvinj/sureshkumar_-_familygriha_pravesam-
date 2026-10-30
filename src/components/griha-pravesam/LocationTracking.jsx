import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Copy, Check, Car, Train, Bus, Phone, AlertCircle } from 'lucide-react';
import { KolamMotif } from './SacredIcons';

export default function LocationTracking() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "Eargolpatti, Pennagaram Taluk, Dharmapuri District, Tamil Nadu - 636810, India";
  const latitude = 12.0833;
  const longitude = 77.9000;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu"
  )}`;

  const appleMapsUrl = `https://maps.apple.com/?daddr=${latitude},${longitude}&q=${encodeURIComponent(
    "Eargolpatti, Pennagaram, Dharmapuri"
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue-location" className="py-16 md:py-20 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] border-t border-[#EADBCE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-semibold border border-[#FCD34D]">
            <Compass className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Geolocation &amp; Smart Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B0F] font-serif">
            Venue &amp; Location Guide
          </h2>
          <p className="text-sm sm:text-base text-[#783F20] font-serif leading-relaxed">
            Follow live GPS turn-by-turn navigation directly to our doorstep in Pennagaram, Dharmapuri.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Address & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Live Interactive Map Embed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-xl bg-white">
              
              {/* Map Header Bar */}
              <div className="bg-[#2D1B0F] text-white px-5 py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold tracking-wide font-serif">
                    Live Geolocation: Pennagaram, Dharmapuri
                  </span>
                </div>
                <div className="text-[11px] text-[#FDE68A] font-mono">
                  12.0833° N, 77.9000° E
                </div>
              </div>

              {/* Real Interactive Google Maps Embed */}
              <div className="relative h-[360px] sm:h-[420px] w-full bg-[#E5E3DF]">
                <iframe
                  title="Eargolpatti Pennagaram Venue Map"
                  src="https://maps.google.com/maps?q=Eargolpatti,+Pennagaram,+Dharmapuri,+Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating GPS Action Pill on Map */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 z-10">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#BA2428] hover:bg-[#9B1D20] text-white text-xs font-bold shadow-lg transition-all cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Start Turn-by-Turn GPS Navigation</span>
                    <ExternalLink className="w-3 h-3 opacity-75" />
                  </a>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="bg-[#FFFDF8] px-5 py-2.5 border-t border-[#EADBCE] flex items-center justify-between text-[11px] text-[#783F20]">
                <span>Eargolpatti Village, Pennagaram Taluk</span>
                <span className="text-[#A8420A] font-semibold">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Venue Address, Direct Action Buttons & Route Tips */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="bg-white border border-[#E8DCC4] rounded-2xl p-6 shadow-xs relative overflow-hidden">
              <div className="absolute top-3 right-3 opacity-10 pointer-events-none">
                <KolamMotif className="w-16 h-16 text-[#D4AF37]" />
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BA2428] mb-2">
                <MapPin className="w-4 h-4" />
                <span>Sacred Residence Address</span>
              </div>

              <h3 className="text-xl font-bold text-[#2D1B0F] font-serif">
                Sureshkumar &amp; Family
              </h3>

              <p className="text-sm text-[#5C3D2E] leading-relaxed mt-1 font-serif">
                Eargolpatti, Pennagaram Taluk, <br />
                Dharmapuri District, <br />
                Tamil Nadu — 636810
              </p>

              {/* Copy Address Button */}
              <button
                onClick={handleCopy}
                className="mt-4 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF6F0] hover:bg-[#F2ECE0] text-[#783F20] text-xs font-semibold border border-[#E0D0BC] transition-all cursor-pointer w-full justify-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Address Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#A8420A]" />
                    <span>Copy Complete Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Navigation Buttons (Google Maps & Apple Maps) */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#2D1B0F] hover:bg-[#1E120A] text-white text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4 text-[#FDE68A]" />
                <span>Google Maps</span>
              </a>

              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#2D1B0F] border border-[#D9C4A6] text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
              >
                <Compass className="w-4 h-4 text-[#BA2428]" />
                <span>Apple Maps</span>
              </a>
            </div>

            {/* Travel Assistance & Distances */}
            <div className="bg-white border border-[#E8DCC4] rounded-2xl p-5 space-y-3 text-xs shadow-xs">
              <div className="font-bold text-[#2D1B0F] font-serif text-sm border-b border-[#F0E6D8] pb-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#E77A23]" />
                <span>Travel Distance &amp; Route Guide</span>
              </div>

              <div className="space-y-2 text-[#5C3D2E]">
                <div className="flex items-start justify-between">
                  <span className="font-medium">From Dharmapuri Central (Bus / Train):</span>
                  <span className="font-bold text-[#A8420A]">~28 km (40 min)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-medium">From Pennagaram Bus Stand:</span>
                  <span className="font-bold text-[#A8420A]">~3.5 km (7 min)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-medium">From Salem Junction:</span>
                  <span className="font-bold text-[#A8420A]">~88 km (1.5 hrs)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="font-medium">From Bengaluru (Hosur route):</span>
                  <span className="font-bold text-[#A8420A]">~145 km (3 hrs)</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#783F20] bg-[#FFF8EE] p-2.5 rounded-lg border border-[#FDBA74]/50 leading-relaxed">
                <strong>💡 Travel Tip:</strong> Regular buses and shared taxis run frequently from Dharmapuri Bus Stand to Pennagaram. Auto-rickshaws are readily available from Pennagaram town to Eargolpatti.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

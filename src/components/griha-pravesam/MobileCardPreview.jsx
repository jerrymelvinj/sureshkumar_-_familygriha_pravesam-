import React, { useState } from 'react';
import { X, ArrowRight, Share2, Copy, Check, Navigation, Phone, Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { DeepamDiyaIcon, SacredKalashIcon, KolamMotif } from './SacredIcons';

export default function MobileCardPreview({ isOpen, onClose, onShare }) {
  const [activeTab, setActiveTab] = useState('cover'); // 'cover' or 'details'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md bg-transparent flex flex-col items-center">
        
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 px-2 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FDE68A] flex items-center gap-1 font-serif">
              <span>🪔</span> Digital Invitation Card
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle: Cover View vs Inside Details */}
        <div className="w-full flex items-center justify-center gap-2 mb-3">
          <button
            onClick={() => setActiveTab('cover')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'cover'
                ? 'bg-[#FDE68A] text-[#4A2810] shadow-sm'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Card Cover (Reference Style)
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'details'
                ? 'bg-[#FDE68A] text-[#4A2810] shadow-sm'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Inside Details (Muhurtham &amp; Map)
          </button>
        </div>

        {/* The Mobile Phone Container Mockup (Matching the reference image) */}
        <div className="w-full max-w-[360px] bg-[#FFFDF9] rounded-[42px] p-3 shadow-2xl border-4 border-[#EADCC6] relative overflow-hidden text-[#2D1B0F]">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 pt-2 pb-1 text-xs text-[#2D1B0F] font-semibold select-none">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="w-5 h-2.5 border border-[#2D1B0F] rounded-xs p-0.5 flex items-center">
                <div className="h-full w-3 bg-[#2D1B0F] rounded-xs" />
              </div>
            </div>
          </div>

          {/* Card Screen Content */}
          {activeTab === 'cover' ? (
            /* Cover Screen - Faithful to Reference Image with Hindu Religious Elements */
            <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-[#FFF5E6] via-white to-[#7B3F1D] border border-[#F2DFCD] h-[520px] flex flex-col justify-between">
              
              {/* Top Watercolor Art & Sacred Badges */}
              <div className="relative h-[310px] w-full overflow-hidden">
                <img
                  src="/house_ref.png"
                  alt="House Watercolor Art"
                  className="w-full h-full object-cover object-top"
                />

                {/* Auspicious floating top pill */}
                <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#FDBA74] text-[10px] font-bold text-[#A8420A] shadow-xs">
                    <DeepamDiyaIcon className="w-3.5 h-3.5" />
                    <span>Griha Pravesam</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#BA2428] text-white text-[10px] font-bold">
                    <span>22 Nov 2026</span>
                  </div>
                </div>

                {/* Watercolor bottom blend */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#8E441E] via-[#8E441E]/80 to-transparent" />
              </div>

              {/* Bottom Content Area - Warm Terracotta Gradient Fading */}
              <div className="px-5 pb-5 pt-2 bg-gradient-to-b from-[#8E441E] to-[#60270B] text-white space-y-3">
                <div className="text-center space-y-1">
                  <div className="text-xl font-bold tracking-tight font-serif">
                    Discover Your
                  </div>
                  <div className="text-2xl font-serif italic text-[#FDE68A] leading-tight">
                    Home of Blessings
                  </div>
                  <p className="text-[11px] text-white/85 font-serif italic leading-snug px-2 pt-1">
                    &ldquo;With the blessings of the Almighty, we cordially invite you and your family to our Griha Pravesam Ceremony.&rdquo;
                  </p>
                </div>

                {/* Dot Pagination indicator like reference image */}
                <div className="flex justify-center items-center gap-1.5 py-1">
                  <span className="w-6 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>

                {/* Sleek Pill Button: "Get started ->" exactly like reference image */}
                <button
                  onClick={() => setActiveTab('details')}
                  className="w-full flex items-center justify-between pl-6 pr-1.5 py-1.5 rounded-full bg-[#FFFDF9] hover:bg-white text-[#4A2810] shadow-lg transition-transform active:scale-95 cursor-pointer font-bold text-xs"
                >
                  <span className="tracking-wide">Explore Ceremony Details</span>
                  <span className="w-8 h-8 rounded-full bg-[#8E441E] text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

            </div>
          ) : (
            /* Details Screen - Inside Invitation */
            <div className="relative rounded-[30px] overflow-hidden bg-[#FAF6F0] border border-[#F2DFCD] h-[520px] flex flex-col justify-between p-4 overflow-y-auto">
              
              <div className="space-y-3.5">
                {/* Header */}
                <div className="text-center pb-2 border-b border-[#EADBCE]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#BA2428] font-serif">
                    || ॐ श्री गणेशाय नमः ||
                  </span>
                  <h4 className="text-base font-bold text-[#2E1F16] font-serif">
                    Griha Pravesam Ceremony
                  </h4>
                  <p className="text-[11px] text-[#783F20] font-serif">
                    Sureshkumar &amp; Family
                  </p>
                </div>

                {/* Timings */}
                <div className="bg-white rounded-xl p-3 border border-[#EADBCE] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A8420A]">
                    <Calendar className="w-3.5 h-3.5 text-[#BA2428]" />
                    <span>Sunday, 22 November 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#783F20]">
                    <Clock className="w-3.5 h-3.5 text-[#E77A23]" />
                    <span>Auspicious Timings: 8:30 AM – 10:00 AM</span>
                  </div>
                </div>

                {/* Venue & Geolocation */}
                <div className="bg-white rounded-xl p-3 border border-[#EADBCE] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A8420A]">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Sacred Venue</span>
                  </div>
                  <p className="text-xs text-[#4A2E1B] font-serif">
                    Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Eargolpatti,+Pennagaram,+Dharmapuri,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#BA2428] font-bold underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Open in Google Maps Navigation</span>
                  </a>
                </div>

                {/* Contact phone */}
                <div className="bg-[#FFF9F2] rounded-xl p-3 border border-[#FDBA74]/60 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#783F20]">
                      Host Contact
                    </div>
                    <div className="text-xs font-bold text-[#9B4B27]">
                      +91 98765 43210
                    </div>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="px-3 py-1.5 rounded-full bg-[#9B4B27] text-white text-[11px] font-bold"
                  >
                    Call Host
                  </a>
                </div>

                {/* Note */}
                <p className="text-[11px] text-center text-[#783F20] font-serif italic pt-1">
                  &ldquo;Your gracious presence and blessings will make our special day truly memorable.&rdquo;
                </p>
              </div>

              {/* Back to cover button */}
              <button
                onClick={() => setActiveTab('cover')}
                className="w-full mt-3 py-2 rounded-full bg-[#FAF0E4] hover:bg-[#F2E4D4] text-[#783F20] text-xs font-bold border border-[#E0D0BC] cursor-pointer"
              >
                ← Back to Cover View
              </button>

            </div>
          )}

          {/* Bottom Bar Indicator */}
          <div className="w-32 h-1 bg-[#4A2810]/30 rounded-full mx-auto mt-2.5 mb-1" />
        </div>

        {/* Bottom Action Buttons (Share / Copy Link) */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold shadow-md cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FAF6F0] text-[#783F20] text-xs font-bold shadow-md border border-[#E0D0BC] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}

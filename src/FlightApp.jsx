import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Eye, Monitor } from 'lucide-react';
import FlightNavbar from './components/FlightNavbar';
import FlightHero from './components/FlightHero';
import FlightPartners from './components/FlightPartners';
import FlightDestinations from './components/FlightDestinations';
import FlightJourney from './components/FlightJourney';
import FlightOffer from './components/FlightOffer';
import FlightFooter from './components/FlightFooter';
import FlightBookingModal from './components/FlightBookingModal';
import FlightVideoModal from './components/FlightVideoModal';
import FlightCompareModal from './components/FlightCompareModal';

export default function FlightApp() {
  const [viewMode, setViewMode] = useState('framed'); // 'framed' (matches reference shot) or 'fullscreen'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleOpenCompare = () => setIsCompareOpen(true);

  const handleScrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EFF3F8] text-[#0F172A] selection:bg-[#2A7FF6] selection:text-white font-sans antialiased">
      {/* Floating Toolbar: Toggle Framed Artboard vs Full Screen & Compare Reference */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 text-xs font-semibold select-none">
        {/* Toggle Framed / Fullscreen View */}
        <button
          onClick={() => setViewMode(viewMode === 'framed' ? 'fullscreen' : 'framed')}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-slate-700 hover:text-black hover:bg-slate-100 transition-colors cursor-pointer"
          title="Toggle Canvas View"
        >
          <Monitor size={14} className={viewMode === 'framed' ? 'text-[#2A7FF6]' : ''} />
          <span className="hidden sm:inline">
            {viewMode === 'framed' ? 'Framed View' : 'Full Web View'}
          </span>
        </button>

        <div className="w-[1px] h-4 bg-slate-200" />

        {/* Compare With Original Reference */}
        <button
          onClick={handleOpenCompare}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] hover:bg-black text-white transition-all cursor-pointer shadow-xs"
        >
          <Eye size={13} className="text-yellow-300" />
          <span>Compare Reference</span>
        </button>
      </div>

      {/* Main Canvas Wrapper */}
      <div
        className={`transition-all duration-300 mx-auto ${
          viewMode === 'framed'
            ? 'max-w-[1240px] px-3 sm:px-6 py-4 sm:py-8'
            : 'w-full px-0 py-0'
        }`}
      >
        {/* The White Canvas Card */}
        <div
          className={`bg-white transition-all duration-300 overflow-hidden ${
            viewMode === 'framed'
              ? 'rounded-[32px] sm:rounded-[42px] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] border border-slate-200/60 p-2 sm:p-4'
              : 'rounded-none shadow-none border-none p-0'
          }`}
        >
          {/* Top Navigation */}
          <FlightNavbar onBookClick={handleOpenBooking} />

          {/* Hero Section (The 1:1 Ditto Reproduction) */}
          <FlightHero
            onBookClick={handleOpenBooking}
            onPlayClick={handleOpenVideo}
            onKnowMoreClick={handleScrollToDestinations}
          />

          {/* Bottom Social & Partner Brands Bar */}
          <FlightPartners />

          {/* Extended Sections */}
          <FlightDestinations onSelectDestination={handleOpenBooking} />

          <FlightJourney onBookClick={handleOpenBooking} />

          <FlightOffer onBookClick={handleOpenBooking} />

          <FlightFooter />
        </div>
      </div>

      {/* Interactive Modals */}
      <FlightBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <FlightVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <FlightCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />
    </div>
  );
}

import React, { useState } from 'react';
import DivineHeader from './DivineHeader';
import HeroInvitation from './HeroInvitation';
import CountdownTimer from './CountdownTimer';
import CeremonyDetails from './CeremonyDetails';
import LocationTracking from './LocationTracking';
import ContactSection from './ContactSection';
import BlessingsRsvp from './BlessingsRsvp';
import GrihaFooter from './GrihaFooter';
import TraditionalAudioPlayer from './TraditionalAudioPlayer';
import MobileCardPreview from './MobileCardPreview';
import ShareModal from './ShareModal';
import { Navigation, Phone, Heart, Calendar } from 'lucide-react';

export default function GrihaPravesamApp() {
  const [isMobileCardOpen, setIsMobileCardOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2D1B0F] font-sans selection:bg-[#E87A23] selection:text-white relative">
      
      {/* 1. Auspicious Divine Top Header with Sloka & Toran */}
      <DivineHeader onOpenMobileCard={() => setIsMobileCardOpen(true)} />

      {/* 2. Hero Section with Modern Architectural Watercolor Home and User Content */}
      <HeroInvitation
        onOpenShare={() => setIsShareOpen(true)}
        onOpenMobileCard={() => setIsMobileCardOpen(true)}
      />

      {/* 3. Live Countdown Timer to Sunday, 22 November 2026 */}
      <CountdownTimer />

      {/* 4. Sacred Order of Ceremonies (Muhurtham & Paal Kaichuthal) */}
      <CeremonyDetails />

      {/* 5. Geolocation, Interactive Map & Travel Tracking */}
      <LocationTracking />

      {/* 6. Host Contacts & Assistance */}
      <ContactSection />

      {/* 7. Blessings Guestbook & RSVP Form */}
      <BlessingsRsvp />

      {/* 8. Auspicious Footer */}
      <GrihaFooter />

      {/* Floating Traditional Audio Music Player */}
      <TraditionalAudioPlayer />

      {/* Interactive Mobile Card Preview Modal (matching reference image) */}
      <MobileCardPreview
        isOpen={isMobileCardOpen}
        onClose={() => setIsMobileCardOpen(false)}
        onShare={() => setIsShareOpen(true)}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Mobile Sticky Quick Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-white/95 backdrop-blur-md border border-[#EADBCE] rounded-full shadow-2xl px-4 py-2 flex items-center justify-around text-xs font-semibold">
        <button
          onClick={() => scrollTo('venue-location')}
          className="flex flex-col items-center gap-0.5 text-[#9B4B27] cursor-pointer"
        >
          <Navigation className="w-4 h-4" />
          <span className="text-[10px]">Route Map</span>
        </button>

        <a
          href="tel:+919876543210"
          className="flex flex-col items-center gap-0.5 text-[#BA2428] cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px]">Call Host</span>
        </a>

        <button
          onClick={() => scrollTo('blessings-rsvp')}
          className="flex flex-col items-center gap-0.5 text-[#A8420A] cursor-pointer"
        >
          <Heart className="w-4 h-4" />
          <span className="text-[10px]">RSVP</span>
        </button>

        <button
          onClick={() => setIsMobileCardOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[#783F20] cursor-pointer"
        >
          <span className="text-sm leading-none">📱</span>
          <span className="text-[10px]">Card View</span>
        </button>
      </nav>

    </div>
  );
}

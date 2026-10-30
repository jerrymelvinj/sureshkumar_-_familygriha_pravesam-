import React from 'react';
import { X, Layers, CheckCircle2 } from 'lucide-react';
import fullPageRef from '../assets/full_page_ref.png';

export default function FlightCompareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 text-[#2A7FF6] font-bold text-xs uppercase tracking-wider mb-2">
          <Layers size={15} /> Design Fidelity & Structural Decoding
        </div>
        <h3 className="text-2xl sm:text-3xl font-[800] text-slate-900 mb-2 font-sans">
          Full Page Reference Comparison
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-2xl">
          Compare the original full-page design reference against the live coded implementation. Every detail—from the hero airliner and inverted cutout tab to Popular Destination cards, Journey cards, and the editorial Unleash Wanderlust section—has been implemented ditto.
        </p>

        {/* Reference Image Container */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 p-2 mb-6 shadow-inner flex justify-center">
          <img
            src={fullPageRef}
            alt="Full Page Reference Design"
            className="w-full max-w-md h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Structural Breakdown Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" /> Decoded Hero & Partners
            </h4>
            <ul className="space-y-1.5 text-slate-600 pl-6 list-disc">
              <li><strong>UIXSHUVO Navigation:</strong> Clean grotesque typography with Book Trip CTA.</li>
              <li><strong>Inverted Cutout Fillet:</strong> Mathematical organic concave curve pocket on the hero card.</li>
              <li><strong>Interactive 3-Step Stepper:</strong> Solid active step circle with connecting lines to step 2 & 3.</li>
              <li><strong>CTA Pair:</strong> Electric Blue pill button + White circular Play button.</li>
              <li><strong>Follow & Partner Logos:</strong> Airbnb, Booking.com, Trivago, Expedia.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" /> Decoded Full Page Sections
            </h4>
            <ul className="space-y-1.5 text-slate-600 pl-6 list-disc">
              <li><strong>Popular Destination:</strong> Slider header with &lt; &gt; buttons and 3 destination photo cards with ★ 4.7 badges.</li>
              <li><strong>Journey To The Skies Made Simple!:</strong> 3-step grid with highlighted blue card, aerial boat circle cutout, and "LEARN MORE &gt;".</li>
              <li><strong>Unleash Wanderlust With SkyWings:</strong> Little girl with yellow floaties photo, 20% OFF box, staggered typography, and cloud action banner.</li>
              <li><strong>Interactive Modals:</strong> Functional flight search booking dialog and video teaser player.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#111111] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold cursor-pointer"
          >
            Back To Live Page
          </button>
        </div>
      </div>
    </div>
  );
}

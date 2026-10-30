import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '../assets/hero_bg_clean.png';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';

const STEPS_DATA = [
  {
    step: 1,
    tagline: 'ELEVATE YOUR TRAVEL JOURNEY',
    title: ['Experience', 'The Magic Of', 'Flight!'],
    cta: 'Book A Trip Now',
  },
  {
    step: 2,
    tagline: 'DISCOVER REMOTE PARADISES',
    title: ['Unveil Pure', 'Hidden Coastal', 'Wonders!'],
    cta: 'Explore Island Tours',
  },
  {
    step: 3,
    tagline: 'FIRST CLASS EXCELLENCE',
    title: ['Ascend High', 'Above The Grand', 'Horizons!'],
    cta: 'Reserve Luxury Suite',
  },
];

export default function HeroSection({ onBookClick, onPlayClick, onKnowMoreClick }) {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = STEPS_DATA.find((s) => s.step === activeStep) || STEPS_DATA[0];

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-10 pt-1 pb-4">
      {/* Main Hero Card */}
      <div className="relative w-full h-[470px] sm:h-[500px] lg:h-[510px] rounded-[36px] sm:rounded-[42px] overflow-hidden shadow-xs border border-slate-200/40 bg-[#d9ecf8]">
        {/* The Exact Photo Airliner Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[center_right] transition-transform duration-700"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        {/* Stepper on the Left */}
        <div className="absolute z-20 left-6 sm:left-9 lg:left-10 top-[90px] sm:top-[115px] flex flex-col items-center">
          {[1, 2, 3].map((stepNum, idx) => {
            const isActive = activeStep === stepNum;
            return (
              <React.Fragment key={stepNum}>
                <button
                  onClick={() => setActiveStep(stepNum)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md ring-2 ring-white/60 scale-105'
                      : 'border border-white/70 bg-white/20 backdrop-blur-md text-white/90 hover:bg-white/40 hover:scale-105'
                  }`}
                  aria-label={`Switch to experience ${stepNum}`}
                >
                  {stepNum}
                </button>
                {idx < 2 && (
                  <div className="w-[1.5px] h-10 sm:h-12 bg-white/70 my-1 transition-colors duration-300" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Hero Content (Headline + CTAs) */}
        <div className="relative z-20 pt-14 sm:pt-18 lg:pt-20 pl-20 sm:pl-24 lg:pl-28 max-w-[480px] lg:max-w-[530px]">
          {/* Eyebrow Tagline */}
          <div className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] text-slate-600 uppercase mb-3 select-none">
            {currentStep.tagline}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-[800] leading-[1.03] tracking-[-0.035em] text-[#0f172a] mb-6 sm:mb-7 font-sans">
            {currentStep.title.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Action Row */}
          <div className="flex items-center gap-3.5">
            {/* Primary Action Button */}
            <button
              onClick={onBookClick}
              className="bg-[#2A7FF6] hover:bg-[#1b6ee0] text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-[13px] sm:text-[13.5px] tracking-wide shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              {currentStep.cta}
            </button>

            {/* Play Button */}
            <button
              onClick={onPlayClick}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[#2A7FF6] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
              title="Watch flight experience video"
              aria-label="Play video"
            >
              <Play
                size={16}
                className="fill-[#2A7FF6] text-[#2A7FF6] ml-0.5 group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* =========================================================================
            Signature "Know More" Cutout Tab (Docked at Bottom-Right of Hero Card)
           ========================================================================= */}
        <div className="absolute z-20 bottom-0 right-0">
          {/* Inverted Fillet (Concave Curve) on TOP-RIGHT connecting to Hero Right Edge */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className="absolute -top-[34px] right-0 pointer-events-none select-none hidden sm:block"
          >
            <path
              d="M34 0 C34 18.777 18.777 34 0 34 L34 34 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Inverted Fillet (Concave Curve) on BOTTOM-LEFT connecting to Hero Bottom Edge */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className="absolute bottom-0 -left-[34px] pointer-events-none select-none hidden sm:block"
          >
            <path
              d="M34 0 C34 18.777 18.777 34 0 34 L34 34 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Main White Tab Container */}
          <div className="bg-white rounded-tl-[34px] sm:rounded-tl-[38px] pt-4 pb-4 px-6 sm:px-7 max-w-[340px] sm:max-w-[360px]">
            {/* Top row: "Know More ->" */}
            <div
              onClick={onKnowMoreClick}
              className="flex items-center justify-end gap-2 mb-2.5 cursor-pointer group select-none pr-1"
            >
              <span className="font-extrabold text-[14.5px] text-slate-900 group-hover:text-[#2A7FF6] transition-colors">
                Know More
              </span>
              <ArrowRight
                size={17}
                className="text-slate-900 group-hover:text-[#2A7FF6] group-hover:translate-x-1 transition-all"
              />
            </div>

            {/* Bottom row: Destination avatar cluster + Destination text */}
            <div
              onClick={onKnowMoreClick}
              className="flex items-center gap-3 bg-slate-50/60 hover:bg-slate-50 p-2 rounded-2xl border border-slate-100/80 transition-all cursor-pointer group"
            >
              {/* Overlapping Destination Avatars */}
              <div className="flex items-center shrink-0">
                <img
                  src={avatar1}
                  alt="Coastal waters"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <img
                  src={avatar2}
                  alt="Santorini cliffside"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs -ml-3"
                />
                <img
                  src={avatar3}
                  alt="Island longtail boat"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs -ml-3"
                />
              </div>

              {/* Destination Copy */}
              <div className="flex flex-col">
                <span className="font-extrabold text-[12.5px] text-slate-900 group-hover:text-[#2A7FF6] transition-colors leading-tight">
                  Awesome Places
                </span>
                <span className="text-[10px] font-medium text-slate-500 leading-snug mt-0.5">
                  Discover The World One Adventure At A Time!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

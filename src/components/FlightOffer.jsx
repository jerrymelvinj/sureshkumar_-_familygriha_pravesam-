import React from 'react';
import { ArrowRight } from 'lucide-react';
import girlFloaties from '../assets/girl_floaties.png';
import cloudBtnBg from '../assets/cloud_button_bg.png';

export default function FlightOffer({ onBookClick }) {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-16 select-none">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column (4 cols): Photo + 20% OFF Box */}
        <div className="md:col-span-5 flex flex-col">
          {/* Girl Floaties Photo */}
          <div className="relative w-full h-[320px] sm:h-[350px] rounded-[28px] overflow-hidden shadow-xs bg-slate-100">
            <img
              src={girlFloaties}
              alt="Joyful child playing in sea surf"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 20% OFF Pill Box */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex items-center justify-between mt-3 shadow-xs">
            <span className="text-2xl sm:text-[28px] font-black text-[#2A7FF6] tracking-tight">
              20% OFF
            </span>
            <div className="text-[11px] text-slate-400 font-medium text-right leading-tight">
              <span>Till 28 September,</span>
              <br />
              <span>2023</span>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Editorial Typography + Cloud Action Button */}
        <div className="md:col-span-7 flex flex-col justify-between h-full pl-0 md:pl-4">
          {/* Staggered Editorial Headline */}
          <div className="mb-8">
            {/* Row 1: UNLEASH + Paragraph */}
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-[900] text-slate-950 font-sans tracking-tight leading-none">
                UNLEASH
              </h2>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-[210px]">
                Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique
              </p>
            </div>

            {/* Row 2: WANDERLUST WITH */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-[900] text-slate-950 font-sans tracking-tight leading-none my-3 sm:my-4">
              WANDERLUST WITH
            </h2>

            {/* Row 3: Paragraph + SKYWINGS */}
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-[210px]">
                Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-[900] text-slate-950 font-sans tracking-tight leading-none">
                SKYWINGS
              </h2>
            </div>
          </div>

          {/* Cloud Button Action */}
          <button
            onClick={onBookClick}
            className="w-full h-[58px] sm:h-[62px] rounded-[22px] overflow-hidden bg-cover bg-center flex items-center justify-center font-bold text-slate-900 text-[14px] sm:text-[15px] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xs cursor-pointer border border-sky-100 group"
            style={{
              backgroundImage: `url(${cloudBtnBg})`,
            }}
          >
            <span className="flex items-center gap-2">
              Book A Flight Now
              <ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

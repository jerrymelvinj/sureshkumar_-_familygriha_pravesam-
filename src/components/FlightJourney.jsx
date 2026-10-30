import React from 'react';
import { Compass, Plane, ChevronRight, Grid } from 'lucide-react';
import aerialBoat from '../assets/aerial_boat.png';

export default function FlightJourney({ onBookClick }) {
  return (
    <section id="packages" className="w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-16 select-none">
      {/* Centered Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-[800] tracking-tight text-slate-900 font-sans mb-3">
          Journey To The Skies Made Simple!
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-400 font-medium leading-relaxed">
          Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences.
        </p>
      </div>

      {/* 3 Step Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto">
        {/* Step 1: Find Your Destination */}
        <div className="bg-[#F8F9FB] rounded-[32px] p-8 h-[240px] flex flex-col justify-between border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2A7FF6]">
            <Compass size={20} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              Find Your <br /> Destination
            </h3>
          </div>
        </div>

        {/* Step 2 (Middle Featured Blue Card): Book A Ticket */}
        <div className="bg-[#2A7FF6] text-white rounded-[32px] overflow-hidden p-8 min-h-[350px] flex flex-col justify-between shadow-xl relative transform md:-translate-y-2">
          {/* Semicircular / Circular Photo Cutout at Top-Right */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
            <img
              src={aerialBoat}
              alt="Turquoise water boat aerial"
              className="w-full h-full object-cover rounded-bl-full"
            />
          </div>

          {/* Top Left Icon */}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/25">
            <Grid size={18} />
          </div>

          {/* Content */}
          <div className="relative z-10 pt-6">
            <h3 className="text-2xl sm:text-[26px] font-extrabold leading-tight mb-3 font-sans">
              Book <br /> A Ticket
            </h3>
            <p className="text-white/85 text-xs sm:text-[12.5px] leading-relaxed mb-6 font-normal">
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences.
            </p>

            <button
              onClick={onBookClick}
              className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-white hover:text-white/90 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>LEARN MORE</span>
              <ChevronRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Step 3: Pay & Start Journey */}
        <div className="bg-[#F8F9FB] rounded-[32px] p-8 h-[240px] flex flex-col justify-between border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2A7FF6]">
            <Plane size={20} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              Pay & <br /> Start Journey
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

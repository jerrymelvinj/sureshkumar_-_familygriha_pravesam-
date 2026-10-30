import React, { useState } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import dest1 from '../assets/dest1_boat.png';
import dest2 from '../assets/dest2_santorini.png';
import dest3 from '../assets/dest3_beach.png';

const DESTINATIONS = [
  {
    id: 1,
    title: 'Forest Wild Life',
    location: 'NRT, Indonesia',
    rating: 4.7,
    image: dest1,
  },
  {
    id: 2,
    title: 'Forest Wild Life',
    location: 'NRT, Indonesia',
    rating: 4.7,
    image: dest2,
  },
  {
    id: 3,
    title: 'Forest Wild Life',
    location: 'NRT, Indonesia',
    rating: 4.7,
    image: dest3,
  },
];

export default function FlightDestinations({ onSelectDestination }) {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <section id="destinations" className="w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-14 select-none">
      {/* Header Row */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-[800] tracking-tight text-slate-900 font-sans">
            Popular Destination
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-400 font-medium mt-1">
            Unleash Your Wanderlust With SkyWings
          </p>
        </div>

        {/* Arrow Controls (< >) */}
        <div className="flex items-center gap-2.5">
          <button
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Previous destination"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            className="w-9 h-9 rounded-full bg-black hover:bg-slate-800 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Next destination"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* 3 Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {DESTINATIONS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectDestination && onSelectDestination(item)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Box */}
            <div className="relative w-full h-[180px] sm:h-[195px] rounded-[24px] overflow-hidden mb-3.5 bg-slate-100 shadow-xs">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Details */}
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="font-extrabold text-[15px] sm:text-[15.5px] text-slate-900 group-hover:text-[#2A7FF6] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-0.5">
                  <MapPin size={12} className="text-slate-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Rating Blue Pill */}
              <div className="bg-[#2A7FF6] text-white px-3 py-1 rounded-full text-[11.5px] font-bold flex items-center gap-1 shadow-xs group-hover:scale-105 transition-transform">
                <Star size={11} className="fill-white" />
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

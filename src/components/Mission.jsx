import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

export default function Mission() {
  const cards = [
    {
      title: 'Sustainable Land Use',
      image: '/images/mission_card_1_hi.png',
    },
    {
      title: 'Climate Action',
      image: '/images/mission_card_2_hi.png',
    },
    {
      title: 'Community Empowerment',
      image: '/images/mission_card_3_hi.png',
    },
  ];

  return (
    <section id="mission" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy, Buttons */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF3EC] text-[#245B38] text-[10.5px] font-semibold tracking-wider uppercase border border-[#DAE5D8]">
              <Leaf className="w-3.5 h-3.5 fill-[#245B38]/20 text-[#245B38]" />
              <span>OUR MISSION</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-[#131E18] leading-[1.12]">
              We're Building
              <br />
              a <span className="text-[#2F7C48]">Greener</span>,
              <br />
              Cleaner, Stronger
              <br />
              World.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-[#56655C] max-w-md leading-relaxed">
              Through education, action, and innovation, we empower people to protect nature and create lasting change.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#initiatives"
                className="inline-flex items-center gap-2 bg-[#245B38] hover:bg-[#1c492e] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center border border-[#CCD7C8] hover:border-[#131E18] text-[#131E18] text-xs font-semibold px-6 py-3 rounded-full transition-all hover:bg-black/5 active:scale-95 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: 3 Tall Visual Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="relative group h-[420px] sm:h-[450px] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer border border-[#E2E8DE]/60 bg-[#162B1E]"
                >
                  {/* Card Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

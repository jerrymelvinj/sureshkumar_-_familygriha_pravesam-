import React, { useState } from 'react';
import { Leaf, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Initiatives() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const initiatives = [
    {
      id: 1,
      tag: 'Ocean Cleanup',
      title: 'Clean Oceans, Bright Future',
      desc: 'Removing plastic and debris from our oceans and coastlines.',
      image: '/images/init_card_1_hi.png',
    },
    {
      id: 2,
      tag: 'Reforestation',
      title: 'More Trees, Better Planet',
      desc: 'Planting and restoring forests for a healthier Earth.',
      image: '/images/init_card_2_hi.png',
    },
    {
      id: 3,
      tag: 'Community',
      title: 'Stronger Communities, Stronger Future',
      desc: 'Empowering communities to lead local change.',
      image: '/images/init_card_3_hi.png',
    },
  ];

  return (
    <section id="initiatives" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Row with Badge & Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF3EC] text-[#245B38] text-[10.5px] font-semibold tracking-wider uppercase border border-[#DAE5D8]">
            <Leaf className="w-3.5 h-3.5 fill-[#245B38]/20 text-[#245B38]" />
            <span>OUR INITIATIVES</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous initiative"
              className="w-9 h-9 rounded-full border border-[#D5DCD2] hover:border-[#131E18] hover:bg-white flex items-center justify-center text-[#131E18] transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next initiative"
              className="w-9 h-9 rounded-full border border-[#D5DCD2] hover:border-[#131E18] hover:bg-white flex items-center justify-center text-[#131E18] transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Area Grid: 3 Cards on Left, Headline & Newsletter on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Area (Cards): 8 Columns on lg */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {initiatives.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between cursor-pointer"
                >
                  {/* Image with Tag Overlay */}
                  <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-xs bg-[#EBF0E8] border border-[#E5ECE1]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#131E18] group-hover:text-[#245B38] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5C6B62] mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <a
                      href={`#${item.tag.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245B38] hover:gap-2.5 transition-all mt-3.5 cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Area (Headline + Newsletter Card): 4 Columns on lg */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Headline and Copy */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#131E18] leading-[1.12]">
                Real Actions. Real Impact.
                <br />
                A Better Future.
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6B62] leading-relaxed">
                Discover how we turn ideas into impact through projects that protect our planet and support communities.
              </p>
              <div>
                <a
                  href="#all-initiatives"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245B38] hover:gap-2.5 transition-all cursor-pointer"
                >
                  <span>View All Initiatives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Lime Yellow-Green Newsletter Box */}
            <div className="bg-[#D2F865] rounded-[24px] p-6 shadow-xs relative overflow-hidden">
              <h3 className="text-base sm:text-lg font-bold text-[#131E18] leading-tight">
                Stay Inspired. Stay Informed.
              </h3>
              <p className="text-xs text-[#2A3728] mt-2 leading-relaxed">
                Subscribe to our newsletter and get the latest updates on our projects, stories, and how you can help.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
                <div className="flex items-center bg-white rounded-full p-1 pl-4 shadow-2xs">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full text-xs text-[#131E18] placeholder-[#79887F] outline-none bg-transparent pr-2"
                  />
                  <button
                    type="submit"
                    className="bg-[#245B38] hover:bg-[#1c492e] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1 transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-[#1B4D2B] font-semibold pl-2">
                    ✓ Subscribed! Check your inbox soon.
                  </p>
                )}
              </form>

              {/* Bottom Social Proof Avatars */}
              <div className="flex items-center gap-2.5 mt-4 pt-1">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                    src="/images/avatar1.jpg"
                    alt="Change maker avatar"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                    src="/images/avatar2.jpg"
                    alt="Change maker avatar"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                    src="/images/avatar3.jpg"
                    alt="Change maker avatar"
                  />
                </div>
                <span className="text-[11px] font-medium text-[#2A3728]">
                  Join thousands of change-makers
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

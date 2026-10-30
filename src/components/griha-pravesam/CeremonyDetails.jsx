import React from 'react';
import { Calendar, Clock, Flame, Utensils, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { DeepamDiyaIcon, SacredKalashIcon, KolamMotif } from './SacredIcons';

export default function CeremonyDetails() {
  const rituals = [
    {
      time: '05:30 AM – 06:30 AM',
      title: 'Go Pooja & Mangala Vadyam',
      tamil: 'கோ பூஜை & மங்கள வாத்தியம்',
      desc: 'Invoking the auspicious blessings of Goddess Kamadhenu at sunrise to cleanse the threshold and invite divine purity.',
      tag: 'Dawn Awakening',
      icon: '🐄',
      accent: 'border-[#FCD34D] bg-[#FFFBEB]',
    },
    {
      time: '06:30 AM – 08:00 AM',
      title: 'Ganapathi Homam & Navagraha Pooja',
      tamil: 'கணபதி ஹோமம் & நவக்கிரக சாந்தி',
      desc: 'Sacred Vedic fire ritual to eradicate obstacles, align planetary energies, and sanctify the premises with Vedic chants.',
      tag: 'Sacred Fire Ritual',
      icon: '🔥',
      accent: 'border-[#FDBA74] bg-[#FFF7ED]',
    },
    {
      time: '08:30 AM – 10:00 AM',
      title: 'Auspicious Muhurtham & Paal Kaichuthal',
      tamil: 'சுப முகூர்த்தம் & பால் காய்ச்சுதல்',
      desc: 'The grand threshold entry carrying the holy Kalash, lighting the Kuthuvilakku, and boiling pure milk in the new kitchen until it overflows with joy and abundance.',
      tag: 'Prime Muhurtham',
      highlight: true,
      icon: '🥛',
      accent: 'border-[#BA2428] bg-[#FFF1F2]',
    },
    {
      time: '10:00 AM Onwards',
      title: 'Traditional Virundhu (Festive Feast)',
      tamil: 'சுப விருந்து உபசாரம்',
      desc: 'Grand festive South Indian feast served on traditional plantain leaves (Banana leaf Virundhu) with payasam and traditional delicacies.',
      tag: 'Mahaprasadam',
      icon: '🍌',
      accent: 'border-[#BBF7D0] bg-[#F0FDF4]',
    },
  ];

  return (
    <section id="ceremony-details" className="py-16 md:py-20 relative bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] text-[#A8420A] text-xs font-semibold border border-[#FDBA74]">
            <Sparkles className="w-3.5 h-3.5 text-[#E77A23]" />
            <span>Sacred Order of Ceremonies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B0F] font-serif">
            Griha Pravesam Schedule
          </h2>
          <p className="text-sm sm:text-base text-[#783F20] font-serif leading-relaxed">
            Every ritual is steeped in centuries of Vedic tradition, seeking peace, health, and eternal happiness in our new home.
          </p>
        </div>

        {/* Timetable / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((r, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 shadow-xs hover:shadow-md ${
                r.highlight
                  ? 'border-[#BA2428] bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0E6] ring-2 ring-[#BA2428]/20'
                  : 'border-[#E8DCC4] bg-white hover:border-[#D4AF37]'
              }`}
            >
              {/* Highlight ribbon if prime muhurtham */}
              {r.highlight && (
                <div className="absolute -top-3.5 right-6 bg-[#BA2428] text-[#FDE68A] text-[11px] uppercase tracking-wider font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1.5">
                  <DeepamDiyaIcon className="w-3.5 h-3.5" />
                  <span>Auspicious Muhurtham</span>
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Ritual Icon */}
                <div className="text-3xl p-2.5 rounded-2xl bg-white shadow-xs border border-[#EADBCE] shrink-0">
                  {r.icon}
                </div>

                <div className="space-y-1.5 flex-1">
                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#A8420A] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#E77A23]" />
                    <span>{r.time}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#2E1F16] font-serif">
                    {r.title}
                  </h3>

                  <div className="text-xs text-[#9B4B27] font-medium font-serif">
                    {r.tamil}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed pt-1">
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional Significance Note Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#FFF7ED] via-[#FFFDF9] to-[#FFF7ED] border border-[#FDBA74]/80 rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-xs">
          <div className="flex justify-center mb-2">
            <SacredKalashIcon className="w-9 h-9" />
          </div>
          <h4 className="text-base font-bold text-[#2E1F16] font-serif">
            The Significance of &ldquo;Paal Kaichuthal&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-[#783F20] mt-1 font-serif leading-relaxed">
            In our Tamil Hindu heritage, boiling fresh milk until it overflows from the vessel signifies an overflow of peace, health, prosperity, and endless blessings for the entire family and everyone who enters the home.
          </p>
        </div>

      </div>
    </section>
  );
}

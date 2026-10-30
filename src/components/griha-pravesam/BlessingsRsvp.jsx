import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { DeepamDiyaIcon, SacredKalashIcon } from './SacredIcons';

export default function BlessingsRsvp() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '2',
    attending: 'yes',
    blessing: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [blessingList, setBlessingList] = useState([
    {
      name: 'Ramesh & Shanthi',
      relation: 'Relatives from Salem',
      text: 'May Lord Vinayaka bless your beautiful new home with everlasting peace, happiness, and prosperity!',
      time: 'Just now',
    },
    {
      name: 'Venkatesan & Family',
      relation: 'Close Friends',
      text: 'Congratulations Sureshkumar! Looking forward to celebrating this glorious milestone with you in Pennagaram.',
      time: '1 hour ago',
    },
    {
      name: 'Anand & Priya',
      relation: 'Family Friends',
      text: 'Hearty congratulations on your Griha Pravesam! Wishing you abundance and divine grace in your dream abode.',
      time: '3 hours ago',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (formData.blessing.trim()) {
      setBlessingList([
        {
          name: formData.name,
          relation: 'Well-wisher & Guest',
          text: formData.blessing,
          time: 'Just now',
        },
        ...blessingList,
      ]);
    }

    setSubmitted(true);
  };

  return (
    <section id="blessings-rsvp" className="py-16 md:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FAF6F0] border-t border-[#EADBCE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] text-[#A8420A] text-xs font-semibold border border-[#FDBA74]">
            <Heart className="w-3.5 h-3.5 text-[#BA2428]" />
            <span>RSVP &amp; Sacred Wishes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B0F] font-serif">
            Shower Your Blessings &amp; Confirm Attendance
          </h2>
          <p className="text-sm sm:text-base text-[#783F20] font-serif leading-relaxed">
            Your gracious presence will bring warmth to our home. Kindly RSVP so we may prepare the festive virundhu feast accordingly.
          </p>
        </div>

        {/* 2-Column Layout: RSVP Form + Live Blessings Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (6 cols): RSVP Form */}
          <div className="lg:col-span-6 bg-white border border-[#E8DCC4] rounded-3xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FEF3C7] border-2 border-[#D4AF37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-[#B45309]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D1B0F] font-serif">
                  Nandri! Blessings Received
                </h3>
                <p className="text-sm text-[#783F20] font-serif max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your warm wishes and RSVP have been noted. Sureshkumar &amp; Family eagerly await your arrival on Sunday, 22 November 2026.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#FAF6F0] hover:bg-[#F2ECE0] text-[#783F20] text-xs font-bold border border-[#E0D0BC] cursor-pointer"
                >
                  Send another message or edit RSVP
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#F0E6D8] pb-3">
                  <h3 className="text-lg font-bold text-[#2D1B0F] font-serif flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E77A23]" />
                    <span>RSVP Card</span>
                  </h3>
                  <span className="text-xs text-[#783F20] font-serif">Sunday, 22 Nov 2026</span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#783F20] mb-1">
                    Your Name / Family Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand & Family"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9C4A6] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B4B27]/40 text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#783F20] mb-1">
                    Contact Phone (For route updates)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9C4A6] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B4B27]/40 text-sm"
                  />
                </div>

                {/* Attending & Number of Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#783F20] mb-1">
                      Will You Attend?
                    </label>
                    <select
                      value={formData.attending}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D9C4A6] bg-[#FAF6F0] focus:bg-white focus:outline-none text-sm cursor-pointer"
                    >
                      <option value="yes">Joyfully Attending 🌸</option>
                      <option value="maybe">Will Try My Best ✨</option>
                      <option value="blessings_only">Sending Blessings from afar 🙏</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#783F20] mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D9C4A6] bg-[#FAF6F0] focus:bg-white focus:outline-none text-sm cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5+">5+ Family Members</option>
                    </select>
                  </div>
                </div>

                {/* Blessing Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#783F20] mb-1">
                    Your Auspicious Message &amp; Wishes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write a warm message or blessing for our new house..."
                    value={formData.blessing}
                    onChange={(e) => setFormData({ ...formData, blessing: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9C4A6] bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B4B27]/40 text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#BA2428] hover:bg-[#9B1D20] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4 text-[#FDE68A]" />
                  <span>Send Wishes &amp; Confirm RSVP</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (6 cols): Blessings Wall */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#2D1B0F] font-serif flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E77A23]" />
                <span>Guest Wishes &amp; Blessings Wall</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#FFF0E6] text-[#A8420A] font-semibold border border-[#FDBA74]">
                {blessingList.length} Messages
              </span>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {blessingList.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DCC4] rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-[#D4AF37] transition-colors relative"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-[#2E1F16] font-serif text-sm">
                        {b.name}
                      </div>
                      <div className="text-[11px] text-[#A8420A] font-medium">
                        {b.relation}
                      </div>
                    </div>
                    <span className="text-[10px] text-[#783F20]/70 font-mono">
                      {b.time}
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#4A2E1B] font-serif italic leading-relaxed">
                    &ldquo;{b.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <span className="text-xs text-[#783F20] font-serif italic">
                &ldquo;Blessed is the home where friends gather and love abounds.&rdquo;
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

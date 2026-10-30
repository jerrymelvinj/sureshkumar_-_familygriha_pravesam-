import React from 'react';
import { Phone, MessageCircle, UserCheck, ShieldCheck, HelpCircle } from 'lucide-react';
import { SacredKalashIcon, DeepamDiyaIcon } from './SacredIcons';

export default function ContactSection() {
  const contacts = [
    {
      name: 'Sureshkumar',
      relation: 'Host & Homeowner',
      phone: '+91 98765 43210',
      rawPhone: '+919876543210',
      whatsappMessage: encodeURIComponent(
        "Vanakkam Sureshkumar, we are delighted to attend your Griha Pravesam Ceremony on Sunday, 22 November 2026!"
      ),
      role: 'Event Host',
      highlight: true,
    },
    {
      name: 'Family Reception Coordinator',
      relation: 'Route Assistance & Guest Support',
      phone: '+91 98765 43211',
      rawPhone: '+919876543211',
      whatsappMessage: encodeURIComponent(
        "Vanakkam! I am on my way to Eargolpatti for Sureshkumar's Griha Pravesam. Could you please guide me on the nearest landmark?"
      ),
      role: 'Helpline & Parking',
      highlight: false,
    },
  ];

  return (
    <section id="contact-hosts" className="py-16 md:py-20 bg-[#FAF6F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] text-[#A8420A] text-xs font-semibold border border-[#FDBA74]">
            <Phone className="w-3.5 h-3.5 text-[#E77A23]" />
            <span>Contact &amp; Guest Assistance</span>
          </div>
          <h2 className="text-3xl font-bold text-[#2D1B0F] font-serif">
            We Are Here To Assist You
          </h2>
          <p className="text-sm text-[#783F20] font-serif">
            For route guidance, arrival coordination, or any questions on the ceremony morning, please reach out to us directly.
          </p>
        </div>

        {/* Contacts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 sm:p-7 border-2 shadow-xs transition-all hover:shadow-md ${
                c.highlight ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/30' : 'border-[#EADBCE]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF3E0] text-[#A8420A] border border-[#FDBA74]">
                  {c.role}
                </span>
                <DeepamDiyaIcon className="w-5 h-5 opacity-80" />
              </div>

              <h3 className="text-xl font-bold text-[#2D1B0F] font-serif">
                {c.name}
              </h3>
              <p className="text-xs text-[#783F20] font-medium mt-0.5">
                {c.relation}
              </p>

              {/* Phone display */}
              <div className="mt-4 p-3 bg-[#FAF6F0] rounded-xl border border-[#EADBCE] text-center">
                <span className="text-base font-bold text-[#9B4B27] font-mono tracking-wider">
                  {c.phone}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${c.rawPhone}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#9B4B27] hover:bg-[#803C1D] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${c.rawPhone.replace('+', '')}?text=${c.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Friendly Hospitality Note */}
        <div className="mt-8 text-center text-xs text-[#783F20] font-serif flex items-center justify-center gap-2">
          <span>🌸</span>
          <span>Ample parking and traditional hospitality arrangements await you and your family.</span>
          <span>🌸</span>
        </div>

      </div>
    </section>
  );
}

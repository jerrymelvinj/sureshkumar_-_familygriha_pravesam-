import React from 'react';

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 3C7 3 3 7 3 12C8 12 12 8 12 3Z" fill="currentColor" />
          <path d="M12 21C17 21 21 17 21 12C16 12 12 16 12 21Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 12L20 12M12 4L12 20M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM12 18A6 6 0 1 1 18 12A6 6 0 0 1 12 18Z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Logoipsum',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="8" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-6 px-3 sm:px-5 lg:px-8 border-t border-b border-[#E6EBE1]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Label */}
        <span className="text-[11px] font-semibold text-[#8B988F] tracking-widest uppercase shrink-0">
          TRUSTED BY
        </span>

        {/* Logos Marquee / Row */}
        <div className="w-full flex items-center justify-between overflow-x-auto no-scrollbar gap-8 md:gap-6 py-2">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-2 text-[#8B988F] hover:text-[#245B38] transition-colors shrink-0 cursor-pointer group"
            >
              <div className="text-[#8B988F] group-hover:text-[#245B38] transition-colors">
                {partner.icon}
              </div>
              <span className="text-sm font-bold tracking-tight text-[#718076] group-hover:text-[#131E18] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

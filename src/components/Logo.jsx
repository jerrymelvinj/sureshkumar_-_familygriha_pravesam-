import React from 'react';

export default function Logo({ className = "h-7 w-auto", dark = false }) {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer group">
      {/* Aeline Abstract Leaf / Arch Mark */}
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic curved leaf arch */}
        <path
          d="M6 23C6 14 11 8 16 8C21 8 26 14 26 23C26 23 22 20 16 20C10 20 6 23 6 23Z"
          fill="#235B3A"
        />
        <path
          d="M10 23C11.5 17 13.8 13.5 16 13.5C18.2 13.5 20.5 17 22 23C19.5 21.2 12.5 21.2 10 23Z"
          fill="#163824"
          opacity="0.3"
        />
        <circle cx="16" cy="6" r="2.2" fill="#2E7D32" />
      </svg>
      <span className="font-bold text-[22px] tracking-tight text-[#131E18] group-hover:text-[#235B3A] transition-colors">
        Aeline
      </span>
    </div>
  );
}

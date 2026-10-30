import React from 'react';

export default function FlightPartners() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-6 select-none">
      {/* Left: Follow Pill Capsule */}
      <div className="flex items-center gap-4 px-5 py-2.5 rounded-full border border-slate-200/90 bg-white/70 shadow-xs hover:border-slate-300 transition-colors">
        <span className="text-[12.5px] font-semibold text-slate-500 tracking-wide">
          Follow
        </span>
        <div className="flex items-center gap-3 text-slate-700">
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-5 h-5 flex items-center justify-center hover:text-black hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-5 h-5 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <circle cx="12" cy="12" r="10" fill="#2A7FF6" />
              <path
                d="M13.2 8H14.5V6H12.8C10.7 6 10 7.4 10 9.2V11H8.5V13H10V18H12.2V13H14.2L14.5 11H12.2V9.3C12.2 8.5 12.6 8 13.2 8Z"
                fill="#ffffff"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-5 h-5 flex items-center justify-center hover:text-[#E4405F] hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-5 h-5 flex items-center justify-center hover:text-black hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: Partner Logos (airbnb, Booking.com, trivago, Expedia) */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 text-slate-400">
        {/* Airbnb */}
        <div className="flex items-center gap-2 group cursor-pointer hover:text-slate-800 transition-colors">
          <svg
            viewBox="0 0 32 32"
            width="24"
            height="24"
            fill="currentColor"
            className="group-hover:text-[#FF385C] transition-colors"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533.992c2.247 4.195 5.716 11.233 5.716 15.739 0 5.218-3.766 9-8.5 9-3.238 0-6.195-1.782-7.5-4.66-1.305 2.878-4.262 4.66-7.5 4.66-4.734 0-8.5-3.782-8.5-9 0-4.506 3.469-11.544 5.716-15.739l.533-.992C3.537 1.963 4.992 1 7 1c2.19 0 3.738 1.134 4.5 3.036C12.262 2.134 13.81 1 16 1zm0 4c-1.314 0-2.188.756-3.084 2.378l-.348.653C10.426 12.003 7 18.91 7 22c0 2.761 1.79 5 4.5 5 2.457 0 4.095-1.802 4.451-4.218l.049-.382h2l.049.382C18.405 25.198 20.043 27 22.5 27c2.71 0 4.5-2.239 4.5-5 0-3.09-3.426-9.997-5.568-13.969l-.348-.653C20.188 5.756 19.314 5 18 5c-.773 0-1.428.328-2 1-.572-.672-1.227-1-2-1z" />
          </svg>
          <span className="font-extrabold text-[18px] tracking-tight group-hover:text-slate-900 transition-colors">
            airbnb
          </span>
        </div>

        {/* Booking.com */}
        <div className="flex items-center group cursor-pointer hover:text-slate-800 transition-colors">
          <span className="font-extrabold text-[18px] tracking-tight text-slate-500 group-hover:text-[#003580] transition-colors">
            Booking<span className="text-[#006CE4] font-black">.com</span>
          </span>
        </div>

        {/* trivago */}
        <div className="flex items-center gap-1.5 group cursor-pointer hover:text-slate-800 transition-colors">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            className="group-hover:scale-105 transition-transform"
          >
            <circle cx="8" cy="12" r="5" stroke="#E63946" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="5" stroke="#1D3557" strokeWidth="2.5" />
            <circle cx="16" cy="12" r="5" stroke="#F4A261" strokeWidth="2.5" />
          </svg>
          <span className="font-extrabold text-[18px] tracking-tight lowercase text-slate-500 group-hover:text-slate-900 transition-colors">
            trivago
          </span>
        </div>

        {/* Expedia */}
        <div className="flex items-center gap-2 group cursor-pointer hover:text-slate-800 transition-colors">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            className="group-hover:text-[#FFCC00] transition-colors"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path
              d="M12 6L14 11L18 12L14 13L12 18L10 13L6 12L10 11Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-bold text-[18px] tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors">
            Expedia
          </span>
        </div>
      </div>
    </div>
  );
}

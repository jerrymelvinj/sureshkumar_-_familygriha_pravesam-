import React from 'react';

// Sacred Lord Ganesha Motif
export const LordGaneshaIcon = ({ className = "w-12 h-12 text-[#9B4B27]" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-label="Lord Ganesha">
    <path d="M50 12 C44 12 40 16 38 21 C35 19 31 18 28 20 C23 23 22 30 25 35 C22 37 19 41 19 46 C19 54 26 61 34 61 C36 61 38 60 40 59 C42 66 46 72 51 77 C54 80 58 82 62 82 C67 82 71 79 73 75 C76 70 77 64 76 58 C80 56 83 51 83 46 C83 39 78 33 71 31 C71 25 67 19 61 15 C58 13 54 12 50 12 Z M50 16 C53 16 56 17 58 19 C55 21 52 24 50 28 C48 24 45 21 42 19 C44 17 47 16 50 16 Z M33 24 C35 24 37 25 38 26 C36 29 35 32 35 36 C32 36 30 35 29 33 C28 30 29 26 33 24 Z M67 24 C71 26 72 30 71 33 C70 35 68 36 65 36 C65 32 64 29 62 26 C63 25 65 24 67 24 Z M50 31 C52 35 55 40 57 44 C54 44 52 45 50 47 C48 45 46 44 43 44 C45 40 48 35 50 31 Z M23 46 C23 43 25 40 27 39 C28 44 31 49 35 52 C31 55 27 54 25 52 C23 50 23 48 23 46 Z M77 46 C77 48 77 50 75 52 C73 54 69 55 65 52 C69 49 72 44 73 39 C75 40 77 43 77 46 Z M48 53 C50 51 52 51 54 53 C57 58 59 64 59 70 C59 75 56 78 52 78 C48 78 45 74 45 69 C45 64 46 58 48 53 Z" />
    <circle cx="50" cy="22" r="2.5" fill="#E77A23" />
    <circle cx="50" cy="38" r="3" fill="#BA2428" />
  </svg>
);

// Traditional Brass Deepam / Diya with glowing flame
export const DeepamDiyaIcon = ({ className = "w-10 h-10", flameClass = "animate-flame" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Auspicious Diya">
    {/* Diya Base */}
    <path
      d="M20 62 C20 78 33 86 50 86 C67 86 80 78 80 62 C72 66 61 68 50 68 C39 68 28 66 20 62 Z"
      fill="url(#diyaGoldGrad)"
      stroke="#B8860B"
      strokeWidth="1.5"
    />
    <ellipse cx="50" cy="62" rx="30" ry="7" fill="url(#diyaOilGrad)" stroke="#B8860B" strokeWidth="1" />
    <path d="M42 86 L38 94 L62 94 L58 86 Z" fill="url(#diyaGoldGrad)" stroke="#B8860B" strokeWidth="1" />

    {/* Glowing Flame */}
    <g className={flameClass} style={{ transformOrigin: '50px 48px' }}>
      <path
        d="M50 16 C53 28 61 38 58 48 C55 56 45 56 42 48 C39 38 47 28 50 16 Z"
        fill="url(#flameOuterGrad)"
        filter="url(#flameGlow)"
      />
      <path
        d="M50 25 C52 32 56 39 54 46 C52 51 47 51 45 46 C43 39 48 32 50 25 Z"
        fill="url(#flameInnerGrad)"
      />
      <circle cx="50" cy="46" r="3" fill="#FFFFFF" opacity="0.9" />
    </g>

    <defs>
      <linearGradient id="diyaGoldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F6E6B4" />
        <stop offset="40%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6716" />
      </linearGradient>
      <linearGradient id="diyaOilGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7B3F00" />
        <stop offset="100%" stopColor="#A85718" />
      </linearGradient>
      <linearGradient id="flameOuterGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF3B0" />
        <stop offset="30%" stopColor="#FFA500" />
        <stop offset="85%" stopColor="#E23A10" />
        <stop offset="100%" stopColor="#8B0000" />
      </linearGradient>
      <linearGradient id="flameInnerGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#FFF59D" />
        <stop offset="100%" stopColor="#FF9800" />
      </linearGradient>
      <filter id="flameGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  </svg>
);

// Auspicious Kalash with Mango Leaves & Coconut
export const SacredKalashIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Sacred Kalash">
    {/* Mango Leaves */}
    <path d="M50 40 C40 25 32 28 25 38 C35 38 42 43 50 45 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 40 C60 25 68 28 75 38 C65 38 58 43 50 45 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 42 C45 20 48 10 50 5 C52 10 55 20 50 42 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 42 C38 32 30 18 36 12 C40 22 45 32 50 42 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 42 C62 32 70 18 64 12 C60 22 55 32 50 42 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />

    {/* Coconut */}
    <ellipse cx="50" cy="36" rx="14" ry="16" fill="#6D4C41" stroke="#4E342E" strokeWidth="1.5" />
    <path d="M46 22 L50 14 L54 22 Z" fill="#5D4037" />

    {/* Kalash Pot (Brass/Gold) */}
    <path
      d="M36 44 L64 44 C67 44 70 47 68 50 L64 56 C74 64 76 78 68 88 L32 88 C24 78 26 64 36 56 L32 50 C30 47 33 44 36 44 Z"
      fill="url(#kalashGrad)"
      stroke="#B8860B"
      strokeWidth="1.5"
    />
    <ellipse cx="50" cy="44" rx="14" ry="3" fill="#D4AF37" stroke="#996515" strokeWidth="1" />

    {/* Sacred Thread (Mouli / Kalava) */}
    <path d="M30 68 Q50 76 70 68" stroke="#BA2428" strokeWidth="2.5" fill="none" strokeDasharray="3,2" />
    <path d="M32 73 Q50 81 68 73" stroke="#FFA000" strokeWidth="2" fill="none" />

    {/* Swastika mark on Kalash */}
    <path
      d="M47 62 H53 M50 59 V65 M47 59 H50 M53 65 H50 M53 59 V62 M47 65 V62"
      stroke="#BA2428"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Kalash Base */}
    <ellipse cx="50" cy="88" rx="16" ry="4" fill="url(#kalashGrad)" stroke="#B8860B" strokeWidth="1" />

    <defs>
      <linearGradient id="kalashGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="45%" stopColor="#D4AF37" />
        <stop offset="90%" stopColor="#8A6716" />
      </linearGradient>
    </defs>
  </svg>
);

// Auspicious Marigold & Mango Leaves Hanging Toran
export const ToranGarland = () => (
  <div className="w-full overflow-hidden pointer-events-none select-none flex justify-center py-1 opacity-90">
    <svg className="w-full max-w-5xl h-9" viewBox="0 0 1000 36" fill="none" preserveAspectRatio="none">
      {/* Golden Thread */}
      <path d="M0 6 Q250 18 500 6 Q750 18 1000 6" stroke="#C59B27" strokeWidth="2" fill="none" />
      <path d="M0 8 Q250 20 500 8 Q750 20 1000 8" stroke="#8E2800" strokeWidth="1" fill="none" strokeDasharray="6,4" />

      {/* Repeating Marigold Flowers & Mango Leaves along the Toran */}
      {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
        <g key={i} transform={`translate(${x}, 6)`}>
          {/* Mango Leaf */}
          <path d="M0 0 C-4 12 -8 20 0 30 C8 20 4 12 0 0 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="0" y2="28" stroke="#66BB6A" strokeWidth="0.5" />
          {/* Orange Marigold */}
          <circle cx="0" cy="2" r="5" fill="#E65100" />
          <circle cx="0" cy="2" r="3.5" fill="#FB8C00" />
          <circle cx="0" cy="2" r="1.8" fill="#FFE082" />
        </g>
      ))}

      {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x, i) => (
        <g key={`leaf-${i}`} transform={`translate(${x}, 8)`}>
          {/* Yellow Marigold */}
          <circle cx="0" cy="3" r="6" fill="#F57F17" />
          <circle cx="0" cy="3" r="4.2" fill="#FBC02D" />
          <circle cx="0" cy="3" r="2" fill="#FFF9C4" />
          {/* Hanging Bell / tassel */}
          <path d="M-2 10 L2 10 L3 16 L-3 16 Z" fill="#D4AF37" />
          <circle cx="0" cy="17" r="1.2" fill="#BA2428" />
        </g>
      ))}
    </svg>
  </div>
);

// Traditional Tamil / South Indian Rice Flour Kolam Motif
export const KolamMotif = ({ className = "w-8 h-8 text-[#D4AF37]/40" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" strokeDasharray="4,3" />
    <circle cx="50" cy="50" r="14" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    <path d="M50 15 C45 30 30 45 15 50 C30 55 45 70 50 85 C55 70 70 55 85 50 C70 45 55 30 50 15 Z" />
    <circle cx="50" cy="15" r="2.5" fill="currentColor" />
    <circle cx="85" cy="50" r="2.5" fill="currentColor" />
    <circle cx="50" cy="85" r="2.5" fill="currentColor" />
    <circle cx="15" cy="50" r="2.5" fill="currentColor" />
  </svg>
);

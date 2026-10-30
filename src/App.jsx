import React, { useState } from 'react';
import GrihaPravesamApp from './components/griha-pravesam/GrihaPravesamApp';
import AelineApp from './components/AelineApp';
import FlightApp from './FlightApp';

export default function App() {
  const [activeApp, setActiveApp] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const app = params.get('app');
    if (app === 'aeline') return 'aeline';
    if (app === 'flight') return 'flight';
    return 'griha'; // default to the new Griha Pravesam House Warming invitation website
  });

  const handleSwitch = (appName) => {
    setActiveApp(appName);
    const url = new URL(window.location);
    if (appName === 'griha') {
      url.searchParams.delete('app');
    } else {
      url.searchParams.set('app', appName);
    }
    window.history.pushState({}, '', url);
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating Project Switcher Pill */}
      <aside aria-label="Project Switcher" className="fixed bottom-5 right-5 z-50 flex items-center bg-[#2A160A]/90 text-white p-1 rounded-full shadow-2xl backdrop-blur-md border border-[#D4AF37]/30 text-xs font-semibold">
        <button
          onClick={() => handleSwitch('griha')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            activeApp === 'griha'
              ? 'bg-[#E77A23] text-white font-bold shadow-xs'
              : 'text-white/80 hover:text-white'
          }`}
        >
          <span>🪔</span>
          <span>Griha Pravesam</span>
        </button>

        <button
          onClick={() => handleSwitch('aeline')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            activeApp === 'aeline'
              ? 'bg-[#D2F865] text-[#131E18] font-bold shadow-xs'
              : 'text-white/80 hover:text-white'
          }`}
        >
          <span>🌱</span>
          <span>Aeline</span>
        </button>

        <button
          onClick={() => handleSwitch('flight')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
            activeApp === 'flight'
              ? 'bg-[#256BF5] text-white font-bold shadow-xs'
              : 'text-white/80 hover:text-white'
          }`}
        >
          <span>✈️</span>
          <span>Flight</span>
        </button>
      </aside>

      {/* Render Current Application */}
      {activeApp === 'griha' && <GrihaPravesamApp />}
      {activeApp === 'aeline' && <AelineApp />}
      {activeApp === 'flight' && <FlightApp />}
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Navigation,
  Share2,
  Copy,
  Check,
  MessageCircle,
  Volume2,
  VolumeX,
  Compass,
  ChevronLeft,
  ChevronRight,
  Heart
} from 'lucide-react';
import { DeepamDiyaIcon, SacredKalashIcon } from './SacredIcons';

/**
 * Mobile-centric Hindu Griha Pravesam Invitation
 * Faithfully following the reference image layout, watercolor aesthetic,
 * and user requirements: Invitation Content, Geolocation Tracking, and Contact Phone.
 */
export default function MobileInvitationApp() {
  const [activeScreen, setActiveScreen] = useState(0); // 0: Cover, 1: Invitation, 2: Location & Contact
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);
  const timerRef = useRef(null);

  // Target Date: Sunday, 22 November 2026, 08:30 AM IST
  const targetDate = new Date('2026-11-22T08:30:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Peaceful synthesized Indian flute / tanpura audio
  const toggleAudio = () => {
    if (isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      nodesRef.current.forEach(node => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch {
          // ignore
        }
      });
      nodesRef.current = [];
      if (audioCtxRef.current) audioCtxRef.current.suspend();
      setIsPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);

      const oscSa = ctx.createOscillator();
      const gainSa = ctx.createGain();
      oscSa.type = 'triangle';
      oscSa.frequency.setValueAtTime(138.59, ctx.currentTime); // C#3
      gainSa.gain.setValueAtTime(0.08, ctx.currentTime);
      oscSa.connect(gainSa);
      gainSa.connect(masterGain);
      oscSa.start();

      const notes = [277.18, 311.13, 349.23, 415.30, 466.16, 554.37, 466.16, 415.30];
      let idx = 0;
      const playTone = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[idx % notes.length], now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.1, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 3.1);
        idx++;
        timerRef.current = setTimeout(playTone, 3200);
      };
      playTone();

      nodesRef.current = [oscSa, masterGain];
      setIsPlaying(true);
    } catch {
      // Audio not permitted
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu, India");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `🌸 *Griha Pravesam Invitation* 🌸\n\n*A New Beginning, A Home Filled with Blessings*\n\nWith the blessings of the Almighty, we cordially invite you and your family to our *Griha Pravesam Ceremony* as we celebrate the joy of our new home.\n\n📅 *Date:* Sunday, 22 November 2026\n⏰ *Auspicious Timings:* 8:30 AM – 10:00 AM\n📍 *Venue:* Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu\n\n*With love,*\n*Sureshkumar & Family*\n\n*New Home. New Memories. Endless Blessings.*\n\n👉 View Invitation & GPS Location:\n${window.location.href}`;

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu"
  )}`;

  return (
    <div className="min-h-screen bg-[#F2EDE4] flex items-center justify-center sm:py-8 sm:px-4">
      {/* Mobile Device Canvas - Exact Reference Aspect Ratio */}
      <div className="relative w-full max-w-[420px] h-[100dvh] sm:h-[860px] bg-[#FFFDF9] sm:rounded-[48px] shadow-2xl sm:border-[8px] sm:border-[#2D1B0F]/15 flex flex-col overflow-hidden">
        
        {/* Top Status Bar (Matching Reference Mockup) */}
        <div className="w-full shrink-0 px-6 pt-3 pb-1 flex justify-between items-center text-xs text-[#2D1B0F] font-semibold select-none z-30 bg-white/70 backdrop-blur-xs">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            {/* Audio Toggle Pill */}
            <button
              onClick={toggleAudio}
              className="p-1 rounded-full hover:bg-black/5 text-[#9B4B27] cursor-pointer transition-colors"
              title={isPlaying ? "Mute Music" : "Play Sacred Flute"}
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#BA2428] animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
            </button>
            <span className="text-[10px]">5G</span>
            <div className="w-5 h-2.5 border border-[#2D1B0F] rounded-xs p-0.5 flex items-center">
              <div className="h-full w-3 bg-[#2D1B0F] rounded-xs" />
            </div>
          </div>
        </div>

        {/* Dynamic Screen View */}
        <div className="relative flex-1 overflow-hidden flex flex-col">

          {/* SCREEN 0: Cover Screen (Direct translation of reference image) */}
          {activeScreen === 0 && (
            <div className="relative flex-1 flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
              
              {/* Watercolor House Artwork Section */}
              <div className="relative h-[56%] w-full overflow-hidden bg-gradient-to-b from-[#FFF5E6] to-[#F5EADB]">
                <img
                  src="/house_ref.png"
                  alt="Modern House Watercolor Sketch"
                  className="w-full h-full object-cover object-top"
                />

                {/* Auspicious Sacred Floating Badge */}
                <div className="absolute top-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#FDBA74] text-[11px] font-bold text-[#A8420A] shadow-xs">
                  <DeepamDiyaIcon className="w-3.5 h-3.5" />
                  <span>Griha Pravesam 2026</span>
                </div>

                {/* Soft gradient blend into lower content */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#8E441E] via-[#8E441E]/85 to-transparent" />
              </div>

              {/* Bottom Card Content: Warm Terracotta Gradient Fading */}
              <div className="flex-1 bg-gradient-to-b from-[#8E441E] via-[#7B3512] to-[#5C2307] text-white px-7 pt-4 pb-6 flex flex-col justify-between">
                
                {/* Main Titles (Verbatim from User Request) */}
                <div className="space-y-1.5 text-center sm:text-left">
                  <h1 className="text-3xl font-extrabold font-serif tracking-tight leading-tight text-white drop-shadow-xs">
                    A New Beginning,
                  </h1>
                  <h2 className="text-2xl font-serif italic text-[#FDE68A] leading-tight">
                    A Home Filled with Blessings
                  </h2>
                  <p className="text-xs text-white/85 font-serif pt-2 leading-relaxed max-w-xs mx-auto sm:mx-0">
                    With the blessings of the Almighty, we cordially invite you and your family to our Griha Pravesam Ceremony.
                  </p>
                </div>

                {/* Dots Pagination Indicator (Matching reference image) */}
                <div className="flex items-center justify-center gap-2 py-1">
                  <button onClick={() => setActiveScreen(0)} className="w-6 h-1.5 rounded-full bg-white transition-all cursor-pointer" />
                  <button onClick={() => setActiveScreen(1)} className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white transition-all cursor-pointer" />
                  <button onClick={() => setActiveScreen(2)} className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white transition-all cursor-pointer" />
                </div>

                {/* Iconic Reference Pill CTA Button: [ Get started  (->) ] */}
                <button
                  onClick={() => setActiveScreen(1)}
                  className="group w-full flex items-center justify-between pl-6 pr-1.5 py-1.5 rounded-full bg-[#FFFDF9] hover:bg-white text-[#4A2810] shadow-lg transition-all active:scale-[0.98] cursor-pointer font-bold text-sm"
                >
                  <span className="tracking-wide">View Sacred Invitation</span>
                  <span className="w-10 h-10 rounded-full bg-[#8E441E] group-hover:bg-[#783512] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

              </div>

            </div>
          )}

          {/* SCREEN 1: Invitation Details & Muhurtham Timings */}
          {activeScreen === 1 && (
            <div className="relative flex-1 flex flex-col justify-between p-6 overflow-y-auto bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] animate-in fade-in duration-300">
              
              <div className="space-y-4">
                {/* Sacred Header */}
                <div className="text-center pt-1 pb-2 border-b border-[#EADBCE]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#BA2428] font-serif">
                    || ॐ श्री गणेशाय नमः ||
                  </span>
                  <h2 className="text-xl font-bold font-serif text-[#2D1B0F] mt-0.5">
                    Griha Pravesam Ceremony
                  </h2>
                  <p className="text-xs text-[#783F20] font-serif italic">
                    Sunday, 22 November 2026
                  </p>
                </div>

                {/* Auspicious Muhurtham Card */}
                <div className="bg-white rounded-2xl p-4 border border-[#FDBA74] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A8420A] uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#BA2428]" />
                    <span>Auspicious Timings (Subha Muhurtham)</span>
                  </div>
                  <div className="text-xl font-bold text-[#2D1B0F] font-serif">
                    8:30 AM – 10:00 AM
                  </div>
                  <p className="text-[11px] text-[#783F20]">
                    *Paal Kaichuthal* (Traditional milk-boiling) &amp; Threshold Entry
                  </p>
                </div>

                {/* Countdown Ticker */}
                <div className="bg-[#FFF8EE] rounded-2xl p-3 border border-[#EADBCE] text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#A8420A] font-bold block mb-1.5">
                    Countdown to Muhurtham
                  </span>
                  <div className="grid grid-cols-4 gap-1 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#9B4B27] font-serif">{timeLeft.days}</div>
                      <div className="text-[9px] uppercase text-[#783F20]">Days</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#9B4B27] font-serif">{timeLeft.hours}</div>
                      <div className="text-[9px] uppercase text-[#783F20]">Hours</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#9B4B27] font-serif">{timeLeft.minutes}</div>
                      <div className="text-[9px] uppercase text-[#783F20]">Mins</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#9B4B27] font-serif">{timeLeft.seconds}</div>
                      <div className="text-[9px] uppercase text-[#783F20]">Secs</div>
                    </div>
                  </div>
                </div>

                {/* Formal Invitation Text from User */}
                <div className="bg-white rounded-2xl p-4 border border-[#EADBCE] text-center space-y-2">
                  <p className="text-xs sm:text-sm text-[#4A2E1B] leading-relaxed font-serif">
                    &ldquo;Your gracious presence and blessings will make our special day truly memorable.&rdquo;
                  </p>
                  <div className="pt-1">
                    <span className="text-[11px] text-[#A8420A] uppercase font-bold tracking-wider block">
                      With love,
                    </span>
                    <span className="text-xl font-script text-[#9B4B27] font-bold">
                      Sureshkumar &amp; Family
                    </span>
                  </div>
                </div>

                {/* User Tagline */}
                <div className="text-center text-[11px] font-serif font-bold text-[#A8420A] tracking-wider uppercase pt-1">
                  ✨ New Home. New Memories. Endless Blessings. ✨
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => setActiveScreen(2)}
                  className="w-full flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#8E441E] hover:bg-[#783512] text-white shadow-md transition-all active:scale-[0.98] cursor-pointer font-bold text-xs"
                >
                  <span className="tracking-wide">View Geolocation &amp; Contact</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => setActiveScreen(0)}
                  className="w-full text-center py-1.5 text-xs text-[#783F20] font-medium hover:underline cursor-pointer"
                >
                  ← Back to Cover
                </button>
              </div>

            </div>
          )}

          {/* SCREEN 2: Geolocation Tracking & Host Contact */}
          {activeScreen === 2 && (
            <div className="relative flex-1 flex flex-col justify-between p-6 overflow-y-auto bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] animate-in fade-in duration-300">
              
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center pt-1 pb-1 border-b border-[#EADBCE]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#BA2428] font-serif">
                    📍 Geolocation &amp; Helpline
                  </span>
                  <h2 className="text-xl font-bold font-serif text-[#2D1B0F] mt-0.5">
                    Venue Location
                  </h2>
                </div>

                {/* Venue Address Card */}
                <div className="bg-white rounded-2xl p-4 border border-[#EADBCE] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A8420A] uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#BA2428]" />
                    <span>Sacred Residence</span>
                  </div>
                  <div className="text-sm font-bold text-[#2D1B0F] font-serif leading-snug">
                    Eargolpatti, Pennagaram, <br />
                    Dharmapuri, Tamil Nadu
                  </div>

                  <button
                    onClick={handleCopyAddress}
                    className="w-full mt-2 py-1.5 px-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F2ECE0] text-[#783F20] text-xs font-semibold border border-[#E0D0BC] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A8420A]" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Compact Interactive Map */}
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-xs bg-[#E5E3DF] h-44 relative">
                  <iframe
                    title="Eargolpatti Pennagaram Venue Map"
                    src="https://maps.google.com/maps?q=Eargolpatti,+Pennagaram,+Dharmapuri,+Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2.5 inset-x-3 py-1.5 px-3 rounded-full bg-[#BA2428] hover:bg-[#9B1D20] text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Start GPS Navigation</span>
                  </a>
                </div>

                {/* Contact Phone Helpline */}
                <div className="bg-white rounded-2xl p-4 border border-[#EADBCE] shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#783F20]">
                        Host Contact
                      </div>
                      <div className="text-sm font-bold text-[#2D1B0F] font-serif">
                        Sureshkumar &amp; Family
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#9B4B27] font-mono">
                      +91 98765 43210
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="tel:+919876543210"
                      className="py-2 px-3 rounded-full bg-[#9B4B27] hover:bg-[#803C1D] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Host</span>
                    </a>

                    <a
                      href="https://wa.me/919876543210?text=Vanakkam%20Sureshkumar,%20we%20are%20pleased%20to%20attend%20your%20Griha%20Pravesam%20Ceremony!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Share Button */}
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-[#FFFDF9] text-[#783F20] border border-[#E0D0BC] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Share Invitation with Relatives</span>
                </button>
              </div>

              {/* Back Link */}
              <div className="pt-3">
                <button
                  onClick={() => setActiveScreen(1)}
                  className="w-full text-center py-1 text-xs text-[#783F20] font-medium hover:underline cursor-pointer"
                >
                  ← Back to Invitation Details
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Navigation Tabs */}
        <div className="shrink-0 px-6 py-2.5 bg-white/95 border-t border-[#EADBCE] flex items-center justify-around z-30 select-none">
          <button
            onClick={() => setActiveScreen(0)}
            className={`flex flex-col items-center gap-0.5 cursor-pointer ${
              activeScreen === 0 ? 'text-[#8E441E] font-bold' : 'text-[#783F20]/60 hover:text-[#783F20]'
            }`}
          >
            <span className="text-base leading-none">🏠</span>
            <span className="text-[10px]">Cover</span>
          </button>

          <button
            onClick={() => setActiveScreen(1)}
            className={`flex flex-col items-center gap-0.5 cursor-pointer ${
              activeScreen === 1 ? 'text-[#8E441E] font-bold' : 'text-[#783F20]/60 hover:text-[#783F20]'
            }`}
          >
            <span className="text-base leading-none">📜</span>
            <span className="text-[10px]">Invitation</span>
          </button>

          <button
            onClick={() => setActiveScreen(2)}
            className={`flex flex-col items-center gap-0.5 cursor-pointer ${
              activeScreen === 2 ? 'text-[#8E441E] font-bold' : 'text-[#783F20]/60 hover:text-[#783F20]'
            }`}
          >
            <span className="text-base leading-none">📍</span>
            <span className="text-[10px]">Location</span>
          </button>
        </div>

        {/* iPhone Style Home Indicator Bar */}
        <div className="w-32 h-1 bg-[#2D1B0F]/30 rounded-full mx-auto my-1.5 shrink-0" />

      </div>
    </div>
  );
}

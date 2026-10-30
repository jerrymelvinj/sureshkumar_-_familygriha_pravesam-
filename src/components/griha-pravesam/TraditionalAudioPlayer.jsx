import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

export default function TraditionalAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);
  const timerRef = useRef(null);

  // Play peaceful meditative Indian classical flute notes over a warm tanpura drone
  const startSacredMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);

      // Tanpura Drone 1: Root Sa (C#3 ~ 138.59 Hz)
      const oscSa1 = ctx.createOscillator();
      const gainSa1 = ctx.createGain();
      oscSa1.type = 'triangle';
      oscSa1.frequency.setValueAtTime(138.59, ctx.currentTime);
      gainSa1.gain.setValueAtTime(0.09, ctx.currentTime);
      oscSa1.connect(gainSa1);
      gainSa1.connect(masterGain);
      oscSa1.start();

      // Tanpura Drone 2: Pa (G#3 ~ 207.65 Hz)
      const oscPa = ctx.createOscillator();
      const gainPa = ctx.createGain();
      oscPa.type = 'sine';
      oscPa.frequency.setValueAtTime(207.65, ctx.currentTime);
      gainPa.gain.setValueAtTime(0.07, ctx.currentTime);
      oscPa.connect(gainPa);
      gainPa.connect(masterGain);
      oscPa.start();

      // Tanpura Drone 3: High Sa (C#4 ~ 277.18 Hz)
      const oscSa2 = ctx.createOscillator();
      const gainSa2 = ctx.createGain();
      oscSa2.type = 'sine';
      oscSa2.frequency.setValueAtTime(277.18, ctx.currentTime);
      gainSa2.gain.setValueAtTime(0.05, ctx.currentTime);
      oscSa2.connect(gainSa2);
      gainSa2.connect(masterGain);
      oscSa2.start();

      // Raga Mohanam / Bhupali scale frequencies (Sa, Ri, Ga, Pa, Dha) in Hz
      // Divine, peaceful auspicious dawn raga
      const notes = [
        277.18, // Sa (C#4)
        311.13, // Ri (D#4)
        349.23, // Ga (F4)
        415.30, // Pa (G#4)
        466.16, // Dha (A#4)
        554.37, // Taar Sa (C#5)
        466.16,
        415.30,
        349.23,
        311.13
      ];

      // Flute Melody generator
      let noteIndex = 0;
      const playFlutePhrase = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        
        const now = ctx.currentTime;
        const fluteOsc = ctx.createOscillator();
        const fluteGain = ctx.createGain();
        const fluteFilter = ctx.createBiquadFilter();

        fluteOsc.type = 'sine';
        const targetFreq = notes[noteIndex % notes.length];
        fluteOsc.frequency.setValueAtTime(targetFreq, now);

        // Gentle vibrato
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        vibrato.frequency.setValueAtTime(5.2, now);
        vibratoGain.gain.setValueAtTime(4, now);
        vibrato.connect(fluteOsc.frequency);
        vibrato.start(now);

        // Lowpass warmth
        fluteFilter.type = 'lowpass';
        fluteFilter.frequency.setValueAtTime(1400, now);

        // Breath envelope
        fluteGain.gain.setValueAtTime(0.001, now);
        fluteGain.gain.exponentialRampToValueAtTime(0.12, now + 0.6);
        fluteGain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

        fluteOsc.connect(fluteFilter);
        fluteFilter.connect(fluteGain);
        fluteGain.connect(masterGain);

        fluteOsc.start(now);
        fluteOsc.stop(now + 3.3);
        vibrato.stop(now + 3.3);

        noteIndex = (noteIndex + 1) % notes.length;
        timerRef.current = setTimeout(playFlutePhrase, 3400);
      };

      playFlutePhrase();

      nodesRef.current = [oscSa1, oscPa, oscSa2, masterGain];
      setIsPlaying(true);
      setHasStarted(true);
    } catch (err) {
      console.warn("Audio context not allowed or failed:", err);
    }
  };

  const stopSacredMusic = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    nodesRef.current.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {
        // ignore
      }
    });
    nodesRef.current = [];
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopSacredMusic();
    } else {
      startSacredMusic();
    }
  };

  useEffect(() => {
    return () => {
      stopSacredMusic();
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Auspicious Music" : "Play Auspicious Music"}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 border cursor-pointer backdrop-blur-md ${
          isPlaying
            ? 'bg-[#BA2428] text-white border-[#FDE68A] shadow-[#BA2428]/30 ring-2 ring-[#FDE68A]/60'
            : 'bg-[#FFFDF9]/95 text-[#783F20] border-[#E8DCC4] hover:border-[#D4AF37] hover:shadow-lg'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="relative">
              <Volume2 className="w-4 h-4 text-[#FDE68A] animate-pulse" />
              {/* Soundwaves indicator */}
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDE68A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDE68A]"></span>
              </span>
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#E77A23] group-hover:rotate-12 transition-transform" />
          )}
        </div>

        <div className="text-left">
          <div className="text-xs font-semibold tracking-wide flex items-center gap-1.5">
            <span>{isPlaying ? 'Auspicious Flute Playing' : 'Play Auspicious Music'}</span>
            <span className="text-[10px] opacity-75">🪔</span>
          </div>
          <p className="text-[10px] opacity-70 font-serif">
            {isPlaying ? 'Traditional Raga Mohanam' : 'Tap for Divine Ambiance'}
          </p>
        </div>
      </button>
    </div>
  );
}

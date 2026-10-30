import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles, Download, Bell } from 'lucide-react';

export default function CountdownTimer() {
  // Target: 22 November 2026, 08:30 AM IST (UTC+5:30 -> 2026-11-22T08:30:00+05:30)
  const targetDate = new Date('2026-11-22T08:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Griha Pravesam Ceremony - Sureshkumar's New Home");
    const details = encodeURIComponent(
      "A New Beginning, A Home Filled with Blessings. With the blessings of the Almighty, we cordially invite you and your family to our Griha Pravesam Ceremony as we celebrate the joy of our new home.\n\nDate: Sunday, 22 November 2026\nAuspicious Timings: 8:30 AM – 10:00 AM\nVenue: Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu\nHost: Sureshkumar & Family (+91 98765 43210)"
    );
    const location = encodeURIComponent("Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu, India");
    // 2026-11-22 08:30 IST is 2026-11-22 03:00 UTC
    // 2026-11-22 10:00 IST is 2026-11-22 04:30 UTC
    const dates = "20261122T030000Z/20261122T043000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Griha Pravesam//Sureshkumar Family//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Griha Pravesam Ceremony - Sureshkumar & Family
DESCRIPTION:A New Beginning, A Home Filled with Blessings. Auspicious Hindu Griha Pravesam Subha Muhurtham.
LOCATION:Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu, India
DTSTART:20261122T030000Z
DTEND:20261122T043000Z
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: Griha Pravesam Ceremony Tomorrow at Pennagaram!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Griha_Pravesam_Sureshkumar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-[#FAF6F0] via-[#FFF8EE] to-[#FAF6F0] border-y border-[#EADBCE]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] text-[#A8420A] text-xs font-semibold border border-[#FDBA74]">
            <Clock className="w-3.5 h-3.5 text-[#E77A23]" />
            <span>Counting Down to the Auspicious Hour</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1B0F] font-serif">
            Auspicious Muhurtham Countdown
          </h2>
          <p className="text-xs sm:text-sm text-[#783F20] font-serif italic">
            &ldquo;शुभं करोति कल्याणमारोग्यं धनसंपदा — May peace, prosperity, and divine joy abide in our new sanctuary.&rdquo;
          </p>
        </div>

        {/* Ticking Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days, symbol: '☀️' },
            { label: 'Hours', value: timeLeft.hours, symbol: '⏳' },
            { label: 'Minutes', value: timeLeft.minutes, symbol: '⏱️' },
            { label: 'Seconds', value: timeLeft.seconds, symbol: '🔔' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white border border-[#EADBCE] hover:border-[#D4AF37] rounded-2xl p-4 sm:p-6 text-center shadow-xs hover:shadow-md transition-all"
            >
              <div className="absolute top-2 right-2 text-xs opacity-40">{item.symbol}</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-[#9B4B27] font-serif tracking-tight">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-xs uppercase font-bold tracking-widest text-[#783F20]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] hover:bg-white text-[#783F20] border border-[#D9C4A6] shadow-xs text-xs sm:text-sm font-semibold transition-all hover:border-[#BA2428] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#BA2428]" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={handleDownloadIcs}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFDF9] hover:bg-white text-[#783F20] border border-[#D9C4A6] shadow-xs text-xs sm:text-sm font-semibold transition-all hover:border-[#BA2428] cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#E77A23]" />
            <span>Download Apple / Outlook (.ics)</span>
          </button>
        </div>

      </div>
    </section>
  );
}

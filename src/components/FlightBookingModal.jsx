import React, { useState } from 'react';
import { X, Plane, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function FlightBookingModal({ isOpen, onClose }) {
  const [tripType, setTripType] = useState('round');
  const [fromCity, setFromCity] = useState('New York (JFK)');
  const [toCity, setToCity] = useState('Tokyo (HND)');
  const [departDate, setDepartDate] = useState('2026-11-15');
  const [returnDate, setReturnDate] = useState('2026-11-28');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleReset = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {booked ? (
          /* Confirmation Screen */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#2A7FF6] flex items-center justify-center mb-4">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 font-sans">
              Booking Reserved!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
              Your flight ticket from <strong className="text-slate-900">{fromCity}</strong> to{' '}
              <strong className="text-slate-900">{toCity}</strong> has been secured. A
              confirmation email with booking reference <span className="font-mono font-bold text-[#2A7FF6]">#UXS-9482</span> has been dispatched.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl w-full text-left text-xs text-slate-600 mb-6 space-y-1.5 border border-slate-100">
              <div className="flex justify-between">
                <span>Class:</span> <span className="font-bold text-slate-800">{cabinClass}</span>
              </div>
              <div className="flex justify-between">
                <span>Passengers:</span> <span className="font-bold text-slate-800">{passengers} Traveler(s)</span>
              </div>
              <div className="flex justify-between">
                <span>Departure:</span> <span className="font-bold text-slate-800">{departDate}</span>
              </div>
              {tripType === 'round' && (
                <div className="flex justify-between">
                  <span>Return:</span> <span className="font-bold text-slate-800">{returnDate}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="bg-[#111111] hover:bg-black text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="flex items-center gap-2 text-[#2A7FF6] mb-2 font-bold text-xs uppercase tracking-wider">
              <Plane size={15} /> UIXSHUVO Flight Booking
            </div>
            <h3 className="text-2xl sm:text-3xl font-[800] text-slate-900 mb-5 tracking-tight font-sans">
              Plan Your Next Flight
            </h3>

            {/* Trip Type Selector */}
            <div className="flex gap-2 p-1 bg-slate-100 rounded-full w-fit mb-5 text-xs font-bold text-slate-600">
              {['round', 'oneway'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  className={`px-4 py-1.5 rounded-full capitalize transition-all ${
                    tripType === type
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {type === 'round' ? 'Round Trip' : 'One Way'}
                </button>
              ))}
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    From
                  </label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                  >
                    <option>New York (JFK)</option>
                    <option>London (LHR)</option>
                    <option>Paris (CDG)</option>
                    <option>Dubai (DXB)</option>
                    <option>Singapore (SIN)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    To
                  </label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                  >
                    <option>Tokyo (HND)</option>
                    <option>Santorini (JTR)</option>
                    <option>Bali (DPS)</option>
                    <option>Zurich (ZRH)</option>
                    <option>Sydney (SYD)</option>
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                    required
                  />
                </div>

                {tripType === 'round' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Passengers & Cabin Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Passenger{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Cabin Class
                  </label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2A7FF6]"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class Suite</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#2A7FF6] hover:bg-[#1b6ee0] text-white py-3.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Flight Ticket</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

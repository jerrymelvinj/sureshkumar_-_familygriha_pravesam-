import React, { useState } from 'react';
import { Leaf, ArrowRight, X } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const stats = [
    { value: '520K+', label: 'Trees Planted' },
    { value: '120+', label: 'Communities' },
    { value: '350+', label: 'Projects Completed' },
    { value: '100%', label: 'For the Planet' },
  ];

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Outer Rounded Hero Card Frame */}
      <div className="relative max-w-[1400px] mx-auto bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] border border-[#E5EAE1] shadow-[0_4px_30px_rgba(0,0,0,0.025)] overflow-hidden">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[660px] items-stretch relative">
          
          {/* Left Column: Headline, Description, Input, Avatars */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 lg:p-14 lg:pr-4 z-10">
            <div className="space-y-6 max-w-xl">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF3EC] text-[#245B38] text-[10.5px] font-semibold tracking-wider uppercase border border-[#DAE5D8]">
                <Leaf className="w-3.5 h-3.5 fill-[#245B38]/20 text-[#245B38]" />
                <span>TOGETHER FOR A GREENER PLANET</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[66px] font-bold tracking-tight text-[#131E18] leading-[1.08]">
                Save <span className="text-[#2F7C48]">Nature</span>,
                <br />
                Save Tomorrow.
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-[15px] text-[#56655C] max-w-md leading-relaxed">
                We unite communities, ideas, and actions to protect our planet and build a sustainable future for all.
              </p>

              {/* Subscription Input Bar */}
              <div className="pt-1">
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center justify-between p-1.5 pl-4 sm:pl-5 bg-[#F1F4EE] rounded-full border border-[#DCE4D9] max-w-md focus-within:border-[#245B38] transition-all"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent text-xs sm:text-sm text-[#131E18] placeholder-[#79887F] outline-none w-full pr-2"
                  />
                  <button
                    type="submit"
                    className="bg-[#245B38] hover:bg-[#1c492e] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Join Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs text-[#245B38] font-medium mt-2 pl-3">
                    Thank you for joining our community! 🌱
                  </p>
                )}
              </div>

              {/* Social Proof with Avatars */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="/images/avatar1.jpg"
                    alt="Community avatar"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="/images/avatar2.jpg"
                    alt="Community avatar"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="/images/avatar3.jpg"
                    alt="Community avatar"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#56655C]">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#E5F2E3] text-[#245B38] text-[10px]">
                    🌱
                  </span>
                  <span className="font-semibold text-[#1F2C24]">
                    Join 15,000+ people <span className="font-normal text-[#56655C]">making a difference</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 pb-2 lg:pb-0 z-20">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-4 border border-[#E5ECE1] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:border-[#CCD8C7]"
                >
                  <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-[#131E18]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-[#6B7970] mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual with Play Story & 3 Floating Cards */}
          <div className="lg:col-span-6 relative min-h-[460px] lg:min-h-full overflow-hidden flex flex-col justify-between">
            
            {/* Background Image: Authentic High-Resolution Split Visual */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/hero_visual_hi.png"
                alt="Lush forest canopy and deforested terrain transition"
                className="w-full h-full object-cover object-center"
              />
              {/* Natural mist blending on left edge */}
              <div className="absolute top-0 left-0 bottom-0 w-28 bg-gradient-to-r from-white via-white/50 to-transparent hidden lg:block" />
              {/* Bottom fade behind stats */}
              <div className="absolute bottom-0 left-0 w-48 h-32 bg-gradient-to-tr from-white via-white/80 to-transparent hidden lg:block" />
            </div>

            {/* Interactive Overlay Click Targets matching visual positions */}
            <div className="relative z-10 w-full h-full">
              {/* Play Button Trigger Overlay */}
              <button
                onClick={() => setVideoModalOpen(true)}
                title="Watch Our Story"
                className="absolute top-[48%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-44 h-12 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 focus:outline-none"
                style={{ background: 'transparent' }}
                aria-label="Watch Our Story"
              />

              {/* Reforestation Card Trigger Overlay */}
              <button
                onClick={() => setActiveModal({
                  title: 'Reforestation',
                  desc: 'Planting native trees, restoring forest corridors, and protecting vulnerable ecosystems against deforestation.',
                  image: '/images/thumb_reforest.jpg'
                })}
                className="absolute top-[22%] right-[10%] w-[48%] h-14 rounded-2xl cursor-pointer hover:ring-2 hover:ring-[#245B38]/30 transition-all"
                style={{ background: 'transparent' }}
                aria-label="Reforestation Initiative"
              />

              {/* Clean Oceans Card Trigger Overlay */}
              <button
                onClick={() => setActiveModal({
                  title: 'Clean Oceans',
                  desc: 'Removing plastic waste, intercepting river debris, and safeguarding sea turtles and coral reefs worldwide.',
                  image: '/images/thumb_ocean.jpg'
                })}
                className="absolute top-[44%] right-[10%] w-[48%] h-14 rounded-2xl cursor-pointer hover:ring-2 hover:ring-[#245B38]/30 transition-all"
                style={{ background: 'transparent' }}
                aria-label="Clean Oceans Initiative"
              />

              {/* Wildlife Protection Card Trigger Overlay */}
              <button
                onClick={() => setActiveModal({
                  title: 'Wildlife Protection',
                  desc: 'Protecting endangered apex predators, anti-poaching patrols, and restoring natural animal migratory routes.',
                  image: '/images/thumb_wildlife.jpg'
                })}
                className="absolute top-[66%] right-[10%] w-[48%] h-14 rounded-2xl cursor-pointer hover:ring-2 hover:ring-[#245B38]/30 transition-all"
                style={{ background: 'transparent' }}
                aria-label="Wildlife Protection Initiative"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Card Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#E5EAE1]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-[#6B7970] hover:text-[#131E18] rounded-full hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeModal.image}
              alt={activeModal.title}
              className="w-full h-44 rounded-2xl object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-[#131E18]">
              {activeModal.title}
            </h3>
            <p className="text-sm text-[#5E6D64] mt-2 leading-relaxed">
              {activeModal.desc}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#245B38] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#1c492e]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

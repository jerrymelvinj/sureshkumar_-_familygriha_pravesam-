import React, { useState, useEffect } from 'react';
import { Leaf, ArrowRight, X, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

export default function AelineApp() {
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [heroSubscribed, setHeroSubscribed] = useState(false);
  const [newsSubscribed, setNewsSubscribed] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    document.title = 'Aeline — Save Nature, Save Tomorrow';
    document.body.className = 'bg-[#F8F9F5] text-[#131E18] antialiased';
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Projects', href: '#initiatives' },
    { name: 'Resources', href: '#resources' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const heroStats = [
    { value: '520K+', label: 'Trees Planted' },
    { value: '120+', label: 'Communities' },
    { value: '350+', label: 'Projects Completed' },
    { value: '100%', label: 'For the Planet' },
  ];

  const missionCards = [
    {
      title: 'Sustainable Land Use',
      image: '/images/mission_card_1_hi.png',
      desc: 'Promoting responsible land management and native tree protection across indigenous reserves.',
    },
    {
      title: 'Climate Action',
      image: '/images/mission_card_2_hi.png',
      desc: 'Reducing carbon emissions and building regional climate resilience.',
    },
    {
      title: 'Community Empowerment',
      image: '/images/mission_card_3_hi.png',
      desc: 'Empowering local conservation heroes and fostering environmental stewardship.',
    },
  ];

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

  const initiatives = [
    {
      id: 1,
      tag: 'Ocean Cleanup',
      title: 'Clean Oceans, Bright Future',
      desc: 'Removing plastic and debris from our oceans and coastlines.',
      image: '/images/init_card_1_hi.png',
    },
    {
      id: 2,
      tag: 'Reforestation',
      title: 'More Trees, Better Planet',
      desc: 'Planting and restoring forests for a healthier Earth.',
      image: '/images/init_card_2_hi.png',
    },
    {
      id: 3,
      tag: 'Community',
      title: 'Stronger Communities, Stronger Future',
      desc: 'Empowering communities to lead local change.',
      image: '/images/init_card_3_hi.png',
    },
  ];

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setHeroSubscribed(true);
      setTimeout(() => setHeroSubscribed(false), 4000);
      setEmail('');
    }
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsSubscribed(true);
      setTimeout(() => setNewsSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] text-[#131E18] font-sans antialiased selection:bg-[#D2F865] selection:text-[#131E18]">
      
      {/* ============================================================== */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================== */}
      <section className="relative px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div className="relative max-w-[1400px] mx-auto bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] border border-[#E5EAE1] shadow-[0_4px_30px_rgba(0,0,0,0.025)] overflow-hidden">
          
          {/* Top Navbar */}
          <nav className="relative z-30 pt-6 px-6 sm:px-10 lg:px-12 w-full">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Logo className="h-7 w-7" />

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-7 lg:gap-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-[13px] font-medium transition-colors hover:text-[#245B38] ${
                      item.active
                        ? 'text-[#131E18] font-semibold'
                        : 'text-[#48564E]'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Right CTA */}
              <div className="hidden md:flex items-center">
                <a
                  href="#get-involved"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-semibold bg-[#D2F865] hover:bg-[#c3e857] text-[#131E18] transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  Get Involved
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-[#131E18] hover:bg-black/5 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E4EAE1] shadow-lg flex flex-col gap-3">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-[#131E18] py-2 px-3 rounded-lg hover:bg-[#F3F6F0]"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#get-involved"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-[#D2F865] hover:bg-[#c3e857] text-[#131E18] mt-2 shadow-xs"
                >
                  Get Involved
                </a>
              </div>
            )}
          </nav>

          {/* Hero Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[660px] items-stretch relative">
            
            {/* Left Column: Headline, Description, Input, Avatars, Stats */}
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

                {/* Email Form */}
                <div className="pt-1">
                  <form
                    onSubmit={handleHeroSubmit}
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
                  {heroSubscribed && (
                    <p className="text-xs text-[#245B38] font-medium mt-2 pl-3">
                      Thank you for joining our community! 🌱
                    </p>
                  )}
                </div>

                {/* Avatars */}
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
                {heroStats.map((stat) => (
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
                {/* Bottom fade cleanly covering bottom corner */}
                <div className="absolute bottom-0 left-0 w-64 h-36 bg-gradient-to-tr from-white via-white to-transparent hidden lg:block pointer-events-none" />
              </div>

              {/* Interactive Overlay Click Targets matching visual positions */}
              <div className="relative z-10 w-full h-full">
                {/* Play Button Trigger Overlay */}
                <button
                  onClick={() => setVideoOpen(true)}
                  title="Watch Our Story"
                  className="absolute top-[48%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-44 h-12 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 focus:outline-none"
                  style={{ background: 'transparent' }}
                  aria-label="Watch Our Story"
                />

                {/* Reforestation Card Trigger */}
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

                {/* Clean Oceans Card Trigger */}
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

                {/* Wildlife Protection Card Trigger */}
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
      </section>


      {/* ============================================================== */}
      {/* 2. OUR MISSION SECTION                                         */}
      {/* ============================================================== */}
      <section id="mission" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Copy, Buttons */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF3EC] text-[#245B38] text-[10.5px] font-semibold tracking-wider uppercase border border-[#DAE5D8]">
                <Leaf className="w-3.5 h-3.5 fill-[#245B38]/20 text-[#245B38]" />
                <span>OUR MISSION</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-[#131E18] leading-[1.12]">
                We're Building
                <br />
                a <span className="text-[#2F7C48]">Greener</span>,
                <br />
                Cleaner, Stronger
                <br />
                World.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-[#56655C] max-w-md leading-relaxed">
                Through education, action, and innovation, we empower people to protect nature and create lasting change.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#initiatives"
                  className="inline-flex items-center gap-2 bg-[#245B38] hover:bg-[#1c492e] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center border border-[#CCD7C8] hover:border-[#131E18] text-[#131E18] text-xs font-semibold px-6 py-3 rounded-full transition-all hover:bg-black/5 active:scale-95 cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column: 3 Tall Visual Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {missionCards.map((card) => (
                  <div
                    key={card.title}
                    onClick={() => setActiveModal({
                      title: card.title,
                      desc: card.desc,
                      image: card.image,
                    })}
                    className="relative group h-[420px] sm:h-[450px] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer border border-[#E2E8DE]/60 bg-[#162B1E]"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 3. TRUSTED BY LOGO STRIP                                       */}
      {/* ============================================================== */}
      <section className="py-6 px-3 sm:px-6 lg:px-8 border-t border-b border-[#E6EBE1]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <span className="text-[11px] font-semibold text-[#8B988F] tracking-widest uppercase shrink-0">
            TRUSTED BY
          </span>
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


      {/* ============================================================== */}
      {/* 4. OUR INITIATIVES & NEWSLETTER SECTION                        */}
      {/* ============================================================== */}
      <section id="initiatives" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Top Header Row with Badge & Navigation Arrows */}
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF3EC] text-[#245B38] text-[10.5px] font-semibold tracking-wider uppercase border border-[#DAE5D8]">
              <Leaf className="w-3.5 h-3.5 fill-[#245B38]/20 text-[#245B38]" />
              <span>OUR INITIATIVES</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                aria-label="Previous initiative"
                className="w-9 h-9 rounded-full border border-[#D5DCD2] hover:border-[#131E18] hover:bg-white flex items-center justify-center text-[#131E18] transition-all cursor-pointer active:scale-95 shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next initiative"
                className="w-9 h-9 rounded-full border border-[#D5DCD2] hover:border-[#131E18] hover:bg-white flex items-center justify-center text-[#131E18] transition-all cursor-pointer active:scale-95 shadow-2xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2-Area Grid: 3 Cards on Left, Headline & Newsletter on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Left Area (Cards): 8 Columns on lg */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {initiatives.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col justify-between cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-xs bg-[#EBF0E8] border border-[#E5ECE1]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      />
                    </div>

                    {/* Text Details */}
                    <div className="pt-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#131E18] group-hover:text-[#245B38] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5C6B62] mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <a
                        href={`#${item.tag.toLowerCase().replace(' ', '-')}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245B38] hover:gap-2.5 transition-all mt-3.5 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Area (Headline + Newsletter Card): 4 Columns on lg */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              {/* Headline and Copy */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#131E18] leading-[1.12]">
                  Real Actions. Real Impact.
                  <br />
                  A Better Future.
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6B62] leading-relaxed">
                  Discover how we turn ideas into impact through projects that protect our planet and support communities.
                </p>
                <div>
                  <a
                    href="#all-initiatives"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245B38] hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>View All Initiatives</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Lime Yellow-Green Newsletter Box */}
              <div className="bg-[#D2F865] rounded-[24px] p-6 shadow-xs relative overflow-hidden">
                <h3 className="text-base sm:text-lg font-bold text-[#131E18] leading-tight">
                  Stay Inspired. Stay Informed.
                </h3>
                <p className="text-xs text-[#2A3728] mt-2 leading-relaxed">
                  Subscribe to our newsletter and get the latest updates on our projects, stories, and how you can help.
                </p>

                {/* Email Form */}
                <form onSubmit={handleNewsSubmit} className="mt-4 space-y-2">
                  <div className="flex items-center bg-white rounded-full p-1 pl-4 shadow-2xs">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full text-xs text-[#131E18] placeholder-[#79887F] outline-none bg-transparent pr-2"
                    />
                    <button
                      type="submit"
                      className="bg-[#245B38] hover:bg-[#1c492e] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1 transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {newsSubscribed && (
                    <p className="text-xs text-[#1B4D2B] font-semibold pl-2">
                      ✓ Subscribed! Check your inbox soon.
                    </p>
                  )}
                </form>

                {/* Avatars */}
                <div className="flex items-center gap-2.5 mt-4 pt-1">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                      src="/images/avatar1.jpg"
                      alt="Change maker avatar"
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                      src="/images/avatar2.jpg"
                      alt="Change maker avatar"
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-[#D2F865] object-cover"
                      src="/images/avatar3.jpg"
                      alt="Change maker avatar"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-[#2A3728]">
                    Join thousands of change-makers
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ============================================================== */}
      {/* 5. FOOTER SECTION                                              */}
      {/* ============================================================== */}
      <footer className="pt-16 pb-12 px-3 sm:px-6 lg:px-8 border-t border-[#E5EAE1] bg-[#F8F9F5]">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
            
            {/* Brand Info */}
            <div className="col-span-2 md:col-span-4 space-y-4">
              <Logo className="h-7 w-7" />
              <p className="text-xs sm:text-[13px] text-[#63726A] max-w-xs leading-relaxed">
                Together, we can create a sustainable future for generations to come.
              </p>
            </div>

            {/* Explore */}
            <div className="col-span-1 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#131E18] tracking-tight">Explore</h4>
              <ul className="space-y-2.5">
                {['Our Mission', 'Projects', 'Resources', 'Blog'].map((name) => (
                  <li key={name}>
                    <a href={`#${name.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div className="col-span-1 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#131E18] tracking-tight">Get Involved</h4>
              <ul className="space-y-2.5">
                {['Volunteer', 'Donate', 'Partner With Us', 'Events'].map((name) => (
                  <li key={name}>
                    <a href={`#${name.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-1 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#131E18] tracking-tight">Support</h4>
              <ul className="space-y-2.5">
                {['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Use'].map((name) => (
                  <li key={name}>
                    <a href={`#${name.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-span-1 md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#131E18] tracking-tight">Follow Us</h4>
              <div className="flex items-center gap-2 pt-1">
                {/* Twitter */}
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <div className="pt-4">
                <p className="text-[11px] text-[#86948B]">
                  © 2025 Aeline. All rights reserved.
                </p>
              </div>
            </div>

          </div>

        </div>
      </footer>


      {/* ============================================================== */}
      {/* VIDEO MODAL                                                    */}
      {/* ============================================================== */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoOpen(false)}
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

      {/* ============================================================== */}
      {/* DETAIL MODAL                                                   */}
      {/* ============================================================== */}
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

    </div>
  );
}

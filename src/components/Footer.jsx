import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const exploreLinks = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'Projects', href: '#initiatives' },
    { name: 'Resources', href: '#resources' },
    { name: 'Blog', href: '#blog' },
  ];

  const getInvolvedLinks = [
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Donate', href: '#donate' },
    { name: 'Partner With Us', href: '#partner' },
    { name: 'Events', href: '#events' },
  ];

  const supportLinks = [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Use', href: '#terms' },
  ];

  return (
    <footer className="pt-16 pb-12 px-3 sm:px-5 lg:px-8 border-t border-[#E5EAE1] bg-[#F8F9F5]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Columns Grid */}
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
            <h4 className="text-xs font-bold text-[#131E18] tracking-tight">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#131E18] tracking-tight">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {getInvolvedLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#131E18] tracking-tight">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#63726A] hover:text-[#245B38] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#131E18] tracking-tight">
              Follow Us
            </h4>
            {/* Social Icons matching circular grey badges in reference */}
            <div className="flex items-center gap-2 pt-1">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#E5EBE0] hover:bg-[#245B38] text-[#55635C] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
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
  );
}

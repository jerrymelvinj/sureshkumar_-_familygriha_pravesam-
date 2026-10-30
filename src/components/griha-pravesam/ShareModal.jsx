import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageCircle, ExternalLink, QrCode } from 'lucide-react';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const shareText = `🌸 *Griha Pravesam Invitation* 🌸\n\n*A New Beginning, A Home Filled with Blessings*\n\nWith the blessings of the Almighty, we cordially invite you and your family to our *Griha Pravesam Ceremony* as we celebrate the joy of our new home.\n\n📅 *Date:* Sunday, 22 November 2026\n⏰ *Auspicious Timings:* 8:30 AM – 10:00 AM\n📍 *Venue:* Eargolpatti, Pennagaram, Dharmapuri, Tamil Nadu\n\n*With love,*\n*Sureshkumar & Family*\n\n👉 View Interactive Invitation & Map:\n${currentUrl}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EADBCE] text-[#2D1B0F] space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F0E6D8]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#FFF0E6] text-[#A8420A]">
              <Share2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#2D1B0F]">
                Share Invitation
              </h3>
              <p className="text-xs text-[#783F20]">
                Forward to relatives and friends
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF6F0] text-[#783F20] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp One-Click Share */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Share directly on WhatsApp</span>
        </a>

        {/* Copy Formatted Invitation Text */}
        <button
          onClick={handleCopy}
          className="w-full py-3 px-5 rounded-2xl bg-[#FAF6F0] hover:bg-[#F2ECE0] text-[#783F20] font-bold text-xs sm:text-sm border border-[#E0D0BC] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">Invitation Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#A8420A]" />
              <span>Copy Formatted Invitation Message</span>
            </>
          )}
        </button>

        {/* Preview of Invitation text */}
        <div className="bg-[#FFFDF9] rounded-xl p-3 border border-[#EADBCE] text-xs text-[#5C3D2E] font-serif max-h-36 overflow-y-auto space-y-1">
          <div className="font-bold text-[#A8420A]">Preview:</div>
          <p className="whitespace-pre-line text-[11px] leading-relaxed">
            {shareText}
          </p>
        </div>

      </div>
    </div>
  );
}

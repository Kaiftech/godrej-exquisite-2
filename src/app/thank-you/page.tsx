"use client";

import Link from "next/link";
import { CheckCircle2, Home, Phone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans antialiased overflow-hidden selection:bg-[#c3aa62] selection:text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[700px] w-full text-center space-y-10"
      >
        <div className="flex justify-center">
          <img src="/logo.svg" alt="Godrej Exquisite" className="h-16" />
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-[#25D366] shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 uppercase tracking-tighter leading-tight">
            Thank You <span className="text-[#c3aa62]">For Your Interest!</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light italic max-w-lg mx-auto">
            Your enquiry has been received. Our luxury housing expert will connect with you shortly to assist with your dream home journey at Godrej Exquisite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <a 
            href="https://wa.me/918828456094" 
            className="flex items-center justify-center gap-4 bg-[#25D366] text-white py-5 rounded-sm font-bold uppercase tracking-widest text-[11px] shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            <WhatsAppIcon />
            Connect On WhatsApp
          </a>
          <a 
            href="tel:+918828456094" 
            className="flex items-center justify-center gap-4 bg-[#c3aa62] text-white py-5 rounded-sm font-bold uppercase tracking-widest text-[11px] shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            <Phone className="w-6 h-6" />
            Call Our Expert
          </a>
        </div>

        <div className="pt-10 flex justify-center">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] hover:text-[#c3aa62] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back To Home
          </Link>
        </div>

        <div className="pt-12">
          <p className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.5em]">Godrej Exquisite | Experience The High Life</p>
        </div>
      </motion.div>
    </div>
  );
}

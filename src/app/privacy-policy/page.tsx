"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Data Collection",
      content: "We collect personal information such as your name, phone number, and preferences when you enquire about Godrej Exquisite. This data is used solely to provide project information and assist with your property search.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Information Security",
      content: "Your data is stored securely and is protected against unauthorized access. We employ industry-standard encryption and security protocols to ensure your privacy is never compromised.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-[#c3aa62] selection:text-white">
      {/* Header */}
      <header className="bg-white py-12 px-6 border-b border-slate-100">
        <div className="max-w-[800px] mx-auto space-y-8">
          <Link href="/" className="inline-flex items-center gap-3 text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] hover:text-[#c3aa62] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Privacy <span className="text-[#c3aa62]">Policy</span>
            </h1>
            <div className="w-20 h-1.5 bg-[#c3aa62]" />
            <p className="text-slate-500 font-medium italic">Last Updated: April 2026</p>
          </div>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-16 space-y-12">
        <section className="bg-white p-8 md:p-12 shadow-2xl border border-slate-100 rounded-sm">
          <div className="flex items-center gap-4 text-[#c3aa62] mb-8">
            <FileText className="w-8 h-8" />
            <h2 className="text-xl font-bold uppercase tracking-widest">Introduction</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            Your privacy is of paramount importance to us. This policy outlines how we handle and protect your personal information in relation to the Godrej Exquisite Thane project. By using our website, you consent to the data practices described in this statement.
          </p>
        </section>

        <div className="grid gap-8">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-xl border border-slate-100 rounded-sm space-y-6"
            >
              <div className="flex items-center gap-4 text-[#c3aa62]">
                {section.icon}
                <h3 className="text-lg font-bold uppercase tracking-widest">{section.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <section className="bg-slate-900 text-white p-12 shadow-2xl rounded-sm space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-widest">Contact Us</h2>
          <p className="text-white/60 leading-relaxed">
            If you have any questions regarding this privacy policy, you may contact our data protection officer at info@godrejexquisite.com or call us at 8828456094.
          </p>
          <div className="pt-4">
             <Link href="/" className="bg-[#c3aa62] text-white px-8 py-3 font-bold uppercase tracking-widest text-[11px] shadow-lg hover:brightness-110 transition-all inline-block">
               Return To Project Home
             </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">© 2026 Godrej Properties | Godrej Exquisite Thane</p>
      </footer>
    </div>
  );
}

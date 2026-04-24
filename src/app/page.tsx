"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Navigation,
  Activity,
  GraduationCap,
  ShoppingCart,
  Headphones,
  Car,
  BadgePercent,
  CheckCircle2,
  ChevronDown,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    configuration: ""
  });

  const router = useRouter();

  const banners = ["/BANNER1.jpeg", "/BANNER2.jpeg", "/BANNER3.jpeg"];
  const galleryImages = [
    "/cf423032-385f-4aac-86ba-183d17f3088e.webp",
    "/e36084c6-3e3e-46b5-817e-b6713c422adb.webp",
    "/fa623f12-6948-48d6-aa93-12d955c14795.webp",
    "/36afc3fb-822f-454f-b0ce-1394eb4318c5.webp",
    "/4823008a-af33-45e8-9c6a-acfda641eb99.webp",
    "/8850306e-86d7-4382-b950-59da55300f68.webp"
  ];

  const connectivity = [
    { title: "Lake", text: "14 mins* drive to Upvan Lake", icon: <MapPin className="w-5 h-5" /> },
    { title: "Hospital", text: "4 mins* drive to Hiranandani Hospital", icon: <Activity className="w-5 h-5" /> },
    { title: "High School", text: "5 mins* drive to Orchids International", icon: <GraduationCap className="w-5 h-5" /> },
    { title: "Supermarket", text: "7 mins* drive to R-Mall", icon: <ShoppingCart className="w-5 h-5" /> }
  ];

  const floorPlans = [
    { name: "2BHK P - 655 CA", img: "/floorplanwebp.webp" },
    { name: "2BHK L - 724 CA", img: "/floorplan2.webp" },
    { name: "3BHK P - 772 CA", img: "/floorplanwebp.webp" },
    { name: "3BHK L - 922 CA", img: "/floorplan2.webp" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(bannerTimer);
  }, [banners.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = "https://connector.b2bbricks.com/api/Integration/hook/53b3d0b4-ffd1-4ba6-b633-f736c36d924f";

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      city: formData.configuration,
      source: "Website Popup",
      project: "Godrej Exquisite"
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        router.push("/thank-you");
      }
    } catch (error) {
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pricingData = [
    { type: "2 BHK Premium", area: "655 Sq.Ft.", price: "₹ 1.79 Cr*" },
    { type: "2 BHK Luxe", area: "724 Sq.Ft.", price: "₹ 1.95 Cr*" },
    { type: "3 BHK Premium", area: "772 Sq.Ft.", price: "₹ 2.10 Cr*" },
    { type: "3 BHK Luxe", area: "922 Sq.Ft.", price: "₹ 2.52 Cr*" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-[#c3aa62] selection:text-white antialiased overflow-x-hidden">
      {/* 3-Part Designer Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white max-w-[900px] w-full flex flex-col md:flex-row rounded-sm shadow-2xl relative overflow-hidden"
            >
              <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-slate-900 z-50 hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>

              <div className="hidden md:flex flex-col items-center justify-center bg-[#F9F9F9] w-[180px] p-8 text-center gap-10 border-r border-slate-100">
                <p className="text-[#c3aa62] font-bold text-lg uppercase tracking-tighter">We Promise</p>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Headphones className="w-10 h-10 text-[#c3aa62] mx-auto opacity-70" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Instant Call Back</p>
                  </div>
                  <div className="space-y-2">
                    <Car className="w-10 h-10 text-[#c3aa62] mx-auto opacity-70" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Free Site Visit</p>
                  </div>
                  <div className="space-y-2">
                    <BadgePercent className="w-10 h-10 text-[#c3aa62] mx-auto opacity-70" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Unmatched Price</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-14 space-y-8 bg-white">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                  Register Here And Avail The <span className="text-[#c3aa62]">Best Offers!!</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    className="w-full border-b border-slate-200 py-3 text-base outline-none focus:border-[#c3aa62] transition-colors bg-transparent font-medium placeholder:text-slate-400"
                    placeholder="Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <div className="flex items-center border-b border-slate-200 focus-within:border-[#c3aa62] transition-colors">
                    <div className="flex items-center gap-2 pr-4 border-r border-slate-100 text-base font-bold text-slate-500">🇮🇳 +91</div>
                    <input
                      className="w-full p-3 text-base outline-none bg-transparent font-medium placeholder:text-slate-400"
                      placeholder="Enter Phone Number"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                  </div>
                  <div className="relative border-b border-slate-200 focus-within:border-[#c3aa62] transition-colors">
                    <select
                      className="w-full py-3 text-base outline-none bg-transparent appearance-none text-slate-700 font-medium"
                      required
                      value={formData.configuration}
                      onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    >
                      <option value="" disabled>Select Configuration</option>
                      <option value="2BHK P">2BHK P - 655 CA</option>
                      <option value="2BHK L">2BHK L - 724 CA</option>
                      <option value="3BHK P">3BHK P - 772 CA</option>
                      <option value="3BHK L">3BHK L - 922 CA</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#c3aa62] text-white px-12 py-4 font-bold uppercase tracking-[0.2em] text-[13px] shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 rounded-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-[#c3aa62] text-white w-full md:w-[260px] p-10 md:p-14 flex flex-col justify-center gap-10">
                <h4 className="text-xl md:text-2xl font-bold leading-tight">Get Information On Availabilities</h4>
                <ul className="space-y-6">
                  {["Available Units", "Payment Plan", "Floor Plans"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold tracking-wide">
                      <CheckCircle2 className="w-6 h-6 shrink-0 opacity-90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] shadow-sm w-full border-b border-slate-50">
        <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-16 py-3 flex justify-between items-center">
          <img
            onContextMenu={(e) => e.preventDefault()}
            src="/logo.svg" alt="Godrej Exquisite Logo" className="h-9 md:h-11 lg:h-12"
          />
          <nav className="hidden lg:flex items-center gap-8 lg:gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#overview" className="hover:text-[#c3aa62] transition-colors">Overview</a>
            <a href="#pricing" className="hover:text-[#c3aa62] transition-colors">Pricing</a>
            <a href="#plans" className="hover:text-[#c3aa62] transition-colors">Plans</a>
            <a href="#amenities" className="hover:text-[#c3aa62] transition-colors">Amenities</a>
            <a href="#location" className="hover:text-[#c3aa62] transition-colors">Location</a>
            <button onClick={() => setShowPopup(true)} className="bg-[#c3aa62] text-white px-8 py-2.5 rounded-sm text-[10px] shadow-lg hover:brightness-110 transition-all">Brochure</button>
          </nav>
          <button className="lg:hidden text-[#c3aa62] p-2" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu"><Menu className="w-6 h-6" /></button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 z-[150] bg-white p-10 flex flex-col gap-10 lg:hidden">
            <div className="flex justify-between items-center mb-10">
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/logo.svg" alt="Godrej Exquisite Logo" className="h-10"
              />
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu"><X className="w-8 h-8 text-[#c3aa62]" /></button>
            </div>
            {["Overview", "Pricing", "Plans", "Amenities", "Location"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-bold text-slate-800 border-b border-slate-50 pb-6 uppercase tracking-tighter">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col lg:block h-auto lg:h-[100vh] overflow-hidden bg-white">
          <div className="w-full h-[350px] sm:h-[450px] lg:absolute lg:inset-0 lg:h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentBanner}
                src={banners[currentBanner]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
                alt="Godrej Exquisite Thane Luxury Exterior View"
                onContextMenu={(e) => e.preventDefault()}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative w-full lg:max-w-[1536px] mx-auto h-auto lg:h-full flex items-center px-0 sm:px-4 md:px-8 lg:px-16 pointer-events-none">
            <div
              className="bg-white shadow-2xl w-full lg:w-[270px] overflow-hidden flex flex-col pointer-events-auto lg:my-4 animate-in fade-in slide-in-from-bottom-10 duration-1000"
            >
              {/* Top Bar */}
              <div className="bg-[#c3aa62] w-full py-2 text-center">
                <p className="text-white font-medium uppercase tracking-wide text-[11px] md:text-[13px]">BOOKING OPEN</p>
              </div>

              {/* Title Section */}
              <div className="py-4 lg:py-3 text-center bg-white space-y-1">
                <h1 className="text-[28px] lg:text-[24px] font-bold text-[#c3aa62] leading-tight drop-shadow-sm">Godrej Exquisite</h1>
                <p className="text-[14px] lg:text-[13px] text-slate-800">At Thane, Mumbai</p>
              </div>

              {/* Info Section */}
              <div className="bg-slate-50/50 py-4 lg:py-3 px-4 border-y border-slate-50">
                <div className="space-y-1.5 text-center">
                  <p className="text-[14px] lg:text-[13px] text-slate-700 font-medium">Land Parcel 4 Acres</p>
                  <p className="text-[14px] lg:text-[13px] text-slate-700 font-medium">Towers 3 Towers</p>
                  <p className="text-[14px] lg:text-[13px] text-slate-700 font-medium">Possession Nearby</p>
                  <p className="text-[14px] lg:text-[13px] text-slate-700 font-medium">Payment 25:75 Plan</p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="p-4 lg:p-3 space-y-3 lg:space-y-2">
                {[
                  "Spot Booking Offer",
                  "25X4 Payment Plan",
                  "Stamp Duty Benefit"
                ].map((text, i) => (
                  <motion.button
                    key={i}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-[#c3aa62] hover:bg-[#b09652] text-white py-3 lg:py-2.5 px-4 font-bold uppercase tracking-wider text-[12px] lg:text-[11px] shadow-md hover:shadow-lg active:scale-[0.98] transition-all rounded-sm"
                  >
                    {text}
                  </motion.button>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="p-4 lg:p-3 text-center space-y-2 lg:space-y-1 bg-white border-t border-slate-50">
                <p className="text-[13px] lg:text-[12px] text-slate-600 font-medium leading-tight">Premium 2 & 3 BHK Homes With Balcony</p>
                <div className="space-y-0.5">
                  <p className="text-[12px] lg:text-[11px] text-slate-500 uppercase tracking-[0.1em] font-bold">Starting Price</p>
                  <p className="text-[32px] lg:text-[28px] font-black text-[#c3aa62] leading-none drop-shadow-sm">₹ 1.79 Cr* Onwards</p>
                </div>
                <div className="pt-2">
                  <motion.button
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    onClick={() => setShowPopup(true)}
                    className="bg-[#c3aa62] hover:bg-[#b09652] text-white px-8 py-2.5 lg:py-2 rounded-sm text-[12px] lg:text-[11px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all w-full"
                  >
                    Enquire Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="py-16 md:py-24 bg-white w-full">
          <div className="max-w-[1536px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 uppercase tracking-tighter leading-none">Overview</h2>
                <div className="w-20 h-1.5 bg-[#c3aa62]" />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light italic">
                Godrej Exquisite is located off the main stretch of Ghodbunder Road, Thane. Spread over 4 acres of land with 3 magnificent towers having 2 and 3 BHK residences, this project offers you an exclusive lifestyle right from your apartment to the amenities where each tower comes with its own set of rooftop amenities. Be it a Rooftop Horizon Pool, Skyscape Gym or the luxury of no shared walls between homes, come, indulge in a world crafted exclusively for you.
              </p>
            </div>
            <div className="hidden md:block relative aspect-video overflow-hidden shadow-2xl rounded-sm cursor-pointer group" onClick={() => setShowPopup(true)}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/BANNER1.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Godrej Exquisite Aerial View"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-[#FCFCFC] border-y border-slate-50 px-6 w-full">
          <div className="max-w-[1536px] mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 uppercase tracking-tighter">Price List</h2>
              <p className="text-[10px] md:text-[11px] font-bold text-[#c3aa62] uppercase tracking-[0.4em]">Transparent & Exclusive</p>
            </div>
            <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-start">
              <div className="space-y-6">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto shadow-2xl border border-slate-50 bg-white rounded-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 uppercase text-[10px] font-black tracking-[0.2em] text-slate-400">
                      <tr>
                        <th className="p-8">Type</th>
                        <th className="p-8 text-center">Carpet Area</th>
                        <th className="p-8 text-center">Price</th>
                        <th className="p-8 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 font-bold">
                      {pricingData.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="p-8 text-slate-900 text-lg lg:text-xl font-black">{item.type}</td>
                          <td className="p-8 text-slate-500 text-center font-medium">{item.area}</td>
                          <td className="p-8 text-[#c3aa62] font-black text-xl lg:text-2xl text-center">{item.price}</td>
                          <td className="p-8 text-right">
                            <button onClick={() => setShowPopup(true)} className="bg-[#c3aa62] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all rounded-sm">Enquire</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mobile Cards */}
                <div className="md:hidden space-y-6">
                  {pricingData.map((item, i) => (
                    <div key={i} className="bg-white p-8 shadow-xl border border-slate-50 rounded-sm flex flex-col gap-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Type</p>
                          <p className="text-xl font-black text-slate-900">{item.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Price</p>
                          <p className="text-2xl font-black text-[#c3aa62]">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                        <div>
                          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Carpet Area</p>
                          <p className="text-base font-bold text-slate-500">{item.area}</p>
                        </div>
                        <button onClick={() => setShowPopup(true)} className="bg-[#c3aa62] text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest shadow-lg">Enquire</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div onClick={() => setShowPopup(true)} className="group cursor-pointer overflow-hidden bg-white shadow-2xl border border-slate-50 rounded-sm p-4 flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    onContextMenu={(e) => e.preventDefault()}
                    src="/prcing table.jpeg" className="w-full h-full object-cover blur-[5px] group-hover:scale-110 transition-transform duration-1000" alt="Godrej Exquisite Full Pricing Table"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] bg-black/40 px-6 py-2 backdrop-blur-sm">View Complete Price Breakup</p>
                  </div>
                </div>
                <div className="bg-[#c3aa62] text-white py-5 text-center font-black uppercase tracking-[0.2em] text-[11px] group-hover:brightness-110 transition-all">
                  Click To Unlock Full Pricing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section id="plans" className="py-16 md:py-24 bg-white px-6 w-full">
          <div className="max-w-[1536px] mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 uppercase tracking-tighter leading-none">Floor Plans</h2>
              <p className="text-[10px] md:text-[11px] font-bold text-[#c3aa62] uppercase tracking-[0.4em]">Expert Architectural Layout</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {floorPlans.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer rounded-sm overflow-hidden"
                  onClick={() => setShowPopup(true)}
                >
                  <div className="relative w-full aspect-square md:aspect-[4/5] bg-white p-2 md:p-4">
                    <img
                      onContextMenu={(e) => e.preventDefault()}
                      src={item.img}
                      className="w-full h-full object-contain blur-[3px] mix-blend-darken group-hover:scale-105 transition-transform duration-500"
                      alt={`Godrej Exquisite ${item.name} Floor Plan`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-[#c3aa62] text-white px-4 md:px-6 py-2 md:py-2.5 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg rounded-sm">
                        View Plan
                      </div>
                    </div>
                  </div>
                  <div className="py-3 md:py-4 px-2 text-center border-t border-slate-100 group-hover:bg-[#c3aa62] transition-colors duration-300">
                    <p className="text-[10px] md:text-[11px] font-black text-slate-800 group-hover:text-white uppercase tracking-widest transition-colors duration-300">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="amenities" className="py-16 md:py-24 bg-[#FCFCFC] border-y border-slate-50 px-6 w-full">
          <div className="max-w-[1536px] mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 uppercase tracking-tighter leading-none">Gallery</h2>
              <p className="text-[10px] md:text-[11px] font-bold text-[#c3aa62] uppercase tracking-[0.3em]">Life at Godrej Exquisite</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden shadow-2xl border-[6px] border-white group cursor-pointer" onClick={() => setShowPopup(true)}>
                  <img
                    onContextMenu={(e) => e.preventDefault()}
                    src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={`Godrej Exquisite Luxury Amenity ${i + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-16 md:py-24 bg-white px-6 w-full">
          <div className="max-w-[1536px] mx-auto space-y-16 lg:space-y-24">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 uppercase tracking-tighter leading-none">Location</h2>
              <div className="flex items-center justify-center gap-4 text-[10px] md:text-[12px] font-black text-[#c3aa62] uppercase tracking-[0.4em]">
                <MapPin className="w-5 h-5" />
                <span>Ghodbunder Road, Thane West</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-24 items-center">
              <div
                className="w-full h-[400px] md:h-[600px] lg:h-[700px] border-[10px] border-slate-50 shadow-2xl relative overflow-hidden group cursor-pointer rounded-sm"
                onClick={() => setShowPopup(true)}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1437145744!2d72.96442657597147!3d19.232585247012586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93a6e839e53%3A0x67399479b187515!2sGodrej%20Exquisite%2C%20Thane!5e0!3m2!1sen!2sin!4v1713876000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-95 transition-all duration-1000 pointer-events-none group-hover:grayscale-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Godrej Exquisite Location Map"
                />
                {/* Styled Map Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0.9, y: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white p-8 md:p-16 shadow-2xl rounded-sm text-center space-y-8 max-w-[90%] border border-slate-100"
                  >
                    <div className="flex justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 border-[3px] border-slate-900 rounded-full flex items-center justify-center">
                        <MapPin className="w-10 h-10 md:w-12 md:h-12 text-slate-900" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Ghodbunder Rd, Thane</h3>
                      <p className="text-[11px] md:text-[13px] font-black text-slate-400 uppercase tracking-[0.5em]">Prime Residential Zone</p>
                    </div>
                    <div className="w-24 h-1 bg-slate-900 mx-auto" />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-10 lg:space-y-16">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tighter leading-none">Connectivity</h3>
                <div className="space-y-8 md:space-y-10">
                  {connectivity.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-6 items-center group cursor-pointer"
                      onClick={() => setShowPopup(true)}
                    >
                      <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#c3aa62] shadow-sm group-hover:bg-[#c3aa62] group-hover:text-white transition-all duration-500 rounded-sm">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.title}</p>
                        <p className="text-lg md:text-xl font-bold text-slate-700 tracking-tight">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-[#c3aa62] text-white py-5 font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl flex items-center justify-center gap-5 hover:brightness-110 active:scale-[0.98] transition-all rounded-sm"
                  >
                    <Navigation className="w-5 h-5" />
                    Navigate To Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Refined Light Theme */}
        <footer className="bg-[#FDFDFD] text-slate-600 py-20 md:py-32 px-6 w-full border-t border-slate-100">
          <div className="max-w-[1536px] mx-auto space-y-20 md:space-y-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-16 border-b border-slate-100">
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/logo.svg" alt="Godrej Exquisite Logo" className="h-11 md:h-12"
              />
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-300">
                <a href="#overview" className="hover:text-[#c3aa62] transition-colors">Overview</a>
                <a href="#pricing" className="hover:text-[#c3aa62] transition-colors">Pricing</a>
                <a href="#plans" className="hover:text-[#c3aa62] transition-colors">Plans</a>
                <a href="#amenities" className="hover:text-[#c3aa62] transition-colors">Amenities</a>
                <Link href="/privacy-policy" className="hover:text-[#c3aa62] transition-colors">Privacy Policy</Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-start text-center md:text-left">
              <div className="space-y-8">
                <p className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] text-[#c3aa62]">MahaRERA: P51700024496</p>
                <p className="text-[10px] md:text-[11px] leading-loose text-slate-400 font-bold uppercase tracking-[0.2em] max-w-xl mx-auto md:mx-0">
                  Disclaimer: The images shown are for representational purposes only. All dimensions and specifications are as per the agreement for sale. Godrej Exquisite is a project by Godrej Properties.
                </p>
              </div>
              <div className="md:text-right space-y-6">
                <p className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase">Experience Centre:</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">Godrej Exquisite, Thane (W)</p>
                <div className="flex md:justify-end gap-10 pt-8 justify-center">
                  <a href="https://wa.me/918828456094" className="text-slate-300 hover:text-[#25D366] transition-all hover:scale-110" aria-label="WhatsApp Us"><WhatsAppIcon /></a>
                  <a href="tel:+918828456094" className="text-slate-300 hover:text-[#c3aa62] transition-all hover:scale-110" aria-label="Call Us"><Phone className="w-8 h-8 md:w-10 md:h-10" /></a>
                  <a href="mailto:info@godrejexquisite.com" className="text-slate-300 hover:text-[#c3aa62] transition-all hover:scale-110" aria-label="Email Us"><Mail className="w-8 h-8 md:w-10 md:h-10" /></a>
                </div>
                <p className="text-[9px] font-bold text-slate-200 tracking-[0.6em] uppercase pt-20">© 2026 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Buttons - Hidden on Mobile to avoid conflict with sticky bar */}
      <div className="fixed bottom-12 right-6 md:right-12 hidden lg:flex flex-col gap-6 z-[100]">
        <motion.a href="https://wa.me/918828456094" whileHover={{ scale: 1.1 }} className="bg-[#25D366] text-white p-6 rounded-full shadow-2xl flex items-center justify-center hover:brightness-110 transition-all" aria-label="WhatsApp Chat">
          <WhatsAppIcon />
        </motion.a>
        <motion.button onClick={() => setShowPopup(true)} whileHover={{ scale: 1.1 }} className="bg-[#c3aa62] text-white p-6 rounded-full shadow-2xl flex items-center justify-center hover:brightness-110 transition-all" aria-label="Call Expert">
          <Phone className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Mobile Sticky Actions */}
      <div className="fixed bottom-0 w-full z-[150] flex lg:hidden shadow-2xl">
        <a href="tel:+918828456094" className="flex-1 bg-white text-slate-900 py-6 md:py-8 flex items-center justify-center gap-4 font-black uppercase tracking-widest text-[11px] md:text-[13px] border-r border-slate-50">
          <Phone className="w-5 h-5 text-[#c3aa62]" /> Call
        </a>
        <a href="https://wa.me/918828456094" className="flex-1 bg-[#25D366] text-white py-6 md:py-8 flex items-center justify-center gap-4 font-black uppercase tracking-widest text-[11px] md:text-[13px]">
          <WhatsAppIcon /> <span>WhatsApp</span>
        </a>
        <button onClick={() => setShowPopup(true)} className="flex-1 bg-[#c3aa62] text-white py-6 md:py-8 flex items-center justify-center gap-4 font-black uppercase tracking-widest text-[11px] md:text-[13px]">
          <Mail className="w-5 h-5" /> Enquire
        </button>
      </div>
    </div>
  );
}

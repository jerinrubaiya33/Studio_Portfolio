import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import ctaBgImage from "../assets/cta5.jpg";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CTA_Full = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <main className="relative w-full min-h-screen bg-white text-gray-900 font-mono overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative w-full min-h-[60vh] sm:min-h-[50vh] flex items-end overflow-hidden">
          <img
            src={ctaBgImage}
            alt="CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 pb-12 sm:pb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-normal tracking-tight uppercase leading-[0.95] text-white drop-shadow-md">
                Let's Talk About
                <br />
                Your Project.
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mt-6 max-w-2xl text-sm sm:text-base font-mono text-gray-300 leading-relaxed"
            >
              Whether you're envisioning a private residence, commercial space, or
              a complete architectural transformation — we're here to bring your
              vision to life.
            </motion.p>
          </div>
        </section>

        {/* ================= CONTACT FORM & INFO ================= */}
        <section className="relative w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: CONTACT FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-mono font-bold text-gray-900 tracking-tight uppercase mb-2">
                Get in Touch
              </h2>
              <p className="text-sm font-mono text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7] transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXX XXX"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7] transition-all"
                  />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="landscape">Landscape</option>
                    <option value="restoration">Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.15em] text-white uppercase bg-gray-900 px-8 py-4 transition-all duration-300 hover:bg-[#5b7fc7]"
                >
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </motion.div>

            {/* RIGHT: STUDIO INFO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-10"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-900 tracking-wider uppercase mb-6">
                  Studio Information
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
                      <MapPin size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Visit Us
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        House 42, Road 11, Baridhara,
                        <br />
                        Dhaka 1212, Bangladesh
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
                      <Phone size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Call Us
                      </span>
                      <a
                        href="tel:+8801711000000"
                        className="text-sm text-gray-700 hover:text-[#5b7fc7] transition-colors"
                      >
                        +880 1711-000 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
                      <Mail size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                        Email Us
                      </span>
                      <a
                        href="mailto:info@studiodna.com"
                        className="text-sm text-gray-700 hover:text-[#5b7fc7] transition-colors"
                      >
                        info@studiodna.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[280px] overflow-hidden rounded-md bg-gray-100">
                <iframe
                  title="Studio DNA Location"
                  src="https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Office Hours
                </h4>
                <div className="flex flex-col gap-1 text-sm font-mono text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday — Friday</span>
                    <span className="font-bold">9:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold">10:00 AM — 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-10 w-full border-t border-neutral-300 bg-white/70 backdrop-blur-md">
        <Footer />
      </div>
    </>
  );
};

export default CTA_Full;

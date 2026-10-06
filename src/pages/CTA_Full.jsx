// import { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../contexts/ThemeContext";
// import { Mail, Phone, MapPin, Send, Check, ArrowUp } from "lucide-react";
// import idea from "../assets/idea.jpg";
// import pencil from "../assets/sketch (2).jpg";
// import storyDrawingImage from "../assets/drawing.jpg";
// import storyBuildImage from "../assets/contruction.avif";
// import exterior from "../assets/exterior.jpg";
// import interior from "../assets/interior.jpg";
// import Footer from "./Footer";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const CTA_Full = () => {
//   const { theme } = useTheme();
//   const [selectedType, setSelectedType] = useState("");
//   const [processedIdea, setProcessedIdea] = useState(idea);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // Process idea image: white with yellow bulb in dark mode
//   useEffect(() => {
//     if (theme !== 'dark') {
//       setProcessedIdea(idea);
//       return;
//     }
//     const img = new Image();
//     img.src = idea;
//     img.onload = () => {
//       const canvas = document.createElement('canvas');
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(img, 0, 0);
//       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       const d = imageData.data;
//       for (let i = 0; i < d.length; i += 4) {
//         const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255;
//         const max = Math.max(r, g, b), min = Math.min(r, g, b);
//         const l = (max + min) / 2;
//         const delta = max - min;
//         let h = 0;
//         if (delta > 0.01) {
//           if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
//           else if (max === g) h = ((b - r) / delta + 2) / 6;
//           else h = ((r - g) / delta + 4) / 6;
//         }
//         h *= 360;
//         const s = l === 0 ? 0 : delta / (l > 0.5 ? 2 - max - min : max + min);
//         const isYellow = s > 0.15 && h >= 25 && h <= 75 && l > 0.25;
//         if (isYellow) {
//           d[i] = Math.min(255, d[i] * 1.3);
//           d[i + 1] = Math.min(255, d[i + 1] * 1.3);
//           d[i + 2] = Math.min(255, d[i + 2] * 0.7);
//         } else {
//           d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
//         }
//       }
//       ctx.putImageData(imageData, 0, 0);
//       setProcessedIdea(canvas.toDataURL());
//     };
//   }, [theme, idea]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { ...formData, projectType: selectedType });
//   };

//   const projectOptions = [
//     { id: "Exterior", label: "Exterior", image: exterior },
//     { id: "Interior", label: "Interior", image: interior },
//   ];

//   const navigate = useNavigate();
//   const [showTopBtn, setShowTopBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       setShowTopBtn(scrolled > 400);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <main className="relative w-full bg-[#2E3133] text-white font-mono overflow-hidden pt-28 sm:pt-24 md:pt-32 transition-colors duration-500">
//         {/* Back Button — right below the logo */}
//         <div className="px-4 sm:px-8 md:px-20 lg:px-24">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 hover:text-[#D9A08B] transition-colors duration-200 text-sm font-semibold font-mono"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="m12 19-7-7 7-7" />
//               <path d="M19 12H5" />
//             </svg>
//             Back
//           </button>
//         </div>
//         {/* ================= 01 — HERO IMAGE (FULL WIDTH) ================= */}
//         {/* <section className="relative w-full h-[20vh] mt-30 sm:-mt-0 sm:h-[60vh] lg:h-[90vh] bg-gray-100 overflow-hidden">
//           <img
//             src={storyHeroImage}
//             alt="Hero visualization"
//             className="w-full h-full object-cover"
//           />
//         </section> */}

//         {/* ================= 02 — YOU CAME HERE WITH AN IDEA (IMAGE AFTER TITLE ONLY ON MOBILE) ================= */}
//         <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-24">
//           <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Text & Input */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="flex flex-col justify-center order-1 lg:order-2"
//             >
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-normal uppercase tracking-tight leading-[1.1] sm:leading-[1.05] text-gray-900">
//                 You came here with an idea?
//               </h1>

//               {/* Mobile Image: Appears immediately after the title on mobile */}
//               <div className="block lg:hidden my-6 relative w-full h-[150px] sm:h-[280px] overflow-hidden rounded-sm">
//                 <img
//                   src={processedIdea}
//                   loading="lazy"
//                   alt="Idea visualization"
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg lg:text-xl font-mono text-gray-300 leading-relaxed">
//                 Good. That's all we ever start with. No plans, no drawings —
//                 just a sense of what you want your space to become.
//               </p>

//               {/* Your Name Input */}
//               <div className="mt-8 sm:mt-12 max-w-md flex flex-col gap-2">
//                 <label className="text-xs font-bold uppercase tracking-widest text-[#D9A08B]">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full border-b-2 border-[#D9A08B] bg-transparent py-2 text-base sm:text-lg lg:text-xl font-mono text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-[#D9A08B]"
//                 />
//               </div>
//             </motion.div>

//             {/* Desktop Image */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeUp}
//               transition={{ duration: 0.7 }}
//               className="hidden lg:block relative w-full h-[324px] overflow-hidden rounded-sm order-2 lg:order-1"
//             >
//               <img
//                 src={processedIdea}
//                 loading="lazy"
//                 alt="Idea visualization"
//                 className="w-full h-full object-contain"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* ================= 03 — PROJECT TYPE IMAGE GRID (IN A ROW ON MOBILE) ================= */}
//         <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-8 sm:mb-12"
//             >
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono uppercase tracking-tight text-gray-900 leading-snug">
//                 What Type of Project You Wanted to Build?
//               </h2>
//             </motion.div>

//             {/* 2 Cards Side-by-Side on Mobile (grid-cols-2) */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 w-full mx-auto"
//             >
//               {projectOptions.map((item) => {
//                 const isSelected = selectedType === item.id;
//                 return (
//                   <button
//                     key={item.id}
//                     type="button"
//                     onClick={() => setSelectedType(item.id)}
//                     className={`group relative h-[160px] sm:h-[320px] lg:h-[460px] w-full overflow-hidden text-left
//                        transition-all duration-300 ${isSelected ? "ring-2 sm:ring-4 ring-[#D9A08B] ring-offset-1 sm:ring-offset-2" : ""
//                       }`}
//                   >
//                     {/* Background Image */}
//                     <img
//                       src={item.image}
//                       alt={item.label}
//                       loading="lazy"
//                       className="absolute inset-0 w-full h-full object-cover grayscale transition-transform
//                        duration-500 group-hover:scale-105"
//                     />

//                     {/* Bottom Black Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-transparent transition-opacity duration-300 group-hover:from-black" />

//                     {/* Active Selected Badge */}
//                     {isSelected && (
//                       <div className="absolute top-2 right-2 sm:top-5 sm:right-5 z-10 bg-[#D9A08B] text-white p-1 sm:p-2 rounded-full">
//                         <Check size={14} className="sm:w-5 sm:h-5" />
//                       </div>
//                     )}

//                     {/* Title at Bottom Overlay */}
//                     <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-8 flex flex-col justify-end">
//                       <h3 className="text-sm sm:text-xl lg:text-2xl font-mono font-bold uppercase tracking-wider text-white">
//                         {item.label}
//                       </h3>
//                     </div>
//                   </button>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </section>

//         {/* ================= 04 — DESIGN FIRST ================= */}
//         <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Column: Text */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6 }}
//               className="flex flex-col justify-center"
//             >
//               <h2 className="text-2xl sm:text-4xl md:text-5xl font-mono font-normal uppercase tracking-tight text-gray-900 leading-[1.08]">
//                 We design it first.
//                 <br />
//                 You approve it.
//               </h2>
//               <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-lg text-gray-300 leading-relaxed">
//                 Only once you say yes does it become anything more than an
//                 idea — that's when we move it to drawing.
//               </p>
//             </motion.div>

//             {/* Right Column: Image */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeUp}
//               transition={{ duration: 0.7 }}
//               className="relative w-full h-[220px] sm:h-[400px] lg:h-[550px] lg:ml-1 overflow-hidden"
//             >
//               <img
//                 src={pencil}
//                 alt="The approved design concept"
//                 loading="lazy"
//                 className="w-full h-full object-contain grayscale opacity-90"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* ================= 05 — ARCHITECTS START DRAWING ================= */}
//         <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28
//          ">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left Column: Drawing Visual */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeUp}
//               transition={{ duration: 0.7 }}
//               className="relative w-full h-[260px] sm:h-[400px] lg:h-[550px] lg:-ml-25 overflow-hidden order-2 lg:order-1"
//             >
//               <img
//                 src={storyDrawingImage}
//                 loading="lazy"
//                 alt="Architectural sketch and draft plans"
//                 className="w-full h-full object-contain grayscale opacity-90"
//               />
//             </motion.div>

//             {/* Right Column: Text & Phone Callout Row */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6 }}
//               className="flex flex-col justify-center order-1 lg:order-2"
//             >
//               {/* Mobile: Phone section first */}
//               <div className="lg:hidden mb-8 sm:mb-10">
//                 <h3 className="text-lg sm:text-xl font-mono font-bold uppercase tracking-tight text-[#D9A08B] leading-snug mb-4">
//                   Oh Your Number?
//                   <br />
//                   Let's Talk?
//                 </h3>
//                 <div className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-2">
//                   <Phone size={16} className="text-gray-400 shrink-0" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+880 1XXX-XXX XXX"
//                     className="w-full bg-transparent text-sm font-mono text-gray-900 placeholder-gray-400 outline-none"
//                   />
//                 </div>
//                 <p className="mt-3 text-xs text-gray-500 leading-relaxed">
//                   Direct line for a quick discovery call whenever you're ready.
//                 </p>
//               </div>

//               <h2 className="text-2xl sm:text-4xl md:text-5xl font-mono font-normal uppercase tracking-tight text-gray-900
//                leading-[1.08]">
//                 When you approve,
//                 <br />
//                 our architects start
//                 <br />
//                 drawing sketches.
//               </h2>
//               <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-lg text-gray-300 leading-relaxed">
//                 Precision layouts, structural drafting, and refined details
//                 come together into blueprints ready for build.
//               </p>

//               {/* Desktop: Phone section stays here after the text */}
//               <div className="hidden lg:block mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//                 <div>
//                   <h3 className="text-lg sm:text-xl lg:text-2xl font-mono font-bold uppercase tracking-tight text-[#D9A08B] leading-snug">
//                     Oh Your Number?
//                     <br />
//                     Let's Talk?
//                   </h3>
//                 </div>

//                 <div className="flex flex-col gap-3 mt-5">
//                   <div className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-2">
//                     <Phone size={16} className="text-gray-400 shrink-0" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+880 1XXX-XXX XXX"
//                       className="w-full bg-transparent text-sm sm:text-base font-mono text-gray-900 placeholder-gray-400 outline-none"
//                     />
//                   </div>
//                   <p className="text-md text-gray-500 leading-relaxed">
//                     Direct line for a quick discovery call whenever you're ready.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ================= 06 — EMAIL QUESTION ================= */}
//         <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-28">
//           <div className="max-w-md mx-auto text-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono uppercase tracking-tight  mb-6 sm:mb-8 leading-snug">
//                 Before we go further —
//                 <br className="hidden sm:block " /> what's your <span className="text-[#D9A08B]"> email?</span>
//               </h2>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={fadeUp}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-3"
//             >
//               <Mail size={18} className="text-gray-400 shrink-0" />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className="w-full bg-transparent text-sm sm:text-base lg:text-lg font-mono text-gray-900 placeholder-gray-400
//                 0 outline-none"
//               />
//             </motion.div>
//             <p className="mt-4 text-xs text-gray-400">
//               That's it for now — we'll use this to send everything else.
//             </p>
//           </div>
//         </section>

//         {/* ================= 07 — CONSTRUCTION VISUAL (FULL IMAGE ON MOBILE) ================= */}
//         <section className="relative w-full h-[18vh] sm:h-[62vh] flex items-end overflow-hidden">
//           <img
//             src={storyBuildImage}
//             alt="Construction beginning on site"
//             className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
//           />
//           <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#2E3133] via-[#2E313315]
//            to-transparent pointer-events-none" />

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={fadeUp}
//             transition={{ duration: 0.7 }}
//             className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 pb-8 sm:pb-16 lg:pb-16 text-center"
//           >
//             <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono font-normal uppercase tracking-tight text-white 
//             leading-[1.1] sm:leading-[1.05] sm:-mb-9 -mb-12">
//               Then, we'll start construction.
//             </h2>
//           </motion.div>
//         </section>

//         {/* ================= 08 — FULL FORM SECTION ================= */}
//         <section className="relative w-full border-t border-gray-200 px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-24">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               transition={{ duration: 0.7 }}
//             >
//               <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-gray-900 tracking-tight uppercase mb-2">
//                 That's the whole story.
//               </h2>
//               <p className="text-xs sm:text-sm font-mono text-gray-500 mb-6 sm:mb-8">
//                 Now let's make it yours. A couple more details and we'll be in
//                 touch within 24 hours.
//               </p>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="John Doe"
//                     className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#D9A08B] focus:ring-1 focus:ring-[#D9A08B] transition-all"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="john@example.com"
//                     className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#D9A08B] focus:ring-1 focus:ring-[#D9A08B] transition-all"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+880 1XXX-XXX XXX"
//                     className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#D9A08B] focus:ring-1 focus:ring-[#D9A08B] transition-all"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Project Type
//                   </label>
//                   <div
//                     className={`w-full border px-4 py-3 text-sm font-mono transition-all ${selectedType
//                       ? "border-gray-200 bg-gray-50 text-gray-900"
//                       : "border-dashed border-gray-300 bg-white text-gray-400"
//                       }`}
//                   >
//                     {selectedType ||
//                       "You haven't picked one yet — scroll back up"}
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Project Details
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     required
//                     placeholder="Tell us about your project..."
//                     className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#D9A08B] focus:ring-1 focus:ring-[#D9A08B] transition-all resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group relative overflow-hidden inline-flex items-center justify-center gap-2 text-xs
//                    sm:text-sm font-semibold tracking-wide px-3 py-4 rounded-md shadow-md hover:shadow-xl transition-all
//                     duration-500 cursor-pointer text-white bg-[#707070] hover:bg-black"
//                 >
//                   {/* Animated Expanding Circle from Bottom Center */}
//                   <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-26 h-16 bg-[#D9A08B] rounded-full 
//                   scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />

//                   <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-mono">
//                     Start The Story
//                   </span>

//                   <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                     <Send
//                       size={14}
//                       className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                   </span>
//                 </button>
//               </form>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="flex flex-col gap-8 sm:gap-10"
//             >
//               <div>
//                 <h3 className="text-base sm:text-lg lg:text-xl font-mono font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
//                   Studio Information
//                 </h3>

//                 <div className="flex flex-col gap-5 sm:gap-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
//                       <MapPin size={18} className="text-gray-600" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
//                         Visit Us
//                       </span>
//                       <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                         Suite 5, Level 1, Mannan Plaza
//                         <br />
//                         Bashundhara River View R/A
//                         <br />
//                         Osudh Factory Mor, South Keraniganj
//                         <br />
//                         Dhaka 1311, Bangladesh
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
//                       <Phone size={18} className="text-gray-600" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
//                         Call Us
//                       </span>
//                       <a
//                         href="tel:+8801313711661"
//                         className="text-xs sm:text-sm text-gray-700 hover:text-[#D9A08B] transition-colors"
//                       >
//                         +880 1313-711 661
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shrink-0">
//                       <Mail size={18} className="text-gray-600" />
//                     </div>
//                     <div>
//                       <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
//                         Email Us
//                       </span>
//                       <a
//                         href="mailto:info@sdnabd.com"
//                         className="text-xs sm:text-sm text-gray-700 hover:text-[#D9A08B] transition-colors"
//                       >
//                         info@sdnabd.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* <div className="w-full h-[220px] sm:h-[280px] overflow-hidden rounded-md bg-gray-100">
//                 <iframe
//                   title="Studio DNA Location"
//                   src="https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed"
//                   width="100%"
//                   height="100%"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
//                 />
//               </div> */}

//               <div className="bg-[#315847] border border-gray-200 p-5 sm:p-6">
//                 <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
//                   Office Hours
//                 </h4>
//                 <div className="flex flex-col gap-1.5 text-xs sm:text-sm font-mono text-gray-700">
//                   <div className="flex justify-between">
//                     <span>Saturday — Wednesday</span>
//                     <span className="font-bold">9:00 AM — 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Thursday</span>
//                     <span className="font-bold">10:00 AM — 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Friday</span>
//                     <span className="text-gray-400">Closed</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* Floating Back to Top */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         aria-label="Back to top"
//         className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#D9A08B] text-white shadow-md transition-all duration-300 hover:h-9 hover:w-9 hover:shadow-lg cursor-pointer ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
//       >
//         <ArrowUp
//           size={14}
//           className="opacity-100 scale-100 transition-all duration-300"
//         />
//       </button>

//       <div className="relative z-10 w-full border-t border-theme backdrop-blur-md transition-colors duration-500" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)' }}>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CTA_Full;















import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Mail, Phone, MapPin, Send, Check, ArrowUp } from "lucide-react";
import idea from "../assets/idea.jpg";
import pencil from "../assets/sketch (2).jpg";
import storyDrawingImage from "../assets/drawing.jpg";
import storyBuildImage from "../assets/contruction.avif";
import exterior from "../assets/exterior.jpg";
import interior from "../assets/interior.jpg";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CTA_Full = () => {
  const { theme } = useTheme();
  const [selectedType, setSelectedType] = useState("");
  const [processedIdea, setProcessedIdea] = useState(idea);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Process idea image: white with yellow bulb in dark mode
  useEffect(() => {
    if (theme !== 'dark') {
      setProcessedIdea(idea);
      return;
    }
    const img = new Image();
    img.src = idea;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const l = (max + min) / 2;
        const delta = max - min;
        let h = 0;
        if (delta > 0.01) {
          if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
          else if (max === g) h = ((b - r) / delta + 2) / 6;
          else h = ((r - g) / delta + 4) / 6;
        }
        h *= 360;
        const s = l === 0 ? 0 : delta / (l > 0.5 ? 2 - max - min : max + min);
        const isYellow = s > 0.15 && h >= 25 && h <= 75 && l > 0.25;
        if (isYellow) {
          d[i] = Math.min(255, d[i] * 1.3);
          d[i + 1] = Math.min(255, d[i + 1] * 1.3);
          d[i + 2] = Math.min(255, d[i + 2] * 0.7);
        } else {
          d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setProcessedIdea(canvas.toDataURL());
    };
  }, [theme, idea]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, projectType: selectedType });
  };

  const projectOptions = [
    { id: "Exterior", label: "Exterior", image: exterior },
    { id: "Interior", label: "Interior", image: interior },
  ];

  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowTopBtn(scrolled > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="relative w-full bg-[#2E3133] text-white font-mono overflow-hidden pt-28 sm:pt-24 md:pt-32
       transition-colors duration-500">
        {/* Back Button — right below the logo */}
        <div className="px-4 sm:px-8 md:px-20 lg:px-24">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:text-[#D9A08B] transition-colors duration-200 text-sm font-semibold font-mono cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back
          </button>
        </div>

        {/* ================= 02 — YOU CAME HERE WITH AN IDEA ================= */}
        <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-24">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col justify-center order-1 lg:order-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-normal uppercase tracking-tight leading-[1.1] sm:leading-[1.05] text-gray-900">
                You came here with an idea?
              </h1>

              <div className="block lg:hidden my-6 relative w-full h-[150px] sm:h-[280px] overflow-hidden rounded-sm">
                <img
                  src={processedIdea}
                  loading="lazy"
                  alt="Idea visualization"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg lg:text-xl font-mono text-gray-300 leading-relaxed">
                Good. That's all we ever start with. No plans, no drawings —
                just a sense of what you want your space to become.
              </p>

              <div className="mt-8 sm:mt-12 max-w-md flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D9A08B]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-[#D9A08B] bg-transparent py-2 text-base sm:text-lg lg:text-xl font-mono text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-[#D9A08B]"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="hidden lg:block relative w-full h-[324px] overflow-hidden rounded-sm order-2 lg:order-1"
            >
              <img
                src={processedIdea}
                loading="lazy"
                alt="Idea visualization"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= 03 — PROJECT TYPE IMAGE GRID ================= */}
        <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono uppercase tracking-tight text-gray-900 leading-snug">
                What Type of Project You Wanted to Build?
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 w-full mx-auto"
            >
              {projectOptions.map((item) => {
                const isSelected = selectedType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedType(item.id)}
                    className={`group relative h-[160px] sm:h-[320px] lg:h-[460px] w-full overflow-hidden text-left cursor-pointer transition-all duration-300 ${isSelected ? "ring-2 sm:ring-4 ring-[#D9A08B] ring-offset-1 sm:ring-offset-2" : ""}`}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-transparent transition-opacity duration-300 group-hover:from-black" />
                    {isSelected && (
                      <div className="absolute top-2 right-2 sm:top-5 sm:right-5 z-10 bg-[#D9A08B] text-white p-1 sm:p-2 rounded-full">
                        <Check size={14} className="sm:w-5 sm:h-5" />
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-8 flex flex-col justify-end">
                      <h3 className="text-sm sm:text-xl lg:text-2xl font-mono font-bold uppercase tracking-wider text-white">
                        {item.label}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= 04 — DESIGN FIRST ================= */}
        <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-mono font-normal uppercase tracking-tight text-gray-900 leading-[1.08]">
                We design it first.
                <br />
                You approve it.
              </h2>
              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-lg text-gray-300 leading-relaxed">
                Only once you say yes does it become anything more than an
                idea — that's when we move it to drawing.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[220px] sm:h-[400px] lg:h-[550px] lg:ml-1 overflow-hidden"
            >
              <img
                src={pencil}
                alt="The approved design concept"
                loading="lazy"
                className="w-full h-full object-contain grayscale opacity-90"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= 05 — ARCHITECTS START DRAWING ================= */}
        <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[260px] sm:h-[400px] lg:h-[550px] lg:-ml-25 overflow-hidden order-2 lg:order-1"
            >
              <img
                src={storyDrawingImage}
                loading="lazy"
                alt="Architectural sketch and draft plans"
                className="w-full h-full object-contain grayscale opacity-90"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center order-1 lg:order-2"
            >
              <div className="lg:hidden mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-mono font-bold uppercase tracking-tight text-[#D9A08B] leading-snug mb-4">
                  Oh Your Number?
                  <br />
                  Let's Talk?
                </h3>
                <div className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-2">
                  <Phone size={16} className="text-gray-400 shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXX XXX"
                    className="w-full bg-transparent text-sm font-mono text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
                <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                  Direct line for a quick discovery call whenever you're ready.
                </p>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-mono font-normal uppercase tracking-tight text-gray-900 leading-[1.08]">
                When you approve,
                <br />
                our architects start
                <br />
                drawing sketches.
              </h2>
              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-lg text-gray-300 leading-relaxed">
                Precision layouts, structural drafting, and refined details
                come together into blueprints ready for build.
              </p>

              <div className="hidden lg:block mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-mono font-bold uppercase tracking-tight text-[#D9A08B] leading-snug">
                    Oh Your Number?
                    <br />
                    Let's Talk?
                  </h3>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                  <div className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-2">
                    <Phone size={16} className="text-gray-400 shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXX XXX"
                      className="w-full bg-transparent text-sm sm:text-base font-mono text-gray-900 placeholder-gray-400 outline-none"
                    />
                  </div>
                  <p className="text-md text-gray-500 leading-relaxed">
                    Direct line for a quick discovery call whenever you're ready.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 06 — EMAIL QUESTION ================= */}
        <section className="relative w-full border-b border-gray-200 px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-28">
          <div className="max-w-md mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono uppercase tracking-tight mb-6 sm:mb-8 leading-snug">
                Before we go further —
                <br className="hidden sm:block" /> what's your <span className="text-[#D9A08B]">email?</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 border-b-2 border-[#D9A08B] pb-3"
            >
              <Mail size={18} className="text-gray-400 shrink-0" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm sm:text-base lg:text-lg font-mono text-gray-900 placeholder-gray-400 outline-none"
              />
            </motion.div>
            <p className="mt-4 text-xs text-gray-400">
              That's it for now — we'll use this to send everything else.
            </p>
          </div>
        </section>

        {/* ================= 07 — CONSTRUCTION VISUAL ================= */}
        <section className="relative w-full h-[18vh] sm:h-[62vh] flex items-end overflow-hidden">
          <img
            src={storyBuildImage}
            alt="Construction beginning on site"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#2E3133] via-[#2E313315] to-transparent pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 pb-8 sm:pb-16 lg:pb-16 text-center"
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-mono font-normal uppercase tracking-tight text-white leading-[1.1] sm:leading-[1.05] sm:-mb-9 -mb-12">
              Then, we'll start construction.
            </h2>
          </motion.div>
        </section>

        {/* ================= 08 — SPLIT CARD CONTAINER ================= */}
        <section className="relative w-full border-t border-gray-200 px-0 sm:px-8 md:px-12 lg:px-24 py-0 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="bg-transparent sm:bg-[#315847F2] p-5 sm:p-10 lg:px-18 lg:py-0 rounded-none sm:rounded-sm shadow-none sm:shadow-2xl grid grid-cols-1 lg:grid-cols-12
               gap-6 sm:gap-6 lg:gap-8 items-center"
            >

              {/* Left Side: Compact Green Office Hours / Info Box (Span 5) with increased internal/external padding */}
              <div className="lg:col-span-5 bg-[#315847] lg:-mb-10 border-b border-r border-white/30 p-8 sm:p-10 rounded-sm flex flex-col gap-6 
              text-white relative overflow-hidden shadow-inner my-auto mx-4 sm:mx-0 mt-6 sm:mt-0">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-tight text-white leading-tight">
                    Let's Make it<br />Happen Together!
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed">
                    Reach out to our availability. We're ready when you are.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D9A08B] mb-3">
                    Office Hours
                  </h4>
                  <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-white/90">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Saturday — Wednesday</span>
                      <span className="font-bold">9:00 AM — 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Thursday</span>
                      <span className="font-bold">10:00 AM — 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="text-white/40">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Dark Orange Form Box (Span 7) */}
              <div className="lg:col-span-7 bg-[#A84E32] p-6 sm:p-10 rounded-none sm:rounded-sm text-white shadow-none sm:shadow-xl flex flex-col justify-between mt-6 sm:mt-0">
                <div>
                  <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase mb-2">
                    That's the whole story.
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-white/85 mb-6 sm:mb-8">
                    Now let's make it yours. A couple more details and we'll be in
                    touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/90">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full border-b-2 border-[#D9A08B] bg-transparent px-0 py-2.5 text-sm font-mono 
                      text-white placeholder-white/40 outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/90">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border-b-2 border-[#D9A08B] bg-transparent px-0 py-2.5 text-sm font-mono text-white
                       placeholder-white/40 outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/90">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXX XXX"
                      className="w-full border-b-2 border-[#D9A08B] bg-transparent px-0 py-2.5 text-sm font-mono text-white placeholder-white/40 outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/90">
                      Project Type
                    </label>
                    <div
                      className={`w-full border-b-2 px-0 py-2.5 text-sm font-mono transition-all ${selectedType
                          ? "border-[#D9A08B] text-white"
                          : "border-dashed border-[#D9A08B] text-white/70"
                        }`}
                    >
                      {selectedType ||
                        "You haven't picked one yet — scroll back up"}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/90">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full border-b-2 border-[#D9A08B] bg-transparent px-0 py-2.5 text-sm font-mono text-white placeholder-white/40 outline-none focus:border-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 text-xs sm:text-sm
                     font-semibold tracking-wide px-3 py-4 rounded-md shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer
                     text-white bg-[#2E3133] hover:bg-black mt-2"
                  >
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-26 h-16 bg-[#A84E32D5] rounded-full scale-0 
                    group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-mono">
                      Start The Story
                    </span>
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      <Send
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </button>
                </form>
              </div>

            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#D9A08B] text-white shadow-md transition-all duration-300 hover:h-9 hover:w-9 hover:shadow-lg cursor-pointer ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp
          size={14}
          className="opacity-100 scale-100 transition-all duration-300"
        />
      </button>

      <div className="relative z-10 w-full border-t border-theme backdrop-blur-md transition-colors duration-500" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)' }}>
        <Footer />
      </div>
    </>
  );
};

export default CTA_Full;
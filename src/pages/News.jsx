// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft, ArrowUpRight, Loader2 } from "lucide-react";
// import bannerImage from "../assets/exterior.jpg";
// import Footer from "./Footer";

// // Custom Required Asterisk Icon matching your requested design
// const RequiredAsterisk = () => (
//   <svg
//     width="10"
//     height="10"
//     viewBox="0 0 24 24"
//     fill="#D9A08B"
//     className="inline-block ml-1 align-top"
//   >
//     <path d="M12 2C12.8284 2 13.5 2.67157 13.5 3.5V8.87868L17.298 5.08066C17.8838 4.49487 18.8335 4.49487 19.4193 5.08066C20.0051 5.66645 20.0051 6.6162 19.4193 7.20199L15.6213 11H20.5C21.3284 11 22 11.6716 22 12.5C22 13.3284 21.3284 14 20.5 14H15.6213L19.4193 17.798C20.0051 18.3838 20.0051 19.3335 19.4193 19.9193C18.8335 20.5051 17.8838 20.5051 17.298 19.9193L13.5 16.1213V21.5C13.5 22.3284 12.8284 23 12 23C11.1716 23 10.5 22.3284 10.5 21.5V16.1213L6.70199 19.9193C6.1162 20.5051 5.16645 20.5051 4.58066 19.9193C3.99487 19.3335 3.99487 18.3838 4.58066 17.798L8.37868 14H3.5C2.67157 14 2 13.3284 2 12.5C2 11.6716 2.67157 11 3.5 11H8.37868L4.58066 7.20199C3.99487 6.6162 3.99487 5.66645 4.58066 5.08066C5.16645 4.49487 6.1162 4.49487 6.70199 5.08066L10.5 8.87868V3.5C10.5 2.67157 11.1716 2 12 2Z" />
//   </svg>
// );

// export default function EventRegistration() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     learningGoals: "",
//     isPlanningProject: "",
//     seats: "1",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError(null);

//     // Read webhook URL from environment variable
//     const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK;

//     if (!webhookUrl) {
//       console.error("VITE_GOOGLE_SHEETS_WEBHOOK is not set in .env");
//       setSubmitError("Registration service is not configured yet.");
//       setIsSubmitting(false);
//       return;
//     }

//     // Format the form data for the Google Sheet
//     const sheetData = {
//       timestamp: new Date().toISOString(),
//       fullName: formData.fullName.trim(),
//       email: formData.email.trim(),
//       phoneNumber: formData.phoneNumber.trim(),
//       learningGoals: formData.learningGoals.trim(),
//       isPlanningProject: formData.isPlanningProject,
//       seats: formData.seats,
//       source: "Before You Build Seminar",
//     };

//     try {
//       const response = await fetch(webhookUrl, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "text/plain",
//         },
//         body: JSON.stringify(sheetData),
//       });

//       // With no-cors mode, we can't read the response, but the request was sent
//       console.log("Form submitted to Google Sheet:", sheetData);
//       setSubmitted(true);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitError("There was an error submitting your registration. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="bg-[#1c1c1c] text-[#EFECE6] min-h-screen selection:bg-[#D9A08B]/30 selection:text-[#FFF] overflow-x-hidden">
//       <Helmet>
//         <title>Before You Build | Seminar Registration - Studio DNA</title>
//       </Helmet>

//       {/* Main Editorial Canvas */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-34 lg:pt-38 pb-20 sm:pb-28 lg:pb-32 space-y-16 sm:space-y-20 lg:space-y-24">

//         {/* Hero Title & Intro Block */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
//           <div className="lg:col-span-8 space-y-4 sm:space-y-6">
//             <div className="inline-flex items-center gap-3">
//               <span className="text-sm sm:text-base lg:text-xl tracking-widest uppercase ml-1 sm:ml-2 text-[#D9A08B]">| Seminar On</span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight text-[#FFFFFF] uppercase leading-[1.05] sm:leading-[0.98] lg:leading-[0.92]">
//               Before <br />
//               <span className="italic font-normal text-[#D9A08B]">You Build</span>
//             </h1>
//           </div>

//           <div className="lg:col-span-4 pb-0 sm:pb-2">
//             <p className="text-sm sm:text-base lg:text-lg tracking-wider sm:tracking-widest text-[#FFFFFF] uppercase leading-relaxed">
//               Plan Smarter &bull; Build Better &bull; Eliminate Costly Blindspots
//             </p>
//           </div>
//         </div>

//         {/* Immersive Image & Metadata Split */}
//         <div className="space-y-6">
//           <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px] overflow-hidden bg-[#242421]">
//             <img
//               src={bannerImage}
//               alt="Before You Build Seminar Banner"
//               className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
//             />
//             <div className="absolute inset-0 bg-[#1C1C1A]/20"></div>
//           </div>

//           {/* Architectural Spec Sheet Bar */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9A08B29] border border-[#D9A08B29]">
//             <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Date</span>
//               <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">Sat, 17 Oct 2026</span>
//             </div>
//             <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Time</span>
//               <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">3:30 – 4:30 PM</span>
//             </div>
//             <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Venue</span>
//               <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">Studio DNA Office</span>
//             </div>
//             <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Status</span>
//               <span className="text-base sm:text-lg font-normal tracking-wide text-[#D9A08B]">Limited Seating</span>
//             </div>
//           </div>
//         </div>

//         {/* Overview Manifesto */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 border-t border-[#2C2C29]">
//           <div className="lg:col-span-4">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#EFECE6] mt-2">Seminar <br /> <span className="text-[#D9A08B]">Overview</span></h2>
//           </div>
//           <div className="lg:col-span-8">
//             <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#EFECE6] leading-snug">
//               A practical seminar for homeowners, developers and future builders to understand the critical decisions that must be made before starting construction.
//             </p>
//           </div>
//         </div>

//         {/* Keynote Speakers List */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           {/* Card 1: Saad Andalib */}
//           <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
//             <div className="space-y-1 mt-2 sm:mt-4">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Design & Planning</span>
//               <h3 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Saad Andalib</h3>
//               <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Architect, MIAB</p>
//             </div>
//             <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">Studio DNA</span>
//           </div>

//           {/* Card 2: Md. Asaduzzaman */}
//           <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
//             <div className="space-y-1 mt-2 sm:mt-4">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Structural Design</span>
//               <h3 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Md. Asaduzzaman</h3>
//               <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Civil Engineer, MIEB</p>
//             </div>
//             <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">The Designers and Managers</span>
//           </div>

//           {/* Card 3: Mosharraf Hossain Sumon */}
//           <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
//             <div className="space-y-1 mt-2 sm:mt-4">
//               <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Construction & Retrofitting</span>
//               <h3 className="text-2xl sm:text-3xl font-normal text-[#EFECE6]">Mosharraf Hossain Sumon</h3>
//               <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Civil Engineer, MIEB</p>
//             </div>
//             <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">CEO, SR Development</span>
//           </div>
//         </div>

//         {/* Seminar Registration Form Section */}
//         <div className="bg-[#22221F] p-6 sm:p-10 lg:p-14 border border-[#2C2C29]">
//           <div className="mb-8 sm:mb-10 space-y-2 sm:space-y-3 border-b border-[#2C2C29] pb-6">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FFFFFF]">Interested in attending?</h3>
//             <p className="text-base sm:text-lg font-light text-[#FFFFFF]">
//               Fill out the registration form below to secure your seat with Studio DNA.
//             </p>
//           </div>

//           {submitted ? (
//             <div className="p-6 sm:p-10 bg-[#1C1C1A] border border-[#2C2C29] text-center space-y-4">
//               <h4 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Registration Received</h4>
//               <p className="text-base sm:text-lg font-light text-[#FFFFFF]">
//                 Thank you for registering. Studio DNA will contact you shortly.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">

//               {/* Error Message */}
//               {submitError && (
//                 <div className="p-4 bg-red-900/30 border border-red-800 text-red-200 rounded-md text-sm sm:text-base">
//                   {submitError}
//                 </div>
//               )}

//               {/* 1. Full Name (Required) */}
//               <div className="space-y-2 sm:space-y-3">
//                 <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
//                   What is your full name? <RequiredAsterisk />
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   required
//                   placeholder="e.g. John Doe"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                   className="w-full border-b border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] 
//                   placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 />
//               </div>

//               {/* 2. Email Address (Optional) */}
//               <div className="space-y-2 sm:space-y-3">
//                 <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
//                   What is your email address? <span className="text-xs sm:text-sm text-[#A3A19B]">(Optional)</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="name@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                   className="w-full border-b border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 />
//               </div>

//               {/* 3. Phone Number (Required - BD +880 only) */}
//               <div className="space-y-2 sm:space-y-3">
//                 <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
//                   What is your phone number? <RequiredAsterisk />
//                 </label>
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-[#D9A08B90] focus-within:border-[#D9A08B] transition-colors">
//                   <div className="flex items-center gap-3 px-4 sm:px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#D9A08B45] select-none text-base sm:text-lg font-normal text-[#FFFFFF]">
//                     {/* Bangladeshi Flag Icon */}
//                     <svg className="w-6 h-4 rounded-sm overflow-hidden shadow-sm flex-shrink-0" viewBox="0 0 20 12">
//                       <rect width="20" height="12" fill="#006A4E" />
//                       <circle cx="9" cy="6" r="3.5" fill="#F42A41" />
//                     </svg>
//                     <span>+880</span>
//                   </div>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     required
//                     pattern="[0-9]{10}"
//                     placeholder="1712345678"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     disabled={isSubmitting}
//                     className="w-full bg-transparent px-4 sm:px-5 py-4 sm:py-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//                   />
//                 </div>
//                 <p className="text-xs sm:text-sm text-[#A3A19B]">Enter 10-digit Bangladeshi mobile number (e.g. 1712345678).</p>
//               </div>

//               {/* 4. Hope to learn (Optional) */}
//               <div className="space-y-2 sm:space-y-3">
//                 <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
//                   What are you hoping to learn from the seminar? <span className="text-xs sm:text-sm text-[#A3A19B]">(Optional)</span>
//                 </label>
//                 <textarea
//                   name="learningGoals"
//                   rows={4}
//                   placeholder="Share your goals, challenges, or specific topics you'd like covered..."
//                   value={formData.learningGoals}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                   className="w-full bg-[#1C1C1A] border border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
//                 />
//               </div>

//               {/* 5. Planning Construction Project? (Required Yes/No) */}
//               <div className="space-y-3 sm:space-y-4">
//                 <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
//                   Are you currently planning a construction project? <RequiredAsterisk />
//                 </label>
//                 <div className="flex gap-8 sm:gap-10 pt-1">
//                   {["Yes", "No"].map((option) => (
//                     <label key={option} className="inline-flex items-center gap-3 cursor-pointer text-base sm:text-lg lg:text-xl font-normal text-[#FFFFFF]">
//                       <input
//                         type="radio"
//                         name="isPlanningProject"
//                         value={option}
//                         required
//                         checked={formData.isPlanningProject === option}
//                         onChange={handleChange}
//                         disabled={isSubmitting}
//                         className="accent-[#D9A08B] w-5 h-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//                       />
//                       <span>{option}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Submit Button with Expanding Circle Fill from Bottom */}
//               <div className="pt-4 sm:pt-6">
//                 <button
//                   type="submit"
//                   aria-label="Confirm Reservation"
//                   disabled={isSubmitting}
//                   className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-sm text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold border border-transparent group-hover:border-white bg-[#EFECE6] text-[#1C1C1A] transition-colors duration-500 focus:outline-none touch-manipulation active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {/* Expanding circle background layer originating from the bottom center */}
//                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-[#A84E32] scale-0 transition-transform duration-700 ease-out group-hover:scale-[6] z-0 pointer-events-none"></span>

//                   {/* Content wrapper */}
//                   <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-white">
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 size={18} className="animate-spin" />
//                         <span>Submitting...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>Confirm Reservation</span>
//                         <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                       </>
//                     )}
//                   </span>

//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }



































import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Loader2 } from "lucide-react";
import bannerImage from "../assets/exterior.jpg";
import Footer from "./Footer";

// Custom Required Asterisk Icon matching your requested design
const RequiredAsterisk = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="#D9A08B"
    className="inline-block ml-1 align-top"
  >
    <path d="M12 2C12.8284 2 13.5 2.67157 13.5 3.5V8.87868L17.298 5.08066C17.8838 4.49487 18.8335 4.49487 19.4193 5.08066C20.0051 5.66645 20.0051 6.6162 19.4193 7.20199L15.6213 11H20.5C21.3284 11 22 11.6716 22 12.5C22 13.3284 21.3284 14 20.5 14H15.6213L19.4193 17.798C20.0051 18.3838 20.0051 19.3335 19.4193 19.9193C18.8335 20.5051 17.8838 20.5051 17.298 19.9193L13.5 16.1213V21.5C13.5 22.3284 12.8284 23 12 23C11.1716 23 10.5 22.3284 10.5 21.5V16.1213L6.70199 19.9193C6.1162 20.5051 5.16645 20.5051 4.58066 19.9193C3.99487 19.3335 3.99487 18.3838 4.58066 17.798L8.37868 14H3.5C2.67157 14 2 13.3284 2 12.5C2 11.6716 2.67157 11 3.5 11H8.37868L4.58066 7.20199C3.99487 6.6162 3.99487 5.66645 4.58066 5.08066C5.16645 4.49487 6.1162 4.49487 6.70199 5.08066L10.5 8.87868V3.5C10.5 2.67157 11.1716 2 12 2Z" />
  </svg>
);

export default function EventRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    learningGoals: "",
    isPlanningProject: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Read webhook URL from environment variable
    const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK;

    if (!webhookUrl) {
      console.error("VITE_GOOGLE_SHEETS_WEBHOOK is not set in .env");
      setSubmitError("Registration service is not configured yet.");
      setIsSubmitting(false);
      return;
    }

    // Format the form data for your Google Sheet
    const sheetData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      learningGoals: formData.learningGoals.trim(),
      isPlanningProject: formData.isPlanningProject,
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(sheetData),
      });

      console.log("Form submitted to Google Sheet:", sheetData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("There was an error submitting your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#1c1c1c] text-[#EFECE6] min-h-screen selection:bg-[#D9A08B]/30 selection:text-[#FFF] overflow-x-hidden">
      <Helmet>
        <title>Before You Build | Seminar Registration - Studio DNA</title>
      </Helmet>

      {/* Main Editorial Canvas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-34 lg:pt-38 pb-20 sm:pb-28 lg:pb-32 space-y-16 sm:space-y-20 lg:space-y-24">

        {/* Hero Title & Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="text-sm sm:text-base lg:text-xl tracking-widest uppercase ml-1 sm:ml-2 text-[#D9A08B]">| Seminar On</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight text-[#FFFFFF] uppercase leading-[1.05] sm:leading-[0.98] lg:leading-[0.92]">
              Before <br />
              <span className="italic font-normal text-[#D9A08B]">You Build</span>
            </h1>
          </div>

          <div className="lg:col-span-4 pb-0 sm:pb-2">
            <p className="text-sm sm:text-base lg:text-lg tracking-wider sm:tracking-widest text-[#FFFFFF] uppercase leading-relaxed">
              Plan Smarter &bull; Build Better &bull; Eliminate Costly Blindspots
            </p>
          </div>
        </div>

        {/* Immersive Image & Metadata Split */}
        <div className="space-y-6">
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px] overflow-hidden bg-[#242421]">
            <img
              src={bannerImage}
              alt="Before You Build Seminar Banner"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-[#1C1C1A]/20"></div>
          </div>

          {/* Architectural Spec Sheet Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9A08B29] border border-[#D9A08B29]">
            <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Date</span>
              <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">Sat, 17 Oct 2026</span>
            </div>
            <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Time</span>
              <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">3:30 – 4:30 PM</span>
            </div>
            <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Venue</span>
              <span className="text-base sm:text-lg font-normal tracking-wide text-[#FFFFFF]">Studio DNA Office</span>
            </div>
            <div className="bg-[#1C1C1A] p-6 sm:p-8 space-y-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase block">Status</span>
              <span className="text-base sm:text-lg font-normal tracking-wide text-[#D9A08B]">Limited Seating</span>
            </div>
          </div>
        </div>

        {/* Overview Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 border-t border-[#2C2C29]">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#EFECE6] mt-2">Seminar <br /> <span className="text-[#D9A08B]">Overview</span></h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#EFECE6] leading-snug">
              A practical seminar for homeowners, developers and future builders to understand the critical decisions that must be made before starting construction.
            </p>
          </div>
        </div>

        {/* Keynote Speakers List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Saad Andalib */}
          <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
            <div className="space-y-1 mt-2 sm:mt-4">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Design & Planning</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Saad Andalib</h3>
              <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Architect, MIAB</p>
            </div>
            <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">Studio DNA</span>
          </div>

          {/* Card 2: Md. Asaduzzaman */}
          <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
            <div className="space-y-1 mt-2 sm:mt-4">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Structural Design</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Md. Asaduzzaman</h3>
              <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Civil Engineer, MIEB</p>
            </div>
            <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">The Designers and Managers</span>
          </div>

          {/* Card 3: Mosharraf Hossain Sumon */}
          <div className="bg-[#22221F] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 flex flex-col justify-between space-y-4 border-t-2 border-[#D9A08B]">
            <div className="space-y-1 mt-2 sm:mt-4">
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#FFFFFF] uppercase">Construction & Retrofitting</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#EFECE6]">Mosharraf Hossain Sumon</h3>
              <p className="text-xs sm:text-sm tracking-widest text-[#D9A08B] uppercase">Civil Engineer, MIEB</p>
            </div>
            <span className="text-xs sm:text-sm tracking-widest text-[#EFECE6] uppercase pt-2">CEO, SR Development</span>
          </div>
        </div>

        {/* Seminar Registration Form Section */}
        <div className="bg-[#22221F] p-6 sm:p-10 lg:p-14 border border-[#2C2C29]">
          <div className="mb-8 sm:mb-10 space-y-2 sm:space-y-3 border-b border-[#2C2C29] pb-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FFFFFF]">Interested in attending?</h3>
            <p className="text-base sm:text-lg font-light text-[#FFFFFF]">
              Fill out the registration form below to secure your seat with Studio DNA.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 sm:p-10 bg-[#1C1C1A] border border-[#2C2C29] text-center space-y-4">
              <h4 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF]">Registration Received</h4>
              <p className="text-base sm:text-lg font-light text-[#FFFFFF]">
                Thank you for registering. Studio DNA will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">

              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-900/30 border border-red-800 text-red-200 rounded-md text-sm sm:text-base">
                  {submitError}
                </div>
              )}

              {/* 1. Full Name (Required) */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
                  What is your full name? <RequiredAsterisk />
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full border-b border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] 
                  placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* 2. Email Address (Optional) */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
                  What is your email address? <span className="text-xs sm:text-sm text-[#A3A19B]">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full border-b border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* 3. Phone Number (Required - BD +880 only) */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
                  What is your phone number? <RequiredAsterisk />
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-[#D9A08B90] focus-within:border-[#D9A08B] transition-colors">
                  <div className="flex items-center gap-3 px-4 sm:px-5 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#D9A08B45] select-none text-base sm:text-lg font-normal text-[#FFFFFF]">
                    {/* Bangladeshi Flag Icon */}
                    <svg className="w-6 h-4 rounded-sm overflow-hidden shadow-sm flex-shrink-0" viewBox="0 0 20 12">
                      <rect width="20" height="12" fill="#006A4E" />
                      <circle cx="9" cy="6" r="3.5" fill="#F42A41" />
                    </svg>
                    <span>+880</span>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    pattern="[0-9]{10}"
                    placeholder="1712345678"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-transparent px-4 sm:px-5 py-4 sm:py-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <p className="text-xs sm:text-sm text-[#A3A19B]">Enter 10-digit Bangladeshi mobile number (e.g. 1712345678).</p>
              </div>

              {/* 4. Hope to learn (Optional) */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
                  What are you hoping to learn from the seminar? <span className="text-xs sm:text-sm text-[#A3A19B]">(Optional)</span>
                </label>
                <textarea
                  name="learningGoals"
                  rows={4}
                  placeholder="Share your goals, challenges, or specific topics you'd like covered..."
                  value={formData.learningGoals}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#1C1C1A] border border-[#D9A08B90] p-4 sm:p-5 text-base sm:text-lg text-[#FFFFFF] placeholder:text-[#A3A19B] focus:outline-none focus:border-[#D9A08B] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* 5. Planning Construction Project? (Required Yes/No) */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-[#FFFFFF]">
                  Are you currently planning a construction project? <RequiredAsterisk />
                </label>
                <div className="flex gap-8 sm:gap-10 pt-1">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="inline-flex items-center gap-3 cursor-pointer text-base sm:text-lg lg:text-xl font-normal text-[#FFFFFF]">
                      <input
                        type="radio"
                        name="isPlanningProject"
                        value={option}
                        required
                        checked={formData.isPlanningProject === option}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="accent-[#D9A08B] w-5 h-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button with Expanding Circle Fill from Bottom */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  aria-label="Confirm Reservation"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-sm text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold border border-transparent group-hover:border-white bg-[#EFECE6] text-[#1C1C1A] transition-colors duration-500 focus:outline-none touch-manipulation active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Expanding circle background layer originating from the bottom center */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-[#A84E32] scale-0 transition-transform duration-700 ease-out group-hover:scale-[6] z-0 pointer-events-none"></span>

                  {/* Content wrapper */}
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-white">
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Reservation</span>
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </span>

                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
// import AlibabaMainDay from "../assets/pavillion_top_right.png";
// import AlibabaMainNight from "../assets/pavillion_20.png";
// import AlibabaModel3D from "../assets/pavillion_top_left.png";
// import AlibabaStructure from "../assets/pavillion_btm_r.jpg";
// import AwardIcon from "../assets/award.png";
// import PaperIcon from "../assets/paper.png";

// const alibabaPavilion = {
//   id: "ext-pavilion-1",
//   title: "PROPOSED ALI BABA DOOR & FURNITURE PAVILLION",
//   location: "SHER-E- BANGLA NAGAR, DHAKA.",
//   area: "50FT X 50FT",
//   timeline: "A PROJECT OF OUTLINE ARCHITECTS, DITF 2017",
//   images: [AlibabaMainDay, AlibabaMainNight, AlibabaModel3D, AlibabaStructure],
// };

// function Exhibition() {
//   const ImageTintWrapper = ({ src, alt }) => (
//     <div className="relative w-full h-full overflow-hidden group/img cursor-pointer rounded-[1px] transition-all duration-500 ease-out">
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover/img:scale-[1.03]"
//       />
//       <div className="absolute inset-0 duration-500 pointer-events-none" />
//     </div>
//   );

//   return (
//     <section
//       id="exhibitions"
//       className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-36 bg-[#f4f4f2] z-10 block clear-both"
//     >
//       {/* ================= HEADING ================= */}
//       <div className="text-center space-y-2 max-w-xl mx-auto mb-20 -mt-20">
//         <p className="text-[10px] font-sans tracking-[0.45em] text-[#4f5d39] font-bold uppercase">
//           Exhibitions & Spatial Structures
//         </p>
//         <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-[#4f5d39] ">
//           Featured Exhibition Framework
//         </h3>
//         <div className=""></div>
//       </div>

//       {/* ================= EXHIBITION CARD ================= */}
//       <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start group/card pt-2 pb-14">
//         {/* Text Side (Left Side) */}
//         <div className="w-full lg:w-[42%] lg:sticky lg:top-16 flex flex-col text-left space-y-6">
//           {/* ================= ACCOLADES CONTAINER ================= */}
//           <div className="relative pt-4 max-w-[420px]">
//             {/* Award Badge */}
//             <div className="absolute -top-25 -left-12 z-20">
//               <img
//                 src={AwardIcon}
//                 alt="Award"
//                 className="w-100 h-100 object-contain opacity-80 group-hover/card:opacity-100 transition-opacity duration-300"
//               />

//               <div className="absolute top-105 left-26 whitespace-nowrap">
//                 <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-neutral-400 uppercase block">
//                   Recognition
//                 </span>

//                 <p className="text-xs font-serif italic text-neutral-700">
//                   Award Winning Pavilion Design
//                 </p>
//               </div>
//             </div>

//             {/* Information Card */}
//             <div className="bg-[#4f5d39]  border border-orange-500/20 rounded-[2px] p-4 space-y-4 max-w-[346px] mt-100">
//               <h4 className="text-xl md:text-xl font-serif font-light text-white tracking-wide leading-snug transition-colors duration-300 border-b border-orange-500/10 pb-3">
//                 {alibabaPavilion.title}
//               </h4>

//               <div className="space-y-2.5 font-sans text-[11px] md:text-xs text-white tracking-wide font-light">
//                 <p className="flex flex-col sm:flex-row sm:gap-4">
//                   <span className="font-bold text-white min-w-[70px] uppercase text-[10px] tracking-wider">
//                     Location
//                   </span>

//                   <span className="text-white -mt-1 font-medium">
//                     {alibabaPavilion.location}
//                   </span>
//                 </p>

//                 <p className="flex flex-col sm:flex-row sm:gap-4">
//                   <span className="font-bold text-white min-w-[70px] uppercase text-[10px] tracking-wider">
//                     Area
//                   </span>

//                   <span className="text-white -mt-1 font-medium">
//                     {alibabaPavilion.area}
//                   </span>
//                 </p>

//                 <div className="h-[1px] bg-orange-500/10 my-1 w-full" />

//                 <p className="text-white text-[10px] uppercase tracking-[0.12em] font-semibold pt-1">
//                   {" "}
//                   A PROJECT OF{" "}
//                   <span className="text-[#ff7b00] font-bold">
//                     OUTLINE ARCHITECTS
//                   </span>
//                   , DITF 2017
//                   {/* {alibabaPavilion.timeline} */}
//                 </p>
//               </div>
//             </div>

//             {/* Paper Illustration */}
//             <img
//               src={PaperIcon}
//               alt="Publication"
//               className="absolute -right-35 -top-14 w-48 h-auto object-contain opacity-80 group-hover/card:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         </div>

//         {/* 4-Grid Images Side (Right Side) */}
//         <div className="w-full lg:w-[45%] flex justify-center mt-20">
//           <div className="grid grid-cols-2 gap-3">
//             <div className="w-[355px] h-[230px] -mt-4 -ml-10">
//               <ImageTintWrapper
//                 src={alibabaPavilion.images[2]}
//                 alt="3D Model Render"
//               />
//             </div>

//             <div className="w-[405px] h-[300px] ml-0 -mt-12">
//               <ImageTintWrapper
//                 src={alibabaPavilion.images[0]}
//                 alt="Built Pavilion Day"
//               />
//             </div>

//             <div className="w-[400px] h-[280px] -ml-5">
//               <ImageTintWrapper
//                 src={alibabaPavilion.images[3]}
//                 alt="Structural Framework"
//               />
//             </div>

//             <div className="w-[320px] h-[250px] ml-19 mt-12">
//               <ImageTintWrapper
//                 src={alibabaPavilion.images[1]}
//                 alt="Built Pavilion Night"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Exhibition;









// import AlibabaMainDay from "../assets/pavillion_top_right.png";
// import AlibabaMainNight from "../assets/pavillion_20.png";
// import AlibabaModel3D from "../assets/pavillion_top_left.png";
// import AlibabaStructure from "../assets/pavillion_btm_r.jpg";

// const alibabaPavilion = {
//   id: "ext-pavilion-1",
//   title: "PROPOSED ALI BABA DOOR & FURNITURE PAVILLION",
//   caseNumber: "CASE STUDY 03",
//   location: "SHER-E- BANGLA NAGAR, DHAKA.",
//   area: "50FT X 50FT",
//   architects: "OUTLINE ARCHITECTS",
// };

// function Exhibition() {
//   return (
//     <section
//       id="exhibitions"
//       className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20 bg-neutral-100 text-[#4d593c] select-none"
//     >
//       {/* Header Section */}
//       <div className="text-center space-y-2 max-w-xl mx-auto mb-16">
//         <p className="text-[10px] font-sans tracking-[0.45em] text-[#4f5d39] font-bold uppercase">
//           Exhibitions & Spatial Structures
//         </p>
//         <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-[#4f5d39]">
//           Featured Exhibition Framework
//         </h3>
//       </div>

//       <div className="w-full flex flex-col gap-16">
//         {/* ================= NOW TOP SECTION: INFORMATION & SPECS ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#4d593c]/10">
//          <div className="lg:col-span-5 bg-white p-6 shadow-xl border border-neutral-100/40 rounded-[1px] flex flex-col justify-between min-h-[500px]">
//             <div>
//               <h4 className="text-xl font-serif italic font-bold text-[#4d593c] mb-1">
//                 বাণিজ্য মেলায় পুরস্কার পেল ৪৬ প্রতিষ্ঠান
//               </h4>
//               <div className="w-full h-[1px] bg-[#4d593c]/20 mb-4" />

//               <p className="text-[13px] font-serif italic text-neutral-600/95 leading-relaxed font-light max-h-[220px] pr-1">
//                 "ঢাকা আন্তর্জাতিক বাণিজ্য মেলায় এবার বিভিন্ন ক্ষেত্রে
//                 শ্রেষ্ঠত্বের জন্য পুরস্কার পেয়েছে ৪৬ প্রতিষ্ঠান। গতকাল শনিবার
//                 মেলার মাঠে সমাপনী অনুষ্ঠানে বিজয়ীদের হাতে পুরস্কার তুলে দেন
//                 জনপ্রশাসনমন্ত্রী সৈয়দ আশরাফুল ইসলাম। প্রিমিয়ার প্যাভিলিয়নে
//                 প্রথম হয়েছে ওয়ালটন হাইটেক। দ্বিতীয় হয়েছে আকতার, হাতিল
//                 ফার্নিচার ও আকিজ ফুড। তৃতীয় হয়েছে নাদিয়া ফার্নিচার, অলিম্পিক
//                 ও কোকোলা ফুড। সাধারণ প্যাভিলিয়নে প্রথম কারুপণ্য রংপুর, দ্বিতীয়
//                 আলী বাবা ডোর ও তৃতীয় মৌসুমি ইন্ডাস্ট্রিজ: সাধারণ সংরক্ষিত
//                 প্যাভিলিয়নে প্রথম জয়িতা ফাউন্ডেশন, দ্বিতীয় বাংলাদেশ দ্বিতীয়
//                 বনশিল্প উন্নয়ন করপোরেশন ও তৃতীয় পাট বহুমুখীকরণ উন্নয়ন
//                 কেন্দ্র। প্রিমিয়ার মিনি প্যাভিলিয়নে প্রথম রহিমআফরোজ, আবদুল
//                 মোনেম ও তৃতীয় গোল্ডেন হার্ভেস্ট আইসক্রিম ও বিআরবি কেবলস। সাধারণ
//                 মিনি প্যাভিলিয়নে প্রথম রংপুর মেটাল ইন্ডাস্ট্রিজ, দ্বিতীয় আহমেদ
//                 ফুড, তৃতীয় আফতাব বহুমুখী ফামর্স। সংরক্ষিত মিনি প্যাভিলিয়নে
//                 প্রথম ডাচ-বাংলা ব্যাংক, দ্বিতীয় বাংলাদেশ ট্যুরিজম বোর্ড ও
//                 সোনালী ব্যাংক, তৃতীয় মিল্ক ভিটা ও ক্ষুদ্র ও মাঝারি শিল্প
//                 ফাউন্ডেশন: প্রিমিয়ার স্টলে প্রথম রানা টেক্সটাইল, দ্বিতীয় প্রাণ
//                 ফুড ও সিঙ্গার বাংলাদেশ, তৃতীয় হেলাল অ্যান্ড ব্রাদার্স ও রূপকথা
//                 বিডি: ফুড স্টলে প্রথম নোয়া ফুড প্রোডাক্টস: সাধারণ স্টলে প্রথম
//                 অলওয়েল MARKETING, দ্বিতীয় স্মার্ট সক্স ও কাশ্মীরি ফুড
//                 প্রোডাক্টস, তৃতীয় কুষ্টিয়া হস্তশিল্প ও তিশা জামদানি উইভিং
//                 ফ্যাক্টরি: নারী উদ্যোক্তায় প্রথম হয়েছে মণিপুরি তাঁত
//                 এম্পোরিয়াম।"
//               </p>
//             </div>

//             <div className="flex justify-end mt-4">
//               <span className="text-[9px] font-sans font-bold tracking-[0.15em] text-[#e06d06] uppercase">
//                 প্রকাশিত: জুন ২০১৭
//               </span>
//             </div>
//           </div>

//           {/* Top-Row Left: Award & Recognition Information */}
//           <div className="lg:col-span-3 flex flex-col space-y-6 ml-5">
//             <div className="space-y-2 ">
//               <span className="block text-[10px] font-sans font-bold tracking-[0.2em] text-[#e06d06] uppercase">
//                 RECOGNITION
//               </span>
//               <h3 className="text-2xl font-serif font-bold text-[#4d593c] leading-tight">
//                 2nd Prize Winner <br /> General Pavilion
//               </h3>

//             </div>
//             <img
//               className="w-32 h-auto"
//               src="/src/assets/award.png"
//               alt="Award Trophy"
//             />
//              <p className="text-[13px] font-sans text-neutral-500 font-light leading-relaxed pt-1">
//                 Honored for excellence in spatial design and material innovation
//                 at DITF 2017.
//               </p>
//           </div>

//          {/* Top-Row Mid: Forest Green Specifications Card */}
//           <div className="lg:col-span-4 flex justify-center">
//             <div className="relative bg-[#4f5d39] p-6 mt-30 text-white shadow-md rounded-[1px] w-full max-w-[400px]">
//               <h3 className="text-[20px] md:text-[22px] font-serif tracking-wide leading-snug font-bold text-white uppercase mb-2">
//                 {alibabaPavilion.title}
//               </h3>

//               <div className="w-full h-[0.5px] bg-white/20 mb-4" />

//               <div className="space-y-4 font-sans text-xs tracking-wider">
//                 {/* Location Row */}
//                 <div className="flex items-start">
//                   <span className="w-[100px] font-bold text-[11px] text-white shrink-0 pt-0.5">
//                     LOCATION
//                   </span>
//                   <span className="text-white font-medium text-[12px] uppercase leading-tight">
//                     {alibabaPavilion.location}
//                   </span>
//                 </div>

//                 {/* Area Row */}
//                 <div className="flex items-center">
//                   <span className="w-[100px] font-bold text-[11px] text-white shrink-0">
//                     AREA
//                   </span>
//                   <span className="text-white font-medium text-[12px] uppercase">
//                     {alibabaPavilion.area}
//                   </span>
//                 </div>
//               </div>

//               <div className="w-full h-[0.5px] bg-white/20 my-4" />

//               <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-white">
//                 A PROJECT OF{" "}
//                 <span className="text-[#ff7b00] font-black">
//                   {alibabaPavilion.architects}
//                 </span>
//                 , DITF 2017
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* ================= NOW BOTTOM SECTION: VISUALS GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 -ml-5">
//           {/* Bottom Left & Middle Container (Relative for absolute arrow tracking) */}
//           <div className="lg:col-span-7 flex flex-row items-center gap-6 relative -mt-25">
//             {/* 1st Square-ish 3D Render block */}
//             <div className="w-1/2 max-w-[380px]">
//               <img
//                 src={AlibabaMainNight}
//                 alt="3D Model Block"
//                 className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
//               />
//             </div>

//             {/* --- TOP ARROW (From 1st Image to 2nd Image) --- */}
//             <div className="absolute -top-12 left-[38%] w-24 h-16 pointer-events-none hidden md:block z-20">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 className="w-full h-full stroke-[#e06d06] stroke-[4]"
//               >
//                 <path d="M10,45 Q45,-15 85,35" strokeLinecap="round" />
//                 <path
//                   d="M72,32 L85,35 L84,20"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             {/* <div className="absolute  right-75 -top-10 w-24 h-24 pointer-events-none hidden lg:block z-20 rotate-65">
//               <svg
//                 viewBox="0 0 100 100"
//                 fill="none"
//                 className="w-full h-full stroke-[#e06d06] stroke-[4]"
//               >
//                 <path
//                   d="M 20,82 C 32,66 68,48 74,62 C 80,76 56,84 46,58 C 36,32 62,22 80,21"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M 68,14 L 84,15 L 79,31 Z"
//                   fill="#e06d06"
//                   stroke="none"
//                 />
//               </svg>
//             </div> */}

//             {/* 2nd Structural Block */}
//             <div className="w-1/2 max-w-[380px]">
//               <img
//                 src={AlibabaModel3D}
//                 alt="Structural Block Night View"
//                 className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
//               />
//             </div>

//             {/* --- BOTTOM ARROW (From 2nd Image looping to Wide Banner Card) --- */}
//             {/* <div className="absolute -bottom-10 -right-8 w-28 h-20 pointer-events-none hidden lg:block z-20">
//               <svg viewBox="0 0 120 70" fill="none" className="w-full h-full stroke-[#e06d06] stroke-[3]">
//                 <path d="M10,25 Q35,65 75,55 Q105,45 110,15" strokeLinecap="round" />
//                 <path d="M98,22 L110,15 L114,27" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div> */}

//             <div className="absolute -bottom-10 -right-5 w-24 h-24 pointer-events-none hidden lg:block z-20 rotate-5">
//               <svg
//                 viewBox="0 0 100 100"
//                 fill="none"
//                 className="w-full h-full stroke-[#e06d06] stroke-[4]"
//               >
//                 {/* The loop-de-loop arrow body */}
//                 <path
//                   d="M 20,82 C 32,66 68,48 74,62 C 80,76 56,84 46,58 C 36,32 62,22 80,21"
//                   strokeLinecap="round"
//                 />
//                 {/* The filled arrowhead */}
//                 <path
//                   d="M 68,14 L 84,15 L 79,31 Z"
//                   fill="#e06d06"
//                   stroke="none"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Bottom Right: Wide Banner Card */}
//           <div className="lg:col-span-5 relative shadow-gray-400 shadow-2xl h-[360px] w-full max-w-[550px] mx-auto lg:mx-0 -mt-10 mb-20">
//             <div className="relative w-full h-full overflow-hidden group">
//               <img
//                 src={AlibabaMainDay}
//                 alt="Exterior View"
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
//               />
//               <div className="absolute inset-0 bg-gray-900/10 transition-opacity duration-500 group-hover:opacity-0" />
//             </div>

//             <div className="absolute bottom-6 left-6 bg-white py-3 px-5 flex items-center border-l-[3.5px] border-[#e06d06] shadow-sm">
//               <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-neutral-800 uppercase">
//                 EXTERIOR VIEW
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Exhibition;





























import React from "react";
import AlibabaMainDay from "../assets/pavillion_top_right.png";
import AlibabaMainNight from "../assets/pavillion_20.png";
import AlibabaModel3D from "../assets/pavillion_top_left.png";
import AlibabaStructure from "../assets/pavillion_btm_r.jpg";

const alibabaPavilion = {
  id: "ext-pavilion-1",
  title: "PROPOSED ALI BABA DOOR & FURNITURE PAVILLION",
  location: "SHER-E- BANGLA NAGAR, DHAKA.",
  area: "50FT X 50FT",
  architects: "OUTLINE ARCHITECTS",
};
//f7f7f7 e0ccad
function Exhibition() {
  return (
    <section
      id="exhibitions" 
      className="relative z-10 w-full max-w-7xl mx-auto px-8 mb-20 py-16 bg-[#f7f7f7] text-[#333a26] select-none font-serif"
    >
      {/* Newspaper Masthead Meta Info */}
      <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#4f5d39]/70 pb-3 border-b-2 border-[#4d593c]/20">
        <span>Vol. III // No. II</span>
        <span className="hidden md:inline">Dhaka, Bangladesh</span>
        <span>July 2017</span>
      </div>

      {/* Main Newspaper Header */}
      <div className="text-center py-10 border-b-4 border-double border-[#4d593c]/20 mb-12">
        <p className="text-[11px] font-sans tracking-[0.5em] text-[#e06d06] font-extrabold uppercase mb-3">
          Exhibitions & Spatial Structures
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#4d593c] uppercase font-serif">
          The Architectural Review
        </h1>
        <p className="text-sm italic text-neutral-600 mt-2 font-serif font-light tracking-wide">
          Featured Exhibition Framework & Spatial Innovations
        </p>
      </div>

      {/* ================= NEWSPAPER FRONT PAGE GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: The Bengali Press Clipping Card (Col Span 5) */}
        <div className="lg:col-span-5 bg-white p-6 border border-neutral-300 shadow-sm flex flex-col justify-between min-h-[580px]">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[10px] font-sans font-bold tracking-wider text-neutral-400 uppercase">
                Archival Clipping
              </span>
              <span className="text-[11px] text-[#e06d06] font-bold">
                DITF '17
              </span>
            </div>

            <h2 className="text-2xl md:text-2xl ita font-bold text-[#4d593c] leading-tight mb-4 font-serif">
              বাণিজ্য মেলায় পুরস্কার পেল ৪৬ প্রতিষ্ঠান
            </h2>

            {/* Real Newspaper-style multi-column body text split */}
            <div className="w-full h-[1px] bg-neutral-200 mb-4" />
            <p className="text-[13px] text-neutral-700 leading-relaxed text-justify font-serif font-light md:columns-2 gap-4 [column-rule:1px_solid_#e5e5e5]">
              "ঢাকা আন্তর্জাতিক বাণিজ্য মেলায় এবার বিভিন্ন ক্ষেত্রে
              শ্রেষ্ঠত্বের জন্য পুরস্কার পেয়েছে ৪৬ প্রতিষ্ঠান। গতকাল শনিবার
              মেলার মাঠে সমাপনী অনুষ্ঠানে বিজয়ীদের হাতে পুরস্কার তুলে দেন
              জনপ্রশাসনমন্ত্রী সৈয়দ আশরাফুল ইসলাম। প্রিমিয়ার প্যাভিলিয়নে
              প্রথম হয়েছে ওয়ালটন হাইটেক। দ্বিতীয় হয়েছে আকতার, হাতিল
              ফার্নিচার ও আকিজ ফুড। তৃতীয় হয়েছে নাদিয়া ফার্নিচার, অলিম্পিক ও
              কোকোলা ফুড। সাধারণ প্যাভিলিয়নে প্রথম কারুপণ্য রংপুর, দ্বিতীয় আলী
              বাবা ডোর ও তৃতীয় মৌসুমি ইন্ডাস্ট্রিজ: সাধারণ সংরক্ষিত
              প্যাভিলিয়নে প্রথম জয়িতা ফাউন্ডেশন, দ্বিতীয় বাংলাদেশ দ্বিতীয়
              বনশিল্প উন্নয়ন করপোরেশন ও তৃতীয় পাট বহুমুখীকরণ উন্নয়ন কেন্দ্র।
              প্রিমিয়ার মিনি প্যাভিলিয়নে প্রথম রহিমআফরোজ, আবদুল মোনেম ও তৃতীয়
              গোল্ডেন হার্ভেস্ট আইসক্রিম ও বিআরবি কেবলস। সাধারণ মিনি
              প্যাভিলিয়নে প্রথম রংপুর মেটাল ইন্ডাস্ট্রিজ, দ্বিতীয় আহমেদ ফুড,
              তৃতীয় আফতাব বহুমুখী ফামর্স। সংরক্ষিত মিনি প্যাভিলিয়নে প্রথম
              ডাচ-বাংলা ব্যাংক, দ্বিতীয় বাংলাদেশ ট্যুরিজম বোর্ড ও সোনালী
              ব্যাংক, তৃতীয় মিল্ক ভিটা ও ক্ষুদ্র ও মাঝারি শিল্প ফাউন্ডেশন:
              প্রিমিয়ার স্টলে প্রথম রানা টেক্সটাইল, দ্বিতীয় প্রাণ ফুড ও
              সিঙ্গার বাংলাদেশ, তৃতীয় হেলাল অ্যান্ড ব্রাদার্স ও রূপকথা বিডি:
              ফুড স্টলে প্রথম নোয়া ফুড প্রোডাক্টস: সাধারণ স্টলে প্রথম অলওয়েল
              MARKETING, দ্বিতীয় স্মার্ট সক্স ও কাশ্মীরি ফুড প্রোডাক্টস, তৃতীয়
              কুষ্টিয়া হস্তশিল্প ও তিশা জামদানি উইভিং ফ্যাক্টরি: নারী
              উদ্যোক্তায় প্রথম হয়েছে মণিপুরি তাঁত এম্পোরিয়াম।"
            </p>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-100">
            <span className="text-[10px] text-neutral-400 font-sans">
              Clipping No. 46
            </span>
            <span className="text-[10px] font-sans font-bold tracking-[0.15em] text-[#e06d06] uppercase">
              প্রকাশিত: জুন ২০১৭
            </span>
          </div>
        </div>

        {/* MIDDLE COLUMN: Trophy & Recognition Details (Col Span 3) */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6 lg:border-r lg:border-l lg:border-neutral-200 lg:px-6 min-h-[580px]">
          <div className="space-y-2 w-full">
            <span className="block text-[10px] font-sans font-bold tracking-[0.2em] text-[#e06d06] uppercase">
              RECOGNITION
            </span>
            <h3 className="text-2xl font-bold text-[#4d593c] leading-tight font-serif uppercase tracking-tight">
              2nd Prize Winner <br /> General Pavilion
            </h3>
          </div>

          <div className="w-full flex justify-center py-4 bg-neutral-50 border border-neutral-200/60 p-4">
            <img
              className="w-28 h-auto mix-blend-multiply filter contrast-105"
              src="/src/assets/award.png"
              alt="Award Trophy"
            />
          </div>

          <p className="text-[13px] text-neutral-600 font-serif leading-relaxed italic text-center lg:text-left pt-2">
            "Honored for stellar execution, material innovation, and excellence
            in spatial craftsmanship at the Dhaka International Trade Fair."
          </p>
        </div>

        {/* RIGHT COLUMN: Technical Specs Broadside Card (Col Span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between min-h-[580px] -mt-10 w-full">
          {/* Broadside Project Card */}
          <div className="bg-[#4f5d39] mt-44 p-6 text-white border border-[#3c472b] relative">
            <span className="absolute right-4 text-[9px] font-sans tracking-widest text-white/50 font-bold">
              {alibabaPavilion.caseNumber}
            </span>

            <h3 className="text-lg font-bold tracking-wide leading-snug uppercase mb-4 pr-12">
              {alibabaPavilion.title}
            </h3>

            <div className="w-full h-[1px] bg-white/20 mb-5" />

            <div className="space-y-4 font-sans text-[11px] tracking-wider">
              <div className="flex items-start">
                <span className="w-[90px] font-black text-white/60 shrink-0">
                  LOCATION:
                </span>
                <span className="text-white font-medium uppercase">
                  {alibabaPavilion.location}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[90px] font-black text-white/60 shrink-0">
                  SITE AREA:
                </span>
                <span className="text-white font-medium uppercase">
                  {alibabaPavilion.area}
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/20 my-5" />

            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-white/90">
              DESIGNED BY:{" "}
              <span className="text-[#ff9029] font-black tracking-normal">
                {alibabaPavilion.architects}
              </span>
            </p>
          </div>

          {/* Tiny bottom Editorial Note to ground the 3-column height nicely */}
          <div className="hidden lg:block border-t-2 border-neutral-200 pt-4 mt-auto">
            <p className="text-[11px] uppercase tracking-wider font-sans font-bold text-neutral-400">
              Document Reference
            </p>
            <p className="text-xs text-neutral-500 italic mt-1 font-serif">
              All structural details blueprints, and archival materials remain
              intellectual properties of the respective studio.
            </p>
          </div>
        </div>
      </div>

      {/* ================= NEWSPAPER LOWER FOLD: VISUALS GRID ================= */}
      <div className="border-t  border-[#4d593c]/5 mt-16 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Dual Renders Sub-Grid */}
          <div className="lg:col-span-7 flex flex-row items-center gap-6 relative">
            {/* Render 1 */}
            <div className="w-1/2 border border-neutral-300 p-2 bg-white shadow-sm">
              <img
                src={AlibabaMainNight}
                alt="3D Model Block"
                className="w-full h-auto object-contain filter "
              />
              <span className="block text-center text-[9px] font-sans uppercase tracking-widest text-neutral-400 mt-2">
                Fig 03.1 — Isometric Frame
              </span>
            </div>

            {/* Print Dynamic Indicator Arrow */}
            <div className="absolute -top-10 left-[42%] w-20 h-12 pointer-events-none hidden md:block z-20">
              <svg
                viewBox="0 0 100 60"
                fill="none"
                className="w-full h-full stroke-[#e06d06] stroke-[3]"
              >
                <path d="M10,45 Q45,-15 85,35" strokeLinecap="round" />
                <path
                  d="M72,32 L85,35 L84,20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Render 2 */}
            <div className="w-1/2 border border-neutral-300 p-2 bg-white shadow-sm">
              <img
                src={AlibabaModel3D}
                alt="Structural Block Night View"
                className="w-full h-auto object-contain filter "
              />
              <span className="block text-center text-[9px] font-sans uppercase tracking-widest text-neutral-400 mt-2">
                Fig 03.2 — Spatial Study
              </span>
            </div>

            <div className="absolute -bottom-10 -right-12 w-24 h-24 pointer-events-none hidden lg:block z-20 rotate-5">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-full h-full stroke-[#e06d06] stroke-[3]"
              >
                {/* The loop-de-loop arrow body */}
                <path
                  d="M 20,82 C 32,66 68,48 74,62 C 80,76 56,84 46,58 C 36,32 62,22 80,21"
                  strokeLinecap="round"
                />
                {/* The filled arrowhead */}
                <path
                  d="M68,14 L78,20 L68,30"
                  fill="none"
                  stroke="#e06d06"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Main Visual Feature Plate */}
          <div className="lg:col-span-5 w-full">
            <div className="border border-neutral-300 p-2 bg-white shadow-sm w-full">
              <div className="relative h-[280px] w-full overflow-hidden">
                <img
                  src={AlibabaMainDay}
                  alt="Exterior View"
                  className="w-full h-full object-cover filter sepia-[10%] brightness-95"
                />
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <span className="text-[10px] font-sans font-extrabold tracking-[0.15em] text-neutral-800 uppercase">
                  PLATE 03 / EXTERIOR CHRONICLE
                </span>
                <span className="text-[10px] italic text-neutral-400 font-serif">
                  DITF General Enclosure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exhibition;

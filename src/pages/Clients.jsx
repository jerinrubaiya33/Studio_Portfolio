// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const clients = [
//   "Bashanta Bilash",
//   "Shirin Villa",
//   "Simin Residence",
//   "Sushi Samurai",
//   "The Pavillion",
//   "Green Kindergarten",
//   "City Hospital",
//   "Resort Developments",
// ];

// const Clients = () => {
//   return (
//     <section className="relative w-full bg-[#2E3133] font-mono border-t border-gray-200 py-12 sm:py-16 lg:py-24 overflow-hidden">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6">
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center text-center gap-2 mb-8 sm:mb-12"
//         >
//           <div className="w-8 h-0.5 rounded-full bg-[#E7E3DB]" />
//           <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#E7E3DB]">
//             Our Clients
//           </span>
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono uppercase tracking-tight text-gray-900 leading-snug">
//             The people
//             <br className="hidden sm:block" /> we build for
//           </h2>
//         </motion.div>

//         {/* Client Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeUp}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-200"
//         >
//           {clients.map((name) => (
//             <div
//               key={name}
//               className="group flex h-20 sm:h-24 items-center justify-center border-b border-r border-gray-200 px-3 py-4"
//             >
//               <span className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-[#A84E32]">
//                 {name}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Clients;










import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
  { name: "Bashanta Bilash", to: "/projects/bashanta-bilash", bg: "#373737", text: "text-white" },
  { name: "Shirin Villa", to: "/projects/shirin-villa", bg: "#464646", text: "text-white" },
  { name: "Simin Residence", to: "/projects/simin-complex", bg: "#373737", text: "text-white" },
  { name: "Sushi Samurai", to: "/projects/sushi-samurai", bg: "#464646", text: "text-white" },
  { name: "Kindergarten Madrassa", to: "/projects/kindergarten-madrassa", bg: "#373737", text: "text-white" },
  { name: "Bangladesh Eye Hospital", to: "/projects/bangladesh-eye-hospital", bg: "#464646", text: "text-white" },
];

const Clients = () => {
  return (
    <section className="relative w-full bg-[#2E3133] font-mono border-t border-gray-200 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16"
        >
          <div className="w-12 h-0.5 bg-[#E7E3DB]" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E7E3DB]">
            Our Clients
          </span>
          <h2 className="whitespace-nowrap text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The People We Build For
          </h2>
        </motion.div>

        {/* Client Grid (3 columns, mixed color arrangement) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: client.bg }}
              className="group rounded-none shadow-sm"
            >
              <Link
                to={client.to}
                className="flex h-28 sm:h-32 items-center justify-center px-4 py-6 transition-colors duration-300 hover:bg-[#A84E32] cursor-pointer"
              >
                <span className={`text-center text-sm sm:text-base font-bold uppercase tracking-wider ${client.text} group-hover:text-white transition-colors duration-300`}>
                  {client.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Helmet>
        <title>Our Clients — Studio DNA</title>
      </Helmet>
    </section>
  );
};

export default Clients;
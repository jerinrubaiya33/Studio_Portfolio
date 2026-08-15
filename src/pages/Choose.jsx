import { useState } from "react";

const features = [
  {
    num: "01",
    title: "Talk to a Real Human.",
    desc: "We match you with an expert who actually listens.",
  },
  {
    num: "02",
    title: "Get Clarity.",
    desc: "We define what you really need, not just what’s available.",
  },
  {
    num: "03",
    title: "Move Forward.",
    desc: "We find what fits — and make it happen.",
  },
];

export default function Choose() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="relative block clear-both w-full max-w-auto mx-auto bg-[#4f5d39] py-8 md:py-12 px-6 md:px-12 z-20 -mt-20">
      <div className="max-w-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Section: Approachable, Trust-Building Title */}
        <div className="md:col-span-1">
          {/* Removed mt-16 to eliminate huge unneeded space above header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase font-serif">
            No Walls. <br />
            Just Spaces.
          </h2>
          <p
            className="text-sm tracking-[0.2em] text-[#dce8cc] uppercase mt-4"
            style={{ fontFamily: "'serif', serif" }}
          >
            Your Space, In Safe Hands. Leave the stress and details to us. From
            the first sketch to the final finish, we handle absolutely
            every single thing so that you don't have to worry about a thing surely.
          </p>
        </div>

        {/* Right Section: Interactive Hover Pillars */}
        <div className="md:col-span-2 w-full">
          <div className="hidden md:flex w-full items-stretch min-h-[220px] border border-[#b7c5a1]/20 p-2 overflow-hidden">
            {features.map(({ num, title, desc }, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="relative overflow-hidden cursor-pointer border-r border-[#b7c5a1]/20 last:border-r-0 transition-all duration-500 ease-out flex bg-transparent hover:bg-[#5f7044]"
                  style={{ flex: isHovered ? 5 : 1 }}
                >
                  <div className="flex w-full min-w-[200px]">
                    <div className="flex flex-col items-center py-4 px-4 gap-4 w-16 min-w-[64px] select-none">
                      <span
                        className="text-xs font-mono text-[#ff7b00ad]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {num}
                      </span>
                      <div className="w-px h-6 bg-[#b7c5a1]/30" />
                      <span
                        className="text-[#ffffff] text-[18px] tracking-[0.2em] uppercase font-medium transition-all duration-300"
                        style={{
                          fontFamily: "'serif', sans-serif",
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                          opacity: isHovered ? 0 : 1,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {title}
                      </span>
                    </div>

                    {/* Expanded Inline Title + Description block */}
                    <div
                      className="flex-1 flex flex-col justify-center px-6 py-4 transition-all duration-500"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? "translateX(0)"
                          : "translateX(-20px)",
                        pointerEvents: isHovered ? "auto" : "none",
                      }}
                    >
                      <div className="text-[20px] lg:text-[24px] leading-snug tracking-tight text-white font-light">
                        <span
                          className="font-bold mr-2 text-white font-serif"
                        >
                          {title}
                        </span>
                        <span
                          className="text-[#dce8cc] text-2xl "
                          style={{ fontFamily: "'serif', san-serif" }}
                        >
                          {desc}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean Responsive Fallback Stack for Mobile Devices */}
          {/* Decreased mobile spacing thresholds down to space-y-4 */}
          <div className="block md:hidden space-y-4">
            {features.map(({ num, title, desc }, i) => (
              <div
                key={i}
                className="border-b border-[#b7c5a1]/20 pb-3 last:border-0"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs text-[#b7c5a1] shrink-0">
                    {num}
                  </span>
                  <h4
                    style={{ fontFamily: "'serif'" }}
                    className="text-base tracking-wide text-white font-bold"
                  >
                    {title}
                  </h4>
                </div>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[#dce8cc] text-sm leading-relaxed pl-6"
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
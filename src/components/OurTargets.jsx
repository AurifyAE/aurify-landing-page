import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import ContactModal from "./ContactModal";

const LEFT_TARGETS = [
  { id: "fintech", label: "Fintech & tokenization projects", x: -16, y: 22 },
  { id: "wallet", label: "Gold wallet platforms", x: -20, y: 50 },
  { id: "fi", label: "Financial institutions", x: -16, y: 78 },
];

const RIGHT_TARGETS = [
  { id: "refineries", label: "Gold Refineries", x: 70, y: 22 },
  { id: "mining", label: "Mining & sourcing operators", x: 74, y: 50 },
  { id: "bullion", label: "Bullion traders & wholesalers", x: 70, y: 78 },
];

const ALL_TARGETS = [...LEFT_TARGETS, ...RIGHT_TARGETS];

export default function OurTargets() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const pillFade = (delay, fromX) => ({
    initial: { opacity: 0, x: fromX },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  const Pill = ({ label, side, x, y, delay }) => (
    <motion.div
      className={`absolute z-10 w-[360px] rounded-full border border-[#d8dee8] bg-white text-sm font-medium text-center leading-snug text-[#3d4f63] shadow-[0_1px_3px_rgba(15,30,50,0.06)] sm:max-w-none sm:px-5 sm:py-2.5 sm:text-lg ${
        side === "left"
          ? "right-[54%] sm:right-[56%]"
          : "left-[54%] sm:left-[56%]"
      }`}
      style={{ top: `${y}%`, left: `${x}%`, transform: "translateY(-50%)" }}
      {...pillFade(delay, side === "left" ? -24 : 24)}
      animate={
        inView ? { opacity: 1, scale: 1, y: [0, -8, 0] } : {}
      }
      transition={{
        y: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          },
      }}
    >
      {label}
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white px-4 pb-20 pt-14 font-sans sm:px-6 sm:pt-16"
    >


      <motion.h2
        className="relative z-10 mb-8 text-center text-2xl font-bold text-[#1D3D70] sm:mb-10 sm:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Who is this for?
      </motion.h2>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Hub - desktop & tablet */}
        <div className="relative mx-auto hidden min-h-[400px] lg:block">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full max-w-lg -translate-x-1/2 -translate-y-1/2">
            <motion.img
              src="/images/ourtargets.png"
              alt=""
              className="w-full object-contain"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={
                inView ? { opacity: 1, scale: 1, y: [0, -8, 0] } : {}
              }
              transition={{
                opacity: { duration: 0.55, delay: 0.08 },
                scale: { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] },

              }}
            />
          </div>

          {LEFT_TARGETS.map((t, i) => (
            <Pill key={t.id} label={t.label} side="left" x={t.x} y={t.y} delay={0.3 + i * 0.1} />
          ))}
          {RIGHT_TARGETS.map((t, i) => (
            <Pill key={t.id} label={t.label} side="right" x={t.x} y={t.y} delay={0.3 + i * 0.1} />
          ))}
        </div>

        {/* Mobile — image + stacked pills */}
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6 lg:hidden">
          <motion.img
            src="/images/ourtargets.png"
            alt=""
            className="w-full max-w-[280px] object-contain"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <ul className="flex w-full flex-col gap-2.5">
            {ALL_TARGETS.map((item, i) => (
              <motion.li
                key={item.id}
                className="list-none rounded-full border border-[#d8dee8] bg-white px-4 py-3 text-center text-sm font-medium text-[#3d4f63] shadow-[0_1px_3px_rgba(15,30,50,0.06)]"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-10 flex justify-center sm:mt-12"
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          type="button"
          onClick={() => setModalOpen(true)}
          className="rounded-full px-16 py-4 text-base font-semibold text-white shadow-md"
          style={{
            background: "linear-gradient(90deg, #9FFFFA 0%, #34AFE4 34%, #1D3D70 100%)",
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(30, 26, 77, 0.2)" }}
          whileTap={{ scale: 0.98 }}
        >
          Know More
        </motion.button>
      </motion.div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

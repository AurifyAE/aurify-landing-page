import { useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import ContactModal from "./ContactModal";

const GRADIENT = "linear-gradient(90deg, #9FFFFA 0%, #34AFE4 40%, #1D3D70 100%)";
const GLOW = "0 0 0 0 rgba(52,175,228,0), 0 8px 32px rgba(30,61,112,0.28), 0 2px 8px rgba(52,175,228,0.18)";
const GLOW_HOV = "0 0 0 6px rgba(52,175,228,0.12), 0 12px 40px rgba(30,61,112,0.36), 0 4px 16px rgba(52,175,228,0.28)";

// ← SparkIcon function removed entirely

export default function FloatingKnowMore() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef(null);

  const mx = useSpring(0, { stiffness: 280, damping: 26 });
  const my = useSpring(0, { stiffness: 280, damping: 26 });

  const onMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.22);
    my.set((e.clientY - (rect.top + rect.height / 2)) * 0.22);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="float-btn"
          className="fixed bottom-7 right-6 z-50"
          initial={{ opacity: 0, y: 40, scale: 0.82, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
        >
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ background: "transparent", border: "1.5px solid rgba(52,175,228,0.5)" }}
            animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          />

          <motion.div
            style={{ x: mx, y: my }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => setHovered(true)}
          >
            <motion.button
              ref={btnRef}
              type="button"
              onClick={() => setModalOpen(true)}
              className="relative overflow-hidden rounded-full text-white select-none flex items-center justify-center"
              style={{
                background: GRADIENT,
                boxShadow: GLOW,
                height: "52px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
              animate={{
                width: hovered ? 160 : 52,
                boxShadow: hovered ? GLOW_HOV : GLOW,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 600, damping: 30 } }}
            >
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
              />

              {/* ← lucide-react icon, same sizing/classes as before */}
              <CalendarCheck size={20} className="relative z-10 shrink-0" />

              <motion.span
                className="relative z-10 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide"
                style={{ letterSpacing: "0.04em" }}
                animate={{
                  maxWidth: hovered ? 110 : 0,
                  opacity: hovered ? 1 : 0,
                  marginLeft: hovered ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.6 }}
              >
                Schedule Now
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
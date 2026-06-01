import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import ContactModal from "./ContactModal";

const GRADIENT = "linear-gradient(90deg, #9FFFFA 0%, #34AFE4 40%, #1D3D70 100%)";
const GLOW     = "0 0 0 0 rgba(52,175,228,0), 0 8px 32px rgba(30,61,112,0.28), 0 2px 8px rgba(52,175,228,0.18)";
const GLOW_HOV = "0 0 0 6px rgba(52,175,228,0.12), 0 12px 40px rgba(30,61,112,0.36), 0 4px 16px rgba(52,175,228,0.28)";

export default function FloatingKnowMore() {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible]     = useState(true);
  const lastY   = useRef(0);
  const rafId   = useRef(null);
  const btnRef  = useRef(null);

  // ── scroll hide/show ───────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      const y     = window.scrollY;
      const delta = y - lastY.current;

      if (y < 60)          setVisible(true);
      else if (delta > 5)  setVisible(false);   // scrolling down → hide
      else if (delta < -5) setVisible(true);    // scrolling up  → show

      lastY.current = y;
      rafId.current = null;
    };

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(update);
    };

    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // ── magnetic mouse tracking ────────────────────────────────────
  const mx = useSpring(0, { stiffness: 280, damping: 26 });
  const my = useSpring(0, { stiffness: 280, damping: 26 });

  const onMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    mx.set((e.clientX - cx) * 0.22);
    my.set((e.clientY - cy) * 0.22);
  };

  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="float-btn"
            className="fixed bottom-7 right-6 z-50"
            
            initial={{ opacity: 0, y: 40, scale: 0.82, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)" }}
            exit={{    opacity: 0, y: 24, scale: 0.88,  filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
          >
            {/* Pulse ring — animates independently */}
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{ background: "transparent", border: "1.5px solid rgba(52,175,228,0.5)" }}
              animate={{
                scale:   [1, 1.55],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.6,
              }}
            />

            {/* Magnetic wrapper */}
            <motion.div
              style={{ x: mx, y: my }}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              <motion.button
                ref={btnRef}
                type="button"
                onClick={() => setModalOpen(true)}
                className="relative overflow-hidden rounded-full px-12 py-3.5 text-sm font-semibold text-white tracking-wide select-none"
                style={{
                  background:  GRADIENT,
                  boxShadow:   GLOW,
                  letterSpacing: "0.04em",
                }}
                whileHover={{
                  scale:      1.06,
                  boxShadow:  GLOW_HOV,
                  transition: { type: "spring", stiffness: 400, damping: 22 },
                }}
                whileTap={{
                  scale:      0.96,
                  transition: { type: "spring", stiffness: 600, damping: 30 },
                }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.4,
                  }}
                />

                <span className="relative z-10">Know More</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ConferenceBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section className="w-full flex justify-center px-4 py-10 font-sans" ref={ref}>

      {/* ── DESKTOP (sm+) — unchanged ── */}
      <div className="relative w-full max-w-5xl min-h-[400px] overflow-hidden rounded-[160px] bg-[#ddeef8] hidden sm:block">
        {/* Right skyline */}
        <div
          className="absolute inset-y-0 right-0 w-[60%] overflow-hidden"
          style={{
            backgroundImage: "url(/images/conference-banner-full-img.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "88% center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Left content panel */}
        <motion.div
          className="absolute inset-y-0 left-0 z-10 flex w-[60%] flex-col justify-center bg-[#ddeef8] py-10 pl-16 pr-6 sm:pl-24 sm:pr-8"
          style={{ borderTopRightRadius: 160, borderBottomRightRadius: 160 }}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="mb-4 flex items-center gap-2" {...fadeUp(0.1)}>
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full"
                style={{ background: "#E2F0FF" }}
                animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "#1e85c4" }} />
            </span>
            <span style={{ fontSize: "12px", color: "#1a1a1a", fontWeight: 500 }}>
              Latest : Live at APMC - Singapore
            </span>
          </motion.div>

          <motion.p style={{ fontSize: "15px", fontWeight: 700, color: "#0d1f33", lineHeight: 1.45, marginBottom: "10px" }} {...fadeUp(0.18)}>
            Meet our CEO in person at the Asia Pacific Metals Conference.
          </motion.p>

          <motion.div style={{ marginBottom: "8px" }} {...fadeUp(0.26)}>
            {["Founder & CEO, Aurify Technology", "12+ years · Precious metals · Digital transformation"].map((line, i) => (
              <p key={i} style={{ fontSize: "12px", color: "#1a1a1a", margin: "2px 0", lineHeight: 1.5 }}>{line}</p>
            ))}
          </motion.div>

          <motion.p style={{ fontSize: "12px", color: "#1a1a1a", lineHeight: 1.65, marginBottom: "14px", maxWidth: "320px" }} {...fadeUp(0.32)}>
            With over 12 years delivering ERP systems, SaaS platforms, compliance solutions,
            and blockchain traceability across refineries, bullion traders, and global institutional
            clients, our CEO has lived every challenge Aurify solves. Aurify is the product of that experience.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <p style={{ fontSize: "11px", color: "#1a1a1a", marginBottom: "4px" }}>Fix a meeting or reach out directly</p>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e85c4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15v1.92z" />
              </svg>
              <a href="tel:+971567001568" style={{ fontSize: "14px", fontWeight: 700, color: "#0d1f33", textDecoration: "none" }}>
                +971 56 700 1568
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* CEO name at seam */}
        <motion.div className="absolute bottom-11 z-30" style={{ left: "36%" }} {...fadeUp(0.48)}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#0d1f33", whiteSpace: "nowrap" }}>Muneeb Cholayil</p>
          <p style={{ fontSize: "11px", color: "#3d5a73" }}>CEO &amp; Founder</p>
        </motion.div>

        {/* Muneeb cutout */}
        <motion.img
          src="/images/muneeb.png"
          alt="Muneeb Cholayil, CEO & Founder"
          className="pointer-events-none absolute bottom-0 z-20 h-[60%] w-auto max-w-[36%] object-contain object-bottom"
          style={{ left: "48%", transform: "translateX(-22%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
      </div>

      {/* ── MOBILE (< sm) ── */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-[#E2F0FF] sm:hidden">

        {/* Top: image banner */}
        <div
          className="relative w-full h-52 overflow-hidden"
          style={{
            backgroundImage: "url(/images/conference-banner-full-img.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute bg-[#11111177] inset-0" />
          {/* Muneeb cutout — bottom-center of image strip */}
          <motion.img
            src="/images/muneeb.png"
            alt="Muneeb Cholayil"
            className="absolute bottom-0 right-6 h-[90%] w-auto object-contain object-bottom pointer-events-none z-10"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          {/* Name tag on image */}
          <motion.div
            className="absolute bottom-3 left-4 z-20"
            {...fadeUp(0.45)}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>Muneeb Cholayil</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>CEO &amp; Founder</p>
          </motion.div>
        </div>

        {/* Bottom: content */}
        <div className="px-6 py-6">
          {/* Live badge */}
          <motion.div className="flex items-center gap-2 mb-4" {...fadeUp(0.1)}>
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full"
                style={{ background: "#3ea8e0" }}
                animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "#1e85c4" }} />
            </span>
            <span style={{ fontSize: "12px", color: "#1a1a1a", fontWeight: 500 }}>
              Latest : Live at APMC - Singapore
            </span>
          </motion.div>

          <motion.p style={{ fontSize: "15px", fontWeight: 700, color: "#0d1f33", lineHeight: 1.45, marginBottom: "10px" }} {...fadeUp(0.18)}>
            Meet our CEO in person at the Asia Pacific Metals Conference.
          </motion.p>

          <motion.div style={{ marginBottom: "8px" }} {...fadeUp(0.26)}>
            {["Founder & CEO, Aurify Technology", "12+ years · Precious metals · Digital transformation"].map((line, i) => (
              <p key={i} style={{ fontSize: "12px", color: "#1a1a1a", margin: "2px 0", lineHeight: 1.5 }}>{line}</p>
            ))}
          </motion.div>

          <motion.p style={{ fontSize: "12px", color: "#1a1a1a", lineHeight: 1.65, marginBottom: "16px" }} {...fadeUp(0.32)}>
            With over 12 years delivering ERP systems, SaaS platforms, compliance solutions,
            and blockchain traceability across refineries, bullion traders, and global institutional
            clients, our CEO has lived every challenge Aurify solves. Aurify is the product of that experience.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <p style={{ fontSize: "11px", color: "#1a1a1a", marginBottom: "6px" }}>Fix a meeting or reach out directly</p>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e85c4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.1 6.1l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15v1.92z" />
              </svg>
              <a href="tel:+971567001568" style={{ fontSize: "15px", fontWeight: 700, color: "#0d1f33", textDecoration: "none" }}>
                +971 56 700 1568
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chatBubbles = [
  {
    id: 1,
    text: "How many spreadsheets does your team touch before a trade is settled?",
    side: "left",
  },
  {
    id: 2,
    text: "When did you last feel confident your AML and KYC were fully up to date?",
    side: "right",
  },
  {
    id: 3,
    text: "Can you see your full risk exposure - market, credit, and physical - in one place, right now?",
    side: "left",
  },
  {
    id: 4,
    text: "Does your refinery have full traceability from dore intake to finished bar - with ESG documentation?",
    side: "right",
  },
];

// All 4 bubbles animate in during the pin phase
const PINNED_BUBBLE_COUNT = 4;

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const pinRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const bubblesRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Load-time: logo, tagline, headline ──────────────────────
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }
      );
      gsap.fromTo(taglineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15 }
      );

      // ── Hide all bubbles + CTA initially ────────────────────────
      gsap.set(bubblesRef.current, { opacity: 0, y: 40, scale: 0.92, willChange: "transform, opacity" });
      gsap.set(ctaRef.current, { opacity: 0, y: 24, willChange: "transform, opacity" });

      // ── PINNED timeline: all 4 bubbles with content slide ──────
      // Card stays fixed; each scroll-step reveals one bubble.
      // After bubble 2, content slides up so bubbles 3 & 4 are visible.
      const SLIDE_UP_STEP = 1; // extra timeline step for the slide-up
      const pinnedTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top -20%",
          // extra room for the slide-up step between bubble 2 and 3
          end: () => `+=${(PINNED_BUBBLE_COUNT + SLIDE_UP_STEP + 0.6) * window.innerHeight}`,
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Bubbles 1 & 2
      bubblesRef.current.slice(0, 2).forEach((el) => {
        if (!el) return;
        pinnedTl.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, "+=0.4");
      });

      // ── Slide entire card up so bubbles 3 & 4 come into view ──
      pinnedTl.to(cardRef.current, {
        y: () => {
          const contentEl = contentRef.current;
          const cardEl = cardRef.current;
          if (!contentEl || !cardEl) return -300;
          const contentHeight = contentEl.scrollHeight;
          const cardHeight = cardEl.offsetHeight;
          // Slide up by the overflow amount, capped for safety
          const overflow = contentHeight - cardHeight;
          return -Math.min(Math.max(overflow * 0.55, 200), 500);
        },
        duration: 1.2,
        ease: "power2.inOut",
      }, "+=0.3");

      // Bubbles 3 & 4
      bubblesRef.current.slice(2, PINNED_BUBBLE_COUNT).forEach((el) => {
        if (!el) return;
        pinnedTl.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, "+=0.4");
      });

      // ── CTA animates after pin releases ───────────────────────

      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const shadowStyle = {
    filter: "saturate(120%) blur(0.2px)",
    boxShadow: `
      rgba(30, 26, 77, 0.42) -6px 6px 4px,
      rgba(30, 26, 77, 0.38) -12px 12px 8px,
      rgba(30, 26, 77, 0.32) -18px 18px 12px,
      rgba(30, 26, 77, 0.28) -24px 24px 16px,
      rgba(30, 26, 77, 0.24) -30px 30px 20px,
      rgba(30, 26, 77, 0.20) -36px 36px 24px,
      rgba(52, 175, 228, 0.26) -42px 42px 28px,
      rgba(52, 175, 228, 0.22) -48px 48px 32px,
      rgba(52, 175, 228, 0.18) -54px 54px 36px,
      rgba(52, 175, 228, 0.26) -60px 60px 40px,
      rgba(52, 175, 228, 0.22) -66px 48px 44px,
      rgba(52, 175, 228, 0.18) -72px 72px 48px,
      rgba(81, 193, 182, 0.18) -78px 78px 52px,
      rgba(81, 193, 182, 0.14) -84px 84px 56px,
      rgba(81, 193, 182, 0.10) -90px 90px 60px,
      rgba(81, 193, 182, 0.06) -96px 96px 72px
    `,
  };

  return (
    <div ref={wrapperRef}>
      <section className="relative max-w-7xl mx-auto w-full font-sans">

        {/* Top bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start md:items-center justify-between gap-4 p-10">
          <div ref={logoRef} className="flex items-center gap-2" style={{ opacity: 0 }}>
            <img
              src="/logo/aurify-logo.svg"
              alt="Aurify Technology"
              className="h-12 w-auto"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <p
            ref={taglineRef}
            className="text-sm md:text-lg text-[#1D3D70] italic tracking-wide"
            style={{ opacity: 0 }}
          >
            intelligently transforming the precious metals
          </p>
        </div>

        {/* ── PINNED GRADIENT CARD ── */}
        <div ref={pinRef} className="relative">

          <div
            ref={cardRef}
            className="relative mx-4 mb-6 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(140deg, #51C1B6 0%, #34AFE4 60%, #1E1A4D 100%)",
              minHeight: "calc(100vh - 100px)",
            }}
          >
            {/* Diagonal sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(140deg, rgba(255,255,255,0.07) 0%, transparent 45%, rgba(0,0,0,0.12) 100%)",
              }}
            />

            {/* Left side graphic */}
            <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-80 overflow-hidden">
              <img
                src="/images/bg-side.svg"
                alt=""
                className="h-full w-full object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            {/* Bottom-right corner arc */}
            <div className="absolute bottom-0 right-0 w-52 h-52 pointer-events-none">
              <img
                src="/images/bg-bottom-corner.svg"
                alt=""
                className="w-full h-full object-contain opacity-50"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative z-10 flex flex-col items-center px-8 pt-12 pb-20" style={{ willChange: "transform" }}>

              {/* Headline */}
              <div ref={headlineRef} className="text-center mb-12 px-4" style={{ opacity: 0 }}>
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug drop-shadow-sm">
                  The Precious Metals industry is changing.
                  <br />
                  Is your operation ready?
                </h1>
              </div>

              {/* Chat bubbles */}
              <div className="w-full max-w-2xl flex flex-col gap-16 mb-20">
                {chatBubbles.map((bubble, i) => (
                  <div
                    key={bubble.id}
                    ref={(el) => (bubblesRef.current[i] = el)}
                    className={`flex ${bubble.side === "right"
                      ? "justify-end pl-10"
                      : "justify-start pr-10"
                      }`}
                  >
                    <div className={`relative ${bubble.side === "left" ? "ml-6" : ""}`}>
                      <div className="absolute inset-0" style={shadowStyle} />
                      <div className="relative w-auto md:w-[540px] px-8 py-4 bg-white/95 backdrop-blur-sm">
                        <p className="text-[#1D3D70] text-sm sm:text-lg font-medium leading-relaxed">
                          {bubble.text}
                        </p>
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div ref={ctaRef} className="text-center">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2 drop-shadow">
                  The Aurify suite
                </h2>
                <p className="text-white text-sm sm:text-base tracking-wide">
                  Four products. One ecosystem. Built for nothing else but precious metals.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
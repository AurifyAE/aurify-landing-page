import { useEffect, useRef } from "react";
import gsap from "gsap";
import arrowDown from "/images/arrow-down.svg";

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

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }
      );
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.35 }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const bubbleShadow = {
    boxShadow: `
      -4px 4px 2px rgba(29, 100, 160, 0.55),
      -8px 8px 3px rgba(29, 100, 160, 0.52),
      -12px 12px 4px rgba(29, 100, 160, 0.48),
      -16px 16px 5px rgba(29, 100, 160, 0.45),
      -20px 20px 6px rgba(29, 100, 160, 0.42),
      -24px 24px 7px rgba(29, 100, 160, 0.38),
      -28px 28px 8px rgba(29, 100, 160, 0.35),
      -32px 32px 9px rgba(29, 100, 160, 0.32),
      -36px 36px 10px rgba(29, 100, 160, 0.29),
      -40px 40px 11px rgba(29, 100, 160, 0.26),
      -44px 44px 12px rgba(29, 100, 160, 0.23),
      -48px 48px 13px rgba(29, 100, 160, 0.20),
      -52px 52px 14px rgba(29, 100, 160, 0.18),
      -56px 56px 15px rgba(29, 100, 160, 0.16),
      -60px 60px 16px rgba(29, 100, 160, 0.14),
      -64px 64px 18px rgba(29, 100, 160, 0.12),
      -68px 68px 20px rgba(29, 100, 160, 0.10),
      -72px 72px 22px rgba(29, 100, 160, 0.08),
      -76px 76px 24px rgba(29, 100, 160, 0.07),
      -80px 80px 26px rgba(29, 100, 160, 0.06),
      -84px 84px 28px rgba(29, 100, 160, 0.05),
      -88px 88px 30px rgba(29, 100, 160, 0.04),
      -92px 92px 32px rgba(29, 100, 160, 0.03),
      -96px 96px 35px rgba(29, 100, 160, 0.025),
      -100px 100px 38px rgba(29, 100, 160, 0.02),
      -104px 104px 42px rgba(29, 100, 160, 0.015),
      -108px 108px 46px rgba(29, 100, 160, 0.01),
      -112px 112px 50px rgba(29, 100, 160, 0.008),
      -116px 116px 55px rgba(29, 100, 160, 0.005),
      -120px 120px 60px rgba(29, 100, 160, 0.003)
    `,
  };

  return (
    <div ref={wrapperRef} className="pb-24">
      <section className="relative mx-auto w-full max-w-7xl font-sans">
        <div className="relative z-10 flex flex-col items-start justify-between gap-4 p-10 sm:flex-row md:items-center">
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
            className="text-sm italic tracking-wide text-[#1D3D70] md:text-lg"
            style={{ opacity: 0 }}
          >
            Intelligently transforming the precious metals
          </p>
        </div>

        <div className="relative min-h-screen">
          <div
            className="relative z-20 mx-4 rounded-2xl"
            style={{
              background: "linear-gradient(140deg, #51C1B6 0%, #34AFE4 60%, #1E1A4D 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(140deg, rgba(255,255,255,0.07) 0%, transparent 45%, rgba(0,0,0,0.12) 100%)",
              }}
            />

            <div className="pointer-events-none absolute bottom-0 -left-15 top-0 w-80 overflow-hidden">
              <img
                src="/images/bg-side.svg"
                alt=""
                className="h-full w-full object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52">
              <img
                src="/images/bg-bottom-corner.svg"
                alt=""
                className="h-full w-full object-contain opacity-50"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center px-8 pb-20 pt-12">
              <div ref={headlineRef} className="mb-12 px-4 text-center" style={{ opacity: 0 }}>
                <h1 className="text-xl font-bold leading-snug text-pretty text-white drop-shadow-sm sm:text-2xl md:text-3xl">
                  The Precious Metals industry is changing. 
                  <br />
                  Is your operation ready?
                </h1>
              </div>

              <div className="mb-20 flex w-full max-w-2xl flex-col gap-16">
                {chatBubbles.map((bubble) => (
                  <div
                    key={bubble.id}
                    className={`flex ${bubble.side === "right" ? "justify-end pl-10" : "justify-start pr-10"
                      }`}
                  >
                    <div className={`relative ${bubble.side === "left" ? "ml-6" : ""}`}>
                      <div className="relative w-auto bg-white/95 px-6 py-4 md:px-12 md:py-8 backdrop-blur-sm md:w-[540px]" style={bubbleShadow}>
                        <p className="text-sm font-medium leading-relaxed text-[#1D3D70] sm:text-lg">
                          {bubble.text}
                        </p>
                        <div className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div ref={ctaRef} className="text-center" style={{ opacity: 0 }}>
                <h2 className="mb-2 text-3xl font-bold text-white drop-shadow sm:text-4xl">
                  The Aurify suite
                </h2>
                <p className="text-sm tracking-wide text-white sm:text-base">
                  Four products. One ecosystem. Built for nothing else but precious metals.
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-arrow absolute -bottom-12 left-1/2 z-10 -translate-x-1/2">
            <img src={arrowDown} alt="Scroll down" />
          </div>
        </div>

        {/* <div className="pointer-events-none absolute bottom-0 -left-10 top-0 w-80 overflow-hidden z-40 hidden xl:block">
          <img
            src="/images/bg-side.svg"
            alt=""
            className="h-full w-full object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div> */}
      </section>
    </div>
  );
}

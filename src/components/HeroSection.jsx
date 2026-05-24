import { motion } from "framer-motion";

const chatBubbles = [
  {
    id: 1,
    text: "How many spreadsheets does your team touch before a trade is settled?",
    side: "left",
    delay: 0.3,
  },
  {
    id: 2,
    text: "When did you last feel confident your AML and KYC were fully up to date?",
    side: "right",
    delay: 0.6,
  },
  {
    id: 3,
    text: "Can you see your full risk exposure - market, credit, and physical - in one place, right now?",
    side: "left",
    delay: 0.9,
  },
  {
    id: 4,
    text: "Does your refinery have full traceability from dore intake to finished bar - with ESG documentation?",
    side: "right",
    delay: 1.2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const bubbleVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative max-w-6xl mx-auto w-full min-h-screen overflow-hidden font-sans">
      {/* Top white bar with logo & tagline */}
      <div className="relative z-10 flex items-center justify-between p-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <img
            src="/logo/aurify-logo.svg"
            alt="Aurify Technology"
            className="h-12 w-auto"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 italic tracking-wide hidden sm:block"
        >
          intelligently transforming the precious metals
        </motion.p>
      </div>

      {/* Main gradient card */}
      <div
        className="relative mx-4 mb-6 rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(140deg, #51C1B6 0%, #34AFE4 50%, #1E1A4D 100%)",
          minHeight: "calc(100vh - 100px)",
        }}
      >
        {/* Diagonal light sweep */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(140deg, rgba(255,255,255,0.07) 0%, transparent 45%, rgba(0,0,0,0.12) 100%)",
          }}
        />

        

        {/* Left side graphic / fallback cubes */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-80 overflow-hidden">
          <img
            src="/images/bg-side.svg"
            alt=""
            className="h-full w-full object-contain opacity-50"
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
        <div className="relative z-10 flex flex-col items-center px-8 pt-12 pb-20">

          {/* Headline */}
          <motion.div
            className="text-center mb-12 px-4"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
          >
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug drop-shadow-sm">
              The Precious Metals industry is changing.
              <br />
              Is your operation ready?
            </h1>
          </motion.div>

          {/* Chat bubbles */}
          <div className="w-full max-w-2xl flex flex-col gap-16 mb-20">
            {chatBubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                className={`flex ${bubble.side === "right" ? "justify-end pl-10" : "justify-start pr-10"}`}
                initial="hidden"
                animate="show"
                variants={bubbleVariant}
                custom={bubble.delay}
              >
                {bubble.side === "left" ? (
                 <div className="relative ml-6">

                 {/* Multi-layer shadow */}
                 <div
                   className="absolute inset-0"
                   style={{
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
                   }}
                 />
               
                 {/* Bubble */}
                 <div
                   className="relative w-auto md:w-[540px] px-8 py-4 bg-white/95 backdrop-blur-sm"
                 >
                   <p className="text-[#1a2a4a] text-base sm:text-lg font-medium leading-relaxed">
                     {bubble.text}
                   </p>
               
                   {/* Tail */}
                   <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
                 </div>
               </div>
                ) : (
                  <div className="relative ml-24">

                 {/* Multi-layer shadow */}
                 <div
                   className="absolute inset-0"
                   style={{
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
                   }}
                 />
               
                 {/* Bubble */}
                 <div
                   className="relative w-auto md:w-[540px] px-8 py-4 bg-white/95 backdrop-blur-sm"
                 >
                   <p className="text-[#1a2a4a] text-base sm:text-lg font-medium leading-relaxed">
                     {bubble.text}
                   </p>
               
                   {/* Tail */}
                   <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
                 </div>
               </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* The Aurify suite CTA */}
          <motion.div
            className="text-center"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1.7}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2 drop-shadow">
              The Aurify suite
            </h2>
            <p className="text-white/65 text-sm sm:text-base tracking-wide">
              Four products. One ecosystem. Built for nothing else but precious metals.
            </p>

            {/* Animated down arrow */}
            {/* <motion.div
              className="mt-8 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 3v12M4 11l5 5 5-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
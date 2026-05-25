import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PRODUCTS = [
  {
    id: "bullion-pro",
    number: "01",
    title: "Bullion Pro",
    description:
      "Full trading & operations backbone - dealing desk to treasury",
  },
  {
    id: "refine-x",
    number: "02",
    title: "Refine X",
    description: "End-to-end refinery management with ESG traceability",
  },
  {
    id: "rms",
    number: "03",
    title: "RMS",
    description: "Institutional-grade risk - market, compliance & operational",
  },
  {
    id: "aurify-iq",
    number: "04",
    title: "Aurify IQ",
    description:
      "AI + analytics that turns your data into predictive intelligence",
  },
];

export default function ProductSuite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="w-full bg-white px-4 py-14 font-sans sm:px-6 sm:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 px-4">
        {PRODUCTS.map((product, i) => (
          <motion.article
            key={product.id}
            className="flex flex-col rounded-[28px] px-6 py-7 text-white sm:min-h-[200px] sm:px-7 sm:py-8"
            style={{ background: "#416DB4" }}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 + i * 0.14,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.span
              className="text-sm font-medium tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.14 }}
            >
              {product.number}
            </motion.span>

            <motion.h3
              className="mt-5 flex-1 text-[26px] font-bold leading-tight sm:text-[28px]"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.14,
              }}
            >
              {product.title}
            </motion.h3>

            <motion.p
              className="mt-6 text-[14px] leading-relaxed text-white/95 sm:text-[15px]"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.33 + i * 0.14,
              }}
            >
              {product.description}
            </motion.p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#F7F6F6] border-t border-gray-100 py-6"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/logo/aurify-logo.svg"
            alt="Aurify Technology"
            className="h-8 w-auto"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Inline fallback */}
          <div style={{ display: "none" }} className="items-center gap-1.5">
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <polygon points="17,2 30,9 30,25 17,32 4,25 4,9" fill="none" stroke="#00B4D8" strokeWidth="2" />
              <polygon points="17,8 24,12 24,22 17,26 10,22 10,12" fill="#0077B6" opacity="0.5" />
              <polygon points="17,13 21,16 21,21 17,24 13,21 13,16" fill="#023E8A" />
            </svg>
            <div>
              <div className="text-[#023E8A] font-bold text-base leading-none tracking-wide">Aurify</div>
              <div className="text-[#00B4D8] text-[6px] tracking-[0.2em] uppercase font-semibold">Technology</div>
            </div>
          </div>
        </div>

        {/* Centre text */}
        <p className="text-gray-500 text-[12px] tracking-wide text-center">
          Full website coming soon at{" "}
          <a
            href="https://aurify.global"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-medium hover:text-[#0077B6] transition-colors duration-200"
          >
            aurify.global
          </a>
        </p>

        {/* Right - address + contact */}
        <div className="text-right text-[11px] text-gray-500 leading-relaxed">
          <p>Suite No.1035, Al Rayyan Building, Al Nahda, UAE</p>
          <p>
            <a href="tel:+97158 502 3411" className="hover:text-[#0077B6] transition-colors duration-200 mr-3">
              +971 58 502 3411
            </a>
            <a href="mailto:info@aurify.ae" className="hover:text-[#0077B6] transition-colors duration-200">
              info@aurify.ae
            </a>
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
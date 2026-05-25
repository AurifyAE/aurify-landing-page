import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const SHEET_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
const PRODUCTS = [
  "Aurify Bullion Pro",
  "Aurify Refinex",
  "Aurify RMS",
  "Aurify IQ",
  "The Full Suite",
  "The meeting at APMC Singapore",
];

const inputBase =
  "w-full border border-[#d1d5db] rounded-[6px] bg-white px-3 py-2.5 text-[13px] text-[#111827] outline-none placeholder-[#9ca3af] transition-colors duration-150 focus:border-[#6b7280] font-[inherit] box-border";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", product: "", headache: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors", // required for Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{
            background: "rgba(15, 20, 35, 0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-[460px] sm:max-w-[720px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.22)] font-[inherit]
                       px-5 py-7 sm:px-9 sm:py-10
                       overflow-hidden"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#374151] bg-none border-none cursor-pointer text-lg leading-none p-1 transition-colors duration-150"
              aria-label="Close"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0d1f33] mb-2 leading-snug">
                  Let's talk about your business
                </h2>
                <p className="text-[12px] sm:text-[13px] text-[#6b7280] mb-6 leading-relaxed">
                  Tell us who you are and what you're dealing with. We'll come back with something actually relevant — not a generic pitch deck.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-0">

                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name" required
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">Company</label>
                      <input
                        name="company" value={form.company} onChange={handleChange}
                        placeholder="Company" required
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Row 2: Role + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">Role</label>
                      <input
                        name="role" value={form.role} onChange={handleChange}
                        placeholder="Your title" required
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">Work email</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="email@company.com" required
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="mb-4">
                    <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">
                      I want to learn more about
                    </label>
                    <div className="relative">
                      <select
                        name="product" value={form.product} onChange={handleChange}
                        required
                        className={`${inputBase} appearance-none pr-9 cursor-pointer`}
                        style={{ color: form.product ? "#111827" : "#9ca3af" }}
                      >
                        <option value="" disabled style={{ color: "#9ca3af" }}>Choose a product</option>
                        {PRODUCTS.map((p) => (
                          <option key={p} value={p} style={{ color: "#111827" }}>{p}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="mb-6">
                    <label className="block text-[11px] sm:text-[12px] font-semibold text-[#111827] mb-1.5">
                      What's your single biggest operational headache right now?
                    </label>
                    <textarea
                      name="headache" value={form.headache} onChange={handleChange}
                      placeholder="Describe it freely — the more specific, the better we can help..."
                      rows={4}
                      className={`${inputBase} resize-none leading-relaxed`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ opacity: 0.92 }}
                    whileTap={{ scale: 0.985 }}
                    style={{ background: "linear-gradient(90deg, #9FFFFA 0%, #34AFE4 34%, #1D3D70 100%)" }}
                    className="w-full flex items-center justify-center gap-2.5 text-white border-none rounded-lg py-3.5 text-[13px] sm:text-[14px] font-semibold cursor-pointer tracking-[0.01em] font-[inherit]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Submit
                  </motion.button>
                </form>
              </>
            ) : (
              /* Success */
              <motion.div
                className="flex flex-col items-center text-center py-6"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, #34afe4, #51c1b6)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0d1f33] mb-2">Request received!</h3>
                <p className="text-[12px] sm:text-[13px] text-[#6b7280] leading-relaxed max-w-[280px] mb-7">
                  We'll review your details and get back with something actually useful — within 24 hours.
                </p>
                <motion.button
                  onClick={onClose}
                  whileHover={{ opacity: 0.88 }}
                  className="bg-[#1a2556] text-white border-none rounded-lg px-8 py-2.5 text-[13px] font-semibold cursor-pointer font-[inherit]"
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
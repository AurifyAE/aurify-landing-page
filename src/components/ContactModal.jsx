import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  "Aurify Bullion Pro",
  "Aurify Refinex",
  "Aurify RMS",
  "Aurify IQ",
  "The Full Suite",
  "The meeting at APMC Singapore",
];

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", product: "", headache: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Exact input style from image - light gray border, white bg, square-ish radius
  const inputStyle = {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    background: "#fff",
    padding: "10px 12px",
    fontSize: "13px",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.15s",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
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
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "460px",
              background: "#fff",
              borderRadius: "16px",
              padding: "40px 36px 36px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
              fontFamily: "inherit",
            }}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close X */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "18px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9ca3af",
                padding: "4px",
                lineHeight: 1,
                fontSize: "18px",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                {/* Title */}
                <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0d1f33", margin: "0 0 8px", lineHeight: 1.3 }}>
                  Let's talk about your business
                </h2>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 24px", lineHeight: 1.6 }}>
                  Tell us who you are and what you're dealing with. We'll come back with something actually relevant - not a generic pitch deck.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>Role</label>
                      <input
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="Your title"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>Work email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        required
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      />
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>
                      I want to learn more about
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          WebkitAppearance: "none",
                          paddingRight: "36px",
                          cursor: "pointer",
                          color: form.product ? "#111827" : "#9ca3af",
                          background: "#fff",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                      >
                        <option value="" disabled style={{ color: "#9ca3af" }}>Choose a product</option>
                        {PRODUCTS.map((p) => (
                          <option key={p} value={p} style={{ color: "#111827" }}>{p}</option>
                        ))}
                      </select>
                      {/* Chevron */}
                      <div style={{
                        position: "absolute", right: "12px", top: "50%",
                        transform: "translateY(-50%)", pointerEvents: "none",
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#111827", marginBottom: "6px" }}>
                      What's your single biggest operational headache right now?
                    </label>
                    <textarea
                      name="headache"
                      value={form.headache}
                      onChange={handleChange}
                      placeholder="Describe it freely - the more specific, the better we can help..."
                      rows={4}
                      required
                      style={{
                        ...inputStyle,
                        resize: "none",
                        lineHeight: 1.55,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#6b7280")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>

                  {/* Submit button - full width, dark navy, exact from image */}
                  <motion.button
                    type="submit"
                    whileHover={{ opacity: 0.92 }}
                    whileTap={{ scale: 0.985 }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      background: "#1a2556",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "14px 20px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {/* Paper plane */}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Request a private demo
                  </motion.button>
                </form>
              </>
            ) : (
              /* Success */
              <motion.div
                style={{ textAlign: "center", padding: "24px 0" }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: "linear-gradient(135deg, #34afe4, #51c1b6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0d1f33", margin: "0 0 10px" }}>
                  Request received!
                </h3>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65, maxWidth: 300, margin: "0 auto 28px" }}>
                  We'll review your details and get back with something actually useful - within 24 hours.
                </p>
                <motion.button
                  onClick={onClose}
                  whileHover={{ opacity: 0.88 }}
                  style={{
                    background: "#1a2556", color: "#fff", border: "none",
                    borderRadius: "8px", padding: "11px 32px",
                    fontSize: "13px", fontWeight: 600, cursor: "pointer",
                    fontFamily: "inherit",
                  }}
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
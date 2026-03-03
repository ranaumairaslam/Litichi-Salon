"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Sparkles, Phone, Calendar, ArrowRight } from "lucide-react";

export default function Welcome() {
  const [showPopup, setShowPopup] = useState(false);

  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
  };

  useEffect(() => {
    // Show popup after 1 second delay on every page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Runs on every mount (page load/refresh)

  const handleClose = () => {
    setShowPopup(false);
    // No localStorage - popup will show again on next refresh
  };

  const handleBookNow = () => {
    setShowPopup(false);
    // Add your booking logic here
    // window.location.href = "/booking";
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.4 
            }}
            onClick={(e) => e.stopPropagation()}
            className="popup-container"
            style={{
              background: colors.cardBg,
              borderRadius: "24px",
              maxWidth: "900px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              border: `3px solid ${colors.gold}`,
              position: "relative",
              display: "flex",
              flexDirection: "row",
              maxHeight: "90vh",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: colors.lightGold,
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.gold;
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.lightGold;
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              }}
            >
              <X size={20} style={{ color: colors.text }} />
            </button>

            {/* Left Side - Gold Gradient Section */}
            <div
              className="popup-left"
              style={{
                flex: "1",
                background: `linear-gradient(135deg, ${colors.gold}, ${colors.darkGold})`,
                padding: "3rem 2rem",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "400px",
              }}
            >
              {/* Decorative Circles */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  style={{ display: "inline-block", marginBottom: "1.5rem" }}
                >
                  <Gift size={64} style={{ color: colors.background }} />
                </motion.div>

                <h2
                  style={{
                    color: colors.background,
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    lineHeight: "1.2",
                  }}
                >
                  Welcome to<br />Litchi Salon!
                </h2>

                <p
                  style={{
                    color: colors.background,
                    opacity: 0.95,
                    fontSize: "1.1rem",
                    marginBottom: "2rem",
                  }}
                >
                  Your Beauty, Our Passion
                </p>

                {/* Special Offer Box */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    border: `3px dashed ${colors.gold}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <Sparkles size={24} style={{ color: colors.gold }} />
                    <h3
                      style={{
                        color: colors.text,
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        margin: 0,
                      }}
                    >
                      Special Offer!
                    </h3>
                    <Sparkles size={24} style={{ color: colors.gold }} />
                  </div>
                  <p
                    style={{
                      color: colors.gold,
                      fontSize: "3rem",
                      fontWeight: "bold",
                      margin: "0.5rem 0",
                      lineHeight: 1,
                    }}
                  >
                    20% OFF
                  </p>
                  <p
                    style={{
                      color: colors.text,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    On Your First Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - White Content Section */}
            <div
              className="popup-right"
              style={{
                flex: "1",
                padding: "3rem 2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflowY: "auto",
              }}
            >
              {/* Features */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    color: colors.text,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                  }}
                >
                  Why Choose Us?
                </h3>
                {[
                  { icon: "✨", text: "Premium Beauty Services" },
                  { icon: "👩‍🎨", text: "Expert Professional Stylists" },
                  { icon: "🏆", text: "Award-Winning Salon" },
                  { icon: "💎", text: "Luxury Experience" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                      padding: "0.75rem",
                      background: colors.background,
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.lightGold;
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.background;
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
                    <span style={{ color: colors.text, fontSize: "1rem", fontWeight: "500" }}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div
                style={{
                  background: colors.lightGold,
                  borderRadius: "12px",
                  padding: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Phone size={20} style={{ color: colors.gold }} />
                  <span style={{ color: colors.text, fontSize: "1rem", fontWeight: "600" }}>
                    +92 300 1234567
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Calendar size={20} style={{ color: colors.gold }} />
                  <span style={{ color: colors.text, fontSize: "1rem", fontWeight: "600" }}>
                    Mon-Sat: 10 AM - 8 PM
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <button
                  onClick={handleBookNow}
                  style={{
                    width: "100%",
                    background: colors.gold,
                    color: colors.background,
                    border: "none",
                    borderRadius: "12px",
                    padding: "1rem 1.5rem",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: `0 4px 6px rgba(201, 161, 74, 0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.darkGold;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 6px 12px rgba(201, 161, 74, 0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.gold;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 6px rgba(201, 161, 74, 0.3)`;
                  }}
                >
                  Book Your Appointment
                  <ArrowRight size={20} />
                </button>

                <button
                  onClick={handleClose}
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: colors.text,
                    border: `2px solid ${colors.lightGold}`,
                    borderRadius: "12px",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.lightGold;
                    e.currentTarget.style.borderColor = colors.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = colors.lightGold;
                  }}
                >
                  Maybe Later
                </button>
              </div>

              {/* Fine Print */}
              <p
                style={{
                  textAlign: "center",
                  color: colors.textMuted,
                  fontSize: "0.75rem",
                  marginTop: "1rem",
                  marginBottom: 0,
                }}
              >
                *Offer valid for first-time customers only
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .popup-container {
            flex-direction: column !important;
          }
          .popup-left {
            min-height: auto !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
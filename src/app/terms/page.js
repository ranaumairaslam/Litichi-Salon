"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {

  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C6A87D",
    textDark: "#1F2937",
    textLight: "#6B7280"
  };

  const sections = [
    {
      title: "Appointments",
      text: "Clients are encouraged to book appointments in advance to ensure availability. Walk-ins are welcome but may be subject to waiting times."
    },
    {
      title: "Cancellation Policy",
      text: "If you need to cancel or reschedule an appointment, please notify us at least 24 hours in advance."
    },
    {
      title: "Payments",
      text: "All services must be paid for upon completion. We accept cash, card, and selected digital payment methods."
    },
    {
      title: "Client Responsibility",
      text: "Clients should inform our staff of any allergies, medical conditions, or sensitivities before receiving a service."
    },
    {
      title: "Late Arrivals",
      text: "Late arrivals may result in shortened services or rescheduling depending on availability."
    },
    {
      title: "Hygiene & Safety",
      text: "We follow strict hygiene and sanitation standards to ensure the safety and comfort of our clients."
    },
    {
      title: "Changes to Terms",
      text: "The salon reserves the right to update these terms at any time."
    }
  ];

  return (
    <div style={{ background: colors.background }} className="min-h-screen">

<>   <Header/>

      {/* Page Header */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ color: colors.textDark }}
        >
          Terms of Service
        </motion.h1>

        <p
          className="mt-4 max-w-2xl mx-auto text-lg"
          style={{ color: colors.textLight }}
        >
          Please read our terms carefully before using our salon services.
        </p>
      </section>

      {/* Terms Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">

        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-md"
            style={{ background: colors.cardBg }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: colors.gold }}
            >
              {item.title}
            </h3>

            <p style={{ color: colors.textLight }}>
              {item.text}
            </p>

          </motion.div>
        ))}

      </section>
      <Footer/>
</>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Mail, 
  Phone,
  Home,
  ChevronRight,
  FileText,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

export default function privacy() {
  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
    lightBeige: "#FFF8F0",
    border: "#E8D5B7",
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Eye,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you book an appointment or register on our website, we collect personal information such as your name, email address, phone number, and address."
        },
        {
          subtitle: "Appointment Details",
          text: "We collect information about your service preferences, appointment history, and any special requests you make."
        },
        {
          subtitle: "Payment Information",
          text: "We securely process payment information through encrypted payment gateways. We do not store complete credit card details."
        },
        {
          subtitle: "Technical Information",
          text: "We collect information about how you access our website, including your IP address, browser type, and device information."
        }
      ]
    },
    {
      id: "use-of-information",
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        {
          subtitle: "Service Delivery",
          text: "To provide, maintain, and improve our salon services and send you appointment confirmations and reminders."
        },
        {
          subtitle: "Communication",
          text: "To send you promotional offers, newsletters, and updates about our services (you can opt-out at any time)."
        },
        {
          subtitle: "Customer Support",
          text: "To respond to your inquiries, complaints, and provide customer support."
        },
        {
          subtitle: "Business Operations",
          text: "To analyze usage patterns, improve our website, and develop new services and features."
        }
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits."
        },
        {
          subtitle: "Access Control",
          text: "Only authorized personnel have access to your personal information, and they are bound by confidentiality agreements."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy."
        },
        {
          subtitle: "Data Breach Protocol",
          text: "In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate corrective action."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Shield,
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share information with trusted third parties who assist us in operating our website, conducting business, or serving our customers."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law or to protect our rights, property, or safety."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity."
        },
        {
          subtitle: "No Sale of Data",
          text: "We do not sell, trade, or rent your personal information to third parties for marketing purposes."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: FileText,
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to access and correct your personal information at any time through your account or by contacting us."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request deletion of your personal data, subject to legal and contractual obligations."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal data in a structured, machine-readable format."
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: AlertCircle,
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content."
        },
        {
          subtitle: "Types of Cookies",
          text: "Essential cookies (necessary for site operation), Analytics cookies (to understand usage), and Preference cookies (to remember your settings)."
        },
        {
          subtitle: "Cookie Management",
          text: "You can control cookie settings through your browser preferences. Disabling cookies may affect site functionality."
        },
        {
          subtitle: "Third-Party Cookies",
          text: "We may use third-party analytics services like Google Analytics. These services have their own privacy policies."
        }
      ]
    }
  ];

  const keyPoints = [
    "Your data is encrypted and securely stored",
    "We never sell your personal information",
    "You can access and delete your data anytime",
    "We comply with all data protection regulations",
    "Regular security audits and updates",
  ];

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header />

      {/* Hero Section */}
      <section 
        style={{ 
          backgroundColor: colors.lightBeige,
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              marginBottom: "2rem",
              fontSize: "0.875rem",
              color: colors.textMuted,
            }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center", color: colors.textMuted, textDecoration: "none" }}>
              <Home size={14} />
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: colors.gold, fontWeight: "600" }}>Privacy Policy</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div 
              style={{ 
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: colors.gold,
                marginBottom: "1.5rem",
              }}
            >
              <Shield size={40} style={{ color: colors.background }} />
            </div>

            <h1 
              style={{ 
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                color: colors.text,
                marginBottom: "1rem",
              }}
            >
              Privacy <span style={{ color: colors.gold }}>Policy</span>
            </h1>

            <p 
              style={{ 
                fontSize: "1.125rem",
                color: colors.textMuted,
                maxWidth: "700px",
                margin: "0 auto 2rem",
              }}
            >
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>

            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: colors.lightGold,
                color: colors.text,
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              Last Updated: January 1, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: colors.text,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Quick <span style={{ color: colors.gold }}>Overview</span>
            </h2>

            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    backgroundColor: colors.cardBg,
                    borderRadius: "0.75rem",
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: colors.gold, flexShrink: 0 }} />
                  <span style={{ color: colors.text, fontSize: "0.9rem" }}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "2rem 1.5rem 4rem" }}>
        <div className="max-w-4xl mx-auto">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              id={section.id}
              style={{
                marginBottom: "3rem",
                padding: "2rem",
                backgroundColor: colors.cardBg,
                borderRadius: "1.5rem",
                border: `2px solid ${colors.border}`,
              }}
            >
              {/* Section Header */}
              <div 
                style={{ 
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: `2px solid ${colors.lightGold}`,
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: colors.lightGold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <section.icon size={24} style={{ color: colors.gold }} />
                </div>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    color: colors.text,
                    margin: 0,
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: colors.gold,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.subtitle}
                    </h3>
                    <p
                      style={{
                        color: colors.textMuted,
                        lineHeight: "1.75",
                        fontSize: "1rem",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        style={{ 
          padding: "4rem 1.5rem",
          backgroundColor: colors.lightBeige,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: colors.text,
                marginBottom: "1rem",
              }}
            >
              Questions About <span style={{ color: colors.gold }}>Your Privacy?</span>
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: colors.textMuted,
                marginBottom: "2rem",
              }}
            >
              If you have any questions about our Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>

            <div 
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "500px",
                margin: "0 auto 2rem",
              }}
            >
              <a
                href="mailto:privacy@litchisalon.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: "1rem",
                  backgroundColor: colors.cardBg,
                  color: colors.text,
                  textDecoration: "none",
                  borderRadius: "0.75rem",
                  border: `2px solid ${colors.border}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.gold;
                  e.currentTarget.style.backgroundColor = colors.lightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.backgroundColor = colors.cardBg;
                }}
              >
                <Mail size={20} style={{ color: colors.gold }} />
                <span style={{ fontWeight: "600" }}>privacy@litchisalon.com</span>
              </a>

              <a
                href="tel:+923001234567"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: "1rem",
                  backgroundColor: colors.cardBg,
                  color: colors.text,
                  textDecoration: "none",
                  borderRadius: "0.75rem",
                  border: `2px solid ${colors.border}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.gold;
                  e.currentTarget.style.backgroundColor = colors.lightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.backgroundColor = colors.cardBg;
                }}
              >
                <Phone size={20} style={{ color: colors.gold }} />
                <span style={{ fontWeight: "600" }}>+92 300 1234567</span>
              </a>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: colors.gold,
                  color: colors.background,
                  border: "none",
                  borderRadius: "9999px",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: `0 4px 6px rgba(201, 161, 74, 0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.darkGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.gold;
                }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
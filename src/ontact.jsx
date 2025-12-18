import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Bus,
  Train,
  Navigation as NavIcon,
  Info,
} from "lucide-react";

export default function ContactUs() {
  const navigate = useNavigate();

  // --- THEME CONSTANTS ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";

  /* ---------- SCROLL ANIMATION ---------- */
  const revealRefs = useRef([]);
  revealRefs.current = []; // Reset on each render to prevent duplicates

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  /* ---------- STATE ---------- */
  const [tab, setTab] = useState("bus");

  /* ---------- STYLES ---------- */
  const outer = {
    backgroundColor: "#ccf5d3",
    minHeight: "100vh",
    padding: "40px 0",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    overflowX: "hidden",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const mainTitle = {
    textAlign: "center",
    fontSize: "clamp(30px, 5vw, 40px)",
    color: green,
    fontWeight: "700",
    marginBottom: "10px",
  };

  const subTitle = {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
  };

  const card = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  };

  const gridSplit = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    marginBottom: "25px",
    alignItems: "stretch",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: `2px solid ${borderGreen}`,
    outline: "none",
    fontSize: "16px",
    backgroundColor: "#fff",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "14px",
    backgroundColor: green,
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontSize: "18px",
    marginTop: "auto", // Pushes button to bottom if content is short
    cursor: "pointer",
    fontWeight: "600",
    width: "100%",
    transition: "0.2s",
  };

  const backBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#fff",
    color: green,
    padding: "10px 20px",
    border: `2px solid ${green}`,
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "0.3s",
  };

  const tabBtnBase = {
    flex: 1,
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "0.3s",
    fontSize: "14px",
    minWidth: "100px",
  };

  const listItem = {
    display: "flex",
    gap: "12px",
    marginBottom: "15px",
    alignItems: "flex-start",
    fontSize: "15px",
    lineHeight: "1.5",
  };

  return (
    <div style={outer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .reveal { opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out; }
          .reveal-active { opacity: 1; transform: translateY(0); }
          .card-hover:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
          input:focus, textarea:focus { border-color: ${green} !important; box-shadow: 0 0 0 3px ${lightGreen}; }
          .tab-content-anim { animation: fadeIn 0.4s ease; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @media (max-width: 600px) {
            .grid-stack { grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      <div style={container}>
        <button
          onClick={() => navigate(-1)}
          style={backBtnStyle}
          className="reveal"
          ref={addRef}
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="reveal" ref={addRef}>
          <h1 style={mainTitle}>Contact Us</h1>
          <p style={subTitle}>We're happy to help — reach out anytime!</p>
        </div>

        {/* SECTION 1: FORM & INFO */}
        <div style={gridSplit} className="grid-stack">
          <div style={card} className="reveal card-hover" ref={addRef}>
            <h2
              style={{
                color: green,
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "22px",
              }}
            >
              <Mail size={24} /> Send a Message
            </h2>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
              }}
            >
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Your Email" style={inputStyle} />
              <input
                type="text"
                placeholder="Phone Number"
                style={inputStyle}
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                style={{ ...inputStyle, resize: "none" }}
              ></textarea>
              <button type="submit" style={buttonStyle}>
                Send Message
              </button>
            </form>
          </div>

          <div style={card} className="reveal card-hover" ref={addRef}>
            <h2
              style={{
                color: green,
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "22px",
              }}
            >
              <MapPin size={24} /> Our Details
            </h2>
            <div style={{ flex: 1 }}>
              <div style={listItem}>
                <MapPin size={20} color={green} style={{ flexShrink: 0 }} />
                <span>
                  <b>Address:</b>
                  <br />
                  Tom And Jerry Nursery, No.69 Kodipalya, Kengeri Hobli,
                  Bengaluru 560060
                </span>
              </div>
              <div style={listItem}>
                <Phone size={20} color={green} style={{ flexShrink: 0 }} />
                <span>
                  <b>Phone:</b>
                  <br />
                  +91 99015 12779
                </span>
              </div>
              <div style={listItem}>
                <Mail size={20} color={green} style={{ flexShrink: 0 }} />
                <span>
                  <b>Email:</b>
                  <br />
                  <a
                    href="mailto:jdc.office@jdcsparsha.org"
                    style={{ color: green, textDecoration: "none" }}
                  >
                    jdc.office@jdcsparsha.org
                  </a>
                </span>
              </div>
            </div>
            <div
              style={{
                background: lightGreen,
                padding: "15px",
                borderRadius: "16px",
                border: `2px dashed ${borderGreen}`,
                marginTop: "10px",
              }}
            >
              <h3
                style={{
                  color: green,
                  fontSize: "16px",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  margin: 0,
                }}
              >
                <Info size={18} /> Campus Rules
              </h3>
              <ul
                style={{
                  paddingLeft: "18px",
                  margin: "8px 0 0 0",
                  fontSize: "14px",
                  color: "#444",
                }}
              >
                <li>Please park vehicles outside.</li>
                <li>Parents not allowed inside campus.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: MAP & TRANSPORT */}
        <div style={gridSplit} className="grid-stack">
          <div
            className="reveal card-hover"
            ref={addRef}
            style={{ ...card, padding: "12px", minHeight: "400px" }}
          >
            <iframe
              title="school-location"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "14px", flex: 1 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3444760032943!2d77.4664323!3d12.8851456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0000000001%3A0x0!2zMTLCsDUzJzA2LjUiTiA3N8KwMjcnNTkuMiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div style={card} className="reveal card-hover" ref={addRef}>
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setTab("bus")}
                style={
                  tab === "bus"
                    ? { ...tabBtnBase, background: green, color: "#fff" }
                    : {
                        ...tabBtnBase,
                        color: green,
                        border: `2px solid ${borderGreen}`,
                      }
                }
              >
                <Bus size={16} /> Bus
              </button>
              <button
                onClick={() => setTab("metro")}
                style={
                  tab === "metro"
                    ? { ...tabBtnBase, background: green, color: "#fff" }
                    : {
                        ...tabBtnBase,
                        color: green,
                        border: `2px solid ${borderGreen}`,
                      }
                }
              >
                <Train size={16} /> Metro
              </button>
              <button
                onClick={() => setTab("dir")}
                style={
                  tab === "dir"
                    ? { ...tabBtnBase, background: green, color: "#fff" }
                    : {
                        ...tabBtnBase,
                        color: green,
                        border: `2px solid ${borderGreen}`,
                      }
                }
              >
                <NavIcon size={16} /> Directions
              </button>
            </div>

            <div className="tab-content-anim" style={{ flex: 1 }}>
              {tab === "bus" && (
                <div>
                  <h3 style={{ color: green, margin: "0 0 10px 0" }}>
                    🚌 Bus Routes
                  </h3>
                  <p style={{ fontSize: "14px" }}>
                    <b>Stop:</b> Kodipalya Village
                  </p>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      fontSize: "14px",
                      lineHeight: "1.8",
                    }}
                  >
                    <li>
                      <b>230</b> — Kengeri ↔ Kodipalya
                    </li>
                    <li>
                      <b>241R / 241L</b> — Local Routes
                    </li>
                    <li>
                      <b>225D</b> — Mysore Road Connection
                    </li>
                  </ul>
                </div>
              )}
              {tab === "metro" && (
                <div>
                  <h3 style={{ color: green, margin: "0 0 10px 0" }}>
                    🚇 Metro Access
                  </h3>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      fontSize: "14px",
                      lineHeight: "1.8",
                    }}
                  >
                    <li>
                      <b>Kengeri Metro</b> — 4 km
                    </li>
                    <li>
                      <b>Challaghatta Metro</b> — 5.5 km
                    </li>
                  </ul>
                  <div
                    style={{
                      background: lightGreen,
                      padding: "12px",
                      borderRadius: "12px",
                      marginTop: "10px",
                      fontSize: "13px",
                    }}
                  >
                    Take 241 bus or auto from Kengeri Metro Station.
                  </div>
                </div>
              )}
              {tab === "dir" && (
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <h3 style={{ color: green, marginBottom: "10px" }}>
                    🧭 Navigate
                  </h3>
                  <p style={{ fontSize: "14px", marginBottom: "20px" }}>
                    Launch maps for real-time navigation.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "12px 25px",
                      backgroundColor: green,
                      color: "white",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    📍 Open Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

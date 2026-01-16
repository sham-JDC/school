import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Bus,
  Train,
  Navigation as NavIcon,
  ChevronDown,
  Calendar,
} from "lucide-react";

// Importing the image as requested
import holidaysImg from "./assets/holidays.png";

export default function ContactUs() {
  // --- THEME CONSTANTS ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";

  /* ---------- SCROLL ANIMATION ---------- */
  const revealRefs = useRef([]);
  revealRefs.current = [];

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
  const [showHolidays, setShowHolidays] = useState(false);

  /* ---------- STYLES ---------- */
  const outer = {
    backgroundColor: "#f0fdf4",
    minHeight: "100vh",
    padding: "60px 0",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const card = {
    background: "white",
    border: `1px solid ${lightGreen}`,
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  };

  const gridSplit = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "30px",
    marginBottom: "30px",
  };

  const tabBtnBase = {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "0.3s",
    border: "none",
  };

  return (
    <div style={outer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
          .reveal-active { opacity: 1; transform: translateY(0); }
          .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
          .holiday-drawer {
            max-height: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
          }
          .holiday-drawer.open {
            max-height: 1200px;
            opacity: 1;
            padding-top: 20px;
          }
          @media (max-width: 600px) { .grid-stack { grid-template-columns: 1fr !important; } }
        `}
      </style>

      <div style={container}>
        <div
          style={{ textAlign: "center", marginBottom: "50px" }}
          className="reveal"
          ref={addRef}
        >
          <h1
            style={{
              color: green,
              fontSize: "clamp(32px, 5vw, 42px)",
              fontWeight: "700",
            }}
          >
            Contact Our Campus
          </h1>
          <p style={{ color: "#666", fontSize: "18px" }}>
            We're here to assist with any admissions or general queries.
          </p>
        </div>

        {/* SECTION 1: TOP ROW */}
        <div style={gridSplit} className="grid-stack">
          <div style={card} className="reveal card-hover" ref={addRef}>
            <h2
              style={{
                color: green,
                fontSize: "22px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Mail size={24} /> Get in Touch
            </h2>
            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
                marginBottom: "30px",
                flex: 1,
              }}
            >
              Please use our official form for admissions, feedback, or
              scheduling a campus visit.
            </p>
            <button
              onClick={() =>
                window.open("https://docs.google.com/forms/...", "_blank")
              }
              style={{
                width: "100%",
                padding: "16px",
                background: green,
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Open Google Form
            </button>
          </div>

          <div style={card} className="reveal card-hover" ref={addRef}>
            <h2
              style={{
                color: green,
                fontSize: "22px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MapPin size={24} /> School Details
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                fontSize: "15px",
              }}
            >
              <p>
                <strong>Address:</strong>
                <br />
                JDC SPARSHA, No. 69 Kodipalya, Kengeri, Bengaluru 560060
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +91 99015 12779
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                jdc.office@jdcsparsha.org
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: MAP & BUS */}
        <div style={gridSplit} className="grid-stack">
          <div
            style={{ ...card, padding: "12px", minHeight: "350px" }}
            className="reveal card-hover"
            ref={addRef}
          >
            <iframe
              title="school-location"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "16px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0494054044195!2d77.4578512!3d12.9045331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f704430f897%3A0x6b83f0607149a46a!2sJDC%20SPARSHA%20Group%20of%20Schools!5e0!3m2!1sen!2sin!4v1715858000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div style={card} className="reveal card-hover" ref={addRef}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "25px",
                background: "#f8f9fa",
                padding: "6px",
                borderRadius: "16px",
              }}
            >
              {["bus", "metro", "dir"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTab(type)}
                  style={{
                    ...tabBtnBase,
                    background: tab === type ? green : "transparent",
                    color: tab === type ? "white" : "#666",
                  }}
                >
                  {type === "bus" && <Bus size={18} />}
                  {type === "metro" && <Train size={18} />}
                  {type === "dir" && <NavIcon size={18} />}
                  <span style={{ textTransform: "capitalize" }}>
                    {type === "dir" ? "Directions" : type}
                  </span>
                </button>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              {tab === "bus" && (
                <div>
                  <h4 style={{ margin: "0 0 10px 0", color: green }}>
                    Route: Kodipalya Stop
                  </h4>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      fontSize: "14px",
                      lineHeight: "2",
                      color: "#444",
                    }}
                  >
                    <li>
                      <b>230</b> — Kengeri ↔ Kodipalya
                    </li>
                    <li>
                      <b>241R / 241L</b> — Local Circle Routes
                    </li>
                    <li>
                      <b>225D</b> — Mysore Road Link
                    </li>
                  </ul>
                </div>
              )}
              {tab === "metro" && (
                <div>
                  <h4 style={{ margin: "0 0 10px 0", color: green }}>
                    Metro Connectivity
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#444",
                      lineHeight: "1.6",
                    }}
                  >
                    <b>Kengeri Metro Station:</b> 4.2 km away. <br />
                    Frequent autos and 241 series buses connect the station to
                    the campus.
                  </p>
                </div>
              )}
              {tab === "dir" && (
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  <h4 style={{ margin: "0 0 10px 0", color: green }}>
                    Navigate
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      marginBottom: "20px",
                      color: "#555",
                    }}
                  >
                    Launch Google Maps for real-time turn-by-turn navigation to
                    our campus.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/u9r55X5pP5y4nK9S8"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "12px 25px",
                      backgroundColor: green,
                      color: "white",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    📍 Open in Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: HOLIDAY DROPDOWN */}
        <div style={{ marginTop: "20px" }} className="reveal" ref={addRef}>
          <div
            onClick={() => setShowHolidays(!showHolidays)}
            style={{
              background: "white",
              padding: "24px 32px",
              borderRadius: showHolidays ? "24px 24px 0 0" : "24px",
              border: `1px solid ${lightGreen}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div
                style={{
                  background: lightGreen,
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <Calendar color={green} size={20} />
              </div>
              <h2
                style={{
                  fontSize: "18px",
                  margin: 0,
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                View Holiday Calendar
              </h2>
            </div>
            <ChevronDown
              style={{
                transform: showHolidays ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.4s",
              }}
              color={green}
            />
          </div>

          <div
            className={`holiday-drawer ${showHolidays ? "open" : ""}`}
            style={{
              background: "white",
              border: `1px solid ${lightGreen}`,
              borderTop: "none",
              borderRadius: "0 0 24px 24px",
              padding: showHolidays ? "0 32px 32px 32px" : "0 32px",
            }}
          >
            <img
              src={holidaysImg}
              alt="School Holidays"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                border: `1px solid #eee`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

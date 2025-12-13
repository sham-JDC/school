import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  /* TAB STATE */
  const [tab, setTab] = React.useState("bus");

  /* TAB STYLES */
  const activeTab = {
    padding: "10px 15px",
    background: "#1b7f3a",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
  };

  const inactiveTab = {
    padding: "10px 15px",
    background: "#dcedc8",
    color: "#1b7f3a",
    border: "2px solid #8ac926",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: "#15933bb0",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#f9f1139d",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "30px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e1d90f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f9f1139d")}
      >
        ← Back
      </button>

      {/* Main Card */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#fffbea",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          animation: "fadeSlide 0.8s ease",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              color: "#1b7f3a",
              fontSize: "48px",
              fontWeight: "bold",
              animation: "pop 0.6s ease",
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: "#333", fontSize: "18px" }}>
            We're happy to help — reach out anytime!
          </p>
        </div>

        {/* Contact Form + Info */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* FORM */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              border: "3px solid #8ac926",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              animation: "slideLeft 0.9s ease",
            }}
          >
            <h2 style={{ color: "#1b7f3a", marginBottom: "20px" }}>
              📬 Send Us a Message
            </h2>

            <form
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Your Email" style={inputStyle} />
              <input type="text" placeholder="Your Phone Number" style={inputStyle} />
              <textarea
                rows="5"
                placeholder="Your Message"
                style={textareaStyle}
              ></textarea>

              <button style={buttonStyle}>Send Message</button>
            </form>
          </div>

          {/* INFO */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              border: "3px solid #8ac926",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              animation: "slideRight 0.9s ease",
            }}
          >
            <h2 style={{ color: "#1b7f3a", marginBottom: "20px" }}>
              📍 Our Details
            </h2>

            <p style={infoText}>
              <b>Address:</b><br />
              Tom And Jerry Nursery & Special School,<br />
              Sri Vittalagiri Dhama, No.69 Kodipalya,<br />
              Kengeri Hobli, Bengaluru, Karnataka 560060
            </p>

            <p style={infoText}>
              <b>Phone:</b> 📞 99015 12779
            </p>

            {/* FIXED EMAIL BLOCK */}
            <p style={infoText}>
              <b>Email:</b>
              <a
                href="mailto:jdc.office@jdcsparsha.org"
                style={{
                  color: "#1b7f3a",
                  marginLeft: "8px",
                  textDecoration: "underline",
                }}
              >
                jdc.office@jdcsparsha.org
              </a>
            </p>

            <h3 style={{ marginTop: "25px", color: "#1b7f3a" }}>⚠ Instructions</h3>
            <ul style={{ lineHeight: "1.8", color: "#333" }}>
              <li>Please park your vehicles outside.</li>
              <li>Parents are not allowed inside the campus.</li>
            </ul>
          </div>
        </div>

        {/* MAP + SWITCHABLE MENU */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            animation: "fadeSlide 1.2s ease",
          }}
        >
          {/* MAP */}
          <div
            style={{
              flex: 1.5,
              minWidth: "300px",
              height: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "3px solid #8ac926",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              title="school-location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?ll=12.90217639475008,77.49049120048372&z=19&t=m&output=embed"
            ></iframe>
          </div>

          {/* TABS SIDEBAR */}
          <div
            style={{
              flex: 1,
              minWidth: "260px",
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              border: "3px solid #8ac926",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {/* TAB BUTTONS */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <button onClick={() => setTab("bus")} style={tab === "bus" ? activeTab : inactiveTab}>
                🚌 Bus
              </button>
              <button onClick={() => setTab("metro")} style={tab === "metro" ? activeTab : inactiveTab}>
                🚇 Metro
              </button>
              <button onClick={() => setTab("dir")} style={tab === "dir" ? activeTab : inactiveTab}>
                🧭 Directions
              </button>
            </div>

            {/* TAB CONTENT */}
            <div style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
              {tab === "bus" && (
                <div style={{ animation: "fadeSlide 0.4s ease" }}>
                  <h3 style={{ color: "#1b7f3a" }}>🚌 Bus Routes</h3>
                  <ul>
                    <li><b>Nearest Stop:</b> Kodipalya Village</li>
                    <li>230 — Kengeri → Kodipalya</li>
                    <li>241R — Kambipura Route</li>
                    <li>241L — Kengeri Hobli</li>
                    <li>241N — Kengeri → Kodipalya</li>
                    <li>225D / 225E — Mysore Road</li>
                  </ul>
                </div>
              )}

              {tab === "metro" && (
                <div style={{ animation: "fadeSlide 0.4s ease" }}>
                  <h3 style={{ color: "#1b7f3a" }}>🚇 Nearest Metro Stations</h3>
                  <ul>
                    <li><b>Kengeri Metro Station</b> — 4 km</li>
                    <li><b>Challaghatta Metro Station</b> — 5.5 km</li>
                  </ul>
                  <h4 style={{ color: "#1b7f3a" }}>How to Reach:</h4>
                  <p>
                    Exit Kengeri Metro → Take 241 bus or auto → Get down at Kodipalya → Walk 5–7 minutes.
                  </p>
                </div>
              )}

              {tab === "dir" && (
                <div style={{ animation: "fadeSlide 0.4s ease" }}>
                  <h3 style={{ color: "#1b7f3a" }}>🧭 Get Directions</h3>
                  <p>Open in Google Maps:</p>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Tom+And+Jerry+Nursery+%26+Special+School%2C+Kodipalya%2C+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      padding: "12px 20px",
                      backgroundColor: "#1b7f3a",
                      color: "white",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontSize: "18px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    📍 Open Directions
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>
          {`
            @keyframes pop {
              0% { transform: scale(0.8); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes fadeSlide {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideLeft {
              0% { opacity: 0; transform: translateX(-40px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideRight {
              0% { opacity: 0; transform: translateX(40px); }
              100% { opacity: 1; transform: translateX(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

/* INPUT + BUTTON STYLES */
const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "2px solid #8ac926",
  outline: "none",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "2px solid #8ac926",
  outline: "none",
  fontSize: "16px",
  resize: "none",
};

const buttonStyle = {
  padding: "14px",
  backgroundColor: "#1b7f3a",
  color: "white",
  border: "none",
  borderRadius: "30px",
  fontSize: "18px",
  marginTop: "10px",
  cursor: "pointer",
  transition: "0.3s",
};

const infoText = {
  color: "#333",
  fontSize: "18px",
  lineHeight: "1.6",
};
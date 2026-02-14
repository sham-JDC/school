import React, { useEffect, useRef } from "react";
// Import local assets 1-10
import img1 from "./assets/1.jpg";
import img2 from "./assets/1.jpg";
import img3 from "./assets/1.jpg";
import img4 from "./assets/1.jpg";
import img5 from "./assets/1.jpg";
import img6 from "./assets/1.jpg";
import img7 from "./assets/1.jpg";
import img8 from "./assets/1.jpg";
import img9 from "./assets/1.jpg";
import img10 from "./assets/1.jpg";

const WhyJoinUs = () => {
  // --- THEME CONSTANTS ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";

  /* ---------- SCROLL ANIMATION ---------- */
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  /* ---------- STYLES ---------- */
  const outer = {
    backgroundColor: "#ccf5d3",
    minHeight: "100vh",
    padding: "50px 0",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const mainTitle = {
    textAlign: "center",
    fontSize: "40px",
    color: green,
    fontWeight: "700",
    marginBottom: "20px",
  };

  const subTitle = {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto 60px",
    lineHeight: "1.6",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "34px",
    color: green,
    fontWeight: "700",
    margin: "80px 0 40px",
  };

  const galleryGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  };

  const imageFrame = {
    borderRadius: "16px",
    background: "#fff",
    border: `3px dashed ${borderGreen}`,
    padding: "5px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.35s ease",
  };

  const featureContainer = {
    maxWidth: "850px", // Restrict width to keep list centered and readable
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const listCard = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    display: "flex",
    alignItems: "center",
    gap: "25px",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  };

  const FEATURES = [
    {
      title: "Friendly Atmosphere",
      text: "Personalised care, love, and affection provided in a cordial environment since our inception in 1990.",
      href: "/aboutus",
      img: img5,
    },
    {
      title: "Holistic Development",
      text: "Our mission is to help all children reach their full potential in all aspects of knowledge and values.",
      href: "/prog",
      img: img6,
    },
    {
      title: "Sports & Fitness",
      text: "Engaging physical training using our dedicated play areas to build strength and coordination.",
      href: "/life",
      img: img7,
    },
    {
      title: "Spirituality & Yoga",
      text: "Visiting professionals lead yoga and mindfulness sessions to instill balance and confidence.",
      href: "/life",
      img: img8,
    },
    {
      title: "Creative Arts",
      text: "Instilling human values through music, drawing, and traditional singing sessions.",
      href: "/life",
      img: img9,
    },
    {
      title: "Guided Excursions",
      text: "Educational field trips that expand worldviews and support social development.",
      href: "/life",
      img: img10,
    },
  ];

  const GALLERY = [img1, img2, img3, img4];

  return (
    <div style={outer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .reveal { opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
          .reveal-active { opacity: 1; transform: translateY(0); }
          .card-hover:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.12); }
          .img-zoom img { transition: transform 0.5s ease; }
          .card-hover:hover .img-zoom img { transform: scale(1.1); }

          @media (max-width: 650px) {
            .list-card-item { flex-direction: column; text-align: center; }
            .thumbnail-box { width: 100% !important; height: 180px !important; }
          }
        `}
      </style>

      <div style={container}>
        {/* ---------- HEADER ---------- */}
        <header className="reveal" ref={addRef}>
          <h1 style={mainTitle}>Why Join Us</h1>
          <p style={subTitle}>
            Established in 1990 by Founder Mrs. A. Shakila Banu, we provide a
            unique continuum of education that supports diverse needs and
            imparts quality education with heart.
          </p>
        </header>

        {/* ---------- TOP GALLERY STRIP ---------- */}
        <div style={galleryGrid}>
          {GALLERY.map((src, i) => (
            <div
              key={i}
              ref={addRef}
              className="reveal card-hover"
              style={{ ...imageFrame, height: "220px" }}
            >
              <div
                className="img-zoom"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ---------- EXPLORE SECTION (RIGHT SIDE ONLY / CENTERED) ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          Explore Our World
        </h2>

        <p style={subTitle} className="reveal" ref={addRef}>
          Programmes and services managed by the JDC Sparsha
          Educational Trust help every child grow with confidence.
        </p>

        <div style={featureContainer}>
          {FEATURES.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="reveal card-hover list-card-item"
              ref={addRef}
              style={listCard}
            >
              {/* Thumbnail */}
              <div
                className="thumbnail-box"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: `2px solid ${borderGreen}`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    color: green,
                    margin: "0 0 8px 0",
                    fontSize: "22px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.5",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;

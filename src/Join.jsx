import React, { useEffect, useRef } from "react";

const WhyJoinUs = () => {
  // --- THEME CONSTANTS (From Template) ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";

  /* ---------- SCROLL ANIMATION (From Template) ---------- */
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

  /* ---------- STYLES (Consistent with Template) ---------- */

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
    maxWidth: "700px",
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

  const card = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    height: "100%",
  };

  const imageFrame = {
    borderRadius: "16px",
    background: lightGreen,
    border: `3px dashed ${borderGreen}`,
    padding: "5px", // Small padding between dashed border and image
    overflow: "hidden",
    marginBottom: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.35s ease",
  };

  const splitSection = {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "40px",
    alignItems: "start",
  };

  const listCard = {
    ...card,
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    marginBottom: "20px",
    textDecoration: "none", // Remove underline for links
    color: "inherit",
    cursor: "pointer",
  };

  // Mobile responsiveness for grid
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;

  const FEATURES = [
    {
      title: "Friendly Atmosphere",
      text: "Personalised care with lots of love and affection in a cordial, friendly environment.",
      href: "/about",
      img: "https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Targeted Learning",
      text: "Individual learning programmes for the physical, mental and social development of each child.",
      href: "/programs",
      img: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Sports & Physical Training",
      text: "Basic sports and fitness training using our indoor and outdoor play areas.",
      href: "/sports",
      img: "https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Bhajan, Prayer & Yoga",
      text: "Temple visits, bhajans and yoga sessions conducted by visiting professionals.",
      href: "/activities",
      img: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Art, Music & Drawing",
      text: "Traditional singing and creative drawing sessions that build confidence.",
      href: "/arts",
      img: "https://images.pexels.com/photos/8618065/pexels-photo-8618065.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Field Trips & Therapy",
      text: "Educational outings and after‑school therapy to support every learner.",
      href: "/therapy",
      img: "https://images.pexels.com/photos/8618003/pexels-photo-8618003.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const GALLERY = [
    "https://images.pexels.com/photos/8612922/pexels-photo-8612922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8422243/pexels-photo-8422243.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8422158/pexels-photo-8422158.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8612961/pexels-photo-8612961.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div style={outer}>
      {/* ---------- GLOBAL ANIMATION & FONT STYLES ---------- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

          .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
          }

          .reveal-active {
            opacity: 1;
            transform: translateY(0);
          }

          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          
          /* Only scale image on hover */
          .card-hover:hover .img-zoom img {
            transform: scale(1.1);
          }

          /* Responsive Tweaks */
          @media (max-width: 900px) {
            .split-container {
              grid-template-columns: 1fr !important;
            }
            .list-card-item {
              flex-direction: column;
              text-align: center;
            }
          }
        `}
      </style>

      <div style={container}>
        {/* ---------- HEADER ---------- */}
        <header className="reveal" ref={addRef}>
          <h1 style={mainTitle}>Why Join Us</h1>
          <p style={subTitle}>
            Let your children explore the joy of learning with us in a warm,
            friendly and inspiring campus environment tailored for growth.
          </p>
        </header>

        {/* ---------- TOP GALLERY STRIP ---------- */}
        <div style={galleryGrid}>
          {GALLERY.map((src, i) => (
            <div
              key={i}
              ref={addRef}
              className="reveal card-hover"
              style={{
                ...imageFrame,
                marginBottom: 0,
                height: "220px",
                background: "#fff",
              }}
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ---------- EXPLORE SECTION ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          Explore Our World
        </h2>

        <p
          style={{ ...subTitle, marginBottom: "50px" }}
          className="reveal"
          ref={addRef}
        >
          Carefully designed programmes, activities and support services help
          every child grow with confidence.
        </p>

        <div
          style={
            isMobile
              ? { ...splitSection, gridTemplateColumns: "1fr" }
              : splitSection
          }
          className="split-container"
        >
          {/* LEFT: IMAGE COLLAGE CARD */}
          <div style={card} className="reveal card-hover" ref={addRef}>
            <div style={{ ...imageFrame, height: "300px" }}>
              <img
                src="https://images.pexels.com/photos/8612969/pexels-photo-8612969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Main"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {GALLERY.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "80px",
                    border: `2px solid ${borderGreen}`,
                  }}
                >
                  <img
                    src={src}
                    alt="mini"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FEATURE LIST */}
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: `2px solid ${borderGreen}`,
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      color: green,
                      margin: "0 0 8px 0",
                      fontSize: "20px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
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
    </div>
  );
};

export default WhyJoinUs;

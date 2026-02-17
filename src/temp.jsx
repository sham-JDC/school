import React, { useEffect, useRef } from "react";

// Keep your local import.
// Note: Ensure this file actually exists in your assets folder.
import img1 from "./assets/Nursery Unit1.jpeg";
import img2 from "./assets/Computer Room1.jpg";
import img3 from "./assets/Indoor Gym1.jpeg";
import img4 from "./assets/Outdoor Gym.jpeg";
import img5 from "./assets/Mini Sports Area.jpeg";
import img6 from "./assets/Yoga Day2.jpg";
import img7 from "./assets/Nursery Sports Day1.jpg";
import imgx from "./assets/Nursery Unit2.jpeg";
import imgy from "./assets/NIOS Class.jpg";

const ProgramsServices = () => {
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";

  /* ---------- IMAGE ASSETS (Placeholders) ---------- */
  // I have used high-quality Unsplash images here.
  // You can replace these URLs with your local imports (img2, img3, etc.) later.

  const imgSpecial = img1; // Therapy/Special Ed vibe
  const imgAcademy = imgy; // Classroom/Academy vibe

  const imgComputer = img2;
  const imgIndoorPlay = img3; // Ball pit/Indoor fun
  const imgOutdoor = img4;
  const imgIndoorSports = img5; // Table Tennis/Sports
  const imgPhysical = img7;
  const imgYoga = img6;
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
      { threshold: 0.15 },
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
    marginBottom: "60px",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "34px",
    color: green,
    fontWeight: "700",
    margin: "100px 0 50px",
  };

  const schoolRow = {
    display: "flex",
    gap: "30px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive Grid
    gap: "30px",
  };

  const card = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    display: "flex",
    flexDirection: "column",
  };

  const imageBox = {
    height: "200px",
    borderRadius: "16px",
    background: "#d4f8d4",
    border: `3px dashed ${borderGreen}`,
    marginBottom: "18px",
    overflow: "hidden", // Ensures image stays inside corners
    position: "relative",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  // Data Objects
  const facilities = [
    {
      title: "Computer Lab & AV Room 💻",
      desc: "Smart boards and multimedia learning tools.",
      image: imgComputer,
    },
    {
      title: "Indoor Gym & Play Area 🤸‍♂️",
      desc: "Sensory and motor skill development equipment.",
      image: imgIndoorPlay,
    },
    {
      title: "Outdoor Gym & Play Area 🛝",
      desc: "Swings, slides and outdoor fitness equipment.",
      image: imgOutdoor,
    },
    {
      title: "Indoor Sports Area ⚽",
      desc: "Table tennis, shuttle and group sports activities.",
      image: imgIndoorSports,
    },
    {
      title: "Physical Activities 💪",
      desc: "Daily strength and flexibility training.",
      image: imgPhysical,
    },
    {
      title: "Yoga Sessions 🧘‍♀️",
      desc: "Improves focus, calmness and balance.",
      image: imgYoga,
    },
  ];

  return (
    <div style={outer}>
      {/* ---------- GLOBAL ANIMATION STYLES ---------- */}
      <style>
        {`
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

          /* Zoom effect on image hover */
          .card-hover:hover .card-img {
            transform: scale(1.1);
          }
        `}
      </style>

      <div style={container}>
        {/* ---------- HEADER ---------- */}
        <h1 style={mainTitle} className="reveal" ref={addRef}>
          🏫 JDC SPARSHA Group of Schools
        </h1>

        {/* ---------- SCHOOLS ---------- */}
        <div style={schoolRow}>
          {[
            {
              title: "Tom & Jerry Nursery School",
              img: img1, // Using your local import
              desc: `Pre-primary education with activity-based learning.\n Offering Pre-primary Education for the Normal Children`,
              age: "1 yr 10 months – 6 yrs",
              items: ["Play Group", "Pre-Nursery", "LKG & UKG"],
            },
            {
              title: "Tom & Jerry Special School",
              img: imgx,
              desc: "Therapeutic and educational support for special needs.",
              age: "2 – 30 yrs",
              items: ["Physiotherapy", "Speech Therapy", "Sensory Training"],
            },
            {
              title: "Sparsha Academy (NIOS)",
              img: imgAcademy,
              desc: "Formal education for learning disabilities & slow learners.",
              age: "6 yrs & above",
              items: [
                "Class 1–10 (NIOS)",
                "Flexible Curriculum",
                "Career Roadmap",
              ],
            },
          ].map((s, i) => (
            <div
              key={i}
              ref={addRef}
              className="reveal card-hover"
              style={{ ...card, flex: 1, minWidth: "300px" }}
            >
              {/* Image Rendering */}
              <div style={imageBox}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={imgStyle}
                  className="card-img"
                />
              </div>

              <h3 style={{ color: green, marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ marginBottom: "15px" }}>{s.desc}</p>
              <ul
                style={{
                  paddingLeft: "20px",
                  marginBottom: "15px",
                  color: "#555",
                }}
              >
                {s.items.map((it, idx) => (
                  <li key={idx} style={{ marginBottom: "5px" }}>
                    {it}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  marginTop: "auto",
                  paddingTop: "10px",
                  borderTop: `1px dashed ${borderGreen}`,
                }}
              >
                <b>Age:</b> {s.age}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- INFRASTRUCTURE ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          🏗 Our Infrastructure
        </h2>

        <div style={grid}>
          {facilities.map((f, i) => (
            <div
              key={i}
              ref={addRef}
              className="reveal card-hover"
              style={card}
            >
              <div style={imageBox}>
                <img
                  src={f.image}
                  alt={f.title}
                  style={imgStyle}
                  className="card-img"
                />
              </div>
              <h3 style={{ color: green, marginBottom: "10px" }}>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsServices;

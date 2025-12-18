import React, { useState, useEffect } from "react";

const ProgramsServices = () => {

  // THEME COLORS
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";

  // OUTER FULL-PAGE BACKGROUND (LIGHT GREEN)
  const outer = {
    backgroundColor: "#ccf5d3",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
    padding: "30px 0",
  };

  // MAIN PAGE STYLE
  const page = {
    maxWidth: "1200px",
    margin: "0 auto 30px",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.7",
  };

  // SECTION CARD
  const section = {
    display: "flex",
    gap: "30px",
    padding: "30px",
    borderRadius: "20px",
    marginBottom: "40px",
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    alignItems: "center",
  };

  const text = { flex: 2 };

  const image = {
    flex: 1,
    height: "230px",
    borderRadius: "18px",
    background: "#d4f8d4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: green,
    fontWeight: "700",
    border: `3px dashed ${borderGreen}`,
    fontSize: "17px",
  };

  const title = {
    fontSize: "30px",
    fontWeight: "700",
    color: green,
    marginBottom: "10px",
  };

  const mainTitle = {
    ...title,
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "40px",
  };

  const subhead = {
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "14px",
    color: "#466d1d",
  };

  // SLIDES DATA
  const infraSlides = [
    { title: "Our Infrastructure 🏫", desc: "15,000 Sq.ft campus, safe classrooms, CCTV, UPS backup and sensory-friendly spaces.", img: "Infrastructure" },
    { title: "Computer Lab & AV Room 💻", desc: "Smart boards, projectors & multimedia learning tools.", img: "AV Room" },
    { title: "Indoor Gym & Play Area 🤸‍♂️", desc: "Mini trampolines, balancing beams, sensory tools and more.", img: "Indoor Gym" },
    { title: "Outdoor Gym & Play Area 🛝", desc: "Slides, swings and outdoor fitness equipment.", img: "Outdoor Play" },
    { title: "Indoor Sports Area ⚽", desc: "Table Tennis, Cricket, Shuttle, Volleyball and more.", img: "Sports Area" },
    { title: "Physical Activities 💪", desc: "Daily exercises to improve strength, flexibility and posture.", img: "Physical Training" },
    { title: "Yoga Sessions 🧘‍♀️", desc: "Guided yoga to improve focus, calmness and balance.", img: "Yoga" },
    { title: "Transport Services 🚐", desc: "3 Vans with escorts. One fitted with GPS + CCTV.", img: "Transport" }
  ];

  const [index, setIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(null);

  const [hovered, setHovered] = useState(false); // ⭐ NEW FIX

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex(i => (i + 1) % infraSlides.length);
  const prevSlide = () => setIndex(i => (i - 1 + infraSlides.length) % infraSlides.length);

  const prevIndex = (index - 1 + infraSlides.length) % infraSlides.length;
  const nextIndex = (index + 1) % infraSlides.length;

  // CAROUSEL STYLES
  const carouselContainer = {
    position: "relative",
    width: "100%",
    height: "320px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "70px",
    marginTop: "10px",
  };

  const slideBase = {
    width: "450px",
    height: "260px",
    borderRadius: "20px",
    padding: "20px",
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "all 0.35s ease",
    position: "absolute"
  };

  const leftSlide = {
    ...slideBase,
    transform: "translateX(-270px) scale(0.85)",
    opacity: 0.4,
    zIndex: 1,
  };

  const centerSlide = {
    ...slideBase,
    transform: "translateX(0) scale(1)",
    opacity: 1,
    zIndex: 3,
  };

  const rightSlide = {
    ...slideBase,
    transform: "translateX(270px) scale(0.85)",
    opacity: 0.4,
    zIndex: 1,
  };

  // ⭐ IMAGE ONLY HOVER ZOOM — PREMIUM
  const imageBox = {
    flex: 1,
    height: "180px",
    background: "#d4f8d4",
    borderRadius: "14px",
    border: `3px dashed ${borderGreen}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    color: green,
    transition: "all 0.4s ease",
  };

  const imageHover = {
    transform: "scale(1.5)",
    boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
    zIndex: 50,
  };

  const textBox = { flex: 2 };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "32px",
    fontWeight: "900",
    color: green,
    cursor: "pointer",
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "50%",
    border: `3px solid ${borderGreen}`,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={outer}>

      {/* BACK BUTTON */}
      <button
        onClick={() => window.location.href = "/"}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "10px 18px",
          backgroundColor: green,
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        ◀ Back
      </button>

      <div style={page}>

        <h1 style={mainTitle}>🌈 Programs & Services 🌟</h1>

        {/* --------- SECTIONS START --------- */}
        <div style={section}>
          <div style={text}>
            <h2 style={title}>Tom and Jerry Nursery School 🏫</h2>
            <p>A joyful learning space for early childhood development.</p>
            <h3 style={subhead}>Services Offered:</h3>
            <ul>
              <li>Play Group</li>
              <li>Pre-Nursery</li>
              <li>LKG</li>
              <li>UKG</li>
            </ul>
            <p><strong>Age:</strong> 1 year 10 months – 6 years</p>
          </div>
          <div style={image}>Nursery Image</div>
        </div>

        <div style={section}>
          <div style={text}>
            <h2 style={title}>Tom & Jerry Special School 🌟</h2>
            <p>Support for children & adults with developmental delays.</p>
            <h3 style={subhead}>Services:</h3>
            <ul style={{ columns: 2 }}>
              <li>Physiotherapy</li>
              <li>Speech Therapy</li>
              <li>Sensory Training</li>
              <li>Cognitive Skills</li>
              <li>Communication Skills</li>
              <li>Emotional Skills</li>
              <li>Adaptive Skills</li>
            </ul>
            <p><strong>Age:</strong> 2 – 30 years</p>
          </div>
          <div style={image}>Special School</div>
        </div>
        {/* --------- SECTIONS END --------- */}

        <h2 style={{ fontSize: "34px", textAlign: "center", color: green, marginTop: "20px" }}>
          🌟 Our School Facilities 🌟
        </h2>

        {/* --------- CAROUSEL --------- */}
        <div style={carouselContainer}>

          {/* LEFT */}
          <div style={leftSlide} onClick={() => setEnlarged(prevIndex)}>
            <div style={textBox}>
              <h3 style={{ color: green }}>{infraSlides[prevIndex].title}</h3>
              <p>{infraSlides[prevIndex].desc}</p>
            </div>
            <div style={imageBox}>{infraSlides[prevIndex].img}</div>
          </div>

          {/* CENTER — IMAGE ZOOM ONLY */}
          <div style={centerSlide} onClick={() => setEnlarged(index)}>
            <div style={textBox}>
              <h3 style={{ color: green }}>{infraSlides[index].title}</h3>
              <p>{infraSlides[index].desc}</p>
            </div>

            <div
              style={hovered ? { ...imageBox, ...imageHover } : imageBox}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {infraSlides[index].img}
            </div>
          </div>

          {/* RIGHT */}
          <div style={rightSlide} onClick={() => setEnlarged(nextIndex)}>
            <div style={textBox}>
              <h3 style={{ color: green }}>{infraSlides[nextIndex].title}</h3>
              <p>{infraSlides[nextIndex].desc}</p>
            </div>
            <div style={imageBox}>{infraSlides[nextIndex].img}</div>
          </div>

          {/* ARROWS */}
          <div style={{ ...arrowStyle, left: "-60px" }} onClick={prevSlide}>◀</div>
          <div style={{ ...arrowStyle, right: "-60px" }} onClick={nextSlide}>▶</div>

        </div>
      </div>
    </div>
  );
};

export default ProgramsServices;
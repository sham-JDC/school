import React, { useEffect, useRef } from "react";
import {
  Users,
  Award,
  Heart,
  GraduationCap,
  FileText,
  CheckCircle,
} from "lucide-react";
import img1 from "./assets/shan4.jpg";
import img2 from "./assets/shakila2.jpg";
import img3 from "./assets/Nursery Unit1.jpeg";
import img4 from "./assets/Mini Sports Area.jpeg";
import img5 from "./assets/Outing3.jpg";

const AboutUsSection = () => {
  // --- THEME CONSTANTS ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";

  /* ---------- SCROLL ANIMATION ---------- */
  const revealRefs = useRef([]);
  revealRefs.current = []; // Reset on render

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
    maxWidth: "1100px",
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
    margin: "80px 0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  };

  const grid3 = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  };

  const card = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
    marginBottom: "30px",
    height: "100%",
    boxSizing: "border-box",
  };

  const imageFrame = {
    borderRadius: "16px",
    background: lightGreen,
    border: `3px dashed ${borderGreen}`,
    overflow: "hidden",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.35s ease",
  };

  const highlightBox = {
    backgroundColor: lightGreen,
    borderLeft: `5px solid ${green}`,
    padding: "20px",
    borderRadius: "8px",
    margin: "20px 0",
    color: green,
    fontWeight: "600",
  };

  const timelineItem = {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
    paddingBottom: "15px",
    borderBottom: `1px dashed ${borderGreen}`,
  };

  const yearBadge = {
    backgroundColor: green,
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "20px",
    fontWeight: "700",
    height: "fit-content",
    minWidth: "80px",
    textAlign: "center",
  };

  const listItem = {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
    alignItems: "start",
  };

  // Data
  const trustees = [
    {
      name: "A. Shakila Banu",
      role: "Founder & Managing Trustee",
      image: img2, // Assigned from your list
      description:
        "A passionate and dedicated teacher with more than 40 years of experience in educating children. She is the Principal and Head for all our Schools.",
    },
    {
      name: "R. Shanmuga Prasad",
      role: "Trustee",
      image: img1, // Assigned from your list
      description:
        "Diversified industrial experience of well over 37 years in senior management positions. He is the Head of Finance and Administration.",
    },
    {
      name: "Dr. Shamanth Ph.D",
      role: "Trustee",
      image: "./assets/shan2.png", // Assigned from your list
      description:
        "He foresees technological upgrades and IT services enablement in all school operations, implementing modern systems as necessary.",
    },
  ];

  const timeline = [
    { year: "1990", event: "Tom and Jerry Nursery School established" },
    {
      year: "1993",
      event: "Tom and Jerry Special School born as a separate entity",
    },
    {
      year: "2003",
      event: "Sparsha Academy formed for continuum of education",
    },
    { year: "2004", event: "JDC Sparsha Educational Trust established" },
  ];

  return (
    <div style={outer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
          .reveal-active { opacity: 1; transform: translateY(0); }
          .card-hover:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
          .img-zoom { transition: transform 0.5s ease; width: 100%; height: 100%; object-fit: cover; }
          .card-hover:hover .img-zoom { transform: scale(1.05); }
          p { line-height: 1.7; margin-bottom: 15px; color: #444; }
        `}
      </style>

      <div style={container}>
        <h1 style={mainTitle} className="reveal" ref={addRef}>
          About Us
        </h1>

        {/* ---------- HERO IMAGES (UPDATED PATHS) ---------- */}
        <div style={grid3}>
          {[img3, img4, img5].map((src, i) => (
            <div
              key={i}
              style={{ ...imageFrame, height: "260px" }}
              className="reveal card-hover"
              ref={addRef}
            >
              <img src={src} alt={`About ${i}`} className="img-zoom" />
            </div>
          ))}
        </div>

        {/* ---------- OUR STORY ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          <Heart size={34} color={green} /> Our Story
        </h2>

        <div style={card} className="reveal card-hover" ref={addRef}>
          <p>
            Tom and Jerry Nursery School blossomed way back in the year 1990 as
            a regular school with children in the age group of 2 to 5 years.
          </p>
          <div style={highlightBox}>
            The remarkable improvement in special needs students ignited the
            mission of Mrs. Banu towards the special children.
          </div>
          <p>
            JDC SPARSHA management further realised the need for continuum of
            education roadmap especially for the special children and formed
            Sparsha Academy in the year 2003.
          </p>

          <h3 style={{ color: green, marginTop: "30px", marginBottom: "20px" }}>
            Key Milestones
          </h3>
          <div>
            {timeline.map((item, index) => (
              <div key={index} style={timelineItem}>
                <div style={yearBadge}>{item.year}</div>
                <div
                  style={{
                    fontWeight: "600",
                    color: "#333",
                    alignSelf: "center",
                  }}
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- TRUSTEES (UPDATED WITH PHOTOS) ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          <Users size={34} color={green} /> Board of Trustees
        </h2>

        <div style={grid3}>
          {trustees.map((trustee, index) => (
            <div
              key={index}
              ref={addRef}
              className="reveal card-hover"
              style={card}
            >
              <div
                style={{ ...imageFrame, height: "220px", borderStyle: "solid" }}
              >
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="img-zoom"
                  style={{ objectPosition: "top" }}
                />
              </div>
              <h3
                style={{
                  color: green,
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                {trustee.name}
              </h3>
              <h4
                style={{
                  color: "#777",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  marginBottom: "15px",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                {trustee.role}
              </h4>
              <p style={{ fontSize: "14px", textAlign: "center" }}>
                {trustee.description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- OPERATIONS TEAM ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          <GraduationCap size={34} color={green} /> Operations Team
        </h2>
        <div style={card} className="reveal card-hover" ref={addRef}>
          <p style={{ marginBottom: 0 }}>
            Our schools are supported by a dedicated group of professionals
            including School Operations Incharges, Special Educators,
            Therapists, and support staff for arts, yoga, and transport.
          </p>
        </div>

        {/* ---------- ACCREDITATIONS ---------- */}
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          <Award size={34} color={green} /> Accreditations & Affiliations
        </h2>
        <div style={card} className="reveal card-hover" ref={addRef}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {[
              { name: "80G", authority: "Income Tax Department" },
              { name: "Darpan", authority: "Charity Commissioner" },
            ].map((acc, index) => (
              <div
                key={index}
                style={{
                  background: lightGreen,
                  padding: "20px",
                  borderRadius: "12px",
                  border: `2px solid ${green}`,
                  textAlign: "center",
                }}
              >
                <strong
                  style={{ color: green, display: "block", fontSize: "1.2rem" }}
                >
                  {acc.name}
                </strong>
                <span style={{ fontSize: "0.9rem" }}>{acc.authority}</span>
              </div>
            ))}
          </div>

          <h3 style={{ color: green, marginBottom: "15px" }}>Affiliations</h3>
          <div style={{ marginBottom: "30px" }}>
            {[
              "Tom and Jerry Nursery School: Karnataka Govt",
              "Tom and Jerry Special School: Dept of Women and Child Development",
              "Sparsha Academy: National Institute of Open Schooling",
            ].map((aff, index) => (
              <div key={index} style={listItem}>
                <CheckCircle
                  size={18}
                  color={green}
                  style={{ flexShrink: 0, marginTop: "4px" }}
                />
                <span>{aff}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

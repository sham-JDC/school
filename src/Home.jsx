import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, Clock, Heart, BookOpen, Users } from "lucide-react";
// Ensure you have these images in your assets folder or replace with placeholders
import image from "./assets/Nursery Unit1.jpeg";
import image1 from "./assets/Secret Santa1.jpg";
import image2 from "./assets/Childrens Day with Naseema.jpg";

const Home = () => {
  // --- THEME CONSTANTS ---
  const green = "#1b7f3a";
  const yellowBg = "#fffbea";
  const borderGreen = "#8ac926";
  const lightGreen = "#d4f8d4";
  const darkGreen = "#0f4c23";

  // --- SLIDER STATE ---
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [image, image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // --- SCROLL ANIMATION ---
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
      { threshold: 0.1 },
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // --- DATA: HISTORY TIMELINE ---
  const historyEvents = [
    {
      year: "1990",
      title: "The Beginning",
      icon: <Clock size={24} color="#fff" />,
      text: "Tom and Jerry Nursery School blossomed as a regular school catering to children aged 2 to 5 years, marking the start of our journey in early childhood education.",
    },
    {
      year: "1991-1992",
      title: "The Turning Point",
      icon: <Heart size={24} color="#fff" />,
      text: "A 5-year-old physically challenged brother of a student visited the school. Noticed by Mrs. Banu, he began attending for a few hours. Unable to sit or perform activities initially, he showed remarkable progress over the ensuing months. This improvement delighted his parents and ignited Mrs. Banu's mission towards special education.",
    },
    {
      year: "1993",
      title: "Tom and Jerry Special School",
      icon: <Users size={24} color="#fff" />,
      text: "Happy parents helped spread the word about the improvement in their special children. As numbers rose, Tom and Jerry Special School was born as a separate entity to dedicatedly serve children with special needs.",
    },
    {
      year: "2003",
      title: "Sparsha Academy",
      icon: <BookOpen size={24} color="#fff" />,
      text: "The management realized the need for a continuum of education, especially for special children. Sparsha Academy was formed to provide an educational roadmap for learning disabilities and slow learners.",
    },
    {
      year: "2004",
      title: "JDC Sparsha Educational Trust",
      icon: <Users size={24} color="#fff" />,
      text: "Established by Founder and Managing Trustee Mrs. A. Shakila Banu. Named after our Great Grand Parents, the Trust ensures compliance with statutory requirements and manages all three institutions.",
    },
  ];

  // --- STYLES ---
  const outer = {
    backgroundColor: "#ccf5d3",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    overflowX: "hidden",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  };

  const card = {
    background: yellowBg,
    border: `3px solid ${borderGreen}`,
    borderRadius: "22px",
    padding: "15px 30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "all 0.35s ease",
    position: "relative",
    overflow: "hidden",
    height: "100%",
  };

  const iconBox = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: lightGreen,
    border: `3px dashed ${borderGreen}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    margin: "0 auto 20px",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "clamp(2rem, 4vw, 36px)",
    color: green,
    fontWeight: "700",
    marginBottom: "50px",
    position: "relative",
    display: "inline-block",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <div style={outer}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');

          /* Scroll Animations */
          .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
          }
          .reveal-active {
            opacity: 1;
            transform: translateY(0);
          }

          /* Card Hover Effect */
          .card-hover:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(27, 127, 58, 0.15);
            border-color: ${green};
          }

          /* Timeline Styles */
          .timeline-item {
            position: relative;
            padding-left: 50px;
            margin-bottom: 40px;
          }
          .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: -40px;
            width: 4px;
            background: ${borderGreen};
          }
          .timeline-item:last-child::before {
            bottom: 0;
          }
          .timeline-dot {
            position: absolute;
            left: -20px;
            top: 0;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: ${green};
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid #fff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          /* Animations */
          @keyframes zoomSlow {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section
        style={{
          position: "relative",
          height: "90vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === activeSlide ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 1,
              animation:
                index === activeSlide
                  ? "zoomSlow 15s infinite alternate"
                  : "none",
            }}
          />
        ))}

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(11, 61, 27, 0.7)",
            zIndex: 2,
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            color: "white",
            padding: "20px",
          }}
          className="reveal"
          ref={addRef}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              marginBottom: "20px",
              textShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            JDC SPARSHA Group of Schools
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              maxWidth: "800px",
              margin: "0 auto",
              fontWeight: "300",
              lineHeight: "1.6",
            }}
          >
            Imparting Excellence for Diverse Educational Needs
          </p>
          <div style={{ marginTop: "60px", animation: "bounce 2s infinite" }}>
            <ArrowDown size={48} color="#fff" />
          </div>
        </div>
      </section>

      {/* --- OUR JOURNEY (HISTORY) --- */}
      <section style={container}>
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          Our Journey
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            paddingLeft: "20px",
          }}
        >
          {historyEvents.map((event, i) => (
            <div key={i} className="timeline-item reveal" ref={addRef}>
              <div className="timeline-dot">{event.icon}</div>
              <div
                style={{
                  background: "#fff",
                  padding: "20px 25px",
                  borderRadius: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  borderLeft: `5px solid ${green}`,
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: borderGreen,
                    fontWeight: "800",
                    fontSize: "1.2rem",
                    marginBottom: "5px",
                  }}
                >
                  {event.year}
                </span>
                <h3
                  style={{
                    color: darkGreen,
                    fontSize: "1.4rem",
                    marginBottom: "10px",
                  }}
                >
                  {event.title}
                </h3>
                <p style={{ color: "#555", lineHeight: "1.6" }}>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OVERVIEW SCHOOLS SECTION --- */}
      <section style={{ backgroundColor: lightGreen, padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={sectionTitle} className="reveal" ref={addRef}>
            Our Institutions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                icon: "🐱",
                title: "Tom and Jerry Nursery School",
                text: "Established 1990. Our foundation school catering to regular children aged 2-5 years with love and care.",
              },
              {
                icon: "🌟",
                title: "Tom and Jerry Special School",
                text: "Established 1993. Born from a mission to help special children perform regular activities and achieve progress.",
              },
              {
                icon: "🎓",
                title: "Sparsha Academy",
                text: "Established 2003. Providing a roadmap and continuum of education for children with learning disabilities.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={card}
                className="reveal card-hover"
                ref={addRef}
              >
                <div style={iconBox}>{item.icon}</div>
                <h3
                  style={{
                    textAlign: "center",
                    color: green,
                    marginBottom: "15px",
                    fontSize: "1.4rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    color: "#555",
                    fontSize: "1.1rem",
                    lineHeight: "1.5",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST INFO --- */}
      <section style={container}>
        <div
          className="reveal"
          ref={addRef}
          style={{
            background: "#fff",
            borderRadius: "30px",
            padding: "40px",
            border: `2px dashed ${green}`,
            textAlign: "center",
          }}
        >
          <h3 style={{ color: green, fontSize: "2rem", marginBottom: "20px" }}>
            JDC Sparsha Educational Trust
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#444",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            The Trust was established in <strong>2004</strong> by Founder and
            Managing Trustee <strong>Mrs. A. Shakila Banu</strong>. Named in
            honor of our Great Grandparents, it serves as the backbone for all
            our schools, managing statutory compliance and operational
            requirements to ensure excellence in education since inception.
          </p>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section
        style={{
          background: `linear-gradient(135deg, ${green} 0%, ${darkGreen} 100%)`,
          padding: "80px 20px",
        }}
      >
        <div style={{ ...container, padding: 0 }}>
          <div
            className="reveal"
            ref={addRef}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "30px",
              padding: "50px",
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h2
                style={{
                  color: green,
                  fontSize: "2.2rem",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Our Mission
              </h2>
              <p
                style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}
              >
                Our mission is to{" "}
                <strong style={{ color: borderGreen }}>IMPART</strong> quality
                education, Help all the children gain overall knowledge,
                <strong style={{ color: borderGreen }}> INSPIRE</strong> them to
                reach their full potential in all aspects,
                <strong style={{ color: borderGreen }}> INSTILL</strong> good
                human values and confidence.
              </p>
            </div>

            <div
              style={{
                flex: 1,
                minWidth: "300px",
                borderLeft: `4px dashed ${borderGreen}`,
                paddingLeft: "40px",
              }}
            >
              <h2
                style={{
                  color: green,
                  fontSize: "2.2rem",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Our Vision
              </h2>
              <p
                style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}
              >
                Our vision is to offer unique services and inculcate necessary
                skillsets for a seamless adaptability and employability in our
                Society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section style={container}>
        <h2 style={sectionTitle} className="reveal" ref={addRef}>
          Core Values
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              num: "",
              title: "Low Student-Teacher Ratio",
              text: "We maintain limited class sizes to guarantee individual attention. This allows our educators to understand the unique learning pace of every child and provide the specific guidance they need.",
            },
            {
              num: "",
              title: "Personalised Care",
              text: "We believe education extends beyond books. We treat every child with deep empathy and affection, tailoring our support to meet their specific physical, emotional, and cognitive requirements.",
            },
            {
              num: "",
              title: "Friendly Atmosphere",
              text: "Our campus is a stress-free zone. We cultivate a warm, family-like environment where children feel safe to explore, express themselves, and grow without the fear of judgment.",
            },
          ].map((val, i) => (
            <div
              key={i}
              style={{ ...card, padding: "20px" }}
              className="reveal card-hover"
              ref={addRef}
            >
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "900",
                  color: lightGreen,
                  lineHeight: "0.8",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {val.num}
              </span>
              <h4
                style={{
                  fontSize: "1.5rem",
                  color: green,
                  marginBottom: "15px",
                }}
              >
                {val.title}
              </h4>
              <p style={{ color: "#555", lineHeight: "1.6" }}>{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FUTURE GOALS --- */}
      <section
        style={{
          backgroundColor: green,
          color: "white",
          padding: "100px 20px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "800px",
            margin: "0 auto",
          }}
          className="reveal"
          ref={addRef}
        >
          <h2 style={{ fontSize: "3rem", marginBottom: "30px", color: "#fff" }}>
            Future Goals
          </h2>
          <p
            style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#e8f5e9" }}
          >
            Our future goals include creating a Vocational School offering
            Vocational Education and Training Programme as per National
            Institute of Open Schooling (NIOS) curriculum.
          </p>
        </div>

        {/* Animated Shapes */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: borderGreen,
            opacity: "0.2",
            top: "-50px",
            left: "-50px",
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "#fff",
            opacity: "0.1",
            bottom: "-100px",
            right: "-100px",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Home;

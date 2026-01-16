import React, { useEffect, useState } from "react";
// Slide images
import image from "./assets/Yoga Session1.jpg";
import image1 from "./assets/Secret Santa1.jpg";
import image2 from "./assets/Childrens Day with Naseema.jpg";
// Program Card images
import card1 from "./assets/1.jpg";
import card2 from "./assets/1.jpg";
import card3 from "./assets/1.jpg";
import card4 from "./assets/1.jpg";
import card5 from "./assets/1.jpg";
import card6 from "./assets/1.jpg";

export default function Studentlife() {
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="student-life-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .student-life-page {
          --primary-dark: #064e3b;
          --primary: #059669;
          --primary-light: #d1fae5;
          --accent: #10b981;
          --text-main: #1e293b;
          --text-muted: #64748b;
          --bg-surface: #ffffff;
          --bg-body: #f0fdf4;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--bg-body);
          color: var(--text-main);
          line-height: 1.6;
          /* ✅ REMOVED INNER SCROLLBAR: Ensure overflow is handled by the main window only */
          overflow: visible; 
          width: 100%;
          /* ✅ COVER TILL TOP: Removed padding-top so the hero starts at Y=0 */
          padding-top: 0; 
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }

        /* ✅ HERO SLIDESHOW - FULL VIEWPORT */
        .hero {
          position: relative;
          height: 100vh; /* Set to 100vh to cover the entire screen till the bottom */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .hero-slide {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
        }

        .hero-slide.active {
          opacity: 1;
          animation: zoomSlow 15s infinite alternate;
        }

        @keyframes zoomSlow {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.4) 0%, rgba(6, 78, 59, 0.7) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: clamp(3rem, 10vw, 5rem);
          font-weight: 800;
          margin-bottom: 12px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .hero-content p {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 500;
          color: var(--primary-light);
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        /* ✅ INTRO SECTION */
        .intro-section {
          background: #ffffff;
          padding: 100px 24px;
        }

        .intro-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        /* ✅ CENTERED PROGRAMS GRID */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px;
          text-align: center;
        }

        .section-title {
          font-size: 2.8rem;
          color: var(--primary-dark);
          margin-bottom: 70px;
          font-weight: 800;
          position: relative;
          display: inline-block;
        }
         
        .cta-section {
          background: var(--primary-dark);
          padding: 8px 4px;
          text-align: center;
          width: 100%;       /* Ensures full width */
          margin: 0;         /* Removes the 40px/24px margins */
          border-radius: 0;  /* Removes the rounded corners */
          color: white;
          
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 6px;
          background: var(--primary);
          border-radius: 4px;
          margin: 20px auto 0;
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 380px));
          gap: 40px;
          justify-content: center; 
          width: 100%;
        }

        .activity-card {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 1px solid #eef2f6;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .activity-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(5, 150, 105, 0.15);
        }

        .activity-image-container {
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .activity-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .activity-card:hover .activity-img {
          transform: scale(1.1);
        }

        .activity-content {
          padding: 35px;
          flex-grow: 1;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          background: var(--bg-body);
          padding: 22px;
          border-radius: 16px;
          margin-top: 18px;
        }

        .activity-list li {
          padding: 10px 0;
          color: var(--text-main);
          font-size: 1rem;
          position: relative;
          padding-left: 28px;
        }

        .activity-list li:before {
          content: "✔";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 800;
        }

        .stats-section {
          background: var(--primary-dark);
          color: #fff;
          padding: 120px 24px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 50px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        @media (max-width: 768px) {
          .activities-grid { grid-template-columns: 1fr; }
          .hero { height: 80vh; }
        }
      `}</style>

      {/* HERO SLIDESHOW - COVERS TILL THE TOP */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content reveal-on-scroll">
          <h1>Student Life</h1>
          <p>Let Your Spirit Soar</p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section reveal-on-scroll">
        <div className="intro-content">
          <h2>Our Heritage of Learning</h2>
          <p>
            Building on a legacy that began in 1990 with the establishment of
            Tom and Jerry Nursery School, we believe that true learning
            transcends the classroom.
          </p>
          <p>
            Today, JDC Sparsha Group of Schools and Sparsha Academy provide a
            nurturing environment where extracurricular activities complement
            academic studies, fostering both personal growth and peer
            confidence.
          </p>
        </div>
      </section>

      {/* PROGRAMS CARDS - PROPERLY CENTERED */}
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Our Programs</h2>

        <div className="activities-grid">
          {/* Card 1 */}
          <div className="activity-card reveal-on-scroll stagger-1">
            <div className="activity-image-container">
              <img
                src={card1}
                alt="Physical Activities"
                className="activity-img"
              />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Physical Activities</h3>
              <p className="activity-description">
                Develop strength and lifelong fitness habits through programs
                tailored for every child's unique abilities.
              </p>
              <ul className="activity-list">
                <li>Flexibility training</li>
                <li>Strength building</li>
                <li>Fitness challenges</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="activity-card reveal-on-scroll stagger-2">
            <div className="activity-image-container">
              <img
                src={card2}
                alt="Yoga & Mindfulness"
                className="activity-img"
              />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Yoga & Mindfulness</h3>
              <p className="activity-description">
                Visiting professionals lead sessions focused on inner peace,
                balance, and physical coordination.
              </p>
              <ul className="activity-list">
                <li>Professional-led yoga</li>
                <li>Guided meditation</li>
                <li>Coordination games</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="activity-card reveal-on-scroll stagger-3">
            <div className="activity-image-container">
              <img src={card3} alt="Arts & Culture" className="activity-img" />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Arts & Culture</h3>
              <p className="activity-description">
                Celebrate heritage and creativity through performing arts,
                music, and local cultural experiences.
              </p>
              <ul className="activity-list">
                <li>Music and Bhajans</li>
                <li>Dance performances</li>
                <li>Drawing & Art classes</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="activity-card reveal-on-scroll stagger-1">
            <div className="activity-image-container">
              <img src={card4} alt="Excursions" className="activity-img" />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Excursions</h3>
              <p className="activity-description">
                Educational field trips to museums, heritage sites, and nature
                parks that bring learning to life.
              </p>
              <ul className="activity-list">
                <li>Museum visits</li>
                <li>Heritage site tours</li>
                <li>Nature explorations</li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="activity-card reveal-on-scroll stagger-2">
            <div className="activity-image-container">
              <img
                src={card5}
                alt="Events & Talents"
                className="activity-img"
              />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Events & Talents</h3>
              <p className="activity-description">
                Annual celebrations and competitive meets designed to boost
                student confidence and morale.
              </p>
              <ul className="activity-list">
                <li>Special Olympics</li>
                <li>Interschool Art meets</li>
                <li>Annual celebrations</li>
              </ul>
            </div>
          </div>

          {/* Card 6 */}
          <div className="activity-card reveal-on-scroll stagger-3">
            <div className="activity-image-container">
              <img src={card6} alt="Communication" className="activity-img" />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Communication</h3>
              <p className="activity-description">
                Storytelling, skits, and public speaking exercises that help
                children share their voices.
              </p>
              <ul className="activity-list">
                <li>Creative storytelling</li>
                <li>Skits and role-play</li>
                <li>Expression games</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="stats-section reveal-on-scroll">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>450+</h3>
            <p>Enriched Activities</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Sq. Ft Activity Space</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Participation Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}

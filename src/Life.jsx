import React, { useEffect, useState } from "react";

export default function Studentlife() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --primary-dark: #064e3b;   /* Deep Forest */
          --primary: #059669;        /* Emerald */
          --primary-light: #d1fae5;  /* Mint */
          --accent: #10b981;         /* Bright Green */
          --text-main: #1e293b;
          --text-muted: #64748b;
          --bg-surface: #ffffff;
          --bg-body: #f0fdf4;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--bg-body);
          color: var(--text-main);
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* --- Animation Classes --- */
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

        /* ✅ HERO SECTION */
        .hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.3) 0%, rgba(6, 78, 59, 0.6) 100%);
          z-index: 1;
        }

        /* ✅ TAGLINE BOX (Glassmorphism) */
        .tagline-header {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          padding: 60px 80px;
          border-radius: 32px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.6);
          max-width: 800px;
          margin: 0 20px;
        }

        .tagline-header h1 {
          font-size: 3.5rem;
          color: var(--primary-dark);
          margin-bottom: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .tagline-header p {
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 600;
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

        .intro-content h2 {
          font-size: 2.5rem;
          color: var(--primary-dark);
          margin-bottom: 24px;
          font-weight: 700;
        }

        .intro-content p {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        /* ✅ ACTIVITIES GRID */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary-dark);
          margin-bottom: 60px;
          text-align: center;
          font-weight: 800;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 6px;
          background: var(--primary);
          border-radius: 4px;
          margin: 16px auto 0;
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 32px;
        }

        .activity-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
        }

        .activity-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: var(--primary-light);
        }

        .activity-image {
          width: 100%;
          height: 240px;
          background: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .activity-content {
          padding: 32px;
        }

        .activity-title {
          font-size: 1.5rem;
          color: var(--primary-dark);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .activity-description {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          background: var(--bg-body);
          padding: 20px;
          border-radius: 12px;
        }

        .activity-list li {
          padding: 8px 0;
          color: var(--text-main);
          font-size: 0.95rem;
          position: relative;
          padding-left: 24px;
          border-bottom: 1px dashed rgba(0,0,0,0.05);
        }

        .activity-list li:last-child {
          border-bottom: none;
        }

        .activity-list li:before {
          content: "✔";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
          font-size: 0.8rem;
          top: 10px;
        }

        /* ✅ STATS SECTION */
        .stats-section {
          background: var(--primary-dark);
          color: #fff;
          padding: 100px 24px;
          margin-top: 80px;
          position: relative;
          overflow: hidden;
        }
        
        /* Decorative circle */
        .stats-section::before {
           content: '';
           position: absolute;
           top: -100px; right: -100px;
           width: 400px; height: 400px;
           background: rgba(255,255,255,0.05);
           border-radius: 50%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .stat-item h3 {
          font-size: 4rem;
          color: var(--accent);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .stat-item p {
          font-size: 1.25rem;
          color: var(--primary-light);
          font-weight: 500;
        }

        /* ✅ CTA SECTION */
        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 100px 24px;
          text-align: center;
          margin: 40px 24px;
          border-radius: 32px;
          color: white;
          box-shadow: 0 20px 40px rgba(6, 78, 59, 0.2);
        }

        .cta-section h2 {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .cta-section p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto;
        }

        /* ✅ RESPONSIVE */
        @media (max-width: 768px) {
          .tagline-header { padding: 40px 20px; }
          .tagline-header h1 { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .stat-item h3 { font-size: 3rem; }
          .hero { height: 60vh; }
        }
      `}</style>

      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="kids.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="tagline-header reveal-on-scroll">
          <h1>Student Life & Activities</h1>
          <p>Let Your Spirit Soar</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section reveal-on-scroll">
        <div className="intro-content">
          <h2>Overview</h2>
          <p>
            College is about learning—and not all learning happens in the classroom. Extracurricular activities help you grow your talents and explore new interests.
          </p>
          <p>
            At our school, activities will complement your studies. We provide a nurturing environment where your commitment level helps you excel in both personal and academic growth.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <div className="container">
        <h2 className="section-title reveal-on-scroll">Our Activities</h2>

        <div className="activities-grid">

          {/* CARD 1 */}
          <div className="activity-card reveal-on-scroll stagger-1">
            <div className="activity-image">
              {/* Recolor: Yellow -> Mint/Green/White */}
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#ecfdf5" />
                <circle cx="200" cy="125" r="50" fill="#10b981" opacity="0.2" />
                <path d="M150 145 Q150 95 200 95 Q250 95 250 145" stroke="#059669" strokeWidth="4" fill="none" />
                <path d="M150 165 L175 140 L200 165 L225 140 L250 165" stroke="#059669" strokeWidth="4" fill="none" />
                <circle cx="180" cy="110" r="6" fill="#064e3b" />
                <circle cx="220" cy="110" r="6" fill="#064e3b" />
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Physical Activities</h3>
              <p className="activity-description">
                Build strength, flexibility, and lifelong fitness habits through engaging physical programs tailored for all abilities.
              </p>
              <ul className="activity-list">
                <li>General flexibility training</li>
                <li>Strength building exercises</li>
                <li>Fitness challenges and games</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="activity-card reveal-on-scroll stagger-2">
            <div className="activity-image">
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#f0fdf4" />
                <ellipse cx="200" cy="140" rx="60" ry="80" fill="#34d399" opacity="0.3" />
                <circle cx="200" cy="90" r="30" fill="#a7f3d0" />
                <path d="M140 160 Q200 110 260 160" stroke="#064e3b" strokeWidth="3" fill="none" />
                <circle cx="185" cy="85" r="4" fill="#064e3b" />
                <circle cx="215" cy="85" r="4" fill="#064e3b" />
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Yoga</h3>
              <p className="activity-description">
                Discover mindfulness and balance through professional-led yoga sessions that promote inner peace.
              </p>
              <ul className="activity-list">
                <li>Sessions by visiting professionals</li>
                <li>Learn mindfulness and balance</li>
                <li>Peaceful meditation time</li>
              </ul>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="activity-card reveal-on-scroll stagger-3">
            <div className="activity-image">
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#fff" />
                <rect x="100" y="80" width="200" height="130" fill="#d1fae5" stroke="#059669" strokeWidth="4" rx="12" />
                <circle cx="150" cy="120" r="20" fill="#34d399" />
                <circle cx="200" cy="150" r="20" fill="#10b981" />
                <circle cx="250" cy="120" r="20" fill="#047857" />
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Cultural & Arts</h3>
              <p className="activity-description">
                Express yourself through music, art, and cultural experiences that celebrate our rich heritage.
              </p>
              <ul className="activity-list">
                <li>Singing (Bhajans)</li>
                <li>Drawing and art sessions</li>
                <li>Temple visits and cultural events</li>
                <li>Dance and performance arts</li>
              </ul>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="activity-card reveal-on-scroll stagger-1">
            <div className="activity-image">
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#ecfdf5" />
                <rect x="80" y="90" width="240" height="100" rx="20" fill="#6ee7b7" stroke="#064e3b" strokeWidth="4" />
                <rect x="95" y="105" width="100" height="60" fill="#d1fae5" rx="5" />
                <rect x="225" y="105" width="80" height="60" fill="#d1fae5" rx="5" />
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Excursions</h3>
              <p className="activity-description">
                Explore the world beyond the classroom with educational field trips that bring learning to life.
              </p>
              <ul className="activity-list">
                <li>Educational Field Trips</li>
                <li>Museum and heritage site visits</li>
                <li>Nature and science explorations</li>
              </ul>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="activity-card reveal-on-scroll stagger-2">
            <div className="activity-image">
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#f0fdf4" />
                <polygon
                  points="200,70 225,120 285,120 235,155 260,205 200,175 140,205 165,155 115,120 175,120"
                  fill="#fbbf24"
                  stroke="#059669"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Events</h3>
              <p className="activity-description">
                Showcase your talents and compete with peers at exciting events designed to boost confidence.
              </p>
              <ul className="activity-list">
                <li>Interschool Art meets</li>
                <li>Cultural competitions</li>
                <li>Special Olympics</li>
                <li>Annual celebrations</li>
              </ul>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="activity-card reveal-on-scroll stagger-3">
            <div className="activity-image">
              <svg viewBox="0 0 400 250" width="100%" height="100%">
                <rect width="400" height="250" fill="#fff" />
                <path d="M100 100 Q150 50 200 100 Q250 150 300 100" stroke="#059669" strokeWidth="4" fill="none" />
                <circle cx="150" cy="130" r="20" fill="#fcd34d" />
                <circle cx="250" cy="130" r="20" fill="#34d399" />
                <text x="200" y="200" textAnchor="middle" fontSize="24" fill="#064e3b" fontWeight="bold">🎤</text>
              </svg>
            </div>

            <div className="activity-content">
              <h3 className="activity-title">Storytelling</h3>
              <p className="activity-description">
                Share your voice through stories, skits, and expressive activities that spark imagination and confidence.
              </p>
              <ul className="activity-list">
                <li>Creative storytelling sessions</li>
                <li>Skits and role-play</li>
                <li>Public speaking practice</li>
                <li>Emotional expression games</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ✅ STATS SECTION */}
      <section className="stats-section reveal-on-scroll">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>450+</h3>
            <p>Student Activities</p>
          </div>

          <div className="stat-item">
            <h3>50K+</h3>
            <p>Sq. Ft Activity Space</p>
          </div>

          <div className="stat-item">
            <h3>100%</h3>
            <p>Student Participation</p>
          </div>
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="cta-section reveal-on-scroll">
        <div className="container" style={{padding: 0}}>
          <h2>Join Our Amazing Journey</h2>
          <p>
            Every day is an adventure filled with fun, friendship, and fantastic learning. 
            Discover your passion and grow with us!
          </p>
        </div>
      </section>
    </>
  );
}
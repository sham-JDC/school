import React from "react";

export default function Studentlife() {
	return (
				<>
					<style>{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  color: #333;
  line-height: 1.6;
}

/* ✅ HERO SECTION WITH VIDEO BACKGROUND */
.hero {
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
}

/* ✅ TAGLINE BOX */
.tagline-header {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.tagline-header h1 {
  font-size: 3.5em;
  color: #2d5016;
  margin-bottom: 10px;
  font-weight: bold;
}

.tagline-header p {
  font-size: 1.4em;
  color: #4a7023;
}

/* ✅ INTRO SECTION */
.intro-section {
  background: #f5f5f5;
  padding: 80px 20px;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  font-size: 2em;
  color: #2d5016;
  margin-bottom: 20px;
}

.intro-content p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* ✅ ACTIVITIES GRID */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.section-title {
  font-size: 2.5em;
  color: #2d5016;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 600;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.activity-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.activity-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffeb3b 0%, #cddc39 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-content {
  padding: 30px;
}

.activity-title {
  font-size: 1.8em;
  color: #2d5016;
  margin-bottom: 15px;
  font-weight: 600;
}

.activity-description {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.activity-list {
  list-style: none;
  padding: 0;
}

.activity-list li {
  padding: 10px 0;
  color: #555;
  font-size: 1.05em;
  position: relative;
  padding-left: 25px;
  border-bottom: 1px solid #eee;
}

.activity-list li:last-child {
  border-bottom: none;
}

.activity-list li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #cddc39;
  font-weight: bold;
}

/* ✅ STATS SECTION */
.stats-section {
  background: #2d5016;
  color: #fff;
  padding: 60px 20px;
  margin-top: 80px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.stat-item h3 {
  font-size: 3em;
  color: #ffeb3b;
  margin-bottom: 10px;
}

.stat-item p {
  font-size: 1.2em;
  color: #cddc39;
}

/* ✅ CTA SECTION */
.cta-section {
  background: linear-gradient(135deg, #ffeb3b 0%, #cddc39 100%);
  padding: 80px 20px;
  text-align: center;
  margin-top: 80px;
}

.cta-section h2 {
  font-size: 2.5em;
  color: #2d5016;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.3em;
  color: #4a7023;
  max-width: 700px;
  margin: 0 auto;
}

/* ✅ MOBILE FIXES */
@media (max-width: 768px) {
	.tagline-header h1 {
		font-size: 2.2em;
	}

	.tagline-header p {
		font-size: 1.1em;
	}

	.activities-grid {
		grid-template-columns: 1fr;
	}

	.section-title {
		font-size: 2em;
	}
}
					`}</style>

			{/* HERO SECTION WITH VIDEO BACKGROUND */}
			<section className="hero">
				<video className="hero-video" autoPlay muted loop playsInline>
					<source src="kids.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<div className="tagline-header">
					<h1>Student Life & Activities</h1>
					<p>Let Your Spirit Soar</p>
				</div>
			</section>

			{/* INTRO */}
			<section className="intro-section">
				<div className="intro-content">
					<h2>Overview</h2>
					<p>
						College is about learning—and not all learning happens in the classroom. Extracurricular activities help you grow your talents and explore new interests.
					</p>
					<p>
						At our school, activities will complement your studies. Your commitment level is entirely up to you.
					</p>
				</div>
			</section>

			{/* ACTIVITIES */}
<div className="container">
  <h2 className="section-title">Our Activities</h2>

  <div className="activities-grid">

    {/* CARD 1 */}
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#e3f2fd" />
          <circle cx="200" cy="125" r="50" fill="#ffeb3b" opacity="0.8" />
          <path d="M150 145 Q150 95 200 95 Q250 95 250 145" stroke="#2d5016" strokeWidth="4" fill="none" />
          <path d="M150 165 L175 140 L200 165 L225 140 L250 165" stroke="#2d5016" strokeWidth="4" fill="none" />
          <circle cx="180" cy="110" r="6" fill="#2d5016" />
          <circle cx="220" cy="110" r="6" fill="#2d5016" />
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Physical Activities</h3>
        <p className="activity-description">
          Build strength, flexibility, and lifelong fitness habits through engaging physical programs.
        </p>
        <ul className="activity-list">
          <li>General flexibility training</li>
          <li>Strength building exercises</li>
          <li>Fitness challenges and games</li>
        </ul>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#f3e5f5" />
          <ellipse cx="200" cy="140" rx="60" ry="80" fill="#cddc39" opacity="0.7" />
          <circle cx="200" cy="90" r="30" fill="#ffe082" />
          <path d="M140 160 Q200 110 260 160" stroke="#2d5016" strokeWidth="3" fill="none" />
          <circle cx="185" cy="85" r="4" fill="#2d5016" />
          <circle cx="215" cy="85" r="4" fill="#2d5016" />
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Yoga</h3>
        <p className="activity-description">
          Discover mindfulness and balance through professional-led yoga sessions.
        </p>
        <ul className="activity-list">
          <li>Sessions by visiting professionals</li>
          <li>Learn mindfulness and balance</li>
          <li>Peaceful meditation time</li>
        </ul>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#fff3e0" />
          <rect x="100" y="80" width="200" height="130" fill="#ffeb3b" stroke="#2d5016" strokeWidth="4" rx="5" />
          <circle cx="150" cy="120" r="20" fill="#ff6b6b" />
          <circle cx="200" cy="150" r="20" fill="#4ecdc4" />
          <circle cx="250" cy="120" r="20" fill="#95e1d3" />
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Cultural & Arts</h3>
        <p className="activity-description">
          Express yourself through music, art, and cultural experiences.
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
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#e8f5e9" />
          <rect x="80" y="90" width="240" height="100" rx="20" fill="#ffeb3b" stroke="#2d5016" strokeWidth="4" />
          <rect x="95" y="105" width="100" height="60" fill="#81d4fa" rx="5" />
          <rect x="225" y="105" width="80" height="60" fill="#81d4fa" rx="5" />
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Excursions</h3>
        <p className="activity-description">
          Explore the world beyond the classroom with educational field trips.
        </p>
        <ul className="activity-list">
          <li>Educational Field Trips</li>
          <li>Museum and heritage site visits</li>
          <li>Nature and science explorations</li>
        </ul>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#fce4ec" />
          <polygon
            points="200,70 225,120 285,120 235,155 260,205 200,175 140,205 165,155 115,120 175,120"
            fill="#ffd54f"
            stroke="#2d5016"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Events</h3>
        <p className="activity-description">
          Showcase your talents and compete with peers at exciting events.
        </p>
        <ul className="activity-list">
          <li>Interschool Art meets</li>
          <li>Cultural competitions</li>
          <li>Special Olympics</li>
          <li>Annual celebrations</li>
        </ul>
      </div>
    </div>

    {/* ✅ CARD 6 — FIXED POSITION */}
    <div className="activity-card">
      <div className="activity-image">
        <svg viewBox="0 0 400 250">
          <rect width="400" height="250" fill="#fffde7" />
          <path d="M100 100 Q150 50 200 100 Q250 150 300 100" stroke="#2d5016" strokeWidth="4" fill="none" />
          <circle cx="150" cy="130" r="20" fill="#ffca28" />
          <circle cx="250" cy="130" r="20" fill="#4db6ac" />
          <text x="200" y="200" textAnchor="middle" fontSize="24" fill="#2d5016" fontWeight="bold">🎤</text>
        </svg>
      </div>

      <div className="activity-content">
        <h3 className="activity-title">Storytelling & Expression</h3>
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
<section className="stats-section">
  <div className="stats-grid">
    <div className="stat-item">
      <h3>450+</h3>
      <p>Student Activities</p>
    </div>

    <div className="stat-item">
      <h3>50K+</h3>
      <p>Square Feet of Activity Space</p>
    </div>

    <div className="stat-item">
      <h3>100%</h3>
      <p>Student Participation</p>
    </div>
  </div>
</section>

{/* ✅ CTA SECTION */}
<section className="cta-section">
  <div className="container">
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
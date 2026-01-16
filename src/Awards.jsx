import React from "react";
// Import local assets as requested
import img1 from "./assets/1.jpg";
import img2 from "./assets/1.jpg";
import img3 from "./assets/1.jpg";

export default function Awards() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: linear-gradient(135deg, #a8e063 0%, #56ab2f 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .awards-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px;
          font-family: 'Georgia', 'Times New Roman', serif;
          animation: fadeIn 1.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .floating-stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .star {
          position: absolute;
          font-size: 2em;
          animation: float 3s ease-in-out infinite;
        }

        .star:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .star:nth-child(2) { top: 20%; right: 15%; animation-delay: 0.5s; }
        .star:nth-child(3) { top: 60%; left: 5%; animation-delay: 1s; }
        .star:nth-child(4) { top: 70%; right: 10%; animation-delay: 1.5s; }
        .star:nth-child(5) { top: 40%; right: 20%; animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .awards-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }

        .awards-title {
          font-size: 4em;
          font-weight: 300;
          color: #ffffff;
          letter-spacing: 4px;
          margin-bottom: 15px;
          animation: slideDown 1s ease-out;
          text-transform: uppercase;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
        }

        .awards-subtitle {
          font-size: 1.3em;
          color: #f0f9e8;
          font-style: italic;
          letter-spacing: 2px;
          animation: fadeIn 1.5s ease-out;
        }

        .decorative-line {
          width: 120px;
          height: 3px;
          background: linear-gradient(to right, #ffeb3b, #fdd835);
          margin: 25px auto;
          animation: expandWidth 1s ease-out;
          box-shadow: 0 2px 10px rgba(255,235,59,0.5);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 120px; }
        }

        .award-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 50px;
          margin-bottom: 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border-left: 5px solid transparent;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out backwards;
          z-index: 1;
        }

        .award-card:nth-child(2) { animation-delay: 0.2s; }
        .award-card:nth-child(3) { animation-delay: 0.4s; }
        .award-card:nth-child(4) { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .award-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(to bottom, #ffeb3b, #cddc39);
          transition: width 0.4s ease;
        }

        .award-card:hover::before {
          width: 100%;
          opacity: 0.05;
        }

        .award-card::after {
          content: '🎉';
          position: absolute;
          top: -30px;
          right: -20px;
          font-size: 4em;
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .award-card:hover {
          transform: translateY(-12px) rotate(-1deg);
          box-shadow: 0 20px 60px rgba(255,235,59,0.4);
        }

        .award-card:nth-child(odd):hover {
          transform: translateY(-12px) rotate(1deg);
        }

        .award-badge {
          display: inline-block;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ffeb3b, #cddc39);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5em;
          margin-bottom: 25px;
          box-shadow: 0 5px 20px rgba(255,235,59,0.4);
          animation: rotate3d 1s ease-out, pulse 2s ease-in-out infinite;
        }

        @keyframes rotate3d {
          from { transform: rotateY(90deg); opacity: 0; }
          to { transform: rotateY(0deg); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .award-card h3 {
          font-size: 2.2em;
          margin-bottom: 25px;
          color: #2d5016;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 1.4;
        }

        .award-card p {
          font-size: 1.15em;
          line-height: 1.9;
          color: #555;
          margin-bottom: 35px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .award-card p strong {
          color: #689f38;
          font-weight: 600;
          position: relative;
          padding: 0 4px;
        }

        .award-highlight {
          display: inline-block;
          background: linear-gradient(120deg, #ffeb3b 0%, #ffeb3b 100%);
          background-repeat: no-repeat;
          background-size: 0% 40%;
          background-position: 0 85%;
          transition: background-size 0.6s ease;
        }

        .award-card:hover .award-highlight {
          background-size: 100% 40%;
        }

        .award-image {
          width: 100%;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          position: relative;
          border: 4px solid #ffeb3b;
        }

        .award-image::before {
          content: '⭐';
          position: absolute;
          top: 15px;
          left: 15px;
          font-size: 2.5em;
          animation: twinkle 1.5s ease-in-out infinite;
          z-index: 1;
          text-shadow: 0 0 10px rgba(255,235,59,0.8);
        }

        .award-image::after {
          content: '🏆';
          position: absolute;
          bottom: 15px;
          right: 15px;
          font-size: 2.5em;
          animation: bounce 2s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .award-card:hover .award-image {
          transform: scale(1.03);
          box-shadow: 0 15px 45px rgba(255,235,59,0.3);
          border-color: #cddc39;
        }

        .award-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .award-card:hover .award-image img {
          transform: scale(1.08);
        }

        .award-year {
          display: inline-block;
          background: linear-gradient(135deg, #ffeb3b, #fdd835);
          color: #2d5016;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 10px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          box-shadow: 0 3px 10px rgba(255,235,59,0.3);
        }

        @media (max-width: 768px) {
          .awards-title {
            font-size: 2.5em;
            letter-spacing: 2px;
          }
          .awards-subtitle {
            font-size: 1.1em;
          }
          .award-card {
            padding: 35px;
          }
          .award-card h3 {
            font-size: 1.7em;
          }
          .award-card p {
            font-size: 1.05em;
          }
          .award-image {
            height: 280px;
          }
          .award-badge {
            width: 55px;
            height: 55px;
            font-size: 2em;
          }
          .award-card::after {
            font-size: 2.5em;
            top: -20px;
            right: -10px;
          }
        }
      `}</style>

      <div className="floating-stars">
        <div className="star">⭐</div>
        <div className="star">🌟</div>
        <div className="star">✨</div>
        <div className="star">💫</div>
        <div className="star">🌈</div>
      </div>

      <div className="awards-page">
        <div className="awards-header">
          <h1 className="awards-title">Awards & Achievements</h1>
          <div className="decorative-line"></div>
          <p className="awards-subtitle">Celebrating Excellence Since 1990</p>
        </div>

        {/* ✅ AWARD 1 */}
        <div className="award-card">
          <div className="award-badge">🏆</div>
          <h3>Kalaangana – Best School Award</h3>
          <div className="award-year">2013 • 2020 • 2024 • 2025</div>
          <p>
            Managed by the <strong>JDC Sparsha Educational Trust</strong>, which
            was established by Founder and Managing Trustee{" "}
            <strong>Mrs. A. Shakila Banu</strong> in 2004, our institutions
            continue to reach new heights.
            <br />
            <br />
            We are a fourth-time recipient of the Best School award for Overall
            Performance at Kalaangana, an Art & Cultural event organised for
            Special Schools. In 2025, our Special School was awarded{" "}
            <strong className="award-highlight">
              1st place out of 38 schools
            </strong>{" "}
            and won{" "}
            <strong className="award-highlight">more than 39 prizes</strong>{" "}
            across various events.
          </p>

          <div className="award-image">
            <img src={img1} alt="Kalaangana Award" />
          </div>
        </div>

        {/* ✅ AWARD 2 */}
        <div className="award-card">
          <div className="award-badge">🥇</div>
          <h3>Zonal Level Special Olympics</h3>
          <div className="award-year">2024</div>
          <p>
            Building on the mission ignited by Mrs. Banu towards special
            children following the remarkable progress of our first special
            needs student in 1991, we proudly participate in major athletic
            competitions.
            <br />
            <br />
            At the 2024 Zonal Level Special Olympics, our Special School proudly
            won <strong className="award-highlight">5 medals</strong> —{" "}
            <strong className="award-highlight">2 Silver and 3 Bronze</strong> —
            competing against 300 participants from 18 schools.
          </p>

          <div className="award-image">
            <img src={img2} alt="Special Olympics" />
          </div>
        </div>

        {/* ✅ AWARD 3 */}
        <div className="award-card">
          <div className="award-badge">⭐</div>
          <h3>Kreeda Chetana</h3>
          <div className="award-year">2024</div>
          <p>
            Since <strong>Tom and Jerry Special School</strong> was born as a
            separate entity in 1993, we have consistently strived for excellence
            in both statutory and operational requirements.
            <br />
            <br />
            At "Kreeda Chetana‑24," organized by Rotary Bangalore Vijayanagar, a
            total of <strong className="award-highlight">
              37 students
            </strong>{" "}
            from our Special School participated and won several prizes across
            multiple events.
          </p>

          <div className="award-image">
            <img src={img3} alt="Kreeda Chetana" />
          </div>
        </div>
      </div>
    </>
  );
}

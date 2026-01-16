import React from "react";
// Import local assets 1-11
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
import img11 from "./assets/1.jpg";

export default function Events() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #f5f5f5;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .events-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .events-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .events-title {
          font-size: 3em;
          color: #1b7f3a;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .events-subtitle {
          margin-top: 15px;
          font-size: 1.1em;
          color: #555;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .highlight-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(135deg, #8ac926, #1b7f3a);
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .events-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          margin-top: 50px;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .event-row {
          background: #fff;
          border-radius: 12px;
          padding: 20px 24px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          border-left: 6px solid #8ac926;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .event-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 26px rgba(0,0,0,0.12);
        }

        .event-date-badge {
          min-width: 80px;
          text-align: center;
          background: #1b7f3a;
          color: #fff;
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 0.8em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .event-name {
          font-size: 1.2em;
          font-weight: 600;
          color: #0f4c23;
          margin-bottom: 4px;
        }

        .event-description {
          font-size: 0.98em;
          color: #555;
        }

        .event-thumb {
          width: 110px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          background: #eee;
          flex-shrink: 0;
        }

        .event-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .events-year-tag {
          display: inline-block;
          margin-top: 6px;
          font-size: 0.8em;
          color: #777;
        }

        .events-gallery {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px 20px 24px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          height: fit-content;
        }

        .gallery-title {
          font-size: 1.3em;
          font-weight: 600;
          color: #1b7f3a;
          margin-bottom: 12px;
        }

        .gallery-note {
          font-size: 0.95em;
          color: #666;
          margin-bottom: 15px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .gallery-item {
          width: 100%;
          height: 90px;
          border-radius: 8px;
          overflow: hidden;
          background: #eee;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .events-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .event-row {
            grid-template-columns: 1fr;
            align-items: flex-start;
          }
          .event-date-badge {
            width: fit-content;
          }
          .event-thumb {
            width: 100%;
            height: 160px;
          }
        }
      `}</style>

      <div className="events-wrapper">
        <header className="events-header">
          <h1 className="events-title">Events</h1>
          <div className="highlight-line" />
          <p className="events-subtitle">
            Ever since Mrs. A. Shakila Banu established our foundation in 1990,
            every year has been packed with enjoyment, education, and exposure.
            From cultural celebrations to sports, each event is an opportunity
            for our students to learn, participate, and shine.
          </p>
        </header>

        <div className="events-layout">
          {/* LEFT: LIST OF EVENTS */}
          <div className="events-list">
            {/* Independence Day */}
            <div className="event-row">
              <div className="event-date-badge">
                AUG 15
                <br />
                ANNUAL
              </div>
              <div>
                <div className="event-name">Independence Day Celebration</div>
                <p className="event-description">
                  Our students celebrate Independence Day with patriotic
                  fervour, marking the start of a vibrant series of annual
                  celebrations.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img1} alt="Independence Day" />
              </div>
            </div>

            {/* Ganesha Chaturthi */}
            <div className="event-row">
              <div className="event-date-badge">
                SEP
                <br />
                FESTIVAL
              </div>
              <div>
                <div className="event-name">Ganesha Chaturthi Celebration</div>
                <p className="event-description">
                  Children celebrate with activities that build cultural
                  awareness and instill good human values.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img2} alt="Ganesha Chaturthi" />
              </div>
            </div>

            {/* Krishna Janmashtami */}
            <div className="event-row">
              <div className="event-date-badge">
                AUG
                <br />
                FESTIVAL
              </div>
              <div>
                <div className="event-name">
                  Krishna Janmashtami Celebration
                </div>
                <p className="event-description">
                  Students learn values through stories and cultural
                  performances, fostering a friendly and inspiring atmosphere.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img3} alt="Krishna Janmashtami" />
              </div>
            </div>

            {/* Deepawali */}
            <div className="event-row">
              <div className="event-date-badge">
                OCT–NOV
                <br />
                FESTIVAL
              </div>
              <div>
                <div className="event-name">Deepawali Celebration</div>
                <p className="event-description">
                  The festival of lights is marked with joy and inclusion,
                  helping all children gain knowledge of our heritage.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img4} alt="Deepawali" />
              </div>
            </div>

            {/* Yoga Day */}
            <div className="event-row">
              <div className="event-date-badge">
                JUN 21
                <br />
                YOGA DAY
              </div>
              <div>
                <div className="event-name">International Yoga Day</div>
                <p className="event-description">
                  Guided yoga practice helps children achieve balance and
                  mindfulness, a core part of our holistic development mission.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img5} alt="Yoga Day" />
              </div>
            </div>

            {/* Christmas */}
            <div className="event-row">
              <div className="event-date-badge">
                DEC
                <br />
                FESTIVAL
              </div>
              <div>
                <div className="event-name">Christmas Celebration</div>
                <p className="event-description">
                  Spreading cheer and togetherness through carols and
                  performances in a cordial and friendly campus.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img6} alt="Christmas" />
              </div>
            </div>

            {/* New Year */}
            <div className="event-row">
              <div className="event-date-badge">
                JAN
                <br />
                NEW YEAR
              </div>
              <div>
                <div className="event-name">New Year Celebration</div>
                <p className="event-description">
                  Welcoming the New Year with hope and gratitude as we continue
                  our roadmap for education.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img7} alt="New Year" />
              </div>
            </div>

            {/* Sankranthi */}
            <div className="event-row">
              <div className="event-date-badge">
                JAN
                <br />
                FESTIVAL
              </div>
              <div>
                <div className="event-name">Sankranthi Celebration</div>
                <p className="event-description">
                  A traditional harvest festival celebration that inspires
                  children to appreciate our cultural roots.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src={img8} alt="Sankranthi" />
              </div>
            </div>

            {/* Kreeda Chetana 2024 */}
            <div className="event-row">
              <div className="event-date-badge">
                NOV 23
                <br />
                2024
              </div>
              <div>
                <div className="event-name">Kreeda Chetana – 2024</div>
                <p className="event-description">
                  37 students of our Special School participated in "Kreeda
                  Chetana-24" and won many prizes, showcasing their remarkable
                  improvement.
                </p>
                <div className="events-year-tag">Special Sports Event</div>
              </div>
              <div className="event-thumb">
                <img src={img9} alt="Kreeda Chetana" />
              </div>
            </div>

            {/* 28th Annual Sports Meet */}
            <div className="event-row">
              <div className="event-date-badge">
                ANNUAL
                <br />
                SPORTS
              </div>
              <div>
                <div className="event-name">28th Annual Sports Meet</div>
                <p className="event-description">
                  A day where every child is inspired to reach their full
                  potential through track and field events.
                </p>
                <div className="events-year-tag">Annual Highlight</div>
              </div>
              <div className="event-thumb">
                <img src={img10} alt="Annual Sports Meet" />
              </div>
            </div>

            {/* Children Carnival */}
            <div className="event-row">
              <div className="event-date-badge">
                CARNIVAL
                <br />
                FUN DAY
              </div>
              <div>
                <div className="event-name">Children’s Carnival</div>
                <p className="event-description">
                  A day dedicated to joy and confidence, features music,
                  performances and games for all our students.
                </p>
                <div className="events-year-tag">Annual Celebration</div>
              </div>
              <div className="event-thumb">
                <img src={img11} alt="Children Carnival" />
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO GALLERY BLOCK */}
          <aside className="events-gallery">
            <h2 className="gallery-title">Events Highlights</h2>
            <p className="gallery-note">
              A glimpse of the smiles and moments from our journey.
            </p>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={img1} alt="Independence Highlight" />
              </div>
              <div className="gallery-item">
                <img src={img2} alt="Ganesha Highlight" />
              </div>
              <div className="gallery-item">
                <img src={img10} alt="Sports Highlight" />
              </div>
              <div className="gallery-item">
                <img src={img11} alt="Carnival Highlight" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

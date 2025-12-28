import React from "react";

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
          color: #2d5016;
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
          background: linear-gradient(135deg, #ffeb3b, #cddc39);
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
          border-left: 6px solid #cddc39;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .event-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 26px rgba(0,0,0,0.12);
        }

        .event-date-badge {
          min-width: 80px;
          text-align: center;
          background: #2d5016;
          color: #ffeb3b;
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 0.8em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .event-name {
          font-size: 1.2em;
          font-weight: 600;
          color: #2d5016;
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

        /* Right column – small gallery block */
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
          color: #2d5016;
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
            For our children, every year is packed with enjoyment, festivities,
            education and exposure. From national festivals to cultural
            celebrations and sports, each event is an opportunity to learn,
            participate, and shine.
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
                  The school celebrated Independence Day with patriotic fervour,
                  marking the start of a vibrant series of celebrations for the
                  year.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="independence.jpg" alt="Independence Day" />
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
                  Children celebrate Lord Ganesha with devotion, decorations,
                  songs and activities that build cultural awareness.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="ganesha.jpg" alt="Ganesha Chaturthi" />
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
                  Students dress as Krishna and Radha, enjoy bhajans and
                  performances, and learn values through stories.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="krishna.jpg" alt="Krishna Janmashtami" />
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
                  The festival of lights is marked with diyas, rangoli, songs,
                  and joy, creating a warm and inclusive atmosphere.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="deepawali.jpg" alt="Deepawali" />
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
                  Students participate in simple guided yoga practices, learning
                  mindfulness, balance, and body awareness.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="yoga.jpg" alt="Yoga Day" />
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
                  A joyful celebration with carols, decorations and
                  performances, spreading cheer and togetherness.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="christmas.jpg" alt="Christmas" />
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
                  Welcoming the New Year with hope, gratitude, and fun
                  activities planned for the students.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="newyear.jpg" alt="New Year" />
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
                  Students enjoy traditional activities, decorations, and
                  cultural programs related to the harvest festival.
                </p>
                <div className="events-year-tag">Every Year</div>
              </div>
              <div className="event-thumb">
                <img src="sankranthi.jpg" alt="Sankranthi" />
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
                  Rotary Bangalore Vijayanagar organised “Kreeda Chetana‑24”. 37
                  students of our Special School participated and won many
                  prizes.
                </p>
                <div className="events-year-tag">Special Sports Event</div>
              </div>
              <div className="event-thumb">
                <img src="kreeda.jpg" alt="Kreeda Chetana" />
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
                  A day filled with track and field events, team games and
                  celebrations of every child’s effort and progress.
                </p>
                <div className="events-year-tag">Annual Highlight</div>
              </div>
              <div className="event-thumb">
                <img src="sports.jpg" alt="Annual Sports Meet" />
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
                  A colourful carnival with games, food stalls, music, and
                  performances – a day dedicated entirely to joy.
                </p>
                <div className="events-year-tag">Annual Celebration</div>
              </div>
              <div className="event-thumb">
                <img src="carnival.jpg" alt="Children Carnival" />
              </div>
            </div>
          </div>

          {/* RIGHT: SMALL PHOTO GALLERY BLOCK */}
          <aside className="events-gallery">
            <h2 className="gallery-title">Events Highlights</h2>
            <p className="gallery-note">
              A glimpse of the smiles, colours, and moments from our
              celebrations.
            </p>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="independence.jpg" alt="Independence" />
              </div>
              <div className="gallery-item">
                <img src="ganesha.jpg" alt="Ganesha" />
              </div>
              <div className="gallery-item">
                <img src="sports.jpg" alt="Sports Day" />
              </div>
              <div className="gallery-item">
                <img src="carnival.jpg" alt="Carnival" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

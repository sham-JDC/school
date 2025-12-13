import React from "react";

const WhyJoinUs = () => {
  const FEATURES = [
    {
      title: "Friendly Atmosphere",
      text: "Personalised care with lots of love and affection in a cordial, friendly environment.",
      href: "/about",
      img: "https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Targeted Learning",
      text: "Individual learning programmes for the physical, mental and social development of each child.",
      href: "/programs",
      img: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Sports & Physical Training",
      text: "Basic sports and fitness training using our indoor and outdoor play areas.",
      href: "/sports",
      img: "https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Bhajan, Prayer & Yoga",
      text: "Temple visits, bhajans and yoga sessions conducted by visiting professionals.",
      href: "/activities",
      img: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Art, Music & Drawing",
      text: "Traditional singing and creative drawing sessions that build confidence.",
      href: "/arts",
      img: "https://images.pexels.com/photos/8618065/pexels-photo-8618065.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Field Trips & Therapy",
      text: "Educational outings and after‑school therapy to support every learner.",
      href: "/therapy",
      img: "https://images.pexels.com/photos/8618003/pexels-photo-8618003.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const GALLERY = [
    "https://images.pexels.com/photos/8612922/pexels-photo-8612922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8422243/pexels-photo-8422243.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8422158/pexels-photo-8422158.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8612961/pexels-photo-8612961.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <style>{`
        .wj-page {
          background: #f4fff6;
          min-height: 100vh;
          padding-bottom: 4rem;
          font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .wj-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        .wj-title-wrap {
          text-align: center;
          margin-bottom: 1rem;
        }
        .wj-main-title {
          font-size: 2.4rem;
          color: #14532d;
        }
        .wj-main-underline {
          width: 90px;
          height: 4px;
          border-radius: 999px;
          margin: 0.4rem auto 0;
          background: #facc15;
        }
        .wj-hero-sub {
          margin-top: 1.5rem;
          font-size: 1.02rem;
          color: #166534;
        }

        /* top image strip */
        .wj-gallery-strip {
          margin: 3rem 0 3.5rem;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .wj-frame {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          background: #ecfdf5;
          box-shadow: 0 14px 32px rgba(16, 185, 129, 0.25);
        }
        .wj-frame-img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transform-origin: center;
          transform: scale(1.02) translateY(0);
          transition: transform 400ms ease-out, filter 400ms ease-out;
          filter: saturate(1.05);
        }
        .wj-frame::before {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          pointer-events: none;
        }
        .wj-frame:hover .wj-frame-img {
          transform: scale(1.09) translateY(-6px);
          filter: saturate(1.2) brightness(1.02);
        }

        /* Explore Our World layout */
        .wj-section-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .wj-section-title {
          font-size: 1.8rem;
          color: #14532d;
          margin-bottom: 0.4rem;
        }
        .wj-section-sub {
          max-width: 620px;
          margin: 0 auto;
          color: #166534;
          font-size: 0.98rem;
        }

        .wj-explore {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
          gap: 2rem;
          align-items: stretch;
        }

        .wj-explore-left {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          background: radial-gradient(circle at top left, #bbf7d0 0, #dcfce7 45%, #ffffff 100%);
          box-shadow: 0 20px 50px rgba(21, 128, 61, 0.25);
          padding: 1.1rem;
        }
        .wj-explore-img-main {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }
        .wj-explore-mini-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 0.9rem;
        }
        .wj-explore-mini {
          border-radius: 14px;
          overflow: hidden;
        }
        .wj-explore-mini img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 280ms ease-out, filter 280ms ease-out;
        }
        .wj-explore-mini:hover img {
          transform: scale(1.07);
          filter: saturate(1.2);
        }

        /* right side feature cards with images */
        .wj-card-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.1rem;
        }
        .wj-card-link {
          text-decoration: none;
        }
        .wj-card {
          display: grid;
          grid-template-columns: 105px minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          padding: 0.9rem 1rem;
          border-radius: 18px;
          background: radial-gradient(circle at top left, #bbf7d0 0, #f0fdf4 45%, #ffffff 100%);
          box-shadow: 0 12px 26px rgba(21, 128, 61, 0.18);
          cursor: pointer;
          transform: translateY(0) scale(1);
          transition: transform 220ms ease-out, box-shadow 220ms ease-out, background 220ms ease-out;
        }
        .wj-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 18px 40px rgba(22, 163, 74, 0.3);
          background: radial-gradient(circle at top left, #bbf7d0 0, #ecfdf5 45%, #ffffff 100%);
        }
        .wj-card-thumb-wrap {
          border-radius: 15px;
          overflow: hidden;
        }
        .wj-card-thumb {
          width: 100%;
          height: 90px;
          object-fit: cover;
          display: block;
          transform: scale(1.03);
          transition: transform 260ms ease-out, filter 260ms ease-out;
        }
        .wj-card:hover .wj-card-thumb {
          transform: scale(1.08);
          filter: saturate(1.15);
        }
        .wj-card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: #14532d;
        }
        .wj-card-text {
          font-size: 0.9rem;
          color: #166534;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .wj-gallery-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .wj-explore {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 640px) {
          .wj-gallery-strip {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>

      <div className="wj-page">
        <div className="wj-container">
          {/* Top title like your main page */}
          <div className="wj-title-wrap">
            <h1 className="wj-main-title">Why Join Us</h1>
            <div className="wj-main-underline" />
            <p className="wj-hero-sub">
              Let your children explore the joy of learning with us in a warm, friendly and inspiring campus.
            </p>
          </div>

          {/* Image frames row */}
          <section className="wj-gallery-strip">
            {GALLERY.map((src, i) => (
              <div key={i} className="wj-frame">
                <img className="wj-frame-img" src={src} alt={`Campus life ${i + 1}`} />
              </div>
            ))}
          </section>

          {/* Explore Our World section */}
          <section>
            <div className="wj-section-header">
              <h2 className="wj-section-title">Explore Our World</h2>
              <p className="wj-section-sub">
                Carefully designed programmes, activities and support services help every child grow with confidence.
              </p>
            </div>

            <div className="wj-explore">
              {/* left images block */}
              <div className="wj-explore-left">
                <img
                  className="wj-explore-img-main"
                  src="https://images.pexels.com/photos/8612969/pexels-photo-8612969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Children enjoying learning"
                />
                <div className="wj-explore-mini-row">
                  {GALLERY.slice(0, 3).map((src, i) => (
                    <div key={i} className="wj-explore-mini">
                      <img src={src} alt={`Explore detail ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* right cards */}
              <div className="wj-card-list">
                {FEATURES.map((item) => (
                  <a key={item.title} href={item.href} className="wj-card-link">
                    <article className="wj-card">
                      <div className="wj-card-thumb-wrap">
                        <img className="wj-card-thumb" src={item.img} alt={item.title} />
                      </div>
                      <div>
                        <h3 className="wj-card-title">{item.title}</h3>
                        <p className="wj-card-text">{item.text}</p>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhyJoinUs;
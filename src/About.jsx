import React, { useState, useEffect } from 'react';
import { Users, Award, Heart, GraduationCap, FileText, Home, BookOpen, Image, Mail, ArrowRight } from 'lucide-react';

const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .about-container {
    width: 100%;
    background: linear-gradient(to bottom, #f0fdf4, #fef9c3);
    position: relative;
    overflow: hidden;
  }

  .about-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 16px;
  }

  .about-header {
    text-align: center;
    margin-bottom: 64px;
    animation: fadeInUp 0.8s ease-out;
  }

  .about-title {
    font-size: 3rem;
    font-weight: bold;
    color: #166534;
    margin-bottom: 16px;
  }

  .about-divider {
    width: 96px;
    height: 4px;
    background-color: #facc15;
    margin: 0 auto;
    border-radius: 9999px;
  }

  .animated {
    opacity: 0;
  }

  .animated.visible {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .section-card {
    background: white;
    border-radius: 24px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    padding: 48px;
    margin-bottom: 48px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .section-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15);
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #166534;
  }

  .hero-image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
    animation: fadeIn 1s ease-out;
  }

  .hero-image {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    animation: float 3s ease-in-out infinite;
  }

  .hero-image:nth-child(2) {
    animation-delay: 0.5s;
  }

  .hero-image:nth-child(3) {
    animation-delay: 1s;
  }

  .hero-image:hover {
    transform: scale(1.05);
  }

  .hero-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .story-text {
    color: #374151;
    line-height: 1.75;
    margin-bottom: 24px;
  }

  .story-highlight {
    font-weight: 600;
    color: #15803d;
    margin-bottom: 24px;
    padding: 16px;
    background: linear-gradient(to right, #f0fdf4, #fef9c3);
    border-left: 4px solid #16a34a;
    border-radius: 8px;
  }

  .trustees-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .trustee-card {
    background: linear-gradient(to bottom right, #f0fdf4, #fef9c3);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .trustee-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  .trustee-card:hover::before {
    left: 100%;
  }

  .trustee-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  }

  .trustee-photo {
    background-color: #e5e7eb;
    border-radius: 12px;
    height: 192px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .trustee-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .trustee-photo-placeholder {
    text-align: center;
    color: #6b7280;
  }

  .trustee-photo-future {
    text-align: center;
    color: #9ca3af;
  }

  .trustee-name {
    font-size: 1.25rem;
    font-weight: bold;
    color: #166534;
    margin-bottom: 8px;
  }

  .trustee-role {
    font-size: 0.875rem;
    font-weight: 600;
    color: #ca8a04;
    margin-bottom: 12px;
  }

  .trustee-description {
    font-size: 0.875rem;
    color: #4b5563;
    line-height: 1.5;
  }

  .operations-text {
    color: #374151;
    line-height: 1.75;
  }

  .accreditations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .accreditation-card {
    background-color: #f0fdf4;
    border-radius: 12px;
    padding: 16px;
    border-left: 4px solid #16a34a;
    transition: all 0.3s ease;
  }

  .accreditation-card:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .accreditation-name {
    font-weight: bold;
    color: #166534;
  }

  .accreditation-authority {
    font-size: 0.875rem;
    color: #4b5563;
  }

  .affiliations-list {
    margin-bottom: 32px;
  }

  .affiliation-item {
    background-color: #fef9c3;
    border-radius: 12px;
    padding: 16px;
    border-left: 4px solid #facc15;
    margin-bottom: 12px;
    transition: all 0.3s ease;
  }

  .affiliation-item:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .affiliation-text {
    color: #374151;
  }

  .mou-intro {
    color: #374151;
    margin-bottom: 16px;
  }

  .mou-item {
    background: linear-gradient(to right, #f0fdf4, #fef9c3);
    border-radius: 12px;
    padding: 16px;
    border-left: 4px solid #4ade80;
    margin-bottom: 12px;
    transition: all 0.3s ease;
  }

  .mou-item:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mou-text {
    color: #374151;
    font-weight: 500;
  }

  .ribbon-nav {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 48px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    animation: slideInRight 0.8s ease-out;
  }

  .ribbon-nav h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
  }

  .nav-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
  }

  .nav-link {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(5px);
    border-color: white;
  }

  .timeline {
    position: relative;
    padding: 20px 0;
  }

  .timeline-item {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
    position: relative;
  }

  .timeline-year {
    min-width: 80px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #16a34a;
  }

  .timeline-content {
    flex: 1;
    background: linear-gradient(to right, #f0fdf4, white);
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #16a34a;
    transition: all 0.3s ease;
  }

  .timeline-content:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .about-title {
      font-size: 2rem;
    }

    .section-card {
      padding: 32px 24px;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .trustees-grid {
      grid-template-columns: 1fr;
    }

    .ribbon-nav h3 {
      font-size: 1.25rem;
    }

    .nav-links {
      grid-template-columns: 1fr;
    }
  }
`;

export default function AboutUsSection() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animated').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const trustees = [
    {
      name: "A. Shakila Banu",
      role: "Founder and Managing Trustee",
      description: "A passionate and dedicated teacher with more than 40 years of experience in educating Children, during the beginning of her career she has worked at reputed schools of Bangalore such as Sri Aurobindo Memorial School and Sri Saraswathi Vidya Mandir. She is the Principal and Head for all our Schools namely Tom and Jerry Nursery School, Tom and Jerry Special School, Sparsha Academy.",
      hasPhoto: true
    },
    {
      name: "R. Shanmuga Prasad",
      role: "Trustee",
      description: "He has diversified industrial experience of well over 37 years in senior management positions with various organizations and had successfully established numerous Business systems and Processes. He is the Head of Finance and Administration for all our schools operations.",
      hasPhoto: true
    },
    {
      name: "Dr. Shamanth Ph.D",
      role: "Trustee",
      description: "He foresees Technological upgrades, IT services enablement in all our school's operations and implements it in offline as and when necessary.",
      hasPhoto: false
    }
  ];

  const accreditations = [
    { name: "80G", authority: "Income Tax Department" },
    { name: "Darpan", authority: "Charity Commissioner" }
  ];

  const affiliations = [
    "Tom and Jerry Nursery School: Karnataka Govt",
    "Tom and Jerry Special School is affiliated with Office of the Deputy Director- Department of Women and Child Development and Department for the Empowerment of Differently abled and Senior Citizens",
    "Sparsha Academy is affiliated with National Institute of Open Schooling An Autonomous Institution under Ministry of Education, Govt. of India",
    "Special Olympics Bharat Karnataka District"
  ];

  const mous = [
    "Surana College - PG Dept of Psychology, Bengaluru",
    "SDM Institute of Ayurveda & Hospital, Bengaluru",
    "Nargund College of Physiotherapy, Bengaluru"
  ];

  const timeline = [
    { year: "1990", event: "Tom and Jerry Nursery School established" },
    { year: "1993", event: "Tom and Jerry Special School born as a separate entity" },
    { year: "2003", event: "Sparsha Academy formed for continuum of education" },
    { year: "2004", event: "JDC Sparsha Educational Trust established" }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h1 className="about-title">About Us</h1>
            <div className="about-divider"></div>
          </div>

          {/* Navigation Ribbon */}
          <div className="ribbon-nav">
            <h3>Explore Our School</h3>
            <div className="nav-links">
              <a href="#home" className="nav-link">
                <Home size={20} />
                <span>Home</span>
              </a>
              <a href="#programs" className="nav-link">
                <BookOpen size={20} />
                <span>Programs</span>
              </a>
              <a href="#gallery" className="nav-link">
                <Image size={20} />
                <span>Gallery</span>
              </a>
              <a href="#contact" className="nav-link">
                <Mail size={20} />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Hero Images */}
          <div className="hero-image-container">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1587616211892-ba1b5f6c8e6d?w=400&h=300&fit=crop" alt="Happy children learning" />
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" alt="Special education classroom" />
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop" alt="Children playing together" />
            </div>
          </div>

          {/* Our Story Section */}
          <div className={`section-card animated ${visibleSections.has('story') ? 'visible' : ''}`} data-section="story">
            <div className="section-header">
              <Heart className="w-8 h-8 text-green-600" />
              <h2 className="section-title">Our Story</h2>
            </div>
            
            <div>
              <p className="story-text">
                Tom and Jerry Nursery School blossomed way back in the year 1990 as a regular school with children in the age group of 2 to 5 years. In the second year of its inception, a student's brother aged 5 years accompanied the student to the school. The child was physically challenged and was noticed by Mrs. Banu and with her suggestion, the parents started to send this child for a few hours to the school. The child was unable to sit or perform regular activities. In the ensuing months, the child showed gradual progress.
              </p>
              
              <p className="story-highlight">
                This remarkable improvement ignited the mission of Mrs. Banu towards the special children.
              </p>
              
              <p className="story-text">
                The number gradually rose as the school grew. This was mainly because of the parents being happy with the improvement they could see in their children. It was these parents who helped in spreading the word about our school. Eventually Tom and Jerry Special School was born as a separate entity in the year 1993.
              </p>
              
              <p className="story-text">
                JDC SPARSHA management further realised the need for continuum of education roadmap especially for the special children and formed Sparsha Academy in the year 2003.
              </p>
              
              <p className="story-text">
                JDC Sparsha Educational Trust named after our Great Grand Parents was Established by Founder and Managing Trustee Mrs. A.Shakila Banu for Compliance to various Statutory and Operational Requirements in the year 2004. It manages all our Schools namely Tom and Jerry Nursery School, Tom and Jerry Special School and Sparsha Academy since its inception.
              </p>
            </div>

            {/* Timeline */}
            <div className="timeline" style={{marginTop: '40px'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#166534', marginBottom: '24px'}}>Our Journey</h3>
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <p style={{color: '#374151', fontWeight: '500'}}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Board of Trustees Section */}
          <div className={`section-card animated ${visibleSections.has('trustees') ? 'visible' : ''}`} data-section="trustees">
            <div className="section-header">
              <Users className="w-8 h-8 text-green-600" />
              <h2 className="section-title">Board of Trustees</h2>
            </div>

            <div className="trustees-grid">
              {trustees.map((trustee, index) => (
                <div key={index} className="trustee-card">
                  <div className="trustee-photo">
                    {trustee.hasPhoto ? (
                      <div className="trustee-photo-placeholder">
                        <div style={{fontSize: '2.25rem', marginBottom: '8px'}}>📷</div>
                        <p style={{fontSize: '0.875rem'}}>Insert Photo of {trustee.name}</p>
                      </div>
                    ) : (
                      <div className="trustee-photo-future">
                        <div style={{fontSize: '2.25rem', marginBottom: '8px'}}>📷</div>
                        <p style={{fontSize: '0.875rem'}}>Photo to be added</p>
                      </div>
                    )}
                  </div>
                  <h3 className="trustee-name">{trustee.name}</h3>
                  <p className="trustee-role">{trustee.role}</p>
                  <p className="trustee-description">{trustee.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operations Team Section */}
          <div className={`section-card animated ${visibleSections.has('operations') ? 'visible' : ''}`} data-section="operations">
            <div className="section-header">
              <GraduationCap className="w-8 h-8 text-green-600" />
              <h2 className="section-title">Operations Team</h2>
            </div>
            
            <p className="operations-text">
              All of our Three Schools operations are ably supported by a medium sized Group of Dedicated, Strong, Well Experienced TEAMs comprising of School Operations Incharge, Accounts and Office Incharge, Senior and Junior Teachers, Senior and Junior Special Educators, Visiting Therapists, Visiting Professionals for Teaching Music, Dance, Yoga, Arts & Crafts, Support Staff for addressing Children's essential comfort needs, Housekeeping, Van Escorts, Security, Maintenance, Transport Operators.
            </p>
          </div>

          {/* Accreditations & Affiliations Section */}
          <div className={`section-card animated ${visibleSections.has('accreditations') ? 'visible' : ''}`} data-section="accreditations">
            <div className="section-header">
              <Award className="w-8 h-8 text-green-600" />
              <h2 className="section-title">Accreditations & Affiliations</h2>
            </div>

            {/* Accreditations */}
            <div style={{marginBottom: '32px'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d', marginBottom: '16px'}}>
                Accreditations
              </h3>
              <div className="accreditations-grid">
                {accreditations.map((acc, index) => (
                  <div key={index} className="accreditation-card">
                    <p className="accreditation-name">{acc.name}</p>
                    <p className="accreditation-authority">{acc.authority}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div className="affiliations-list">
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d', marginBottom: '16px'}}>
                Affiliations
              </h3>
              <div>
                {affiliations.map((affiliation, index) => (
                  <div key={index} className="affiliation-item">
                    <p className="affiliation-text">{affiliation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MOUs */}
            <div>
              <div className="section-header" style={{marginBottom: '16px'}}>
                <FileText className="w-6 h-6 text-green-600" />
                <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d'}}>
                  Memorandum of Understanding (MOU)
                </h3>
              </div>
              <p className="mou-intro">We have MOUs with Prestigious Institutions namely:</p>
              <div>
                {mous.map((mou, index) => (
                  <div key={index} className="mou-item">
                    <p className="mou-text">{mou}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Ribbon */}
          <div className="ribbon-nav" style={{background: 'linear-gradient(135deg, #facc15 0%, #ca8a04 100%)'}}>
            <h3>Ready to Join Our Community?</h3>
            <div style={{display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '16px'}}>
              <a href="#programs" className="nav-link" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
                <span>Explore Programs</span>
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="nav-link" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
                <span>Schedule a Visit</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
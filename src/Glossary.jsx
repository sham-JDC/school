import React, { useState, useEffect } from "react";
import {
  Brain,
  Users,
  Heart,
  Lightbulb,
  HandHeart,
  BookOpen,
  Search,
} from "lucide-react";

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

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  .glossary-container {
    width: 100%;
    background: linear-gradient(to bottom, #f0fdf4, #fef9c3);
    position: relative;
    overflow: hidden;
  }

  .glossary-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 16px;
  }

  .page-header {
    text-align: center;
    margin-bottom: 64px;
    animation: fadeInUp 0.8s ease-out;
  }

  .page-title {
    font-size: 3.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, #166534 0%, #16a34a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
  }

  .page-subtitle {
    font-size: 1.25rem;
    color: #15803d;
    font-weight: 500;
    margin-top: 16px;
  }

  .page-divider {
    width: 120px;
    height: 4px;
    background: linear-gradient(to right, #16a34a, #facc15);
    margin: 0 auto;
    border-radius: 9999px;
  }

  .animated {
    opacity: 0;
  }

  .animated.visible {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .search-box {
    max-width: 600px;
    margin: 0 auto 48px;
    position: relative;
    animation: slideInRight 0.8s ease-out;
  }

  .search-input {
    width: 100%;
    padding: 16px 20px 16px 50px;
    border: 2px solid #16a34a;
    border-radius: 50px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    background: white;
  }

  .search-input:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 4px rgba(250, 204, 21, 0.1);
  }

  .search-icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: #16a34a;
  }

  .terms-grid {
    display: grid;
    gap: 32px;
    margin-bottom: 64px;
  }

  .term-card {
    background: white;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    border-left: 6px solid #16a34a;
  }

  .term-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(22, 163, 74, 0.03) 0%, rgba(250, 204, 21, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .term-card:hover::before {
    opacity: 1;
  }

  .term-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-left-color: #facc15;
  }

  .term-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .term-icon-wrapper {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #f0fdf4, #fef9c3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .term-card:hover .term-icon-wrapper {
    transform: rotate(5deg) scale(1.1);
    background: linear-gradient(135deg, #16a34a, #facc15);
  }

  .term-card:hover .term-icon-wrapper svg {
    color: white !important;
  }

  .term-title {
    font-size: 1.75rem;
    font-weight: bold;
    color: #166534;
    flex: 1;
  }

  .term-description {
    color: #4b5563;
    line-height: 1.8;
    font-size: 1rem;
    position: relative;
    z-index: 1;
  }

  .csr-section {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
    border-radius: 24px;
    padding: 48px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    margin-bottom: 48px;
  }

  .csr-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: float 6s ease-in-out infinite;
  }

  .csr-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
  }

  .csr-title {
    font-size: 2.25rem;
    font-weight: bold;
    color: white;
  }

  .csr-content {
    color: white;
    font-size: 1.125rem;
    line-height: 1.8;
    position: relative;
    z-index: 1;
  }

  .highlight-box {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 24px;
    margin-top: 24px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .highlight-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .highlight-item {
    padding: 12px 0;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .highlight-item::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #facc15;
    color: #166534;
    border-radius: 50%;
    font-weight: bold;
    flex-shrink: 0;
  }

  .therapies-section {
    background: white;
    border-radius: 24px;
    padding: 48px;
    margin-bottom: 48px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  .therapies-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .therapies-title {
    font-size: 2rem;
    font-weight: bold;
    color: #166534;
    margin-bottom: 16px;
  }

  .therapies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .therapy-item {
    background: linear-gradient(135deg, #f0fdf4 0%, #fef9c3 100%);
    border-radius: 12px;
    padding: 20px;
    border-left: 4px solid #16a34a;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .therapy-item:hover {
    transform: translateX(10px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-left-color: #facc15;
  }

  .therapy-text {
    color: #15803d;
    font-weight: 600;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 2rem;
    }

    .term-card {
      padding: 24px;
    }

    .term-title {
      font-size: 1.5rem;
    }

    .csr-section {
      padding: 32px 24px;
    }

    .csr-title {
      font-size: 1.75rem;
    }

    .therapies-section {
      padding: 32px 24px;
    }
  }
`;

export default function GlossaryPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...prev, entry.target.dataset.section])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animated").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const terms = [
    {
      icon: Brain,
      title: "Cerebral Palsy",
      description:
        "Cerebral Palsy describes a group of permanent disorders of the development of movement and posture causing activity limitation that are attributed to non-progressive disturbances that occurred in the developing fetal or infant brain. The motor disorders of cerebral palsy are often accompanied by disturbances of sensation, cognition, perception, communication, behavior, by epilepsy and by secondary musculo skeletal problems.",
      color: "#3b82f6",
    },
    {
      icon: Users,
      title: "Autism",
      description:
        'The autistic spectrum disorders are a heterogeneous group of neuro-behavioral syndromes characterized by major impairments in basic social relationships, abnormal language development, limited or non existent imagination and extremely rigid patterns of behaviour. The term "spectrum" implies a range of severity from mild, allowing close to normal functions in many areas, to the most severe in which social function appears to be impossible, but there always deficits in the "core triad" of socialization, communication and imagination, and restricted behaviour. There is no single cause for these disorders, although a genetic influence is most frequently found. The disorders result from abnormal brain development.',
      color: "#8b5cf6",
    },
    {
      icon: Lightbulb,
      title: "Mental Retardation",
      description:
        'A number of terms including "intellectual impairment", "cognitive impairment", "mental handicap" and "learning difficulty" are used to describe individuals whose natural reasoning abilities, "common sense" and ability to look after themselves independently, are because of abnormalities of or early injury to the brain, insufficient to allow independent function in society. Mental retardation is a disability characterized by significant limitations both in intellectual function and in adaptive behavior as expressed in conceptual social and practical adaptive skills.',
      color: "#f59e0b",
    },
 
    {
      icon: BookOpen,
      title: "Learning Difficulties",
      description:
        "Learning disabilities refer to a group of disorders that affect the ability to learn, understand, or use spoken or written language, do mathematical calculations, coordinate movements, or direct attention. Despite having average or above-average intelligence, individuals with learning disabilities may struggle with specific academic tasks.",
      color: "#14b8a6",
    },
  ];

  const therapies = [
    "Hand function improvement",
    "Fine motor skills",
    "Visual motor skills",
    "Hand eye coordination",
    "Pre writing skills",
    "Speech therapy",
    "Music therapy",
    "Pre vocational training",
  ];

  const csrBenefits = [
    "Free Education",
    "Fees Waivers",
    "Free Books",
    "Free Uniforms",
  ];

  const filteredTerms = terms.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>{styles}</style>
      <div className="glossary-container">
        <div className="glossary-content">
          {/* Page Header */}
          <div className="page-header">
            <h1 className="page-title">Glossary</h1>
            <div className="page-divider"></div>
            <p className="page-subtitle">
              Understanding special needs and our approach
            </p>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Terms Grid */}
          <div
            className={`terms-grid animated ${
              visibleSections.has("terms") ? "visible" : ""
            }`}
            data-section="terms"
          >
            {filteredTerms.map((term, index) => (
              <div key={index} className="term-card">
                <div className="term-header">
                  <div className="term-icon-wrapper">
                    <term.icon size={32} style={{ color: term.color }} />
                  </div>
                  <h2 className="term-title">{term.title}</h2>
                </div>
                <p className="term-description">{term.description}</p>
              </div>
            ))}
          </div>

          {/* Therapies Section */}
          <div
            className={`therapies-section animated ${
              visibleSections.has("therapies") ? "visible" : ""
            }`}
            data-section="therapies"
          >
            <div className="therapies-header">
              <h2 className="therapies-title">
                Our Comprehensive Therapy Programs
              </h2>
              <p style={{ color: "#4b5563", fontSize: "1rem" }}>
                We offer specialized therapies tailored to each child's needs
              </p>
            </div>
            <div className="therapies-grid">
              {therapies.map((therapy, index) => (
                <div key={index} className="therapy-item">
                  <p className="therapy-text">{therapy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CSR Section */}
          <div
            className={`csr-section animated ${
              visibleSections.has("csr") ? "visible" : ""
            }`}
            data-section="csr"
          >
            <div className="csr-header">
              <HandHeart size={40} style={{ color: "white" }} />
              <h2 className="csr-title">CSR Initiative</h2>
            </div>
            <p className="csr-content">
              Despite our miniscule operation size, we are helping many
              underprivileged children with comprehensive support after a
              thorough consideration and analysing their family status and
              financial constraints.
            </p>
            <div className="highlight-box">
              <ul className="highlight-list">
                {csrBenefits.map((benefit, index) => (
                  <li key={index} className="highlight-item">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

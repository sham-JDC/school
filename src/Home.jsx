import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Home.css'; // Import the dedicated CSS file

// --- Helper Components ---

const MobileMenu = ({ isOpen, closeMenu, handleAnchorClick }) => (
    <div id="mobile-menu" className={`mobile-menu-panel ${isOpen ? 'open' : 'closed'} md-hidden`}>
        <div className="mobile-menu-items">
            <a href="#" onClick={(e) => handleAnchorClick(e, '#top')} className="menu-item active">Home</a>
            <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="menu-item">About Us</a>
            <a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="menu-item">Our Schools</a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="menu-item">Contact</a>
        </div>
    </div>
);

// --- Main Home Component ---

const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const slidesData = [
        {
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            alt: "Teacher helping student",
        },
        {
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            alt: "Students playing",
        },
        {
            img: "https://images.unsplash.com/photo-1577896337318-2838d7c9f562?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            alt: "Art class",
        },
    ];
    const totalSlides = slidesData.length;

    // Slider logic
    const updateSlider = useCallback(() => {
        if (sliderRef.current) {
            const offset = -(currentSlide * 100);
            sliderRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto-play interval
    useEffect(() => {
        updateSlider();
        const slideInterval = setInterval(nextSlide, 5000); // 5 seconds
        return () => clearInterval(slideInterval);
    }, [currentSlide, nextSlide, updateSlider]);

    // Function for smooth scrolling
    const handleAnchorClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed nav height
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false); // Close mobile menu
        }
    };

    return (
        <div className="page-container">
            {/* Navigation */}
            <nav className="navigation-bar sticky-top">
                <div className="nav-content-wrapper">
                    <div className="nav-logo-group">
                        <a href="#" className="nav-logo" onClick={(e) => handleAnchorClick(e, '#top')}>
                            <div className="logo-icon-bg">
                                <i className="fas fa-child"></i>
                            </div>
                            <div className="logo-text">
                                <span className="logo-title">JDC SPARSHA</span>
                                <span className="logo-subtitle">GROUP OF SCHOOLS</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <a href="#" onClick={(e) => handleAnchorClick(e, '#top')} className="desktop-link active-link">Home</a>
                        <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="desktop-link">About Us</a>
                        <a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="desktop-link">Our Schools</a>
                        <a href="#admissions" onClick={(e) => handleAnchorClick(e, '#admissions')} className="desktop-link">Admissions</a>
                        <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="cta-button">Contact Us</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-button-wrapper">
                        <button
                            id="mobile-menu-btn"
                            className="mobile-menu-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} handleAnchorClick={handleAnchorClick} />
            </nav>

            {/* Hero Section with Slider */}
            <div id="top" className="hero-section">
                <div ref={sliderRef} className="hero-slider-container">
                    {slidesData.map((slide, index) => (
                        <div key={index} className="hero-slide">
                            <img src={slide.img} alt={slide.alt} className="hero-image" />
                            <div className="hero-overlay"></div>
                        </div>
                    ))}
                </div>

                {/* Hero Content */}
                <div className="hero-content-wrapper">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">
                            Empowering Every Child to <br /> <span className="text-green-300">Reach Their Full Potential</span>
                        </h1>
                        <p className="hero-subtitle">
                            A Unique Educational Ecosystem Supporting Diverse Needs.
                        </p>
                        <div className="hero-cta-group">
                            <a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="hero-cta-primary">
                                Explore Our Schools
                            </a>
                            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hero-cta-secondary">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Slider Controls */}
                <button
                    id="prevSlide"
                    onClick={prevSlide}
                    className="slider-control left"
                    aria-label="Previous slide"
                >
                    <i className="fas fa-chevron-left text-2xl"></i>
                </button>
                <button
                    id="nextSlide"
                    onClick={nextSlide}
                    className="slider-control right"
                    aria-label="Next slide"
                >
                    <i className="fas fa-chevron-right text-2xl"></i>
                </button>
            </div>

            {/* Featured Quote Banner */}
            <div className="quote-banner">
                <div className="quote-content">
                    <i className="fas fa-quote-left quote-icon"></i>
                    <h2 className="quote-text">
                        "Inclusive Education is a Right, not a Privilege"
                    </h2>
                    <i className="fas fa-quote-right quote-icon"></i>
                </div>
            </div>

            {/* Introduction / Overview Section */}
            <section id="schools" className="section-schools">
                <div className="content-wrapper">
                    <div className="section-header">
                        <h2 className="section-title">A School for Everyone</h2>
                        <div className="separator"></div>
                        <p className="section-description">
                            JDC SPARSHA Group of Schools offers a unique, inclusive environment. We house three distinct institutions to ensure tailored care and curriculum for every student.
                        </p>
                    </div>

                    <div className="card-grid">
                        {/* School Card 1 */}
                        <div className="school-card">
                            <div className="card-header bg-light">
                                <i className="fas fa-shapes card-icon"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Tom and Jerry Nursery School</h3>
                                <p className="card-text">Catering to normal children (2 to 5 years). A regular school environment focusing on early childhood development.</p>
                                <ul className="card-list">
                                    <li><i className="fas fa-check list-check"></i>Play Group to UKG</li>
                                    <li><i className="fas fa-check list-check"></i>Activity Based Learning</li>
                                </ul>
                                <a href="#" className="card-link">Learn More <i className="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>

                        {/* School Card 2 */}
                        <div className="school-card">
                            <div className="card-header bg-light">
                                <i className="fas fa-hands-holding-child card-icon"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Tom and Jerry Special School</h3>
                                <p className="card-text">Dedicated to children with special needs. We provide specialized therapies and individualized care.</p>
                                <ul className="card-list">
                                    <li><i className="fas fa-check list-check"></i>Cerebral Palsy, Autism, MR</li>
                                    <li><i className="fas fa-check list-check"></i>Therapy & Development</li>
                                </ul>
                                <a href="#" className="card-link">Learn More <i className="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>

                        {/* School Card 3 */}
                        <div className="school-card">
                            <div className="card-header bg-light">
                                <i className="fas fa-book-open-reader card-icon"></i>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Sparsha Academy</h3>
                                <p className="card-text">Catering to children with Learning Disabilities & Slow Learners. Following the NIOS curriculum.</p>
                                <ul className="card-list">
                                    <li><i className="fas fa-check list-check"></i>NIOS Syllabus (Class 1-10)</li>
                                    <li><i className="fas fa-check list-check"></i>Vocational Goals</li>
                                </ul>
                                <a href="#" className="card-link">Learn More <i className="fas fa-arrow-right ml-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="about" className="section-mission-vision">
                <div className="content-wrapper">
                    <div className="mission-vision-grid">
                        {/* Content */}
                        <div className="mission-vision-content">
                            <div className="mission-block">
                                <div className="icon-heading-group">
                                    <div className="icon-primary-bg">
                                        <i className="fas fa-bullseye icon-white"></i>
                                    </div>
                                    <h2 className="content-heading">Our Mission</h2>
                                </div>
                                <p className="content-text border-secondary">
                                    Our mission is to **IMPART** quality education, Help all the children gain overall knowledge, **INSPIRE** them to reach their full potential in all aspects, **INSTILL** good human values and confidence.
                                </p>
                            </div>

                            <div className="vision-block">
                                <div className="icon-heading-group">
                                    <div className="icon-secondary-bg">
                                        <i className="fas fa-eye icon-white"></i>
                                    </div>
                                    <h2 className="content-heading">Our Vision</h2>
                                </div>
                                <p className="content-text border-primary">
                                    To offer unique services and inculcate necessary skillsets for a seamless adaptability and employability in our Society.
                                    <br /><span className="vision-goal">Goal: Creating a Vocational School offering NIOS Vocational Education.</span>
                                </p>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="image-grid">
                            <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="mission-img-1" />
                            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Inclusive play" className="mission-img-2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="section-why-join">
                <div className="content-wrapper">
                    <div className="section-header">
                        <h2 className="section-title">Why Join Us?</h2>
                        <div className="separator"></div>
                        <p className="section-description-small">We nurture growth through personalized attention and a holistic approach.</p>
                    </div>

                    <div className="feature-grid">
                        {/* Feature 1 */}
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-users feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Friendly Atmosphere</h4>
                                <p className="feature-text">Personalized care with love and affection in a cordial, safe environment.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-bullseye feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Targeted Learning</h4>
                                <p className="feature-text">Individual Learning Programmes created for physical, mental, and social development.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-chalkboard-teacher feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Low Student-Teacher Ratio</h4>
                                <p className="feature-text">We adhere to a strict 10:1 ratio ensuring every child receives individual attention.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-running feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Holistic Activities</h4>
                                <p className="feature-text">From Yoga and Bhajans to Sports and Arts, we focus on overall development.</p>
                            </div>
                        </div>

                         {/* Feature 5 */}
                         <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-user-md feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Expert Therapy</h4>
                                <p className="feature-text">Physiotherapy, Speech Therapy, and Sensory Development by professionals.</p>
                            </div>
                        </div>

                         {/* Feature 6 */}
                         <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className="fas fa-bus feature-icon"></i>
                            </div>
                            <div>
                                <h4 className="feature-title">Safe Transportation</h4>
                                <p className="feature-text">GPS-enabled vans with escorts ensuring safe travel for all students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSR Initiative */}
            <section className="section-csr">
                <div className="content-wrapper">
                    <div className="csr-banner">
                        <div className="csr-content-group">
                            <div className="csr-text">
                                <h3 className="csr-tag">Giving Back</h3>
                                <h2 className="csr-title">CSR Initiative</h2>
                                <p className="csr-description">
                                    Despite our operation size, we are helping many underprivileged children with **Free Education, Fee Waivers, Free Books, and Uniforms**. We believe that financial constraints should should never stand in the way of a child's future.
                                </p>
                                <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="csr-cta">Support Our Cause</a>
                            </div>
                            <div className="csr-icon-wrapper">
                                <i className="fas fa-heart csr-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="main-footer">
                <div className="content-wrapper">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo-group">
                                <div className="footer-logo-icon-bg">
                                    <i className="fas fa-child"></i>
                                </div>
                                <span className="footer-logo-title">JDC SPARSHA</span>
                            </div>
                            <p className="footer-tagline">
                                Imparting quality education and inspiring children to reach their full potential.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook fa-lg"></i></a>
                                <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
                                <a href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube fa-lg"></i></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-list">
                                <li><a href="#" onClick={(e) => handleAnchorClick(e, '#top')} className="footer-link-item">Home</a></li>
                                <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="footer-link-item">About Us</a></li>
                                <li><a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="footer-link-item">Tom and Jerry Nursery</a></li>
                                <li><a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="footer-link-item">Special School</a></li>
                                <li><a href="#schools" onClick={(e) => handleAnchorClick(e, '#schools')} className="footer-link-item">Sparsha Academy</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-contact">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact-list">
                                <li className="contact-item map-marker">
                                    <i className="fas fa-map-marker-alt icon-accent"></i>
                                    <span className="contact-text">Sri Vithala Rukhmini Temple Campus, Kengeri Hobli (Kodipalya), Bangalore - 560060</span>
                                </li>
                                <li className="contact-item">
                                    <i className="fas fa-phone icon-accent"></i>
                                    <span className="contact-text">99015 12779</span>
                                </li>
                                <li className="contact-item">
                                    <i className="fas fa-envelope icon-accent"></i>
                                    <span className="contact-text">jdc.office@jdcsparsha.org</span>
                                </li>
                                <li className="contact-item">
                                    <i className="fas fa-globe icon-accent"></i>
                                    <span className="contact-text">www.jdcsparsha.org</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 JDC SPARSHA Educational Trust. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
import React, { useState, useEffect } from "react";
import img5 from "./assets/logo.png"; // Imported the logo
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Ribbon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Color Palette
  const green = "#1b7f3a";
  const yellow = "#fffbea";
  const borderGreen = "#8ac926";

  // Reset scroll and close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for the background transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", path: "/prog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Student Life", path: "/life" },
    { name: "Join Us", path: "/join" },
    { name: "Events", path: "/events" },
    { name: "Awards", path: "/awards" },
    { name: "Glossary", path: "/glossary" },
    { name: "Contact", path: "/contact" },
  ];

  const navStyle = {
    // position: "fixed" ensures it stays on top of all content and remains pinned
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : green,
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.12)" : "none",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    padding: scrolled ? "8px 0" : "12px 0",
    borderBottom: scrolled ? `3px solid ${borderGreen}` : "none",
  };

  const linkStyle = (isActive) => ({
    textDecoration: "none",
    color: scrolled ? (isActive ? green : "#444") : "#fff",
    fontWeight: isActive ? "700" : "500",
    padding: "6px 14px",
    borderRadius: "8px",
    backgroundColor: isActive
      ? scrolled
        ? "#f0fdf4"
        : "rgba(255,255,255,0.15)"
      : "transparent",
    transition: "all 0.2s ease-in-out",
    fontSize: "13.5px",
    letterSpacing: "0.2px",
  });

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .nav-item:hover {
            color: ${scrolled ? green : yellow} !important;
            background-color: ${scrolled ? "#f0fdf4" : "rgba(255,255,255,0.1)"};
          }
          /* This prevents content from hiding behind the fixed navbar */
          body {
            padding-top: 80px; 
          }
          @media (max-width: 1150px) {
            .desktop-links { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}
      </style>

      <nav style={navStyle}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO SECTION */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src={img5}
              alt="JDC Sparsha Logo"
              style={{
                height: scrolled ? "45px" : "55px",
                width: "auto",
                objectFit: "contain",
                transition: "height 0.3s ease",
              }}
            />
            {/* Stacked Text Layout matching your image */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.1",
              }}
            >
              <span
                style={{
                  fontSize: scrolled ? "18px" : "22px",
                  fontWeight: "900",
                  color: scrolled ? green : "#fff",
                  letterSpacing: "0.8px",
                  transition: "font-size 0.3s ease",
                }}
              >
                JDC SPARSHA
              </span>
              <span
                style={{
                  fontSize: scrolled ? "10px" : "12px",
                  fontWeight: "700",
                  color: scrolled ? green : "#fff",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  transition: "font-size 0.3s ease",
                }}
              >
                Group of Schools
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className="desktop-links"
            style={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-item"
                style={linkStyle(location.pathname === link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              background: "none",
              border: "none",
              color: scrolled ? green : "#fff",
              cursor: "pointer",
              display: "none",
            }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderBottom: `5px solid ${green}`,
              padding: "15px 25px 30px 25px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              animation: "slideIn 0.3s ease",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  padding: "14px 20px",
                  borderRadius: "10px",
                  fontSize: "17px",
                  backgroundColor:
                    location.pathname === link.path ? "#f0fdf4" : "transparent",
                  color: location.pathname === link.path ? green : "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Ribbon;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen } from "lucide-react";

const Ribbon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const green = "#1b7f3a";
  const yellow = "#fffbea";
  const borderGreen = "#8ac926";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Added Glossary to the links array
  const navLinks = [
    { name: "Programs", path: "/prog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Student Life", path: "/life" },
    { name: "Join Us", path: "/join" },
    { name: "Events", path: "/events" },
    { name: "Awards", path: "/awards" },
    { name: "Glossary", path: "/glossary" }, // New Link
    { name: "Contact", path: "/contact" },
  ];

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : green,
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    padding: scrolled ? "8px 0" : "15px 0",
    borderBottom: scrolled ? `3px solid ${borderGreen}` : "none",
  };

  const linkStyle = (isActive) => ({
    textDecoration: "none",
    color: scrolled ? (isActive ? green : "#444") : "#fff",
    fontWeight: isActive ? "700" : "500",
    padding: "6px 12px",
    borderRadius: "8px",
    backgroundColor: isActive 
      ? (scrolled ? "#f0fdf4" : "rgba(255,255,255,0.15)") 
      : "transparent",
    transition: "all 0.2s ease-in-out",
    fontSize: "13.5px", // Slightly smaller to accommodate the extra link
    letterSpacing: "0.2px"
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
          @media (max-width: 1100px) { /* Trigger mobile menu slightly earlier */
            .desktop-links { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}
      </style>

      <nav style={navStyle}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* LOGO */}
          <Link to="/" style={{ fontSize: "20px", fontWeight: "800", color: scrolled ? green : "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ background: scrolled ? green : "#fff", color: scrolled ? "#fff" : green, padding: "5px", borderRadius: "6px", display: "flex" }}>
              <Home size={18} />
            </div>
            <span>JDC SPARSHA</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="desktop-links" style={{ display: "flex", gap: "2px", alignItems: "center" }}>
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
            style={{ background: "none", border: "none", color: scrolled ? green : "#fff", cursor: "pointer", display: "none" }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            backgroundColor: "#fff", borderBottom: `4px solid ${green}`,
            padding: "10px 20px 20px 20px", display: "flex", flexDirection: "column", gap: "5px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)", animation: "slideIn 0.3s ease"
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  textDecoration: "none", color: "#333", fontWeight: "600",
                  padding: "12px 15px", borderRadius: "8px", fontSize: "16px",
                  backgroundColor: location.pathname === link.path ? "#f0fdf4" : "transparent",
                  color: location.pathname === link.path ? green : "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
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
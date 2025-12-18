import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";

const Ribbon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current route info

  // Theme Colors
  const green = "#1b7f3a";
  const yellow = "#fffbea";
  const borderGreen = "#8ac926";

  // --- 1. NEW: SCROLL TO TOP LOGIC ---
  useEffect(() => {
    // This forces the window to the top instantly whenever the path changes
    window.scrollTo(0, 0);

    // Also close mobile menu if it's open
    setIsOpen(false);
  }, [location.pathname]);
  // -----------------------------------

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", path: "/prog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Student Life", path: "/life" },
    { name: "Why Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  /* --- STYLES --- */
  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : green,
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
    transition: "all 0.3s ease",
    padding: scrolled ? "10px 0" : "15px 0",
    borderBottom: scrolled ? `3px solid ${borderGreen}` : "none",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "800",
    color: scrolled ? green : "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "color 0.3s ease",
  };

  const linkStyle = (isActive) => ({
    textDecoration: "none",
    color: scrolled
      ? isActive
        ? green
        : "#333"
      : isActive
      ? "#fff"
      : "rgba(255,255,255,0.9)",
    fontWeight: isActive ? "700" : "500",
    padding: "8px 16px",
    borderRadius: "20px",
    backgroundColor: isActive
      ? scrolled
        ? yellow
        : "rgba(255,255,255,0.2)"
      : "transparent",
    border: isActive ? `2px solid ${borderGreen}` : "2px solid transparent",
    transition: "all 0.3s ease",
    fontSize: "15px",
  });

  const mobileMenuStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: yellow,
    borderBottom: `4px solid ${green}`,
    padding: "20px",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    animation: "slideDown 0.3s ease forwards",
  };

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .nav-hover:hover {
            transform: translateY(-2px);
          }
        `}
      </style>

      <nav style={navStyle}>
        <div style={container}>
          {/* LOGO */}
          <Link to="/" style={logoStyle}>
            <div
              style={{
                background: scrolled ? green : "#fff",
                color: scrolled ? "#fff" : green,
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              <Home size={20} />
            </div>
            JDC SPARSHA
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className="desktop-links"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-hover"
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
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div style={mobileMenuStyles}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                textDecoration: "none",
                color: green,
                fontWeight: "600",
                fontSize: "18px",
                padding: "12px",
                borderRadius: "10px",
                backgroundColor:
                  location.pathname === link.path ? "#fff" : "transparent",
                border:
                  location.pathname === link.path
                    ? `2px solid ${green}`
                    : "none",
                textAlign: "center",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <style>
        {`
          @media (max-width: 868px) {
            .desktop-links { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}
      </style>
    </>
  );
};

export default Ribbon;

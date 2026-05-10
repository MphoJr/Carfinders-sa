import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        background: "var(--black)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "var(--gold)", fontFamily: "Montserrat" }}>
        CarFinders SA
      </h2>

      {/* Hamburger Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", display: "block", color: "var(--gold)" }}
        className="hamburger"
      >
        ☰
      </div>

      {/* Menu Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="hero" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="services" smooth={true} duration={500}>
          Services
        </Link>
        <Link to="whychooseus" smooth={true} duration={500}>
          Why Us
        </Link>
        <Link to="howitworks" smooth={true} duration={500}>
          How It Works
        </Link>
        <Link to="finance" smooth={true} duration={500}>
          Finance
        </Link>
        <Link to="testimonials" smooth={true} duration={500}>
          Testimonials
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

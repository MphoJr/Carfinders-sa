import { Link } from "react-scroll";

export default function Navbar() {
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
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Services
        </Link>
        <Link
          to="whychooseus"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Why Us
        </Link>
        <Link
          to="howitworks"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          How It Works
        </Link>
        <Link
          to="finance"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Finance
        </Link>
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Testimonials
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "var(--white)" }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

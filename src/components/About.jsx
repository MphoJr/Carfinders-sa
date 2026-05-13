import aboutImg from "../assets/images/Audi.jpeg"; // replace with your actual image

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left column: text */}
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            CarFinders South Africa is a professional vehicle sourcing agency
            dedicated to simplifying the car buying process. We work with
            trusted dealerships nationwide to help clients secure the best
            possible vehicle deals, vehicle finance options, and reliable
            service.
          </p>
          <ul>
            <li>Nationwide vehicle sourcing</li>
            <li>Trusted dealership network</li>
            <li>Better negotiated deals</li>
            <li>Finance assistance</li>
            <li>Professional support</li>
          </ul>
        </div>

        {/* Right column: image */}
        <div className="about-image">
          <img src={aboutImg} alt="CarFinders South Africa" />
        </div>
      </div>
    </section>
  );
}

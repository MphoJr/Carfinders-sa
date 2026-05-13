import sourcingImg from "../assets/images/hold.jpeg";
import negotiationImg from "../assets/images/Quality.jpeg";
import financeImg from "../assets/images/Negotiate.jpeg";
import nationwideImg from "../assets/images/Process.jpeg";

export default function Services() {
  const services = [
    {
      title: "Vehicle Sourcing",
      desc: "Find quality vehicles that match your budget, preferences, and lifestyle.",
      img: sourcingImg,
    },
    {
      title: "Deal Negotiation",
      desc: "We negotiate with dealerships to secure the best possible pricing and value.",
      img: negotiationImg,
    },
    {
      title: "Finance Assistance",
      desc: "We assist clients with vehicle finance applications through trusted partners.",
      img: financeImg,
    },
    {
      title: "Nationwide Assistance",
      desc: "We work with dealerships across South Africa to find your perfect vehicle.",
      img: nationwideImg,
    },
  ];

  return (
    <section id="services" className="services">
      <h2 font-size="2rem">What We Do</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.img} alt={s.title} className="service-img" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

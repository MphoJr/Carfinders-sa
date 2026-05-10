export default function Services() {
  const services = [
    {
      title: "Vehicle Sourcing",
      desc: "Find quality vehicles that match your budget, preferences, and lifestyle.",
    },
    {
      title: "Deal Negotiation",
      desc: "We negotiate with dealerships to secure the best possible pricing and value.",
    },
    {
      title: "Finance Assistance",
      desc: "We assist clients with vehicle finance applications through trusted partners.",
    },
    {
      title: "Trade-In Assistance",
      desc: "Simplify the process of trading in your current vehicle.",
    },
    {
      title: "Nationwide Assistance",
      desc: "We work with dealerships across South Africa to find your perfect vehicle.",
    },
  ];

  return (
    <section id="services" style={{ padding: "60px 20px" }}>
      <h2>What We Do</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              background: "var(--charcoal)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

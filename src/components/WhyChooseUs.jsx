export default function WhyChooseUs() {
  const features = [
    "Trusted dealership relationships",
    "Professional service",
    "Fast response times",
    "Nationwide vehicle sourcing",
    "Better deal negotiation",
    "Stress-free process",
    "Luxury customer experience",
  ];

  return (
    <section style={{ padding: "60px 20px", background: "var(--charcoal)" }}>
      <h2>Why Clients Choose CarFinders SA</h2>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </section>
  );
}

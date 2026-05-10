export default function HowItWorks() {
  const steps = [
    "Tell Us What You Need",
    "We Search Nationwide",
    "We Compare The Best Deals",
    "You Choose Your Perfect Match",
  ];

  return (
    <section id="howitworks" style={{ padding: "60px 20px" }}>
      <h2>Simple. Smart. Stress-Free.</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 200px",
              background: "var(--charcoal)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Step {i + 1}</h3>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

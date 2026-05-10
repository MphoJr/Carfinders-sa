export default function Testimonials() {
  const testimonials = [
    "CarFinders SA made the entire process stress-free. They helped me secure a great vehicle at an amazing deal.",
    "Professional service from start to finish. Highly recommended.",
    "They found exactly what I wanted and handled everything professionally.",
  ];

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2>What Our Clients Say</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            style={{
              background: "var(--charcoal)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            {t}
          </blockquote>
        ))}
      </div>
    </section>
  );
}

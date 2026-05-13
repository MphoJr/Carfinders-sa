export default function Testimonials() {
  const testimonials = [
    {
      name: "Thabo M.",
      feedback:
        "CarFinders SA made the entire process stress-free. They helped me secure a great vehicle at an amazing deal.",
    },
    {
      name: "Naledi K.",
      feedback:
        "Professional service from start to finish. Highly recommended.",
    },
    {
      name: "Sipho D.",
      feedback:
        "They found exactly what I wanted and handled everything professionally.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4 className="testimonial-name">— {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        Find Your Perfect Vehicle With Confidence.
      </h1>
      <p style={{ maxWidth: "600px", margin: "auto" }}>
        We help South Africans source quality vehicles, compare the best deals,
        negotiate with trusted dealerships, and secure vehicle finance - all
        stress-free.
      </p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button className="primary">Find My Car</button>
        <button className="secondary">Apply For Finance</button>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="Hero"
      className="hero"
      style={{ textAlign: "center", padding: "80px 20px" }}
    >
      <h1>Find Your Perfect Vehicle With Confidence.</h1>
      <p>
        We help South Africans source quality vehicles, compare the best deals,
        negotiate with trusted dealerships, and secure vehicle finance - all
        stress-free.
      </p>
      <div style={{ marginTop: "20px" }}>
        <button className="primary">Find My Car</button>
        <button className="secondary" style={{ marginLeft: "10px" }}>
          Apply For Finance
        </button>
      </div>
    </section>
  );
}

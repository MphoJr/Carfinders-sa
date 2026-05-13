export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1 font-size="3rem">Find Your Perfect Vehicle With Confidence.</h1>
      <p>
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

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "60px 20px", background: "var(--charcoal)" }}
    >
      <h2>Let's Find Your Perfect Match</h2>
      <p>
        Phone: 068 159 3340 | Email: carfinderssa@gmail.com | Website:
        www.carfinderssa.co.za
      </p>
      <form
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Contact Number" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Vehicle Interested In" />
        <input type="text" placeholder="Budget Range" />
        <textarea placeholder="Message"></textarea>
        <button className="primary" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

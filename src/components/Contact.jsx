export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let's Find Your Perfect Match</h2>
      <div className="contact-container">
        {/* Left side: contact details */}
        <div className="contact-details">
          <p>
            <strong>Phone:</strong> 068 159 3340
          </p>
          <p>
            <strong>Email:</strong> carfinderssa@gmail.com
          </p>
          <p>
            <strong>Website:</strong> www.carfinderssa.co.za
          </p>
        </div>

        {/* Right side: form */}
        <form className="contact-form">
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
      </div>
    </section>
  );
}

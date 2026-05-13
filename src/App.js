import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Finance from "./components/Finance";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactBar from "./components/ContactBar";
import FAQ from "./components/FAQ";
import Counters from "./components/Counters";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />

      <Testimonials />
      <FAQ />

      <Counters />
      <Contact />

      <Footer />
      <WhatsAppButton />

      <ContactBar />
    </>
  );
}

export default App;

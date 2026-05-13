import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Counters from "./components/Counters";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Counters />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

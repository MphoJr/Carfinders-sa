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
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Finance />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

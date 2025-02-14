import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed header */}
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;

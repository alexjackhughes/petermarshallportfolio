import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Quotes from "../components/quotes";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import Contact from "../components/contact";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Quotes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

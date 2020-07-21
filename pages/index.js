import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Expand from "../components/expand";
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
      <Expand
        title="Creative Hubspot"
        description="Creative Hubspot wanted a modern site that reflected the diverse nature of their business. Working with the company’s in-house designers, I wrote copy that explained every facet of their operation in a succinct and readable way."
        url="https://hubspot.com"
        image="hubspot.png"
        switch={false}
        hasBackground={false}
      />
      <Quotes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

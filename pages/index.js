import { Element } from "react-scroll";

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
      <Element id="home" name="home">
        <Hero />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="portfolio" name="portfolio">
        <Expand
          title="Creative Hubspot"
          description="Creative Hubspot wanted a modern site that reflected the diverse nature of their business. Working with the company’s in-house designers, I wrote copy that explained every facet of their operation in a succinct and readable way."
          url="https://hubspot.com"
          image="hubspot.png"
          switch={false}
          hasBackground={false}
        />
      </Element>
      <Expand
        title="Aston International"
        description="Working with the award-winning designers at Ashgrove Marketing, I wrote the site copy for corporate service and trust provider Aston International.  After interviewing the Aston team, we decided to avoid overwhelming visitors with too much information. For this reason the copy is short, simple, and to the point."
        url="https://www.aston.co.im/"
        image="astoninternational.png"
        switch={true}
        hasBackground={false}
      />
      <Element id="testimonial" name="testimonial">
        <Quotes />
      </Element>
      <Expand
        title="Hootsuite"
        description="I was the primary copywriter for a series of Hootsuite’s case studies. After transcribing webinars and consulting supporting documents, I presented the most important information regarding each project an informative and succinct way."
        url="https://hootsuite.com"
        image="hootsuite.png"
        switch={true}
        hasBackground={false}
      />
      <Expand
        title="HVO Search"
        description="For over two years I have written a weekly blog for executive search firm HVO Search. I also compile a weekly newsletter and, after transcribing from audio, write-up HVO Search live events."
        url="https://www.hvosearch.com/"
        image="hvosearch.png"
        switch={false}
        hasBackground={false}
      />
      <Testimonials />
      <Expand
        title="InPlayer"
        description="InPlayer require ongoing well-researched industry update posts. By aggregating information from different industry research and news platforms, I write opinion pieces that give structure and narrative to statistics and sensational headlines."
        url="https://inplayer.com/"
        image="inplayer.png"
        switch={false}
        hasBackground={false}
      />
      <Expand
        title="Bookmundi"
        description="bookmundi wanted a series of shareable blogs that explained and detailed some of their most popular destinations. I created a series of evergreen “top-ten” articles that continue to bring in significant traffic to the bookmundi site."
        url="https://www.bookmundi.com/"
        image="bookmundi.png"
        switch={true}
        hasBackground={false}
      />
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

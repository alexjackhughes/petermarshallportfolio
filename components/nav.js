import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="bg-white p-2 mt-0 w-full fixed z-10 top-0">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <Link to="home" spy={true} smooth={true} duration={400}>
            <a
              className="no-underline hover:text-gray-800 hover:no-underline text-gray-700"
              href="#"
            >
              <span className="text-2xl pl-2">PETER MARSHALL</span>
            </a>
          </Link>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <Link to="about" spy={true} smooth={true} duration={400}>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to="portfolio" spy={true} smooth={true} duration={400}>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Portfolio
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to="testimonial" spy={true} smooth={true} duration={400}>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Testimonials
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link to="contact" spy={true} smooth={true} duration={400}>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

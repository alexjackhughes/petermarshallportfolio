import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://petermarshallportfolio.com/images/petermarshall.png)",
      }}
    >
      <div className="container mx-auto m-56 text-center">
        <h2 className="text-6xl text-white font-bold">Peter Marshall</h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Freelance Copywriter, Copy Editor, Proofreader
        </h3>

        <Link to="about" spy={true} smooth={true} duration={400}>
          <button
            href="#"
            className="bg-white text-gray-700 rounded-lg py-4 px-8 shadow-md uppercase leading-none tracking-wider hover:bg-gray-200"
          >
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
}

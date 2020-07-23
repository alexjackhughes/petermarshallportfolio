export default function Hero() {
  return (
    <div
      class="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://petermarshallportfolio.com/images/petermarshall.png)",
      }}
    >
      <div class="container mx-auto m-56 text-center">
        <h2 class="text-6xl text-white font-bold">Peter Marshall</h2>
        <h3 class="text-2xl mb-8 text-gray-200">
          Freelance Copywriter, Copy Editor, Proofreader
        </h3>

        <button class="bg-white text-gray-700 rounded-lg py-4 px-8 shadow-md uppercase leading-none tracking-wider hover:bg-gray-200">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      class="py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url(http://localhost:3000/images/petermarshall.png)",
      }}
    >
      <div class="container mx-auto m-56 text-center">
        <h2 class="text-4xl text-gray-800 font-bold">Peter Marshall</h2>
        <h3 class="text-2xl mb-8 text-gray-600">
          Freelance Copywriter, Copy Editor, Proofreader
        </h3>

        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          About me
        </button>
      </div>
    </div>
  );
}

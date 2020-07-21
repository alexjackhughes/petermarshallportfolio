export default function Contact() {
  return (
    <section class="p-4 bg-gray-100">
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0 text-center">
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-10">
          <span className="text-blue-300 icon fad fa-3x fa-phone is-large mb-5" />
          <h3 class="text-2xl mb-3 font-heading text-gray-800 font-bold">
            Phone
          </h3>
          <p class="text-gray-500 leading-relaxed">+44 (0) 7624 345331</p>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-10">
          <span className="text-blue-300 icon fad fa-3x fa-map-marked-alt is-large mb-5" />
          <h3 class="text-2xl mb-3 font-heading text-gray-800 font-bold">
            Address
          </h3>
          <p class="text-gray-500 leading-relaxed">London</p>
        </div>
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0 my-10">
          <span className="text-blue-300 icon fad fa-3x fa-envelope-open-text is-large mb-5" />
          <h3 class="text-2xl mb-3 font-heading text-gray-800 font-bold">
            Email
          </h3>
          <p class="text-gray-500 leading-relaxed">marshallpeter94@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

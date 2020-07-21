export default function Nav() {
  return (
    <nav class="bg-white p-2 mt-0 w-full fixed z-10 top-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a
            class="no-underline hover:text-gray-800 hover:no-underline text-gray-700"
            href="#"
          >
            <span class="text-2xl pl-2">PETER MARSHALL</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-3">
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                About
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Testimonials
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function Expand(props) {
  return (
    <section class={`py-12 px-4 ${props.hasBackground && "bg-gray-100"}`}>
      <div class="flex flex-wrap items-center text-center lg:text-left mx-2 my-10">
        <div
          class={`lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-2 ${
            props.switch ? "lg:order-none" : "lg:pl-10"
          }`}
        >
          <h2 class="text-5xl text-gray-800 font-bold leading-none mb-8">
            {props.title}
          </h2>
          <p class="mb-8 text-gray-500 leading-relaxed">{props.description}</p>
          <div>
            <a
              class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
              href={props.url}
              target="_blank"
              rel="noopener"
            >
              Visit website
            </a>
          </div>
        </div>
        <div class={`lg:w-1/2 px-2 order-1 ${!props.switch && "pr-2"}`}>
          <img
            src={`https://petermarshallportfolio.com/images/${props.image}`}
            alt={props.title}
          />
        </div>
      </div>
    </section>
  );
}

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
              class="text-sm text-blue-500 rounded-lg py-3 px-8 shadow-md uppercase leading-none tracking-wider bg-white border hover:text-white hover:bg-blue-500 border-blue-500 hover:border-transparent"
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
            src={`https://petermarshallportfolio.com/images/clients/${props.image}`}
            alt={props.title}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

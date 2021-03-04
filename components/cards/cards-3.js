import Link from "next/link";

export default function Cards3() {
  return (
    <section className="cards-3">
      <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-24 xl:py-32">
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col flex-1 shadow-xl p-8">
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio.
            </p>
            <Link href="/">
              <a className="mt-auto text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
          <div class="flex flex-col flex-1 shadow-xl p-6 my-12 lg:mx-10 lg:my-0">
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio.
            </p>
            <Link href="/">
              <a className="mt-auto text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
          <div class="flex flex-col flex-1 shadow-xl p-6">
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio.
            </p>
            <Link href="/">
              <a className="mt-auto text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

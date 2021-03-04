import Link from "next/link";

export default function Cards5() {
  return (
    <section className="cards-5">
      <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-24 xl:py-32">
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col flex-1 bg-gray-10 my-6 lg:mx-5 lg:my-0">
            <img
              className="w-full h-64 mb-6 bg-gray-200"
              src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
            />
            <h2 className="mx-6 mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mx-6 mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus.
            </p>
            <Link href="/">
              <a className="mx-6 mt-auto mb-6 text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
          <div class="flex flex-col flex-1 bg-gray-10 my-6 lg:mx-5 lg:my-0">
            <img
              className="w-full h-64 mb-6 bg-gray-200"
              src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
            />
            <h2 className="mx-6 mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mx-6 mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus.
            </p>
            <Link href="/">
              <a className="mx-6 mt-auto mb-6 text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
          <div class="flex flex-col flex-1 bg-gray-10 my-6 lg:mx-5 lg:my-0">
            <img
              className="w-full h-64 mb-6 bg-gray-200"
              src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
            />
            <h2 className="mx-6 mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mx-6 mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus.
            </p>
            <Link href="/">
              <a className="mx-6 mt-auto mb-6 text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

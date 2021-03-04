import Link from "next/link";

export default function MediaBlock1() {
  return (
    <section className="media-block-1">
      <div className="max-w-screen-xl px-4 py-24 xl:mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img
              className="object-cover object-top w-full h-full mb-12 bg-gray-200 lg:mb-0"
              src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
            />
          </div>
          <div className="flex-1 lg:py-20 lg:px-10 xl:px-20">
            <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
              In massa tempor nec feugiat nisl pretium
            </h2>
            <p className="mb-12 font-light leading-loose text-gray-700">
              Pulvinar proin gravida hendrerit lectus a. Ullamcorper a lacus
              vestibulum sed. Luctus accumsan tortor posuere ac ut consequat
              semper viverra nam. Netus et malesuada fames ac turpis egestas
              maecenas pharetra convallis. Pellentesque diam volutpat commodo
              sed egestas. Scelerisque viverra.
            </p>
            <Link href="/">
              <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md lg:inline-flex sm:w-auto hover:bg-blue-600 hover:border-blue-600">
                Button
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

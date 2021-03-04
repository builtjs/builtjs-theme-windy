import Link from "next/link";

export default function Cover2() {
  return (
    <article className="cover-2">
      <div className="px-4 py-20 lg:py-32 xl:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
            Maecenas accumsan
          </p>
          <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-8xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi
            cursus vitae congue mauris rhoncus orci sagittis.
          </p>
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto sm:flex-row">
            <Link href="/#">
              <a className="flex items-center justify-center flex-grow w-full px-6 py-3 mb-4 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md md:w-auto hover:bg-blue-600 hover:border-blue-600 sm:mb-0 sm:mx-3">
                Button
              </a>
            </Link>
            <Link href="/#">
              <a className="flex items-center justify-center flex-grow w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-300 border border-blue-300 rounded-md sm:mx-3 md:w-auto hover:bg-blue-400 hover:border-blue-400">
                Button
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

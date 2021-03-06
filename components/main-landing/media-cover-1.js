import Link from "next/link";

export default function MediaCover1() {
  return (
    <section>
      <h1 className="remove-me">Media Cover 1</h1>
      <div className="overflow-hidden bg-gray-50 lg:py-36">
        <div className="relative flex flex-col lg:flex-row">
          <div className="relative z-20 flex-1 mb-12 lg:order-1 lg:mb-0 lg:mr-20">
            <img
              className="relative z-10 object-cover object-top w-full h-full bg-gray-50 lg:shadow-2xl lg:rounded-lg"
              src="https://source.unsplash.com/yTwXpLO5HAA"
            />
            <div className="absolute bottom-0 right-0 z-10 text-white pattern-dots"></div>
          </div>
          <div className="relative z-20 flex-1 px-4 mb-20 lg:py-24 xl:32 lg:my-auto">
            <div className="mx-auto text-center sm:w-4/5 lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="hidden w-10 mb-3 mr-3 border border-blue-300 lg:block"></div>
                <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">
                  Welcome to
                </p>
              </div>
              <h1 className="mb-8 text-5xl font-bold leading-none text-gray-900 xl:text-6xl">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="mb-10 text-lg font-light leading-loose text-gray-700 xl:pr-20 lg:mb-16">
                Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi
                cursus vitae congue mauris rhoncus orci sagittis.
              </p>
              <div className="flex flex-col items-center sm:flex-row">
                <Link href="/services">
                  <a className="flex items-center justify-center w-full px-6 py-3 mb-4 text-white transition duration-200 ease-in-out bg-blue-400 border border-transparent rounded-md xl:w-auto hover:bg-blue-500 hover:border-blue-500 sm:mb-0 sm:mr-2">
                    View Services
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="flex items-center justify-center w-full px-6 py-3 text-gray-600 transition duration-200 ease-in-out border rounded-md bg-gray-50 border-gray-50 xl:w-auto hover:border-gray-100 hover:bg-gray-100 hover:text-gray-900 sm:ml-2">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -112px;
          bottom: -100px;
          width: 50%;
          height: 60%;
        }
      `}</style>
    </section>
  );
}

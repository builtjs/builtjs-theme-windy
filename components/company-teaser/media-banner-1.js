import Link from "next/link";

export default function MediaBanner1() {
  return (
    <section id="company-teaser" className="media-banner-1">
      <div className="max-w-screen-xl px-4 py-24 xl:mx-auto lg:py-32">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative flex-1 mb-10 lg:mb-0">
            <img
              className="relative z-10 bg-gray-100 rounded-full shadow-xl"
              src="https://source.unsplash.com/Oalh2MojUuk/1000x1000"
            />
            <div className="absolute top-0 left-0 w-full h-full text-blue-400 rounded-full rounded-tl-none pattern-offset-dots"></div>
            <div className="absolute bottom-0 right-0 w-full h-full text-blue-400 rounded-full rounded-br-none pattern-offset-dots"></div>
          </div>
          <div className="flex-1 md:pl-10 xl:pl-20">
            <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
              <span className="text-blue-600">About Acme</span> nunc sed velit
              dignissim
            </h2>
            <p className="mb-12 font-light leading-loose text-gray-700">
              Blandit volutpat maecenas volutpat blandit aliquam etiam erat
              velit. Imperdiet massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper malesuada. Libero id faucibus nisl tincidunt. Neque
              egestas congue quisque egestas diam in arcu. In egestas erat
              imperdiet sed euismod nisi.
            </p>
            <Link href="/about">
              <a className="flex items-center justify-center px-6 py-3 text-blue-500 transition duration-200 ease-in-out bg-white border border-blue-500 rounded-md sm:inline-flex hover:bg-blue-500 hover:text-white">
                More About Us
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-offset-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px),
            radial-gradient(currentColor 1px, transparent 1px);
          background-size: calc(20 * 1px) calc(20 * 1px);
          background-position: 0 0, calc(10 * 1px) calc(10 * 1px);
        }
      `}</style>
    </section>
  );
}

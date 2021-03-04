import Link from "next/link";

export default function MediaBlock1() {
  return (
    <section id="services-benefits-teaser" className="media-block-1">
      <div className="px-4 py-24 overflow-hidden bg-gray-50 lg:py-32">
        <div className="max-w-screen-xl xl:mx-auto">
          <div className="flex flex-col mb-24 lg:flex-row lg:mb-40">
            <div className="relative flex-1">
              <img
                className="relative z-10 object-cover object-top w-full h-full mb-12 bg-gray-100 rounded-lg shadow-2xl lg:mb-0"
                src="https://source.unsplash.com/XkKCui44iM0"
              />
              <div className="absolute w-1/2 h-full text-gray-300 pattern-dots one"></div>
            </div>
            <div className="relative z-10 flex-1 lg:pl-20 xl:py-20">
              <div className="flex items-center">
                <div className="w-2 h-2 mb-3 mr-3 bg-blue-400 rounded-full"></div>
                <p className="mb-3 text-lg tracking-widest text-blue-400 uppercase">
                  Benefit 1
                </p>
              </div>
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
              <Link href="/services">
                <a className="flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-200 ease-in-out bg-blue-400 rounded-md sm:inline-flex hover:bg-blue-500">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:mb-24">
            <div className="relative flex-1 lg:order-1">
              <img
                className="relative z-10 object-cover object-top w-full h-full mb-12 bg-gray-100 rounded-lg shadow-2xl lg:mb-0"
                src="https://source.unsplash.com/SYTO3xs06fU"
              />
              <div className="absolute w-1/2 h-full text-gray-300 pattern-dots two"></div>
            </div>
            <div className="relative z-10 flex-1 lg:pr-10 xl:pr-20 xl:py-20">
              <div className="flex items-center">
                <div className="w-2 h-2 mb-3 mr-3 bg-blue-400 rounded-full"></div>
                <p className="mb-3 text-lg tracking-widest text-blue-400 uppercase">
                  Benefit 2
                </p>
              </div>
              <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
                Nec ultrices dui sapien eget mi proin sed
              </h2>
              <p className="mb-12 font-light leading-loose text-gray-700">
                Scelerisque felis imperdiet proin fermentum leo vel orci porta
                non. Massa tincidunt dui ut ornare. Nibh nisl condimentum id
                venenatis a condimentum vitae sapien. Id porta nibh venenatis
                cras sed felis. Ipsum dolor sit amet consectetur adipiscing elit
                ut. Platea dictumst quisque sagittis purus. Pulvinar proin
                gravida hendrerit lectus tristique senectus et.
              </p>
              <Link href="/services">
                <a className="flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-200 ease-in-out bg-blue-400 rounded-md sm:inline-flex hover:bg-blue-500">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -10px;
          bottom: -110px;
        }

        @media (min-width: 1024px) {
          .pattern-dots.one {
            right: auto;
            left: -105px;
          }

          .pattern-dots.two {
            left: auto;
            right: -105px;
          }
        }
      `}</style>
    </section>
  );
}

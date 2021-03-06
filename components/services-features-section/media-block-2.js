import Link from "next/link";

export default function MediaBlock2() {
  return (
    <section>
      <h1 className="remove-me">Media block 2</h1>
      <div className="px-4 py-24 overflow-hidden bg-gray-10 lg:px-0 lg:py-32">
        <div className="flex flex-col mb-24 lg:flex-row lg:mb-40">
          <div className="relative flex-1 lg:order-1 xl:h-screen max-h-80vh">
            <img
              className="relative z-10 object-cover object-top w-full h-full mb-12 bg-gray-100 rounded-lg shadow-xl lg:mb-0 lg:rounded-tr-none lg:rounded-br-none"
              src="https://source.unsplash.com/CPs2X8JYmS8"
            />
            <div className="absolute w-1/2 h-full text-gray-300 pattern-dots two"></div>
          </div>
          <div className="relative z-10 flex-1">
            <div className="lg:px-10 xl:px-24 lg:mt-10">
              <div className="flex items-center">
                <div className="w-2 h-2 mb-3 mr-3 bg-blue-400 rounded-full"></div>
                <p className="mb-3 text-lg tracking-widest text-blue-400 uppercase">
                  Service 1
                </p>
              </div>
              <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
                Congue mauris rhoncus aenean amit
              </h2>
              <p className="mb-6 font-light leading-loose text-gray-700">
                Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
                elementum tempus egestas sed sed risus. Tempor commodo
                ullamcorper a lacus vestibulum sed arcu non odio. Ut pharetra
                sit amet aliquam id diam maecenas. Convallis convallis tellus id
                interdum velit laoreet id donec. Ut eu sem integer vitae justo.
              </p>
              <p className="mb-6 font-light leading-loose text-gray-700">
                Faucibus a pellentesque sit amet porttitor eget. Rhoncus mattis
                rhoncus urna neque viverra justo nec. Vitae suscipit tellus
                mauris a diam. Id eu nisl nunc mi ipsum faucibus. Nulla facilisi
                nullam vehicula ipsum a arcu cursus. Mi quis hendrerit dolor
                magna eget est lorem ipsum.
              </p>
              <ul className="mb-6 ml-5 font-light leading-loose text-gray-700 list-disc">
                <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
                <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
                <li>In egestas erat imperdiet sed euismod nisi</li>
              </ul>
              <p className="mb-12 font-light leading-loose text-gray-700">
                Diam ut venenatis tellus in metus vulputate eu scelerisque. Et
                malesuada fames ac turpis egestas integer.
              </p>
              <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
                Why choose us?
              </h2>
              <p className="mb-12 font-light leading-loose text-gray-700">
                Elementum sagittis vitae et leo duis ut. Netus et malesuada
                fames ac turpis egestas. Potenti nullam ac tortor vitae purus
                faucibus. Tellus mauris a diam maecenas sed. Enim sed faucibus
                turpis in. Tellus mauris a diam maecenas. At varius vel pharetra
                vel turpis nunc eget.
              </p>
              <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
                How we're different
              </h2>
              <p className="mb-6 font-light leading-loose text-gray-700">
                Rhoncus urna neque viverra justo nec ultrices. Id diam maecenas
                ultricies mi eget mauris pharetra et. Mauris rhoncus aenean vel
                elit. Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="mb-12 font-light leading-loose text-gray-700">
                Accumsan sit amet nulla facilisi morbi tempus iaculis. Curabitur
                vitae nunc sed velit dignissim sodales ut. In egestas erat
                imperdiet sed euismod nisi. Eleifend mi in nulla posuere
                sollicitudin.
              </p>
              <Link href="/contact">
                <a className="flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-200 ease-in-out bg-blue-400 rounded-md sm:inline-flex hover:bg-blue-500">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mb-20">
          <div className="relative flex-1 xl:h-screen max-h-80vh">
            <img
              className="relative z-10 object-cover object-top w-full h-full mb-12 bg-gray-100 rounded-lg shadow-xl lg:mb-0 lg:rounded-tl-none lg:rounded-bl-none"
              src="https://source.unsplash.com/jk-vpJaxUxw"
            />
            <div className="absolute w-1/2 h-full text-gray-300 pattern-dots one"></div>
          </div>
          <div className="relative z-10 flex-1">
            <div className="lg:px-10 xl:px-24 lg:mt-12 xl:mt-16">
              <div className="flex items-center">
                <div className="w-2 h-2 mb-3 mr-3 bg-blue-400 rounded-full"></div>
                <p className="mb-3 text-lg tracking-widest text-blue-400 uppercase">
                  Service 2
                </p>
              </div>
              <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
                Quam nulla porttitor
              </h2>
              <p className="mb-6 font-light leading-loose text-gray-700">
                Sit amet consectetur adipiscing elit. Curabitur gravida arcu ac
                tortor dignissim. Nulla facilisi etiam dignissim diam quis enim
                lobortis scelerisque fermentum. A arcu cursus vitae congue
                mauris. Dis parturient montes nascetur ridiculus mus.
              </p>
              <ul className="mb-12 ml-5 font-light leading-loose text-gray-700 list-disc">
                <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
                <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
                <li>In egestas erat imperdiet sed euismod nisi</li>
                <li>Id porta nibh venenatis</li>
                <li>Arcu vitae elementum curabitur</li>
              </ul>
              <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
                How we can help
              </h2>
              <p className="mb-6 font-light leading-loose text-gray-700">
                Rhoncus urna neque viverra justo nec ultrices. Id diam maecenas
                ultricies mi eget mauris pharetra et. Mauris rhoncus aenean vel
                elit. Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="mb-12 font-light leading-loose text-gray-700">
                Accumsan sit amet nulla facilisi morbi tempus iaculis. Curabitur
                vitae nunc sed velit dignissim sodales ut. In egestas erat
                imperdiet sed euismod nisi. Eleifend mi in nulla posuere
                sollicitudin.
              </p>
              <Link href="/contact">
                <a className="flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-200 ease-in-out bg-blue-400 rounded-md sm:inline-flex hover:bg-blue-500">
                  Contact Us
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

        .max-h-80vh {
          max-height: 80vh;
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

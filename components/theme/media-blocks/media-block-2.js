import Link from "next/link";

export default function MediaBlock2() {
  return (
    <section>
      <h1 className="remove-me">Media block 2</h1>
      <div className="px-4 py-24 overflow-hidden lg:px-0 lg:py-32">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-12 lg:h-screen lg:order-1 lg:mb-0">
            <img
              className="object-cover object-top w-full bg-gray-200 lg:h-3/4"
              src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
            />
          </div>
          <div className="flex-1">
            <div className="lg:px-10 xl:px-24 lg:mt-10">
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
              <Link href="/">
                <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md lg:inline-flex sm:w-auto hover:bg-blue-600 hover:border-blue-600">
                  Button
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function TextBlock2() {
  return (
    <section>
      <h1 className="remove-me">Text block 2</h1>
      <div className="max-w-screen-xl px-4 py-20 mx-auto">
        <div class="flex flex-col md:flex-row">
          <div class="flex-1 md:px-4">
            <p className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
              Maecenas accumsan
            </p>
            <h1 className="mb-12 text-5xl font-bold leading-none text-gray-900 lg:mb-16">
              Turpis in eu mi biben dum neque egestas congue
            </h1>
          </div>
          <div class="flex-1 md:px-4">
            <p className="mb-6 font-light leading-loose text-gray-700">
              Faucibus a pellentesque sit amet porttitor eget. Rhoncus mattis
              rhoncus urna neque viverra justo nec. Vitae suscipit tellus mauris
              a diam. Id eu nisl nunc mi ipsum faucibus. Nulla facilisi nullam
              vehicula ipsum a arcu cursus. Mi quis hendrerit dolor magna eget
              est lorem ipsum.
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

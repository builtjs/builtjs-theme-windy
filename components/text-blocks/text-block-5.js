import Link from "next/link";

export default function TextBlock5() {
  return (
    <section className="text-block-5">
      <div className="max-w-5xl px-4 py-20 mx-auto">
        <h1 className="mb-8 font-bold leading-none text-center text-gray-900 text-7xl lg:text-8xl">
          Lorem ipsum dolor
        </h1>
        <div class="max-w-2xl mx-auto text-center px-8 sm:px-16">
          <p className="mb-16 font-light leading-loose text-center text-gray-700">
            Faucibus a pellentesque sit amet porttitor eget. Rhoncus mattis
            rhoncus urna neque viverra justo nec. Vitae suscipit tellus mauris a
            diam. Id eu nisl nunc mi ipsum faucibus. Nulla facilisi nullam
            vehicula ipsum a arcu cursus. Mi quis hendrerit dolor magna eget est
            lorem ipsum.
          </p>
          <Link href="/">
            <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md lg:inline-flex sm:w-auto hover:bg-blue-600 hover:border-blue-600">
              Button
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

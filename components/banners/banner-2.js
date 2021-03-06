import Link from "next/link";

export default function Banner2() {
  return (
    <section>
      <h1 className="remove-me">Banner 2</h1>
      <div className="px-10 py-20 bg-gray-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
            Maecenas accumsan
          </p>
          <h1 className="mb-12 text-4xl font-bold leading-snug text-white">
            Lorem ipsum dolor sit amet nunc faucibus a pellentesque
          </h1>
          <div className="flex justify-center">
            <Link href="/">
              <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md sm:w-auto hover:bg-blue-600 hover:border-blue-600">
                Button
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

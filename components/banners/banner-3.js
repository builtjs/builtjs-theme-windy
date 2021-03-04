import Link from "next/link";

export default function Banner3() {
  return (
    <section className="banner-3">
      <div className="relative px-10 py-24 bg-gray-700">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mb-8 text-5xl font-bold leading-snug text-white">
            Lorem ipsum dolor sit amet nunc faucibus a pellentesque
          </h1>
          <p className="max-w-2xl mx-auto mb-12 font-light leading-loose text-gray-300">
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
            Massa tincidunt dui ut ornare. Nibh condimentum id venenatis anire
            un yunicd condimentum vitae sapien. Id porta nibh venenatis.
          </p>
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

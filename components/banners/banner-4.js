import Link from "next/link";

export default function Banner4() {
  return (
    <section className="banner-4">
      <div className="max-w-6xl px-10 py-5 mx-auto bg-gray-700">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:justify-between md:flex-row">
          <p className="mb-6 mr-8 text-xl font-bold text-center text-white md:text-left md:mb-0">
            Lorem ipsum dolor sit amet nunc faucibus a pellentesque
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md lg:w-auto hover:bg-blue-600 hover:border-blue-600">
                Button
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

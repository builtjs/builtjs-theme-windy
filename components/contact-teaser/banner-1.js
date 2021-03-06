import Link from "next/link";

export default function Banner1() {
  return (
    <section id="contact-teaser" className="banner-1">
      <h1 className="remove-me">Banner 1</h1>
      <div className="px-4 py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">
            Lets Get Started
          </p>
          <h1 className="mb-12 text-4xl font-bold leading-none text-gray-900">
            Volutpat sed cras ornare arcu sit amet purus gravida
          </h1>
          <div className="flex justify-center">
            <Link href="/contact">
              <a className="flex items-center justify-center w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-400 border border-transparent rounded-md sm:w-auto hover:bg-blue-500 hover:border-blue-500">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Cover3() {
  return (
    <article className="cover-3">
      <h1 className="remove-me">Cover 3</h1>
      <div className="px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
            Maecenas accumsan
          </p>
          <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-8xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi
            cursus vitae congue mauris rhoncus orci sagittis.
          </p>
        </div>
        <img
          className="mx-auto bg-gray-200 xl:w-3/4"
          src="https://dummyimage.com/1500x800/e5e7eb/e5e7eb.jpg&text=+"
        />
      </div>
    </article>
  );
}

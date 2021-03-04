import Layout from "../../layouts/layout";
import Link from "next/link";
import RelatedPosts from "../../components/blog-partials/related-cards-1";

export default function FirstPost() {
  return (
    <Layout>
      <article id="post-1" className="container px-4 mx-auto">
        <div className="max-w-5xl px-4 pt-32 pb-24 mx-auto">
          <header>
            <div className="flex mb-5">
              {/* Contentful Date Component - https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/components/date.js */}
              <p className="text-gray-600">16 Nov 2020</p>
              {/* End of Contentful Date Component */}
              <span className="mx-3 text-gray-600">|</span>
              <Link href="/contact">
                <a className="text-blue-500 hover:underline hover:text-blue-600">
                  Tips & Tricks
                </a>
              </Link>
            </div>
            <h1 className="mb-12 text-6xl font-bold leading-none text-gray-900">
              Tellus mauris a diam maec enas sed
            </h1>
            <div className="flex items-center">
              <img
                src="https://source.unsplash.com/pRkGQjzANXU/150x150"
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-gray-700">Johnny Silverhand</p>
                <p className="text-sm text-gray-600">Rockerboy</p>
              </div>
            </div>
          </header>
          <img
            className="my-16 bg-gray-100 rounded-lg shadow-2xl"
            src="https://source.unsplash.com/Of_m3hMsoAA/1000x500"
          />
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
              Congue mauris rhoncus aenean amit
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio. Ut pharetra sit amet aliquam
              id diam maecenas. Convallis convallis tellus id interdum velit
              laoreet id donec. Ut eu sem integer vitae justo.
            </p>
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
            <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
              Pharetra sit amet aliquam
            </h2>
            <p className="mb-12 font-light leading-loose text-gray-700">
              Elementum sagittis vitae et leo duis ut. Netus et malesuada fames
              ac turpis egestas. Potenti nullam ac tortor vitae purus faucibus.
              Tellus mauris a diam maecenas sed. Enim sed faucibus turpis in. At
              varius vel pharetra vel turpis nunc eget.
            </p>
            <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
              Rhoncus mattis enim
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Rhoncus urna neque viverra justo nec ultrices. Id diam maecenas
              ultricies mi eget mauris pharetra et. Mauris rhoncus aenean vel
              elit. Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Accumsan sit amet nulla facilisi morbi tempus iaculis. Curabitur
              vitae nunc sed velit dignissim sodales ut. In egestas erat
              imperdiet sed euismod nisi. Eleifend mi in nulla posuere
              sollicitudin.
            </p>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Convallis convallis tellus id interdum velit{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline hover:text-blue-600"
              >
                laoreet id donec.
              </a>
            </p>
          </div>
        </div>
        <hr className="max-w-5xl mx-auto" />
        <RelatedPosts />
      </article>
    </Layout>
  );
}

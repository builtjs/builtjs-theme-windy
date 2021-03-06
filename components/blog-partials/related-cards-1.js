import Link from "next/link";

export default function RelatedPosts() {
  return (
    <article className="max-w-5xl mx-auto my-32">
      <h1 className="remove-me">Related cards 1</h1>
      <div className="grid grid-cols-1 mb-32 gap-y-12 gap-x-12 md:grid-cols-2">
        <div>
          <Link href="/blog/post-2">
            <a>
              <img
                className="max-w-full mb-8 transition-shadow duration-200 bg-gray-100 rounded-lg shadow-x hover:shadow-xl"
                src="https://source.unsplash.com/_S7-KX8geL0/800x600"
              />
            </a>
          </Link>
          <Link href="/blog/post-2">
            <a>
              <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900 hover:underline hover:text-gray-800">
                Excepteur sint occaecat cupidatat non proident
              </h2>
            </a>
          </Link>
          <Link href="/blog/post-2">
            <a className="text-blue-500 hover:underline hover:text-blue-600">
              Read Article
            </a>
          </Link>
        </div>
        <div>
          <Link href="/blog/post-3">
            <a>
              <img
                className="max-w-full mb-8 transition-shadow duration-200 bg-gray-100 rounded-lg shadow-x hover:shadow-xl"
                src="https://source.unsplash.com/qCi_MzVODoU/800x600"
              />
            </a>
          </Link>
          <Link href="/blog/post-3">
            <a>
              <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900 hover:underline hover:text-gray-800">
                Sunt in culpa qui officia deserunt
              </h2>
            </a>
          </Link>
          <Link href="/blog/post-3">
            <a className="text-blue-500 hover:underline hover:text-blue-600">
              Read Article
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

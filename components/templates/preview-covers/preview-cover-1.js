import Link from "next/link";

export default function PreviewCover1({ template }) {
  if(!template || !template.collections){
    throw new Error('No template collections');
  }
  let collectionName = (Object.keys(template.collections))[0];
  let collection = template.collections[collectionName];
  let items;
  if(collection){
    items = collection.items;
  }
  const heroPost = items[0];
  const url = `/${collectionName}/${heroPost.slug}`;

  return (
    <article>
      <h1 className="remove-me">Preview hero 1</h1>
      <div className="max-w-screen-xl px-4 mx-auto">
        {heroPost && (
          <div className="flex flex-col pt-20 pb-24 xl:pt-28 lg:flex-row-reverse">
            <div className="flex-1 lg:w-2/3">
              <Link href={url}>
                <a>
                  {/* <img
                    className="w-full max-w-full mb-8 transition-shadow duration-200 bg-gray-100 rounded-lg shadow-x hover:shadow-xl"
                    src={heroPost.fields.image.sizes.w800}
                  /> */}
                </a>
              </Link>
            </div>
            <div className="flex-none lg:w-1/3 lg:mr-10 xl:mt-8">
              <div className="flex mb-5">
                {/* <p className="text-gray-600">
                  {format(new Date(heroPost.createdAt), "d LLLL yyyy")}
                  <span className="mx-3 text-sm text-gray-600">|</span>
                  {heroPost.fields.tags &&
                    heroPost.fields.tags.map((tag) => {
                      return (
                        <Link href={`/${contentTypeId}-archive?tag=${tag}`}>
                          <a className="text-sm text-blue-500 hover:underline hover:text-blue-600">
                            {tag}
                          </a>
                        </Link>
                      );
                    })}
                </p> */}
              </div>
              <Link href={url}>
                <a>
                  <h2 className="mb-6 text-4xl font-bold leading-none text-gray-900 hover:underline hover:text-gray-800">
                    {heroPost.title}
                  </h2>
                </a>
              </Link>
              <p className="mb-10 font-light leading-loose text-gray-700">
                {heroPost.excerpt}
              </p>
              <Link href={url}>
                <a className="text-blue-500 hover:underline hover:text-blue-600">
                  Read Article
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

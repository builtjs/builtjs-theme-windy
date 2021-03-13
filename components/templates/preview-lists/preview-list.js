import Link from "next/link";
import Image from 'next/image';
// import { format } from "date-fns";

export default function PreviewList1({ content, router }) {
  const { collections, collectionName } = content;
  let items;
  if(collections[collectionName]){
    items = collections[collectionName].items;
  }
  const tag = router.query.tag;
  return (
    <section className="container mx-auto mb-20">
      <h1 className="text-3xl mt-16 mb-4">
        {tag && <span>{tag} posts</span>}
        {!tag && <span>Posts</span>}
      </h1>
      {items && items.map((item) => {
        return (
          <div className="flex items-center m-2 p-2" key={item.slug}>
            <div className="mr-6">
              <Link
                className="w-24"
                href={`/${collectionName}/${item.slug}`}
              >
                <a>
                <Image src={item.fields.image.sizes.w420} width="354" height="272"/>
                </a>
              </Link>
            </div>

            <div>
              <Link href={`/${collectionName}/${item.slug}`}>
                <a>
                  <h2 className="text-2xl text-gray-900 hover:underline hover:text-gray-800">
                    {item.fields.heading}
                  </h2>
                </a>
              </Link>
              <p className="text-gray-600">
                {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
              </p>
              {item.fields.tags &&
                item.fields.tags.map((tag) => {
                  return (
                    <Link href={`/${collectionName}-archive?tag=${tag}`}>
                      <a className="bg-blue-400 inline-flex items-center justify-center px-2 py-1 mr-2 mb-4 text-xs font-bold leading-none text-white rounded-full">
                        {tag}
                      </a>
                    </Link>
                  );
                })}
              <p className="text-lg text-gray-700">{item.fields.excerpt}</p>
            </div>
          </div>
        );
      })}
      {!items.length && (
        <div>
          <p>No posts</p>
        </div>
      )}
    </section>
  );
}

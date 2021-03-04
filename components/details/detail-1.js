// import { format } from 'date-fns';
const getHTML = (content) => {
  return {
    __html: content,
  };
};
export default function Detail1({ entry }) {
  return (
    <>
      <div className="max-w-5xl px-4 pt-32 pb-24 mx-auto">
        <header>
          <div className="flex mb-5">
            <p className="text-gray-600">
              {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
            </p>
            {/* <span className="mx-3 text-gray-600">|</span>
            <Link href="/contact">
              <a className="text-blue-500 hover:underline hover:text-blue-600">
                Tips & Tricks
              </a>
            </Link> */}
          </div>
          <h1 className="mb-12 text-6xl font-bold leading-none text-gray-900">
            {entry.title}
          </h1>
          <div className="flex items-center">
            {/* <img
              src={
                item.author.profileImageUrl ||
                "https://source.unsplash.com/pRkGQjzANXU/150x150"
              }
              className="w-12 h-12 mr-4 rounded-full"
            /> */}
            <div className="flex flex-col">
              <p className="text-gray-700">{entry.author.displayName}</p>
              <p className="text-sm text-gray-600">
                {entry.author.position || "Writer"}
              </p>
            </div>
          </div>
        </header>
        <img
          className="my-16 bg-gray-100 rounded-lg shadow-2xl"
          src="https://source.unsplash.com/Of_m3hMsoAA/1000x500"
        />
        <div className="max-w-2xl mx-auto" dangerouslySetInnerHTML={getHTML(entry.content)}></div>
      </div>
      <hr className="max-w-5xl mx-auto" />
    </>
  );
}

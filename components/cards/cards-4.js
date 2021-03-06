import Link from "next/link";

export default function Cards4() {
  return (
    <section>
      <h1 className="remove-me">Cards 4</h1>
      <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-24 xl:py-32">
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col flex-1 p-8 bg-gray-100 my-6 lg:mx-5 lg:my-0 hover:shadow-xl transition duration-200 ease-in-out">
            <svg
              className="w-12 p-3 mb-6 text-white bg-blue-400 rounded-lg"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="100%"
              width="100%"
              viewBox="0 0 22 27"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M17.2 9.6H16v-.287A3.196 3.196 0 0 0 13.682 4 5.55 5.55 0 0 0 10.517.422 5.43 5.43 0 0 0 8.4 0C6.904 0 5.51.614 4.45 1.734a2.8 2.8 0 0 0-3.376 3.877A3.196 3.196 0 0 0 1.6 10.77V21.2A2.803 2.803 0 0 0 4.4 24h8.8a2.803 2.803 0 0 0 2.8-2.8v-.4h1.2a3.604 3.604 0 0 0 3.6-3.6v-4a3.604 3.604 0 0 0-3.6-3.6zM6.4 20a.8.8 0 1 1-1.6 0v-8a.8.8 0 0 1 1.6 0v8zm3.2 0A.8.8 0 1 1 8 20v-8a.8.8 0 0 1 1.6 0v8zm3.2 0a.8.8 0 1 1-1.6 0v-8a.8.8 0 0 1 1.6 0v8zm.8-11.2c-.417 0-1.028-.259-1.335-.565A.8.8 0 0 0 11.7 8H5.6a.8.8 0 0 0-.75.527C4.508 9.46 3.67 9.6 3.2 9.6a1.6 1.6 0 0 1 0-3.2c.004 0 .456.017.82.29a.8.8 0 1 0 .96-1.28A3.184 3.184 0 0 0 3.2 4.8c-.236 0-.47.027-.7.079a1.2 1.2 0 0 1 2.069-1.187c.09.124.169.257.235.395A.8.8 0 0 0 6.4 4c0-.338-.18-.758-.538-1.25-.023-.031-.05-.062-.073-.093C6.52 1.972 7.432 1.6 8.4 1.6a3.843 3.843 0 0 1 2.762 1.159 4.011 4.011 0 0 1 1.07 3.541.798.798 0 0 0 .786.95.8.8 0 0 0 .785-.65c.06-.32.094-.646.098-.971a1.6 1.6 0 0 1-.3 3.171zm5.6 8.4a2 2 0 0 1-2 2H16v-8h1.2a2 2 0 0 1 2 2v4z"
              />
            </svg>
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio.
            </p>
            <Link href="/">
              <a className="mt-auto text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
          <div class="flex flex-col flex-1 p-8 bg-gray-100 my-6 lg:mx-5 lg:my-0 hover:shadow-xl transition duration-200 ease-in-out">
            <svg
              className="w-12 p-3 mb-6 text-white bg-blue-400 rounded-lg"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="100%"
              width="100%"
              viewBox="0 0 20 24"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M9.168 14.187a.4.4 0 0 0-.37.395v.22a3.605 3.605 0 0 1-2.534 3.437.4.4 0 0 0-.245.539l2.045 4.74a.8.8 0 0 0 1.469-.003l3.688-8.606a.401.401 0 0 0-.31-.554 5.314 5.314 0 0 1-1.794-.579.4.4 0 0 0-.357-.01 4.748 4.748 0 0 1-1.592.42z"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M5.15 16.801c-1.093-.026-1.95-.945-1.95-2.037v-1.703a.4.4 0 0 0-.3-.387C1.212 12.232 0 10.69 0 8.802a4.006 4.006 0 0 1 3.313-3.94.4.4 0 0 0 .33-.342 5.2 5.2 0 0 1 10.31 0 .4.4 0 0 0 .331.342 4 4 0 0 1-.686 7.94 3.716 3.716 0 0 1-2.372-.87.397.397 0 0 0-.496-.008c-.55.435-1.23.674-1.931.678a4.02 4.02 0 0 1-1.09-.16.399.399 0 0 0-.51.385v1.974a2 2 0 0 1-2.05 2z"
              />
            </svg>
            <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
              Lorem ipsum dolor
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Sapien et ligula ullamcorper malesuada proin libero nunc. Sed
              elementum tempus egestas sed sed risus. Tempor commodo ullamcorper
              a lacus vestibulum sed arcu non odio.
            </p>
            <Link href="/">
              <a className="mt-auto text-blue-500 hover:text-blue-600">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

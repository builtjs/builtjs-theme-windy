import Link from "next/link";
import { useRouter } from "next/router";

export default function Header1({ content }) {
  const collectionNames = {
    PRIMARY_MENU_ITEM: "primary-menu-item",
  };
  let menuItems;
  console.log({content})
  if(content.collections[collectionNames.PRIMARY_MENU_ITEM]){
    menuItems = content.collections[collectionNames.PRIMARY_MENU_ITEM].entries;
  }
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header>
      <h1 className="remove-me">Header 1</h1>
      <section className="bg-white shadow-sm">
        <nav className="flex flex-wrap items-center justify-between p-4 shadow-lg md:shadow-none">
          <div className="flex items-center cursor-pointer xl:mr-12">
            <Link href="/">
              <a>
                <svg
                  className="w-12 mr-3 text-blue-600"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="currentColor"
                    height="100%"
                    width="100%"
                    rx="248.49"
                  />
                  <g fill="#fff">
                    <path d="m314.05 715.27v-430.5c0-20.45 25.95-29.24 38.37-13l329.1 430.5a21.39 21.39 0 0 1 -17 34.38h-329.09a21.39 21.39 0 0 1 -21.38-21.38z" />
                    <circle cx="609.46" cy="390.56" r="61.6" />
                  </g>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="text-xl font-bold text-gray-800">ACME</a>
            </Link>
          </div>

          <ul
            className={
              "flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 order-1 md:order-none w-full md:w-auto md:flex" +
              (navbarOpen ? " nav-items-open" : " nav-items-closed")
            }
          >
            {menuItems &&
              menuItems.map((menuItem) => {
                return (
                  <li
                    key={menuItem.label}
                    className={router.pathname == menuItem.url ? "active" : ""}
                  >
                    <Link href={menuItem.url}>
                      <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            {/* <li
              className={router.pathname == "/templates/covers" ? "active" : ""}
            >
              <Link href="/templates/covers">
                <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                  Covers
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/templates/banners" ? "active" : ""
              }
            >
              <Link href="/templates/banners">
                <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                  Banners
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/templates/text-blocks" ? "active" : ""
              }
            >
              <Link href="/templates/text-blocks">
                <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                  Text Blocks
                </a>
              </Link>
            </li>
            <li
              className={
                router.pathname == "/templates/media-blocks" ? "active" : ""
              }
            >
              <Link href="/templates/media-blocks">
                <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                  Media Blocks
                </a>
              </Link>
            </li>
            <li 
              className={router.pathname == "/templates/cards" ? "active" : ""}
            >
              <Link href="/templates/cards">
                <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md md:w-auto hover:text-gray-900 hover:bg-gray-100">
                  Cards
                </a>
              </Link>
            </li>*/}
          </ul>

          <button
            className="button md:hidden hover:cursor-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="relative w-12 h-12 transition-colors duration-200 ease-in-out bg-blue-400 rounded-md hover:bg-blue-500">
              <svg
                className={
                  "p-3 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" +
                  (navbarOpen ? " opacity-0" : " opacity-100")
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="100%"
                width="100%"
                viewBox="0 0 24 16"
              >
                <g stroke="#fff" strokeLinecap="round" strokeWidth="2">
                  <path d="m1 1h22" />
                  <path d="m1 7.67017h22" />
                  <path d="m1 14.3402h22" />
                </g>
              </svg>
              <svg
                className={
                  "py-3 pl-4 pr-2 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" +
                  (navbarOpen ? " opacity-100" : " opacity-0")
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="100%"
                width="100%"
                viewBox="0 0 24 16"
              >
                <path
                  d="M14.34 1L1 14.34m13.34 0L1 1l13.34 13.34z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <div className="hidden md:block xl:ml-auto">
            <Link href="/contact">
              <a className="flex items-center justify-center px-5 py-3 text-sm text-white transition duration-200 ease-in-out bg-blue-400 border border-transparent rounded-md hover:bg-blue-500 hover:border-blue-500">
                Get Started
              </a>
            </Link>
          </div>
        </nav>
      </section>
      <style jsx>{`
        .active a {
          color: #1a202c;
          background-color: rgba(237, 242, 247, 0.75);
        }

        @media (max-width: 767px) {
          .nav-items-closed {
            opacity: 0.001;
            max-height: 0px;
            overflow: hidden;
            transition: max-height 1s, opacity 0.5s;
          }

          .nav-items-open {
            opacity: 1;
            max-height: 999px;
            transition: max-height 1s, opacity 0.75s 0.25s;
          }
        }
      `}</style>
    </header>
  );
}

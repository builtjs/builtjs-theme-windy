import Link from "next/link";

export default function Details1() {
  return (
    <section>
      <h1 className="remove-me">Details 1</h1>
      <div className="flex items-center">
        <div className="w-10 border border-blue-300 mr-3 mb-3"></div>
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
          Contact Us
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-6">
        Donec pretium vulputate
      </h2>
      <p className="max-w-xl text-lg font-light text-gray-700 leading-loose mb-16 lg:mb-20">
        Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim
        sapien nec nunc pulvinar sapien et ligula.
      </p>

      <div className="flex flex-col">
        <div className="flex items-start mb-10 mr-20">
          <svg
            className="text-gray-600 w-5 mt-1 mr-5"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M23.167,18V21.02a2.011,2.011,0,0,1-2.192,2.011A19.9,19.9,0,0,1,12.3,19.944a19.609,19.609,0,0,1-6.034-6.034A19.9,19.9,0,0,1,3.176,5.192,2.011,2.011,0,0,1,5.177,3H8.194a2.011,2.011,0,0,1,2.011,1.73,12.912,12.912,0,0,0,.7,2.826,2.011,2.011,0,0,1-.453,2.122L9.179,10.954a16.089,16.089,0,0,0,6.034,6.034l1.277-1.277a2.011,2.011,0,0,1,2.122-.453,12.912,12.912,0,0,0,2.826.7A2.011,2.011,0,0,1,23.167,18Z"
              transform="translate(-3.168 -3)"
            ></path>
          </svg>
          <div>
            <p className="font-light text-gray-700 mb-3">
              Monday - Friday 9am - 5pm
            </p>
            <Link href="#">
              <a
                className="font-light text-blue-600 hover:text-blue-700 hover:underline"
                href="#"
              >
                0800 123 4567
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-start mb-10 mr-12 lg:mr-0">
          <svg
            className="text-gray-600 w-5 mr-5"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 20 16"
            fill="currentColor"
          >
            <path
              d="M21,6H5A2,2,0,0,0,3.01,8L3,20a2.006,2.006,0,0,0,2,2H21a2.006,2.006,0,0,0,2-2V8A2.006,2.006,0,0,0,21,6Zm0,4-8,5L5,10V8l8,5,8-5Z"
              transform="translate(-3 -6)"
            ></path>
          </svg>
          <div>
            <p className="font-light text-gray-700 leading-none mb-3">
              General Enquiries
            </p>
            <Link href="#">
              <a
                className="font-light text-blue-600 hover:text-blue-700 hover:underline"
                href="#"
              >
                info@companyname.co.nz
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-start mb-16 lg:mb-24 mr-12 lg:mr-0">
          <div className="w-5 mr-5">
            <svg
              className="text-gray-600 w-5 mr-5 max-w-full max-h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="34"
              viewBox="0 0 28 34"
              fill="currentColor"
            >
              <path d="M12 0C5.37525 0 0 4.83825 0 10.8C0 20.4 12 33.6 12 33.6C12 33.6 24 20.4 24 10.8C24 4.83825 18.6248 0 12 0ZM12 16.8C11.0507 16.8 10.1226 16.5185 9.33326 15.9911C8.54391 15.4636 7.92868 14.714 7.56538 13.8369C7.20208 12.9598 7.10702 11.9947 7.29223 11.0636C7.47744 10.1325 7.9346 9.27718 8.60589 8.60589C9.27718 7.93459 10.1325 7.47744 11.0636 7.29223C11.9947 7.10702 12.9598 7.20208 13.8369 7.56538C14.714 7.92868 15.4636 8.54391 15.9911 9.33326C16.5185 10.1226 16.8 11.0506 16.8 12C16.7986 13.2726 16.2925 14.4927 15.3926 15.3926C14.4927 16.2925 13.2726 16.7986 12 16.8Z" />
            </svg>
          </div>
          <div>
            <p className="font-light text-gray-800 mb-3">
              123 Example Street, Suburb Christchurch, 8011 New Zealand
            </p>
            <Link href="#">
              <a className="font-light text-blue-600 hover:text-blue-700 hover:underline">
                Get Directions
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center mx-10 mb-16">
          <Link href="#">
            <a>
              <svg
                className="text-gray-600 hover:text-gray-800 w-6 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 25"
                fill="currentColor"
              >
                <path d="M24.145 12.072C24.145 5.406 18.739 0 12.073 0 5.405 0 0 5.406 0 12.072 0 18.099 4.414 23.093 10.186 24v-8.436H7.12v-3.49h3.066v-2.66c0-3.025 1.803-4.698 4.56-4.698 1.321 0 2.703.236 2.703.236v2.972h-1.523c-1.499 0-1.968.93-1.968 1.886v2.264h3.348l-.534 3.49h-2.813V24c5.772-.906 10.186-5.9 10.186-11.928z" />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-600 hover:text-gray-800 w-6 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 30 24"
                fill="currentColor"
              >
                <path d="M30 2.844a12.612 12.612 0 0 1-3.535.956A6.094 6.094 0 0 0 29.174.45a12.36 12.36 0 0 1-3.91 1.469A6.196 6.196 0 0 0 20.769 0c-3.4 0-6.153 2.712-6.153 6.056-.003.465.05.93.158 1.381a17.544 17.544 0 0 1-12.687-6.33A5.98 5.98 0 0 0 1.25 4.15c0 2.1 1.096 3.956 2.75 5.044a6.094 6.094 0 0 1-2.799-.757v.075c0 2.938 2.125 5.382 4.938 5.938a6.298 6.298 0 0 1-1.622.213c-.388 0-.775-.037-1.156-.113.781 2.406 3.057 4.156 5.753 4.206a12.474 12.474 0 0 1-7.645 2.594c-.491 0-.982-.03-1.469-.088A17.417 17.417 0 0 0 9.421 24C20.756 24 26.95 14.769 26.95 6.762c0-.262-.007-.525-.02-.78A12.406 12.406 0 0 0 30 2.843z" />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-600 hover:text-gray-800 w-6 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M17 2a5.015 5.015 0 0 1 5 5v10a5.015 5.015 0 0 1-5 5H7a5.016 5.016 0 0 1-5-5V7a5.015 5.015 0 0 1 5-5h10zm0-2H7C3.15 0 0 3.15 0 7v10c0 3.85 3.15 7 7 7h10c3.85 0 7-3.15 7-7V7c0-3.85-3.15-7-7-7z"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M18.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0-2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
                />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-600 hover:text-gray-800 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 32 24"
                fill="currentColor"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M31.79 5.3c0-2.813-2.07-5.076-4.625-5.076A227.29 227.29 0 0 0 16.562 0h-1.125c-3.6 0-7.137.062-10.6.225C2.288.225.22 2.5.22 5.312A92.971 92.971 0 0 0 0 11.986a96.773 96.773 0 0 0 .213 6.682c0 2.812 2.069 5.093 4.619 5.093 3.637.169 7.368.244 11.162.238 3.8.012 7.52-.067 11.162-.238 2.556 0 4.625-2.281 4.625-5.093.15-2.232.219-4.457.212-6.688a90.897 90.897 0 0 0-.203-6.68zM12.938 18.117V5.837L22 11.974l-9.063 6.144z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

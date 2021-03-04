import Link from "next/link";

export default function Cover1({ content }) {
  return (
    <section id="main-landing" className="media-cover-1">
      <div className="overflow-hidden bg-gray-50 lg:py-36">
        <div className="relative flex flex-col lg:flex-row">
          <div className="relative z-20 flex-1 mb-12 lg:order-1 lg:mb-0 lg:mr-20">
            <img
              className="relative z-10 object-cover object-top w-full h-full bg-gray-50 lg:shadow-2xl lg:rounded-lg"
              src="https://source.unsplash.com/yTwXpLO5HAA"
            />
            <div className="absolute bottom-0 right-0 z-10 text-white pattern-dots"></div>
          </div>
          <div className="relative z-20 flex-1 px-4 mb-20 lg:py-24 xl:32 lg:my-auto">
            <div className="mx-auto text-center sm:w-4/5 lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="hidden w-10 mb-3 mr-3 border border-blue-300 lg:block"></div>
                <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">
                  Welcome to
                </p>
              </div>
              <h1 className="mb-8 text-5xl font-bold leading-none text-gray-900 xl:text-6xl">
                {content.heading}
              </h1>
              <p className="mb-10 text-lg font-light leading-loose text-gray-700 xl:pr-20 lg:mb-16">
                {content.blurb}
              </p>
              <div className="flex flex-col items-center sm:flex-row">
                <Link href={content.config.cta1Url}>
                  <a className="flex items-center justify-center w-full px-6 py-3 mb-4 text-white transition duration-200 ease-in-out bg-blue-400 border border-transparent rounded-md xl:w-auto hover:bg-blue-500 hover:border-blue-500 sm:mb-0 sm:mr-2">
                    {content.config.cta1Label}
                  </a>
                </Link>
                <Link href={content.config.cta2Url}>
                  <a className="flex items-center justify-center w-full px-6 py-3 text-gray-600 transition duration-200 ease-in-out border rounded-md bg-gray-50 border-gray-50 xl:w-auto hover:border-gray-100 hover:bg-gray-100 hover:text-gray-900 sm:ml-2">
                    {content.config.cta2Label}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -112px;
          bottom: -100px;
          width: 50%;
          height: 60%;
        }
      `}</style>
    </section>
  );
}

// import Link from "next/link";

// export default function Cover1() {
//   return (
//     <article className="cover-1">
//       <div className="grid grid-cols-1 lg:px-16 xl:px-24 gap-x-16 xl:gap-x-32 lg:grid-cols-2 lg:py-32">
//         <div className="lg:order-1">
//           <img
//             className="object-cover object-top w-full h-full bg-gray-200"
//             src="https://dummyimage.com/1000x500/e5e7eb/e5e7eb.jpg&text=+"
//           />
//         </div>
//         <div className="px-4 py-12 lg:px-0 lg:py-24">
//           <div className="text-center lg:text-left">
//             <p className="mb-3 text-sm tracking-widest text-gray-400 uppercase">
//               Maecenas accumsan
//             </p>
//             <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-7xl">
//               Lorem ipsum dolor sit amet
//             </h1>
//             <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700 lg:mx-0">
//               Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi
//               cursus vitae congue mauris rhoncus orci sagittis.
//             </p>
//             <div className="flex flex-col items-center justify-center max-w-xl mx-auto lg:justify-start lg:mx-0 sm:flex-row">
//               <Link href="/#">
//                 <a className="flex items-center justify-center flex-grow w-full px-6 py-3 mb-4 text-white transition duration-200 ease-in-out bg-blue-500 border border-blue-500 rounded-md xl:flex-grow-0 md:w-auto hover:bg-blue-600 hover:border-blue-600 sm:mb-0 sm:mx-3 lg:ml-0">
//                   Button
//                 </a>
//               </Link>
//               <Link href="/#">
//                 <a className="flex items-center justify-center flex-grow w-full px-6 py-3 text-white transition duration-200 ease-in-out bg-blue-300 border border-blue-300 rounded-md xl:flex-grow-0 sm:mx-3 md:w-auto hover:bg-blue-400 hover:border-blue-400 lg:mx-0">
//                   Button
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

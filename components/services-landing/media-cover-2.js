export default function MediaCover2() {
  return (
    <section>
      <h1 className="remove-me">Media cover 2</h1>
      <div className="relative px-4 py-32 bg-gray-100 services-bg-image">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="mb-3 text-sm tracking-widest text-blue-400 uppercase">
            Our Services
          </p>
          <h1 className="mb-10 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
            Aliquam nulla facilisi cras fermentum odio
          </h1>
          <p className="max-w-xl mx-auto mb-12 font-light leading-loose text-gray-700">
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
            Massa tincidunt dui ut ornare. Nibh condimentum id venenatis anire
            un yunicd condimentum vitae sapien. Id porta nibh venenatis.
          </p>
          <svg
            className="w-12 mx-auto text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="14"
            fill="none"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M1 1l20 12L41 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .services-bg-image {
          background: #f7fafc url("https://source.unsplash.com/vbxyFxlgpjM")
            no-repeat top center/cover;
        }

        .services-bg-image::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(247, 250, 252, 0.9);
        }
      `}</style>
    </section>
  );
}

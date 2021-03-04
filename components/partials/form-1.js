export default function Form1() {
  return (
    <section id="form-partial" className="form-1">
      <form action="#" method="POST">
        <div className="mb-6">
          <label className="block text-sm leading-5 text-gray-700">
            Your Full Name
          </label>
          <input className="mt-2 w-full border rounded-md py-3 px-5" />
        </div>
        <div className="mb-6">
          <label className="block text-sm leading-5 text-gray-700">
            Your Phone Number
          </label>
          <input className="mt-2 w-full border rounded-md py-3 px-5" />
        </div>
        <div className="mb-6">
          <label className="block text-sm leading-5 text-gray-700">
            Your Email Address
          </label>
          <input className="mt-2 w-full border rounded-md py-3 px-5" />
        </div>
        <div className="mb-8">
          <label className="block text-sm leading-5 text-gray-700">
            Your Message
          </label>
          <textarea
            rows="5"
            className="mt-2 w-full border rounded-md p-5"
          ></textarea>
        </div>
        <div className="form-button text-center">
          <button className="w-full flex items-center justify-center rounded-md p-0 text-center text-white bg-blue-400 hover:bg-blue-500 transition duration-200 ease-in-out">
            <span className="d-block w-full text-center p-3">Send</span>
          </button>
        </div>
      </form>
      <style jsx>{`
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      `}</style>
    </section>
  );
}

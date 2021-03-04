import Form1 from "../partials/form-1";

export default function ContactForm1() {
  return (
    <section id="contact-section" className="contact-form-1">
      <div className="px-4 py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="mb-5 text-4xl font-bold leading-none text-center text-gray-900 md:text-5xl">
            Let's Talk
          </h2>
          <p className="mb-12 text-lg font-light leading-loose text-center text-gray-700 lg:mb-20">
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non
          </p>
          <Form1 />
        </div>
      </div>
    </section>
  );
}

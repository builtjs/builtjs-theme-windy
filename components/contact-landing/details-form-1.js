import Details1 from "../partials/details-1";
import Form1 from "../partials/form-1";

export default function DetailsForm1() {
  return (
    <section>
      <h1 className="remove-me">Details form 1</h1>
      <div className="px-4 py-16 lg:py-24">
        <div className="flex flex-col items-start lg:flex-row">
          <div className="flex-1 lg:pr-10 xl:px-20">
            <Details1 />
          </div>
          <div className="flex-1 w-full mt-10 mb-10 xl:pr-20">
            <Form1 />
          </div>
        </div>
      </div>
    </section>
  );
}

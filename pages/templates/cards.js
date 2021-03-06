import TemplatesLayout from "../../components/layouts/templates-layout";
import Cards1 from "../../components/theme/cards/cards-1";
import Cards2 from "../../components/theme/cards/cards-2";
import Cards3 from "../../components/theme/cards/cards-3";
import Cards4 from "../../components/theme/cards/cards-4";
import Cards5 from "../../components/theme/cards/cards-5";

export default function Cards() {
  return (
    <TemplatesLayout>
      <Cards1 />
      <div className="p-8 bg-gray-800"></div>
      <Cards2 />
      <div className="p-8 bg-gray-800"></div>
      <Cards3 />
      <div className="p-8 bg-gray-800"></div>
      <Cards4 />
      <div className="p-8 bg-gray-800"></div>
      <Cards5 />
    </TemplatesLayout>
  );
}

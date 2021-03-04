import Layout from "../../layouts/layout";
import Cards1 from "../../components/cards/cards-1";
import Cards2 from "../../components/cards/cards-2";
import Cards3 from "../../components/cards/cards-3";
import Cards4 from "../../components/cards/cards-4";
import Cards5 from "../../components/cards/cards-5";

export default function Cards() {
  return (
    <Layout>
      <Cards1 />
      <div className="p-8 bg-gray-800"></div>
      <Cards2 />
      <div className="p-8 bg-gray-800"></div>
      <Cards3 />
      <div className="p-8 bg-gray-800"></div>
      <Cards4 />
      <div className="p-8 bg-gray-800"></div>
      <Cards5 />
    </Layout>
  );
}

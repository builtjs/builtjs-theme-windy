import Layout from "../../layouts/layout";
import Cover1 from "../../components/covers/cover-1";
import Cover2 from "../../components/covers/cover-2";
import Cover3 from "../../components/covers/cover-3";

export default function MediaCovers() {
  return (
    <Layout>
      <Cover1 />
      <div className="p-8 bg-gray-800"></div>
      <Cover2 />
      <div className="p-8 bg-gray-800"></div>
      <Cover3 />
    </Layout>
  );
}

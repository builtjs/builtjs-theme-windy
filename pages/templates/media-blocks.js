import Layout from "../../layouts/layout";
import MediaBlock1 from "../../components/media-blocks/media-block-1";
import MediaBlock2 from "../../components/media-blocks/media-block-2";
import MediaBlock3 from "../../components/media-blocks/media-block-3";

export default function Cards() {
  return (
    <Layout>
      <MediaBlock1 />
      <div className="p-8 bg-gray-800"></div>
      <MediaBlock2 />
      <div className="p-8 bg-gray-800"></div>
      <MediaBlock3 />
    </Layout>
  );
}

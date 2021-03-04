import Layout from "../layouts/layout";
import MediaCover2 from "../components/services-landing/media-cover-2";
import MediaBlock2 from "../components/services-features-section/media-block-2";
import Banner1 from "../components/contact-teaser/banner-1";

export default function IndexPage() {
  return (
    <Layout>
      <MediaCover2 />
      <MediaBlock2 />
      <Banner1 />
    </Layout>
  );
}

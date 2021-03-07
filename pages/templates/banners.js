import TemplatesLayout from "../../components/layouts/templates-layout";
import Banner1 from "../../components/templates/banners/banner-1";
import Banner2 from "../../components/templates/banners/banner-2";
import Banner3 from "../../components/templates/banners/banner-3";
import Banner4 from "../../components/templates/banners/banner-4";

export default function Banners() {
  return (
    <TemplatesLayout>
      <Banner1 />
      <div className="p-8 bg-gray-800"></div>
      <Banner2 />
      <div className="p-8 bg-gray-800"></div>
      <Banner3 />
      <div className="p-8 bg-gray-800"></div>
      <Banner4 />
    </TemplatesLayout>
  );
}

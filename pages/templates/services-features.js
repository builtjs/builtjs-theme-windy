import Layout from "../../layouts/layout";
import ServicesFeaturesComp1 from "../../components/services-features/services-features-1";
import ServicesFeaturesComp2 from "../../components/services-features/services-features-2";
import ServicesFeaturesComp3 from "../../components/services-features/services-features-3";

export default function ServicesFeatures() {
  return (
    <Layout>
      <ServicesFeaturesComp1 />
      <div className="p-8 bg-gray-800"></div>
      <ServicesFeaturesComp2 />
      <div className="p-8 bg-gray-800"></div>
      <ServicesFeaturesComp3 />
    </Layout>
  );
}

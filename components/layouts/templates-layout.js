import Header1 from "../../components/templates/headers/header-1";
import Footer1 from "../../components/templates/footers/footer-1";
import { header } from "../../data/layout.json";
import { fetchCollections } from "../../lib/fetch";

const TemplatesLayout = async(props) => {
  const { children } = props;
  return (
    <>
      {/* <Header1 content={header}/> */}
      {children}
      {/* <Footer1 /> */}
    </>
  );
};

export default TemplatesLayout;

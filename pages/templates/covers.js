import { withRouter } from "next/router";
import Page from "../../lib/page";
import { fetchPage } from "../../lib/fetch";
import { pages } from "../../lib/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pages.COVERS);
  return {
    props: { page }
  };
}

// import TemplatesLayout from "../../components/layouts/templates-layout";
// import Cover1 from "../../components/templates/covers/cover-1";
// import Cover2 from "../../components/templates/covers/cover-2";
// import Cover3 from "../../components/templates/covers/cover-3";

// const 

// export default function MediaCovers() {
//   return (
//     // <TemplatesLayout>
//       <Cover1 template={section.template.doc} />
//       // <div className="p-8 bg-gray-800"></div>
//       // <Cover2 />
//       // <div className="p-8 bg-gray-800"></div>
//       // <Cover3 />
//     // </TemplatesLayout>
//   );
// }

// export async function getStaticProps() {
//   const page = await fetchPage(pages.BLOG_ARTICLE);
//   page.params = params;
//   return {
//     props: { page }
//   };
// }

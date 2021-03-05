import React, { useEffect, useState } from "react";
import { transformPage } from "./transform-page";

import Seo from "../components/global/seo";

const Page = ({ page }) => {
  const [fullPage, setFullPage] = useState({});

  useEffect(() => {
    (async () => {
      const newFullPage = await transformPage(page);
      console.log({fullPage})
      setFullPage(newFullPage);
    })();
  }, []);

  return (
    <>
      <Seo seo={page.seo} />
      {fullPage.header && (<fullPage.header.component content={fullPage.header.content} />)}
      
      {fullPage.sections && fullPage.sections.map((section, i) => {
        return <section.component key={i} content={section.content} />;
      })}
    </>
  );
};

export default Page;

// import React, { useEffect, useState } from "react";
// import { transformSections } from "../lib/transform-sections";
// import { header, footer } from "../data/layout.json";
// import Seo from "../components/global/seo";

// const Page = ({ page }) => {
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const newSections = await transformSections(page);
//       setSections(newSections);
//     })();
//   }, []);

//   return (
//     <>
//       <Seo seo={page.seo} />
//       {sections.map((section, i) => {
//         let Component = section.component;
//         return <Component key={i} content={section.content} />;
//       })}
//     </>
//   );
// };

// export default Page;

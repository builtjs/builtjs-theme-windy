import dynamic from "next/dynamic";
import { header, footer } from "../data/layout.json";
import { fetchCollections } from "../lib/fetch";


export const transformPage = async (page) => {
  let fullPage = {};
  fullPage.header = await transformSection(header);
  let newSections = [];
  page.sections.map(async(section) => {
    let newSection = await transformSection(section)
    newSections.push(newSection);
  });
  fullPage.sections = newSections;
  fullPage.footer = await transformSection(footer);
  console.log({fullPage})
  return fullPage;
};

let transformSection = async(section) => {
  let newSection = {};
  let slugs = section["__component"].split(".");
  newSection.component = dynamic(() => import(`../components/${slugs[0]}/${slugs[1]}`));
  section.collections = await fetchCollections(section);
  newSection.content = section;
  return newSection;
}

// export const transformSections = async (page) => {
//   let newSections = [];
//   page.sections.map((section) => {
//     let slugs = section["__component"].split(".");
//     newSections.push({
//       content: section,
//       component: dynamic(() => import(`../components/${slugs[0]}/${slugs[1]}`)),
//     });
//   });
//   return newSections;
// };

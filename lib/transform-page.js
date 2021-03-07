import dynamic from "next/dynamic";
import { header, footer } from "../data/layout.json";
import { fetchOne, fetchCollections } from "../lib/fetch";
import model from "../lib/model";
import { Page, Section } from "../lib/models";




export const transformPage = async (pageDoc) => {
  console.log({pageDoc})
  const page = new Page(pageDoc);
  console.log('----page new', page);
  console.log({page});
  const s = new Section();//model('Section');
  let header = await s.findOne('header-1');
  await header.populate('defaultTemplate', 'templates');
  let fullPage = {};
  fullPage.header = await transformTemplate(header.doc.defaultTemplate);
  let templates = [];
  console.log('----page before', page);
  await page.populate('sections');

  console.log({page});

 let section = page.doc.sections[0];
    console.log({section});
//      await section.populate('defaultTemplate', 'templates');
     
console.log(',,,,,,,,sections:', page.doc.sections)
  page.doc.sections.map(async(section) => {
    console.log({section});
    await section.populate('defaultTemplate', 'templates');
    let template = await transformTemplate(section.doc.defaultTemplate)
    console.log(',,,,,,,,template:', template)
    templates.push(template);
  });
  fullPage.templates = templates;

  // fullPage.footer = await transformTemplate(footer);
  // let footer = await Section.findOne('footer-1');
  // await footer.populate('defaultTemplate', 'templates');
  // fullPage.footer = await transformTemplate(footer.doc.defaultTemplate);
  // console.log({fullPage})
  return fullPage;
};

let transformTemplate = async(template) => {
  console.log({template})
  template.doc.collections = await fetchCollections(template.doc);
  console.log({template})
  // let slugs = template["__component"].split(".");
  const component = dynamic(() => import(`../components/templates/${template.doc.category}/${template.doc.slug}`));
  
  // newSection.content = section;
  return {template: template, component:component};
  // let newSection = {};
  // let slugs = section["__component"].split(".");
  // newSection.component = dynamic(() => import(`../components/templates/${slugs[0]}/${slugs[1]}`));
  // section.collections = await fetchCollections(section);
  // newSection.content = section;
  // return newSection;
}






// import dynamic from "next/dynamic";
// import { header, footer } from "../data/layout.json";
// import { fetchOne, fetchCollections } from "../lib/fetch";


// export const transformPage = async (page) => {
//   let fullPage = {};
//   fullPage.header = await transformSection(header);
//   let newSections = [];
//   page.sections.map(async(section) => {
//     let newSection = await transformSection(section)
//     newSections.push(newSection);
//   });
//   fullPage.sections = newSections;
//   fullPage.footer = await transformSection(footer);
//   console.log({fullPage})
//   return fullPage;
// };

// let transformSection = async(section) => {
//   let newSection = {};
//   let slugs = section["__component"].split(".");
//   newSection.component = dynamic(() => import(`../components/templates/${slugs[0]}/${slugs[1]}`));
//   section.collections = await fetchCollections(section);
//   newSection.content = section;
//   return newSection;
// }

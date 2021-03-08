import dynamic from "next/dynamic";
import { header, footer } from "../data/layout.json";
import { fetchOne, fetchCollections } from "../lib/fetch";
import model from "../lib/model";
import { Page, Section } from "../lib/models";
const SectionModel = new Section();

export const transformPage = async (pageDoc) => {
  return new Promise(async (resolve) => {
    const page = new Page(pageDoc);
    let fullPage = {};
    fullPage.header = await getTemplate("header-1");
    // let header = await SectionModel.findOne("header-1");
    // await header.populate("defaultTemplate", "templates");
    // let fullPage = {};
    // fullPage.header = await transformTemplate(header.doc.defaultTemplate);
    let templates = [];
    await page.populate("sections");
    // let section = page.doc.sections[0];
    for (let i = 0; i < page.doc.sections.length; i++) {
      const section = page.doc.sections[i];
      if (section) {
        await section.populate("defaultTemplate", "templates");
        let template = await transformTemplate(section.doc.defaultTemplate);
        templates.push(template);
      }
    }
    fullPage.templates = templates;
    fullPage.footer = await getTemplate("footer-1");
    resolve(fullPage);
  });
};

let getTemplate = (sectionName) => {
  return new Promise(async (resolve) => {
    let newSection = await SectionModel.findOne(sectionName);
    await newSection.populate("defaultTemplate", "templates");
    let newTemplate = await transformTemplate(newSection.doc.defaultTemplate);
    resolve(newTemplate);
  });
};

let transformTemplate = async (template) => {
  return new Promise(async (resolve) => {
    template.doc.collections = await fetchCollections(template.doc);
    const component = dynamic(() =>
      import(
        `../components/templates/${template.doc.category}/${template.doc.slug}`
      )
    );
    resolve({ template: template, component: component });
  });
};

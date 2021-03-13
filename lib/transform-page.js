import dynamic from "next/dynamic";
import { fetchCollections, fetchItem } from "../lib/fetch";
import { Page, Section } from "../lib/models";
const SectionModel = new Section();

export const transformPage = async (pageDoc) => {
  return new Promise(async (resolve) => {
    console.log({pageDoc})
    const page = new Page(pageDoc);
    let fullPage = {};
    fullPage.header = await getTemplate("header-1", pageDoc);
    let templates = [];
    await page.populate("sections");
    for (let i = 0; i < page.doc.sections.length; i++) {
      const section = page.doc.sections[i];
      if (section) {
        await section.populate("defaultTemplate", "templates");
        let template = await transformTemplate(section, pageDoc);
        templates.push(template);
      }
    }
    fullPage.templates = templates;
    fullPage.footer = await getTemplate("footer-1", pageDoc);
    resolve(fullPage);
  });
};

let getTemplate = (sectionName, pageDoc) => {
  return new Promise(async (resolve) => {
    let section = await SectionModel.findOne(sectionName);
    await section.populate("defaultTemplate", "templates");
    let newTemplate = await transformTemplate(section, pageDoc);
    resolve(newTemplate);
  });
};

let transformTemplate = async (section, pageDoc) => {
  return new Promise(async (resolve) => {
    let template = section.doc.defaultTemplate;
    if (
      section.doc.article &&
      pageDoc.params &&
      pageDoc.params.slug &&
      Object.keys(section.doc.article).length
    ) {
      let contentTypeSlug = Object.keys(section.doc.article)[0];
      let item = await fetchItem(
        contentTypeSlug,
        pageDoc.params.slug
      );
      template.doc.item = item;
    }
    if (section.doc.collections) {
      template.doc.collections = await fetchCollections(section.doc);
    }
    template.doc.content = section.doc.content;
    const component = dynamic(() =>
      import(
        `../components/templates/${template.doc.category}/${template.doc.slug}`
      )
    );
    resolve({ template: template, component: component });
  });
};

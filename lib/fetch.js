import alasql from "alasql";
import { pages } from "../data/pages.json";
import { sections } from "../data/sections.json";
import { templates } from "../data/templates.json";

let tables = {
  pages: pages,
  sections: sections,
  templates: templates
}

export const fetchEntry = async (contentTypeSlug, entrySlug) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let { entries } = await import(`../data/entries/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug='${entrySlug}'`, [entries]);
  return res.length ? res[0] : null;
};

export const fetchEntries = async (contentTypeSlug, filters) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let { entries } = await import(`../data/entries/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ?`, [entries]);
  return {
    entries: res,
    contentTypeId: contentTypeSlug
  };
};

export const fetchCollections = async (template) => {
  if (!template) {
    //TODO error handling
  }
  if (!template.collections) {
    return [];
  }
    let newCollections = {};
    const collections = Object.entries(template.collections)
    for (const [contentTypeSlug, collection] of collections) {
      let limit = collection.limit;
      let { entries } = await import(`../data/entries/${contentTypeSlug}.json`);
      let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT = ${limit}` : ''), [entries]);
      let newCollection = {...collection};
      newCollection.entries = res;
      newCollections[contentTypeSlug] = newCollection;
    }
  return newCollections;
};

export const fetchPage = async (pageSlug) => {
  if (!pageSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [pages]);
  return res.length ? res[0] : null;
};

export const fetchSection = async (sectionSlug) => {
  if (!sectionSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${sectionSlug}`, [sections]);
  return res.length ? res[0] : null;
};

export const fetchTemplate = async (templateSlug) => {
  if (!templateSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${templateSlug}`, [templates]);
  return res.length ? res[0] : null;
};



//populate templates section.populate('templates',)
//`SELECT * FROM ? WHERE section = 'main-landing'`, [tables['templates']]);

const populate = (slug, foreignKey, table) => {
  
}

class Section {
  constructor(doc){
    this.doc = doc;
    this.name = 'section';
    this.table = 'sections';
  }
  populate(populateTable, ){
    let res = alasql(`SELECT * FROM ? WHERE ${this.doc.slug} = ${this.doc.slug}`, [tables[table]]);
    return res;
  }
//   async fetchOne(slug){
//     if (!slug) {
//       //TODO error handling
//     }
//     const res = alasql(`SELECT * FROM ? WHERE slug = ${slug}`, [tables[this.doc.table]]);
//     // return res.length ? res[0] : null;
//     const 
//     return {
//       entry: res.length ? res[0] : null,
//       populate: populate
//     }
//   };
 }

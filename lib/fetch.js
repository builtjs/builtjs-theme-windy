import alasql from "alasql";
import { pages } from "../data/pages.json";
import { sections } from "../data/sections.json";
import { templates } from "../data/templates.json";

let tables = {
  pages: pages,
  sections: sections,
  templates: templates
}

export const fetchItem = async (contentTypeSlug, entrySlug) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let { items } = await import(`../data/items/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug='${entrySlug}'`, [items]);
  return res.length ? res[0] : null;
};

export const fetchItems = async (contentTypeSlug, filters) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let { items } = await import(`../data/items/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ?`, [items]);
  return {
    items: res,
    contentTypeId: contentTypeSlug
  };
};

export const fetchCollections = async (section) => {
  if (!section) {
    //TODO error handling
  }
  if (!section.collections) {
    return [];
  }
    let newCollections = {};
    const collections = Object.entries(section.collections)
    for (const [contentTypeSlug, collection] of collections) {
      let limit = collection.limit;
      let { items } = await import(`../data/items/${contentTypeSlug}.json`);
      let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT ${limit}` : ''), [items]);
      let newCollection = {...collection};
      newCollection.items = res;
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

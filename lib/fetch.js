import alasql from "alasql";
import { pages } from "../data/pages.json";

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
      let { entries } = await import(`../data/entries/${contentTypeSlug}.json`);
      let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT = ${limit}` : ''), [entries]);
      let newCollection = {...collection};
      newCollection.entries = res;
      newCollections[contentTypeSlug] = newCollection;
    }
  return newCollections;
};

export const fetchPage = async (pageId) => {
  if (!pageId) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE id =${pageId}`, [pages]);
  return res.length ? res[0] : null;
};

import alasql from "alasql";
// import {Section, Template} from "./index";

export default class Model {
  constructor(doc, data, name) {
    this.doc = doc;
    this.data = data;
    this.name = name;
    this.table = `${this.name}s`;
  }

  async getData() {
    return (await import(`../../data/${this.table}.json`))[this.table];
  }

  async populate(property, table) {
    return new Promise(async (resolve) => {
      table = !table ? property : table;
      let populateData = (await import(`../../data/${table}.json`))[table];
      let isMultiple = property.endsWith("s");
      if (isMultiple) {
        let slugs = this.doc[property];
        let items = [];
        for (let i = 0; i < slugs.length; i++) {
          debugger
          const slug = slugs[i];
          let item = await this.getItem(slug, table, populateData);
          items.push(item);
        }
        this.doc[property] = items;
      } else {
        const slug = this.doc[property];
        if(slug){
        let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
          populateData,
        ]);
        debugger;
        this.doc[property] = await this.getItem(slug, table, populateData);
        }
        
      }
      resolve();
    });
  }

  async findOne(slug) {
    if (!slug) {
      //TODO error handling
    }
    return new Promise(async(resolve) => {
if (!this.data) {
      this.data = await this.getData();
    }
    const res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [this.data]);
    this.doc = res.length ? res[0] : null;
    resolve(this);
    });
    
  }

  async findMany(filters) {
    if (!slug) {
      //TODO error handling
    }
    if (!this.data) {
      this.data = this.getData();
    }
    return new Promise(async(resolve) => {
    let res = alasql(
      `SELECT * FROM ?` + (filters.limit ? ` LIMIT = ${filters.limit}` : ""),
      [this.data]
    );
    let items = [];
    res.map((doc) => {
      let item = new this.constructor(doc, this.data);
      items.push(item);
    });
    resolve(items);
    });
  }

  getItem(slug, table, populateData) {
    return new Promise((resolve) => {
      let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
        populateData,
      ]);
      let item = res.length ?new Model(res[0], null, table.slice(0, -1)) : null;
      resolve(item);
    });
  }
}

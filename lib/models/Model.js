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
      console.log({ table });
      console.log({ property });
      console.log(this.doc);
      let isMultiple = property.endsWith("s");
      if (isMultiple) {
        let slugs = this.doc[property];
        console.log({slugs})
        let items = [];
        for (let i = 0; i < slugs.length; i++) {
          const slug = slugs[i];
          let item = await this.getItem(slug, table, populateData);
          // console.log(`SELECT * FROM ? WHERE slug = '${JSON.stringify(slug)}'`)
          // let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
          //   populateData,
          // ]);
          // console.log("....res", res)
          // let item = this.getItem(res, table);
          items.push(item);
          console.log("....item", item);
        }
        // slugs.map((slug) => {

        // });
        console.log("....items", items);
        this.doc[property] = items;
      } else {
        const slug = this.doc[property];
        let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
          populateData,
        ]);
        this.doc[property] = await this.getItem(slug, table, populateData);
      }
      resolve();
      // console.log(this);
      // console.log({ slug });

      // console.log(`SELECT * FROM ? WHERE slug = '${slug}'`);

      // console.log({ res });
      // if (!isMultiple) {
      //   this.doc[property] = this.getItem(res, table);
      // } else {
      //   let items = [];
      //   res.map((doc) => {
      //     let item = this.getItem(doc, table);
      //     items.push(item);
      //   });
      //   this.doc[property] = items;
      // }

      // this.doc[property] = isMultiple ? res : res.length ? res[0] : null;
      // return isMultiple ? res : (res.length ? res[0] : null);
    });
  }

  async findOne(slug) {
    if (!slug) {
      //TODO error handling
    }
    if (!this.data) {
      this.data = await this.getData();
    }
    console.log(`SELECT * FROM ? WHERE slug = '${slug}'`);
    const res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [this.data]);
    console.log("res", res);
    this.doc = res.length ? res[0] : null;
    return this;
  }

  async findMany(filters) {
    if (!slug) {
      //TODO error handling
    }
    if (!this.data) {
      this.data = this.getData();
    }
    let res = alasql(
      `SELECT * FROM ?` + (filters.limit ? ` LIMIT = ${filters.limit}` : ""),
      [this.data]
    );
    let items = [];
    res.map((doc) => {
      let item = new this.constructor(doc, this.data);
      items.push(item);
    });
    return items;
  }

  getItem(slug, table, populateData) {
    return new Promise((resolve) => {
      console.log(`SELECT * FROM ? WHERE slug = '${JSON.stringify(slug)}'`);
      let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
        populateData,
      ]);
      console.log("....res", res);
      let item = res.length ?new Model(res[0], null, table.slice(0, -1)) : null;
      resolve(item);
    });
  }
}

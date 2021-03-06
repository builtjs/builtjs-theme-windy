import alasql from "alasql";

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
    const slug = this.doc[property];
    console.log({slug})
    let isMultiple = property.endsWith('s');
    // let table = isMultiple ? isMultiple : `${modelName}s`;
    let populateData = (await import(`../../data/${table}.json`))[table];
    console.log({populateData})
    let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
      populateData
    ]);
    console.log({res})
    this.doc[property] = isMultiple ? res : (res.length ? res[0] : null);
    // return isMultiple ? res : (res.length ? res[0] : null);
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
}

// import {
//     Page,
//     Section,
//     Template
//  } from "./models";
import Model from "./models/Model";

class Page extends Model {
  constructor(doc, data) {
    super(doc, data, "page");
  }
}

class Section extends Model {
  constructor(doc, data) {
    super(doc, data, "section");
  }
}

class Template extends Model {
  constructor(doc, data) {
    super(doc, data, "template");
  }
}

export default function model(modelName) {
  return eval(`new ${modelName}()`);
}

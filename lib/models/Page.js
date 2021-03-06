import Model from "./Model";

export default class Page extends Model{
  constructor(doc, data) {
    super(doc, data);
    this.name = "page";
    this.table = "pages";
  }
}
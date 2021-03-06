import Model from "./Model";

export default class Section extends Model{
  constructor(doc, data) {
    super(doc, data);
    this.name = "section";
    this.table = "sections";
  }
}
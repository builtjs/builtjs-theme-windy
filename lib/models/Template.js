import Model from "./Model";

export default class Template extends Model{
  constructor(doc, data) {
    super(doc, data);
    this.name = "template";
    this.table = "templates";
  }
}
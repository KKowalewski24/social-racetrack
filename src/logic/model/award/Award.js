import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Award extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _description;
  _year;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), description = PR(), year = PR()) {
    super(id);
    this._description = description;
    this._year = year;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }
}

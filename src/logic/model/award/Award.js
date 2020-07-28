import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Award extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  description;
  year;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), description = PR(), year = PR()) {
    super(id);
    this.description = description;
    this.year = year;
  }
}

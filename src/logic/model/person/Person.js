import BaseEntity from "../base/BaseEntity";
import {PR} from "../../Helper";

export class Person extends BaseEntity {

  /*------------------------ FIELDS REGION ------------------------*/
  #_firstName;
  #_lastName;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(firstName = PR(), lastName = PR()) {
    super();
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }
}

export default Person;

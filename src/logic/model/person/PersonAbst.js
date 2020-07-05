import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class PersonAbst extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _firstName;
  _lastName;
  _birthDate;
  _country;
  _city;
  _email;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(firstName = PR(), lastName = PR(), birthDate = PR(),
              country = PR(), city = PR(), email = PR()) {
    super();
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthDate = birthDate;
    this._country = country;
    this._city = city;
    this._email = email;
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

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value) {
    this._birthDate = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}

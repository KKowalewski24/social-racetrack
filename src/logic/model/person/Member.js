import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _age;
  _country;
  _city;
  _vehicleArray;
  _receivedAwardsArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(firstName = PR(), lastName = PR(),
              age = PR(), nationality = PR(), city = PR(),
              vehicleArray = PR(), receivedAwardsArray = PR()) {
    super(firstName, lastName);
    this._age = age;
    this._country = nationality;
    this._city = city;
    this._vehicleArray = vehicleArray;
    this._receivedAwardsArray = receivedAwardsArray;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
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

  get vehicleArray() {
    return this._vehicleArray;
  }

  set vehicleArray(value) {
    this._vehicleArray = value;
  }

  get receivedAwardsArray() {
    return this._receivedAwardsArray;
  }

  set receivedAwardsArray(value) {
    this._receivedAwardsArray = value;
  }
}

import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _birthDate;
  _country;
  _city;
  _carsArray;
  _receivedAwardsArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(firstName = PR(), lastName = PR(),
              birthDate = PR(), country = PR(), city = PR(),
              vehicleArray = PR(), receivedAwardsArray = PR()) {
    super(firstName, lastName);
    this._birthDate = birthDate;
    this._country = country;
    this._city = city;
    this._carsArray = vehicleArray;
    this._receivedAwardsArray = receivedAwardsArray;
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

  get carsArray() {
    return this._carsArray;
  }

  set carsArray(value) {
    this._carsArray = value;
  }

  get receivedAwardsArray() {
    return this._receivedAwardsArray;
  }

  set receivedAwardsArray(value) {
    this._receivedAwardsArray = value;
  }
}

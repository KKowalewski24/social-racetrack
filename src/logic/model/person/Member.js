import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _age;
  _nationality;
  _vehicleArray;
  _receivedAwardsArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(firstName = PR(), lastName = PR(),
              age = PR(), nationality = PR(),
              vehicleArray = PR(), receivedAwardsArray = PR()) {
    super(firstName, lastName);
    this._age = age;
    this._nationality = nationality;
    this._vehicleArray = vehicleArray;
    this._receivedAwardsArray = receivedAwardsArray;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get nationality() {
    return this._nationality;
  }

  set nationality(value) {
    this._nationality = value;
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

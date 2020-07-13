import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _carsArray;
  _receivedAwardsArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), firstName = PR(), lastName = PR(),
              birthDate = PR(), country = PR(), city = PR(),
              email = PR(), carsArray = PR(), receivedAwardsArray = PR()) {
    super(id, firstName, lastName, birthDate, country, city, email);
    this._carsArray = carsArray;
    this._receivedAwardsArray = receivedAwardsArray;
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

import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Event extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _racetrack;
  _membersArray;
  _eventDate;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), racetrack = PR(),
              membersArray = PR(), eventDate = PR()) {
    super(id);
    this._racetrack = racetrack;
    this._membersArray = membersArray;
    this._eventDate = eventDate;
  }

  get racetrack() {
    return this._racetrack;
  }

  set racetrack(value) {
    this._racetrack = value;
  }

  get membersArray() {
    return this._membersArray;
  }

  set membersArray(value) {
    this._membersArray = value;
  }

  get eventDate() {
    return this._eventDate;
  }

  set eventDate(value) {
    this._eventDate = value;
  }
}

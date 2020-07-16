import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Event extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  racetrack;
  membersArray;
  eventDate;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), racetrack = PR(),
              membersArray = PR(), eventDate = PR()) {
    super(id);
    this.racetrack = racetrack;
    this.membersArray = membersArray;
    this.eventDate = eventDate;
  }
}

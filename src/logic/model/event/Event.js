import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Event extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  name;
  racetrackRef;
  membersRefArray;
  eventDate;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), name = PR(), racetrackRef = PR(),
              membersRefArray = PR(), eventDate = PR()) {
    super(id);
    this.name = name;
    this.racetrackRef = racetrackRef;
    this.membersRefArray = membersRefArray;
    this.eventDate = eventDate;
  }
}

import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Event extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  name;
  racetrackRefPath;
  eventCreatorRefPath;
  membersRefPathArray;
  eventDate;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), name = PR(), racetrackRefPath = PR(),
              eventCreatorRefPath = PR(), membersRefPathArray = PR(),
              eventDate = PR()) {
    super(id);
    this.name = name;
    this.racetrackRefPath = racetrackRefPath;
    this.eventCreatorRefPath = eventCreatorRefPath;
    this.membersRefPathArray = membersRefPathArray;
    this.eventDate = eventDate;
  }
}

//TODO CHECK IF WORKS
export const getAddedMembersRefPathArray = (eventObject = PR(),
                                            addedMemberRefPath = PR()) => {
  return {membersRefPathArray: [...eventObject?.membersRefPathArray, addedMemberRefPath]};
};

export const getDeletedMembersRefPathArray = (eventObject = PR(),
                                              deletedMemberRefPath = PR()) => {
  const resultArray = eventObject
    .membersRefPathArray?.filter((it) => it !== deletedMemberRefPath);

  return {membersRefPathArray: resultArray};
};

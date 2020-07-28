import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {getTomorrow, PR} from "../../Helper";
import {PATH_DB_COLLECTION_MEMBERS} from "../../../config/constant/firebase-constants";

export class Event extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  name;
  racetrackRefPath;
  /**
   * Person who create an event
   */
  eventCreatorRefPath;
  /**
   * Array of persons that joined to event
   */
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

export const isFutureEvent = (eventDate = PR()) => {
  return new Date(eventDate) > getTomorrow();
};

export const isPastEvent = (eventDate = PR()) => {
  return new Date(eventDate) < getTomorrow();
};

export const isMemberIsEventCreator = (eventObject = PR(),
                                       memberObject = PR()) => {
  return eventObject.eventCreatorRefPath === PATH_DB_COLLECTION_MEMBERS + memberObject.id;
};

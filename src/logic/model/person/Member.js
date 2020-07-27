import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  carsArray;
  receivedAwardsArray;
  /**
   * Array of events that user created or joined
   */
  eventsRefPathArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), firstName = PR(), lastName = PR(),
              birthDate = PR(), country = PR(), city = PR(),
              email = PR(), carsArray = PR(),
              receivedAwardsArray = PR(), eventsRefPathArray = PR()) {
    super(id, firstName, lastName, birthDate, country, city, email);
    this.carsArray = carsArray;
    this.receivedAwardsArray = receivedAwardsArray;
    this.eventsRefPathArray = eventsRefPathArray;
  }
}

export const getAddedCarsArray = (memberObject = PR(), addedCar = PR()) => {
  return {carsArray: [...memberObject?.carsArray, addedCar]};
};

export const getDeletedCarsArray = (memberObject = PR(),
                                    deletedCarId = PR()) => {
  const resultArray = memberObject
    .carsArray?.filter((it) => it.id !== deletedCarId);

  return {carsArray: resultArray};
};

export const getAddedReceivedAwardsArray = (memberObject = PR(),
                                            addedAward = PR()) => {
  return {receivedAwardsArray: [...memberObject?.receivedAwardsArray, addedAward]};
};

export const getDeletedReceivedAwardsArray = (memberObject = PR(),
                                              deletedAwardId = PR()) => {
  const resultArray = memberObject
    .receivedAwardsArray?.filter((it) => it.id !== deletedAwardId);

  return {receivedAwardsArray: resultArray};
};

export const getAddedEventsRefPathArray = (memberObject = PR(),
                                           addedEventRefPath = PR()) => {
  return {eventsRefPathArray: [...memberObject?.eventsRefPathArray, addedEventRefPath]};
};

export const getDeletedEventsRefPathArray = (memberObject = PR(),
                                             deletedEventRefPath = PR()) => {
  const resultArray = memberObject
    .eventsRefPathArray?.filter((it) => it !== deletedEventRefPath);

  return {eventsRefPathArray: resultArray};
};

import {PersonAbst} from "./PersonAbst";
import {PR} from "../../Helper";

export class Member extends PersonAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  carsArray;
  receivedAwardsArray;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), firstName = PR(), lastName = PR(),
              birthDate = PR(), country = PR(), city = PR(),
              email = PR(), carsArray = PR(), receivedAwardsArray = PR()) {
    super(id, firstName, lastName, birthDate, country, city, email);
    this.carsArray = carsArray;
    this.receivedAwardsArray = receivedAwardsArray;
  }
}

export const getUpdatedCarsArray = (memberObject = PR(), addedCar = PR()) => {
  return {carsArray: [...memberObject.carsArray, addedCar]};
};

export const getUpdatedReceivedAwardsArray = (memberObject = PR(),
                                              addedAward = PR()) => {
  return {receivedAwardsArray: [...memberObject.receivedAwardsArray, addedAward]};
};

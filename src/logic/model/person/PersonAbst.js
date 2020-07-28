import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class PersonAbst extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  firstName;
  lastName;
  birthDate;
  country;
  city;
  email;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), firstName = PR(),
              lastName = PR(), birthDate = PR(),
              country = PR(), city = PR(), email = PR()) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.country = country;
    this.city = city;
    this.email = email;
  }
}

export const getUpdatedFieldsArray = (editedFirstName = PR(),
                                      editedLastName = PR(),
                                      editedCountry = PR(),
                                      editedCity = PR()) => {
  return {
    firstName: editedFirstName,
    lastName: editedLastName,
    country: editedCountry,
    city: editedCity,
  };
};

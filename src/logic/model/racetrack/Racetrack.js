import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Racetrack extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  name;
  country;
  city;
  length;
  turnsNumber;
  maximumExhaustLoudness;
  minimumRideHeight;
  description;
  imageUrl;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), name = PR(), country = PR(),
              city = PR(), length = PR(), turnsNumber = PR(),
              maximumExhaustLoudness = PR(), minimumRideHeight = PR(),
              description = PR(), imageUrl = PR()) {
    super(id);
    this.name = name;
    this.country = country;
    this.city = city;
    this.length = length;
    this.turnsNumber = turnsNumber;
    this.maximumExhaustLoudness = maximumExhaustLoudness;
    this.minimumRideHeight = minimumRideHeight;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

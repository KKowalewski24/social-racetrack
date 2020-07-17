import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Racetrack extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  name;
  country;
  city;
  lengthInMeters;
  turnsNumber;
  maximumExhaustLoudnessInDecibels;
  minimumRideHeightInMillimeters;
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
    this.lengthInMeters = length;
    this.turnsNumber = turnsNumber;
    this.maximumExhaustLoudnessInDecibels = maximumExhaustLoudness;
    this.minimumRideHeightInMillimeters = minimumRideHeight;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

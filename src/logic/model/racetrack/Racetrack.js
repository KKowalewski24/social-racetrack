import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Racetrack extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _name;
  _country;
  _city;
  _length;
  _turnsNumber;
  _maximumExhaustLoudness;
  _minimumRideHeight;
  _description;
  _imageUrl;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), name = PR(), country = PR(),
              city = PR(), length = PR(), turnsNumber = PR(),
              maximumExhaustLoudness = PR(), minimumRideHeight = PR(),
              description = PR(), imageUrl = PR()) {
    super(id);
    this._name = name;
    this._country = country;
    this._city = city;
    this._length = length;
    this._turnsNumber = turnsNumber;
    this._maximumExhaustLoudness = maximumExhaustLoudness;
    this._minimumRideHeight = minimumRideHeight;
    this._description = description;
    this._imageUrl = imageUrl;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get turnsNumber() {
    return this._turnsNumber;
  }

  set turnsNumber(value) {
    this._turnsNumber = value;
  }

  get maximumExhaustLoudness() {
    return this._maximumExhaustLoudness;
  }

  set maximumExhaustLoudness(value) {
    this._maximumExhaustLoudness = value;
  }

  get minimumRideHeight() {
    return this._minimumRideHeight;
  }

  set minimumRideHeight(value) {
    this._minimumRideHeight = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  set imageUrl(value) {
    this._imageUrl = value;
  }
}

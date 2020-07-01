import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Car extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  _brand;
  _model;
  _productionYear;
  _carType;
  _mileage;
  _engineType;
  _enginePower;
  _driveTrainType;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(brand = PR(), model = PR(), productionYear = PR(),
              carType = PR(), mileage = PR(), engineType = PR(),
              enginePower = PR(), driveTrainType = PR()) {
    super();
    this._brand = brand;
    this._model = model;
    this._productionYear = productionYear;
    this._carType = carType;
    this._mileage = mileage;
    this._engineType = engineType;
    this._enginePower = enginePower;
    this._driveTrainType = driveTrainType;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get productionYear() {
    return this._productionYear;
  }

  set productionYear(value) {
    this._productionYear = value;
  }

  get carType() {
    return this._carType;
  }

  set carType(value) {
    this._carType = value;
  }

  get mileage() {
    return this._mileage;
  }

  set mileage(value) {
    this._mileage = value;
  }

  get engineType() {
    return this._engineType;
  }

  set engineType(value) {
    this._engineType = value;
  }

  get enginePower() {
    return this._enginePower;
  }

  set enginePower(value) {
    this._enginePower = value;
  }

  get driveTrainType() {
    return this._driveTrainType;
  }

  set driveTrainType(value) {
    this._driveTrainType = value;
  }
}

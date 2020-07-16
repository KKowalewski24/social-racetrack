import {BaseEntityAbst} from "../base/BaseEntityAbst";
import {PR} from "../../Helper";

export class Car extends BaseEntityAbst {

  /*------------------------ FIELDS REGION ------------------------*/
  brand;
  model;
  productionYear;
  mileage;
  carType;
  engineType;
  enginePower;
  driveTrainType;

  /*------------------------ METHODS REGION ------------------------*/
  constructor(id = PR(), brand = PR(), model = PR(),
              productionYear = PR(), mileage = PR(),
              carType = PR(), engineType = PR(),
              enginePower = PR(), driveTrainType = PR()) {
    super(id);
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.mileage = mileage;
    this.carType = carType;
    this.engineType = engineType;
    this.enginePower = enginePower;
    this.driveTrainType = driveTrainType;
  }
}

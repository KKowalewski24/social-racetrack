export default class BaseEntity {

  /*------------------------ FIELDS REGION ------------------------*/
  #_id;

  /*------------------------ METHODS REGION ------------------------*/
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}

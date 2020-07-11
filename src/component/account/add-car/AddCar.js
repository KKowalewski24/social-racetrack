import React from "react";
import propTypes from "prop-types";
import {useForm} from "react-hook-form";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import {getCurrentYear, keyValueObjectToArray} from "../../../logic/Helper";
import {warningNotification} from "../../util/notification/notification";
import {CarType} from "../../../logic/model/car/CarType";
import CustomComboBox from "../../util/custom-combo-box/CustomComboBox";
import {EngineType} from "../../../logic/model/car/EngineType";
import {DriveTrainType} from "../../../logic/model/car/DriveTrainType";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../../index.css";

export const AddCar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.accountSettingsPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"container custom-container-md " + props.margin}>
      <form onSubmit={handleSubmit(props.handleAddCar)}>

        <div className="row">
          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="brand"
              label={strings.accountSettingsPage.brand}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="model"
              label={strings.accountSettingsPage.model}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <TextField
              type="number"
              inputRef={register({required: true, min: 1900, max: getCurrentYear()})}
              name="productionYear"
              label={strings.accountSettingsPage.productionYear}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="number"
              inputRef={register({required: true, min: 0})}
              name="mileage"
              label={strings.accountSettingsPage.mileage}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <CustomComboBox
              enum={CarType}
              inputRef={register({required: true})}
              name="carType"
              label={strings.accountSettingsPage.carType}
            />
          </div>

          <div className="col-12 col-sm-6">
            <CustomComboBox
              enum={EngineType}
              inputRef={register({required: true})}
              name="engineType"
              label={strings.accountSettingsPage.engineType}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <TextField
              type="number"
              inputRef={register({required: true, min: 1})}
              name="enginePower"
              label={strings.accountSettingsPage.enginePower}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-12 col-sm-6">
            <CustomComboBox
              enum={DriveTrainType}
              inputRef={register({required: true})}
              name="driveTrainType"
              label={strings.accountSettingsPage.driveTrainType}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            onClick={checkInputs}
            type="submit"
            className="mt-4"
            variant="contained"
            color="primary"
          >
            {strings.accountSettingsPage.confirm}
          </Button>
        </div>
      </form>

      <ToastContainer/>
    </div>
  );
};

AddCar.propTypes = {
  handleAddCar: propTypes.func.isRequired,
  backgroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
};

export default AddCar;

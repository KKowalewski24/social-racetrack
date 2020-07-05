import React from "react";
import propTypes from "prop-types";
import {useForm} from "react-hook-form";
import "../../../index.css";
import TextField from "@material-ui/core/TextField";
import strings from "../../../config/constant/string-constants";
import Button from "@material-ui/core/Button";
import {ToastContainer} from "react-toastify";
import {getCurrentYear, getEnumKeyValueArray} from "../../../logic/Helper";
import {CarType} from "../../../logic/model/car/CarType";
import MenuItem from "@material-ui/core/MenuItem";

export const AddCar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();

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
            {/*<TextField*/}
            {/*  select*/}
            {/*  inputRef={register({required: true})}*/}
            {/*  name="carType"*/}
            {/*  label={strings.accountSettingsPage.carType}*/}
            {/*  variant="outlined"*/}
            {/*  margin="normal"*/}
            {/*  fullWidth*/}
            {/*>*/}
            {/*  {getEnumKeyValueArray(CarType).map((it, index) => {*/}
            {/*    return (*/}
            {/*      <div*/}
            {/*        key={index}*/}
            {/*      >*/}
            {/*        {it.value}*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*</TextField>*/}
          </div>

          <div className="col-12 col-sm-6">
            {/*TODO*/}
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
            {/*TODO*/}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button
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

import React from "react";
import {useForm} from "react-hook-form";
import {keyValueObjectToArray, PR} from "../../../logic/Helper";
import {warningNotification} from "../../../component/util/notification/notification";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const CreateRacetrackPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();

  const handleCreateRacetrack = (data = PR()) => {
    //TODO ADD IMPL
    console.log(data);
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.createRacetrackPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-md mt-3">
      <form onSubmit={handleSubmit(handleCreateRacetrack)}>

        <TextField
          type="text"
          inputRef={register({required: true})}
          name="name"
          label={strings.createRacetrackPage.name}
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <div className="row">
          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="country"
              label={strings.createRacetrackPage.country}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="text"
              inputRef={register({required: true})}
              name="city"
              label={strings.createRacetrackPage.city}
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
              inputRef={register({required: true})}
              name="length"
              label={strings.createRacetrackPage.length}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="number"
              inputRef={register({required: true})}
              name="turnsNumber"
              label={strings.createRacetrackPage.turnsNumber}
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
              inputRef={register({required: true})}
              name="maximumExhaustLoudness"
              label={strings.createRacetrackPage.maximumExhaustLoudness}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-12 col-sm-6">
            <TextField
              type="number"
              inputRef={register({required: true})}
              name="minimumRideHeight"
              label={strings.createRacetrackPage.minimumRideHeight}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <TextField
          type="text"
          inputRef={register({required: true})}
          name="description"
          label={strings.createRacetrackPage.description}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        {/*  TODO DROP DOWN*/}

        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            className="mt-4"
            variant="contained"
            color="primary"
          >
            {strings.createRacetrackPage.confirm}
          </Button>
        </div>

      </form>

      {checkInputs()}
      <ToastContainer/>
    </div>
  );
};

CreateRacetrackPage.propTypes = {};

export default CreateRacetrackPage;

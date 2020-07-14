import React from "react";
import {useForm} from "react-hook-form";
import {ToastContainer} from "react-toastify";
import {EventDatabaseController} from "../../../logic/controller/model/EventDatabaseController";
import {keyValueObjectToArray, PR} from "../../../logic/Helper";
import {warningNotification} from "../../../component/util/notification/notification";
import CustomComboBox from "../../../component/util/custom-combo-box/CustomComboBox";
import strings from "../../../config/constant/string-constants";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../../index.css";

export const CreateEventPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const eventDatabaseController = new EventDatabaseController();

  const handleCreateEvent = (data = PR()) => {
    console.log(data);
    //TODO ADD IMPL
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.createEventPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-md mt-3">
      <div className="my-4 mx-2">
        <form onSubmit={handleSubmit(handleCreateEvent)}>

          {/*TODO ADD ARRAY WITH DATA - REMEMBER TO PROPERLY PARSE - ENUM STYLE*/}
          <CustomComboBox
            dataArray={[]}
            inputRef={register({required: true})}
            name="racetrack"
            label={strings.createEventPage.racetrack}
          />

          <TextField
            type="datetime-local"
            inputRef={register({required: true})}
            InputLabelProps={{shrink: true}}
            name="DateTime"
            label={strings.createEventPage.dateTime}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <div className="d-flex justify-content-center">
            <Button
              onClick={checkInputs}
              type="submit"
              className="mt-4"
              variant="contained"
              color="primary"
            >
              {strings.createEventPage.confirm}
            </Button>
          </div>
        </form>
      </div>

      <ToastContainer/>
    </div>
  );
};

CreateEventPage.propTypes = {};

export default CreateEventPage;

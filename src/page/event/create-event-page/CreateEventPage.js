import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {ToastContainer} from "react-toastify";
import {EventDatabaseController} from "../../../logic/controller/model/EventDatabaseController";
import {keyValueObjectToArray, PR} from "../../../logic/Helper";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import {PATH_FUTURE_EVENTS} from "../../../config/constant/path-constants";
import {errorNotification, warningNotification} from "../../../component/util/notification/notification";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import CustomComboBox from "../../../component/util/custom-combo-box/CustomComboBox";
import strings from "../../../config/constant/string-constants";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const CreateEventPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const [racetracksArray, setRacetracksArray] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const eventDatabaseController = new EventDatabaseController();
  const racetrackDatabaseController = new RacetrackDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    racetrackDatabaseController.readAllRacetracks(
      () => errorNotification(strings.createEventPage.racetrackLoadingError)
    )
      .then((racetracks) => {
        console.log(racetracks);
        setRacetracksArray(racetracks);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRacetrackKeyValueArray = () => {
    const keyValueArray = [];

    racetracksArray.forEach((it) => {
      keyValueArray.push({
        key: it.id,
        value: it.name
      });
    });

    return keyValueArray;
  };

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
    <FetchDataController
      isLoaded={isLoaded}
      isError={isError}
      errorMessageTitle={""}
      errorMessageDescription={strings.createEventPage.racetrackLoadingError}
      errorMessageRedirectPath={PATH_FUTURE_EVENTS}
      errorMessageRedirectDescription={strings.createEventPage.backFutureEventsPage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      <div className="container custom-container-md">
        <div className="custom-create-form-margin">
          <form onSubmit={handleSubmit(handleCreateEvent)}>

            <TextField
              type="text"
              inputRef={register({required: true})}
              name="eventName"
              label={strings.createEventPage.eventName}
              variant="outlined"
              margin="normal"
              fullWidth
            />

            {/*TODO ADD ARRAY WITH DATA - REMEMBER TO PROPERLY PARSE - ENUM STYLE*/}
            {/*<CustomComboBox*/}
            {/*  dataArray={racetracksArray}*/}
            {/*  getDataArrayKeyValueArray={getRacetrackKeyValueArray}*/}
            {/*  inputRef={register({required: true})}*/}
            {/*  name="racetrack"*/}
            {/*  label={strings.createEventPage.racetrack}*/}
            {/*/>*/}

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
    </FetchDataController>
  );
};

CreateEventPage.propTypes = {};

export default CreateEventPage;

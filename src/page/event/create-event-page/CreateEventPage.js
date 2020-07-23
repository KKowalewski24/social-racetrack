import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ToastContainer} from "react-toastify";
import {EventDatabaseController} from "../../../logic/controller/model/EventDatabaseController";
import {keyValueObjectToArray, PR, redirectToPage} from "../../../logic/Helper";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import {PATH_FUTURE_EVENTS} from "../../../config/constant/path-constants";
import {errorNotification, warningNotification} from "../../../component/util/notification/notification";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import ArrayComboBox from "../../../component/create/array-combo-box/ArrayComboBox";
import strings from "../../../config/constant/string-constants";
import Button from "@material-ui/core/Button";
import config from "../../../config/config";
import TextField from "@material-ui/core/TextField";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const CreateEventPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const [racetracksArray, setRacetracksArray] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [createEventCallCounter, setCreateEventCallCounter] = useState(0);

  const history = useHistory();
  const eventDatabaseController = new EventDatabaseController();
  const racetrackDatabaseController = new RacetrackDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    racetrackDatabaseController.readAllRacetracks(
      () => errorNotification(strings.createEventPage.racetrackLoadingError)
    )
      .then((racetracks) => {
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

    racetracksArray && racetracksArray.forEach((it) => {
      keyValueArray.push({
        key: it.id,
        value: it.name
      });
    });

    return keyValueArray;
  };

  const handleCreateEvent = (data = PR()) => {
    if (createEventCallCounter === 0) {
      //TODO REMEMBER THAT racetrack SHOULD BE ID
      const racetrackId = data.racetrack;

      eventDatabaseController.createEvent(
        data.eventName, racetrackId,
        config.auth().currentUser && config.auth().currentUser.uid,
        new Date(data.date + " " + data.time),
        () => errorNotification(strings.createEventPage.eventNotSavedError)
      ).then(() => redirectToPage(history, PATH_FUTURE_EVENTS));

      setCreateEventCallCounter(createEventCallCounter + 1);
    }
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

            <ArrayComboBox
              dataArray={getRacetrackKeyValueArray()}
              inputRef={register({required: true})}
              name="racetrack"
              label={strings.createEventPage.racetrack}
            />

            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="date"
                  inputRef={register({required: true})}
                  InputLabelProps={{shrink: true}}
                  name="date"
                  label={strings.createEventPage.date}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </div>

              <div className="col-sm-6">
                <TextField
                  type="time"
                  inputRef={register({required: true})}
                  InputLabelProps={{shrink: true}}
                  name="time"
                  label={strings.createEventPage.time}
                  variant="outlined"
                  margin="normal"
                  fullWidth
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

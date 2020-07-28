import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {errorNotification, warningNotification} from "../../../component/util/notification/notification";
import {RacetrackDatabaseController} from "../../../logic/controller/model/RacetrackDatabaseController";
import {RacetrackFirebaseStorageController} from "../../../logic/controller/model/RacetrackFirebaseStorageController";
import {Racetrack} from "../../../logic/model/racetrack/Racetrack";
import ConfirmButton from "../../../component/rest/confirm-button/ConfirmButton";
import {PATH_RACETRACKS} from "../../../config/constant/path-constants";
import strings from "../../../config/constant/string-constants";
import {ToastContainer} from "react-toastify";
import {DropzoneArea} from "material-ui-dropzone";
import {
  generateCustomUuid,
  generateCustomUuidWithSecond,
  keyValueObjectToArray,
  PR,
  redirectToPage
} from "../../../logic/Helper";
import {
  MAX_RACETRACK_LOUDNESS,
  MIN_RACETRACK_LENGTH_IN_M,
  MIN_RACETRACK_LOUDNESS,
  MIN_RACETRACK_NUM_OF_TURNS,
  MIN_RACETRACK_RIDE_HEIGHT
} from "../../../config/constant/legal-constants";
import TextField from "@material-ui/core/TextField";
import "../../../index.css";

export const CreateRacetrackPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit, errors} = useForm();
  const [image, setImage] = useState([]);
  const [createRacetrackCallCounter, setCreateRacetrackCallCounter] = useState(0);

  const history = useHistory();
  const racetrackFirebaseStorageController = new RacetrackFirebaseStorageController();
  const racetrackDatabaseController = new RacetrackDatabaseController();

  const handleCreateRacetrack = (data = PR()) => {
    if (createRacetrackCallCounter === 0) {
      if (image.length === 0) {
        warningNotification(strings.createRacetrackPage.imageWarningInfo);
      } else {
        racetrackFirebaseStorageController.uploadRacetrackImage(
          generateCustomUuidWithSecond() + image[0].name, image[0],
          () => errorNotification(strings.createRacetrackPage.imageNotSavedError)
        ).then((imageUrl) => {
          racetrackDatabaseController.createRacetrack(
            new Racetrack(
              generateCustomUuid(), data.name, data.country, data.city, data.lengthInMeters,
              data.turnsNumber, data.maximumExhaustLoudnessInDecibels, data.minimumRideHeightInMillimeters,
              data.description, imageUrl
            ),
            () => errorNotification(strings.createRacetrackPage.racetrackNotSavedError)
          ).then(() => redirectToPage(history, PATH_RACETRACKS));
        });

        setCreateRacetrackCallCounter(createRacetrackCallCounter + 1);
      }
    }
  };

  const checkInputs = () => {
    // eslint-disable-next-line no-unused-expressions
    if (keyValueObjectToArray(errors).length > 0) {
      warningNotification(strings.createRacetrackPage.inputWarningInfo);
    }
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-md">
      <div className="custom-create-form-margin">
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
            <div className="col-sm-6">
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

            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <TextField
                type="number"
                inputRef={register({required: true, min: MIN_RACETRACK_LENGTH_IN_M})}
                name="lengthInMeters"
                label={strings.createRacetrackPage.lengthInMeters}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>

            <div className="col-sm-6">
              <TextField
                type="number"
                inputRef={register({required: true, min: MIN_RACETRACK_NUM_OF_TURNS})}
                name="turnsNumber"
                label={strings.createRacetrackPage.turnsNumber}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <TextField
                type="number"
                inputRef={register({
                  required: true,
                  min: MIN_RACETRACK_LOUDNESS,
                  max: MAX_RACETRACK_LOUDNESS
                })}
                name="maximumExhaustLoudnessInDecibels"
                label={strings.createRacetrackPage.maximumExhaustLoudnessInDecibels}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>

            <div className="col-sm-6">
              <TextField
                type="number"
                inputRef={register({required: true, min: MIN_RACETRACK_RIDE_HEIGHT})}
                name="minimumRideHeightInMillimeters"
                label={strings.createRacetrackPage.minimumRideHeightInMillimeters}
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

          <div className="row my-3 custom-margin-x-0-1">
            <DropzoneArea
              inputRef={register({required: true})}
              dropzoneText={strings.createRacetrackPage.imageDropZone}
              onChange={(image) => setImage(image)}
              acceptedFiles={["image/*"]}
              filesLimit={1}
              showFileNames
              showAlerts={false}
            />
          </div>

          <ConfirmButton
            checkInputs={checkInputs}
            buttonTextContent={strings.createRacetrackPage.confirm}
          />
        </form>
      </div>

      <ToastContainer/>
    </div>
  );
};

CreateRacetrackPage.propTypes = {};

export default CreateRacetrackPage;

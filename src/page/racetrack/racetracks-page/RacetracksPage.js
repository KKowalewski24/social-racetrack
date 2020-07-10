import React, {useContext} from "react";
import {Link} from "react-router-dom";
import TabPanel from "../../../component/util/tab-panel/TabPanel";
import {PATH_CREATE_RACETRACK} from "../../../config/constant/path-constants";
import strings from "../../../config/constant/string-constants";
import {AuthContext} from "../../../logic/AuthContextProvider";
import Button from "@material-ui/core/Button";
import "../../../index.css";

export const RacetracksPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isAdmin} = useContext(AuthContext);

  const renderTab = () => {
    return (
      <TabPanel>
        <Link to={PATH_CREATE_RACETRACK} className="custom-color-inherit">
          <Button
            color="primary"
            variant="contained"
            className="my-1 mx-1"
          >
            {strings.racetracksPage.addNewRacetrack}
          </Button>
        </Link>
      </TabPanel>
    );
  };

  const renderRacetrackCards = () => {
    //TODO
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid">
      <div className="my-4 mx-2">
        {isAdmin ? renderTab() : null}
        {renderRacetrackCards()}
      </div>
    </div>
  );
};

RacetracksPage.propTypes = {};

export default RacetracksPage;

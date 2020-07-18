import React from "react";
import {Link} from "react-router-dom";
import TabPanel from "../../../component/util/tab-panel/TabPanel";
import strings from "../../../config/constant/string-constants";
import {PATH_CREATE_EVENT} from "../../../config/constant/path-constants";
import Button from "@material-ui/core/Button";

export const FutureEventsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderTab = () => {
    return (
      <TabPanel>
        <Link to={PATH_CREATE_EVENT} className="custom-color-inherit">
          <Button
            color="primary"
            variant="contained"
            className="my-1 mx-1"
          >
            {strings.futureEventsPage.createNewEvent}
          </Button>
        </Link>
      </TabPanel>
    );
  };

  const renderEventCards = () => {
    //TODO
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container-fluid">
      <div className="custom-tab-panel-margin">
        {renderTab()}
        {renderEventCards()}
      </div>
    </div>
  );
};

FutureEventsPage.propTypes = {};

export default FutureEventsPage;

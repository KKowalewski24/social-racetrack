import React from "react";
import propTypes from "prop-types";
import TabPanel from "../../util/tab-panel/TabPanel";
import {PR} from "../../../logic/Helper";
import Button from "@material-ui/core/Button";

export const TabPanelParticipationButtons = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderSingleButton = (handleAction = PR(),
                              buttonContent = PR(), isDisabled = PR()) => {
    return (
      <Button
        onClick={handleAction}
        color="secondary"
        variant="contained"
        className="my-1 mx-1"
        disabled={isDisabled}
      >
        {buttonContent}
      </Button>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <TabPanel>
      {
        renderSingleButton(
          props.handleParticipateEvent,
          props.participateEventButtonContent,
          props.isParticipationImpossible
        )
      }
      {
        renderSingleButton(
          props.handleCancelParticipateEvent,
          props.cancelParticipateEventButtonContent,
          !props.isParticipationImpossible
        )
      }
    </TabPanel
    >
  );
};

TabPanelParticipationButtons.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  handleParticipateEvent: propTypes.func.isRequired,
  participateEventButtonContent: propTypes.string.isRequired,
  handleCancelParticipateEvent: propTypes.func.isRequired,
  cancelParticipateEventButtonContent: propTypes.string.isRequired,
  isParticipationImpossible: propTypes.bool.isRequired,
};

export default TabPanelParticipationButtons;

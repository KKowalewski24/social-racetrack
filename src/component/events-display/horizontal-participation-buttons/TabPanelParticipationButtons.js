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
        color="primary"
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
          props.isAlreadyParticipate
        )
      }
      {
        renderSingleButton(
          props.handleCancelParticipateEvent,
          props.cancelParticipateEventButtonContent,
          !props.isAlreadyParticipate
        )
      }
    </TabPanel
    >
  );
};

/**
 * If user already participate then button for
 * participate is not shown - button for cancel is shown
 */
TabPanelParticipationButtons.propTypes = {
  panelBackgroundColor: propTypes.string.isRequired,
  handleParticipateEvent: propTypes.func.isRequired,
  participateEventButtonContent: propTypes.string.isRequired,
  handleCancelParticipateEvent: propTypes.func.isRequired,
  cancelParticipateEventButtonContent: propTypes.string.isRequired,
  isAlreadyParticipate: propTypes.bool.isRequired,
};

export default TabPanelParticipationButtons;

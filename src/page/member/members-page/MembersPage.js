import React, {useEffect, useState} from "react";
import strings from "../../../config/constant/string-constants";
import {PATH_HOME, PATH_MEMBER_DETAILS} from "../../../config/constant/path-constants";
import {MemberDatabaseController} from "../../../logic/controller/model/MemberDatabaseController";
import {checkIfContains} from "../../../logic/Helper";
import SearchBox from "../../../component/util/search-box/SearchBox";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import MemberCard from "../../../component/rest/card/member-card/MemberCard";
import {getCardGridStyles} from "../../../component/rest/card/CardHelper";
import {errorNotification} from "../../../component/util/notification/notification";
import GlobalStyles from "../../../main/GlobalStyles";
import "../../../index.css";

export const MembersPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [membersArray, setMembersArray] = useState(undefined);
  const [filteredMembersArray, setFilteredMembersArray] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const memberDatabaseController = new MemberDatabaseController();
  const globalStyles = GlobalStyles();

  useEffect(() => {
    memberDatabaseController.readAllMembers(
      () => errorNotification(strings.membersPage.memberLoadingError)
    )
      .then((members) => {
        setMembersArray(members);
        setFilteredMembersArray(members);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSearchBox = () => {

    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();

      const resultArray = [];
      membersArray && membersArray.forEach((it) => {
        if (checkIfContains(it.firstName, query)
          || checkIfContains(it.lastName, query)
          || checkIfContains(it.country, query)
          || checkIfContains(it.city, query)) {
          resultArray.push(it);
        }
      });

      setFilteredMembersArray(resultArray);
    };

    return (
      <SearchBox
        label={strings.membersPage.searchMember}
        handleChange={handleSearch}
      />
    );
  };

  const renderMemberCards = () => {

    const cardPropertiesKeysArray = [
      strings.membersPage.cardPropertiesKeysCountry,
      strings.membersPage.cardPropertiesKeysCity
    ];

    return filteredMembersArray
      && filteredMembersArray.map((it, index) => {
        return (
          <MemberCard
            key={index}
            gridStyles={getCardGridStyles()}
            redirectPath={PATH_MEMBER_DETAILS}
            titleStyles={globalStyles.materialBlueFont}
            memberObject={it}
            memberPropertiesKeysArray={cardPropertiesKeysArray}
          />
        );
      });

  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <FetchDataController
      isLoaded={isLoaded}
      isError={isError}
      errorMessageTitle={""}
      errorMessageDescription={strings.membersPage.memberLoadingError}
      errorMessageRedirectPath={PATH_HOME}
      errorMessageRedirectDescription={strings.membersPage.backHomePage}
      errorMessageStyles={globalStyles.materialBlueFont}
    >
      <div className="container-fluid">
        <div className="custom-tab-panel-margin">
          <div className="container custom-container-sm">
            <div className="row custom-search-box-margin">
              {renderSearchBox()}
            </div>
          </div>

          <div className="row justify-content-center custom-render-card-margin">
            {renderMemberCards()}
          </div>
        </div>
      </div>
    </FetchDataController>
  );
};

MembersPage.propTypes = {};

export default MembersPage;

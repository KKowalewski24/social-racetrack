import {MembersDatabaseController} from "./model/MembersDatabaseController";
import {PR} from "../Helper";
import config from "../../config/config";

export class AccountController {

  /*------------------------ FIELDS REGION ------------------------*/
  _userDatabaseController = new MembersDatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  registerUser = (firstName = PR(), lastName = PR(),
                  email = PR(), password = PR(),
                  country = PR(), city = PR(),
                  birthDate = PR(),
                  verificationEmailErrorFunction = PR(),
                  createUserErrorFunction = PR()) => {
    config.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //TODO CHECK IF ADDING USERS TO DB WORKS WELL
        this._userDatabaseController.createMember(firstName, lastName, email, country, city, birthDate);
        config.auth()
          .currentUser
          .sendEmailVerification()
          .catch((error) => {
            verificationEmailErrorFunction();
          });
      })
      .catch((error) => {
        createUserErrorFunction();
      });
  };

  loginUser = (email, password, wrongCredentialsErrorFunction) => {
    config.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        wrongCredentialsErrorFunction();
      });
  };

  logoutUser = () => {
    config.auth()
      .signOut()
      .catch((error) => {

      });
  };

  resetUserPassword = (email = PR(), resetUserPasswordErrorFunction = PR()) => {
    config.auth()
      .sendPasswordResetEmail(email)
      .catch((error) => {
        resetUserPasswordErrorFunction();
      });
  };

  deleteAccount = (deleteAccountErrorFunction) => {
    config.auth()
      .currentUser
      .delete()
      .catch((error) => {
        deleteAccountErrorFunction();
      });
  };
}

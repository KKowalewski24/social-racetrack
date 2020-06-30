import config from "../../config/config";
import {PR} from "../Helper";
import {UserDatabaseController} from "./model/UserDatabaseController";

export class AccountController {

  /*------------------------ FIELDS REGION ------------------------*/
  userDatabaseController = new UserDatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  registerUser = (firstName = PR(), lastName = PR(),
                  email = PR(), password = PR(),
                  verificationEmailErrorFunction = PR(),
                  createUserErrorFunction = PR()) => {
    config.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.userDatabaseController.createUser(firstName, lastName, email, password);
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

  changeUserEmail = () => {
//TODO
  };

  resetUserPassword = (email = PR(), resetUserPasswordErrorFunction = PR()) => {
    config.auth()
      .sendPasswordResetEmail(email)
      .catch((error) => {
        resetUserPasswordErrorFunction();
      });
  };
}

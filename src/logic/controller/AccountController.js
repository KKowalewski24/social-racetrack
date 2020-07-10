import {MembersDatabaseController} from "./model/MembersDatabaseController";
import {PR} from "../Helper";
import config from "../../config/config";
import {grantStandardUser} from "../CloudFunctions";
import strings from "../../config/constant/string-constants";

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

        grantStandardUser({email: email})
          .then((result) => console.log(result))
          .catch((error) => createUserErrorFunction());

        //TODO CHECK IF ADDING USERS TO DB WORKS WELL
        this._userDatabaseController.createMember(firstName, lastName, email, country, city, birthDate);

        config.auth()
          .currentUser
          .sendEmailVerification()
          .catch(() => verificationEmailErrorFunction());

        setTimeout(() => {
          alert(strings.app.haveToLogout);
          this.logoutUser();
        }, 1000);

      })
      .catch(() => createUserErrorFunction());
  };

  loginUser = (email = PR(), password = PR(), wrongCredentialsErrorFunction = PR()) => {
    config.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => wrongCredentialsErrorFunction());
  };

  logoutUser = () => {
    config.auth()
      .signOut()
      .catch(() => {
      });
  };

  resetUserPassword = (email = PR(), resetUserPasswordErrorFunction = PR()) => {
    config.auth()
      .sendPasswordResetEmail(email)
      .catch(() => resetUserPasswordErrorFunction());
  };

  deleteAccount = (deleteAccountErrorFunction = PR()) => {
    config.auth()
      .currentUser
      .delete()
      .catch(() => deleteAccountErrorFunction());
  };
}

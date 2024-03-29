import {MemberDatabaseController} from "./model/MemberDatabaseController";
import {PR, reloadPage} from "../Helper";
import config from "../../config/config";
import {grantStandardUser} from "../CloudFunctions";
import strings from "../../config/constant/string-constants";
import {Member} from "../model/person/Member";

export class AccountController {

  /*------------------------ FIELDS REGION ------------------------*/
  _memberDatabaseController = new MemberDatabaseController();

  /*------------------------ METHODS REGION ------------------------*/
  registerUser = (firstName = PR(), lastName = PR(),
                  email = PR(), password = PR(),
                  country = PR(), city = PR(),
                  birthDate = PR(), history = PR(),
                  verificationEmailErrorFunction = PR(),
                  createUserErrorFunction = PR()) => {
    config.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {

        grantStandardUser({email: email})
          .then((result) => console.log(result))
          .catch((error) => createUserErrorFunction());

        this._memberDatabaseController.createMember(
          new Member(
            result.user.uid, firstName, lastName, birthDate, country, city, email, [], [], []
          ),
          createUserErrorFunction
        );

        config.auth()
          .currentUser
          .sendEmailVerification()
          .catch(() => verificationEmailErrorFunction());

        setTimeout(() => {
          alert(strings.app.haveToLogout);
          this.logoutUser();
        }, 1000);

      }).catch(() => {
      createUserErrorFunction();
      reloadPage(history);
    });
  };

  loginUser = (email = PR(), password = PR(),
               history = PR(), wrongCredentialsErrorFunction = PR()) => {
    config.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        wrongCredentialsErrorFunction();
        reloadPage(history);
      });
  };

  logoutUser = () => {
    config.auth()
      .signOut()
      .catch(() => {
      });
  };

  resetUserPassword = (email = PR(), history = PR(),
                       resetUserPasswordErrorFunction = PR()) => {
    config.auth()
      .sendPasswordResetEmail(email)
      .catch(() => {
        resetUserPasswordErrorFunction();
        reloadPage(history);
      });
  };
}

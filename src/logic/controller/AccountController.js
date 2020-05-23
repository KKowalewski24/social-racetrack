import config from "../../config/config";
import {PR} from "../Helper";
import {createUser} from "./model/UserDatabaseController";

export const registerUser = (firstName = PR(), lastName = PR(),
                             email = PR(), password = PR(),
                             verificationEmailErrorFunction = PR(),
                             createUserErrorFunction = PR()) => {
  config.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      createUser(firstName, lastName, email, password);
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

export const loginUser = (email, password, wrongCredentialsErrorFunction) => {
  config.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      wrongCredentialsErrorFunction();
    });
};

export const logoutUser = () => {
  config.auth()
    .signOut()
    .catch((error) => {

    });
};

export const changeUserEmail = () => {
//TODO
};

export const resetUserPassword = (email = PR(),
                                  resetUserPasswordErrorFunction = PR()) => {
  config.auth()
    .sendPasswordResetEmail(email)
    .catch((error) => {
      resetUserPasswordErrorFunction();
    });
};

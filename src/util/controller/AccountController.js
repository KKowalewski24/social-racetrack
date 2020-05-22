import config from "../../config/config";
import {PR} from "../Helper";
import {Person} from "../../model/person/Person";
import {createData} from "./DatabaseController";
import {EmailNotVerifiedError} from "../../logic/exception/auth/EmailNotVerifiedError";
import WrongCredentialsError from "../../logic/exception/auth/WrongCredentialsError";
import VerificationEmailError from "../../logic/exception/auth/VerificationEmailError";
import CreateUserError from "../../logic/exception/auth/CreateUserError";
import LogOutError from "../../logic/exception/auth/LogOutError";
import ResetUserPasswordError from "../../logic/exception/auth/ResetUserPasswordError";

export const registerUser = (firstName = PR(), lastName = PR(), email = PR(), password = PR()) => {

  const person = new Person(firstName, lastName);

  config.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      createData(person);

      config.auth()
        .currentUser
        .sendEmailVerification()
        .catch((error) => {
          throw new VerificationEmailError(error);
        });
    })
    .catch((error) => {
      throw new CreateUserError(error);
    });
};

export const loginUser = (email = PR(), password = PR()) => {

  //TODO CHECK IF WORKS WELL
  // config.auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then(() => {
  //     if (!(!!(config.auth().currentUser && config.auth().currentUser.emailVerified))) {
  //       logoutUser();
  //       throw new EmailNotVerifiedError();
  //     }
  //   })
  //   .catch((error) => {
  //     alert(error);
  //     throw new WrongCredentialsError();
  //   });
};

export const logoutUser = () => {
  config.auth()
    .signOut()
    .catch((error) => {
      throw new LogOutError(error);
    });
};

export const changeUserEmail = () => {
//TODO
};

export const resetUserPassword = (email = PR()) => {
  config.auth()
    .sendPasswordResetEmail(email)
    .catch((error) => {
      throw new ResetUserPasswordError(error);
    });
};

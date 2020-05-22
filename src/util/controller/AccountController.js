import config from "../../config/config";
import {PR} from "../Helper";
import {Person} from "../../model/person/Person";
import {createData} from "./DatabaseController";

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
          console.log(error);
          alert(error);
        });
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

export const loginUser = (email = PR(), password = PR()) => {
  config.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

export const logoutUser = () => {
  config.auth()
    .signOut()
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

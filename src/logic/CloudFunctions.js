import config from "../config/config";
import {
  CLOUD_FUNCTIONS_GRANT_ADMIN,
  CLOUD_FUNCTIONS_GRANT_STANDARD_USER
} from "../config/constant/firebase-constants";

export const grantStandardUser = config
  .functions()
  .httpsCallable(CLOUD_FUNCTIONS_GRANT_STANDARD_USER);

export const grantAdmin = config
  .functions()
  .httpsCallable(CLOUD_FUNCTIONS_GRANT_ADMIN);

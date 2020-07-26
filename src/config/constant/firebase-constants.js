export const CLOUD_FUNCTIONS_GRANT_ADMIN = "grantAdmin";
export const CLOUD_FUNCTIONS_GRANT_STANDARD_USER = "grantStandardUser";

export const METADATA_IMAGE = {
  contentType: "image/",
};

const SLASH = "/";

const RACETRACK_IMAGE = "racetrack-image";
const EVENTS = "events";
const MEMBERS = "members";
const RACETRACKS = "racetracks";

export const PATH_STORAGE_RACETRACK_IMAGE = SLASH + RACETRACK_IMAGE + SLASH;
export const PATH_DB_COLLECTION_EVENTS = SLASH + EVENTS + SLASH;
export const PATH_DB_COLLECTION_MEMBERS = SLASH + MEMBERS + SLASH;
export const PATH_DB_COLLECTION_RACETRACKS = SLASH + RACETRACKS + SLASH;

export const QUERY_OPERATOR_LESS = "<";
export const QUERY_OPERATOR_LESS_EQUAL = "<=";
export const QUERY_OPERATOR_EQUAL = "==";
export const QUERY_OPERATOR_GREATER_EQUAL = ">=";
export const QUERY_OPERATOR_GREATER = ">";
export const QUERY_OPERATOR_ARRAY_CONTAINS = "array-contains";

export const QUERY_FIELD_ID = "id";
export const QUERY_FIELD_EVENT_MODEL_RACETRACK_REF_PATH = "racetrackRefPath";
export const QUERY_FIELD_EVENT_MODEL_EVENT_REF_PATH_ARRAY = "eventsRefPathArray";

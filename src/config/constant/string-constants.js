// TODO ALL STRING CONSTANTS SHOULD BE HERE
export const strings = {
  app: {
    title: "Social Racetrack",
    logOutFailed: "Logout failed",
    createEvent: "Create Event",
    futureEvents: "Future Events",
    pastEvents: "Past Events",
    racetracks: "Racetracks",
    members: "Members",
    adminPanel: "Admin Panel",
    haveToLogout: "You have to logout",
  },
  type: {
    carType: {
      raceCar: "Race car",
      rallyCar: "Rally car",
    },
    driveTrainType: {
      fwd: "FWD",
      rwd: "RWD",
      awd: "AWD"
    },
    engineType: {
      inlineThree: "Inline Three",
      inlineFour: "Inline Four",
      inlineFive: "Inline Five",
      straightFour: "Straight Four",
      straightSix: "Straight Six",
      flatFour: "Flat Four",
      flatSix: "Flat Six",
      V6: "V6",
      V8: "V8",
      V10: "V10",
      V12: "V12",
    },
  },
  accountPage: {
    country: "Country",
    city: "City",
    birthDate: "Birth Date",
    email: "Email",
    lastLogin: "Last Login",
    joinDate: "Join Date",
    cars: "Cars",
    brand: "Brand",
    model: "Model",
    productionYear: "Year",
    mileageInKilometers: "Mileage[km]",
    carType: "Type",
    engineType: "Engine",
    enginePowerInHorsepower: "Power[hp]",
    driveTrainType: "Drive",
    awards: "Awards",
    description: "Description",
    year: "Year",
    add: "Add",
    remove: "Remove",
    car: "Car",
    award: "Award",
    or: "or",
    accountLoadingError: "An error occurred while loading data",
    backHomePage: "Go back to home page",
    deleteAccount: "Delete Account",
    deleteAccountError: "User account has not been deleted!",
  },
  accountSettingsPage: {
    editUser: "Edit User Data",
    add: "Add",
    car: "Car",
    award: "Award",
    firstName: "First Name",
    lastName: "Last Name",
    country: "Country",
    city: "City",
    brand: "Brand",
    model: "Model",
    productionYear: "Production Year",
    mileageInKilometers: "Mileage [km]",
    carType: "Car Type",
    engineType: "Engine Type",
    enginePowerInHorsepower: "Engine Power [hp]",
    driveTrainType: "Drive Train Type",
    description: "Description",
    year: "Year",
    confirm: "Confirm",
    inputWarningInfo: "All fields are required",
    accountLoadingError: "An error occurred while loading data",
    itemNotAdded: "Item has not been added",
    itemNotDeleted: "Item has not been deleted",
    userDataNotUpdated: "User data has not been updated",
  },
  adminPanelPage: {
    grantAdminStatus: "Grant Admin Status",
    emailAddress: "Email Address",
    confirm: "Confirm",
    inputWarningInfo: "All fields are required",
    grantAdminError: "User has not been granted to admin!",
  },
  loginPage: {
    emailNotVerified: "Email has not been verified yet!",
    wrongEmailPassword: "Wrong email or password",
    inputWarningInfo: "All fields are required",
    signIn: "Sign in",
    emailAddress: "Email Address",
    password: "Password",
    forgotPassword: "Forgot password?",
    dontHaveAccount: "Don't have an account? Sign Up",
  },
  registerPage: {
    verificationEmailNotSent: "Verification email has not been sent!",
    userAccountNotCreated: "User account has not been created!",
    inputWarningInfo: "All fields are required and password should have at least 6 characters",
    signUp: "Sign up",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    password: "Password",
    country: "Country",
    city: "City",
    birthDate: "Birth Date",
    alreadyHaveAccount: "Already have an account? Sign in",
  },
  resetPasswordPage: {
    checkEmailCorrect: "Check if email is correct",
    inputWarningInfo: "All fields are required",
    resetPassword: "Reset password",
    emailAddress: "Email Address",
    sendEmail: "Send email",
  },
  createEventPage: {
    eventName: "Event Name",
    date: "Date",
    time: "Time",
    racetrack: "Racetrack",
    inputWarningInfo: "All fields are required",
    confirm: "Confirm",
    eventNotSavedError: "Event has not been saved!",
    racetrackLoadingError: "An error occurred while loading racetrack data",
    backFutureEventsPage: "Go back to future events page",
  },
  eventsPage: {
    futureEventsPage: {
      createNewEvent: "Create New Event",
    },
    pastEventsPage: {
      //
    },
  },
  eventDetailsPage: {
    //
  },
  homePage: {
    socialRacetrack: "Social Racetrack",
    siteIntroFirst: "helps people exchange information between sports car enthusiasts.",
    siteIntroSecond: "Our foundation firmly believes that everyone should have access to a free " +
      "social networking site dedicated to sports car lovers that provides " +
      "full data privacy and security.",
    registerLoginDescription: "Register or Login!",
    fastAndEasy: "It is fast and easy",
    registerNow: "Register Now!",
    loginNow: "Login Now!",
    dontHaveAccount: "Don't have an account? Sign Up",
    alreadyHaveAccount: "Already have an account? Sign in",

  },
  membersPage: {
    searchMember: "Search Member",
    cardPropertiesKeysCountry: "Country",
    cardPropertiesKeysCity: "City",
    memberLoadingError: "An error occurred while loading data",
    backHomePage: "Go back to home page",
  },
  memberDetailsPage: {
    memberLoadingError: "An error occurred while loading data",
    backMembersPage: "Go back to members page",
  },
  createRacetrackPage: {
    inputWarningInfo: "All fields are required",
    imageWarningInfo: "Image is required",
    imageNotSavedError: "Image has not been saved!",
    racetrackNotSavedError: "Racetrack has not been saved!",
    name: "Name",
    country: "Country",
    city: "City",
    lengthInMeters: "Length [m]",
    turnsNumber: "Number of Turns",
    maximumExhaustLoudnessInDecibels: "Max Exhaust Loudness [dB]",
    minimumRideHeightInMillimeters: "Min Ride Height [mm]",
    description: "Description",
    imageUrl: "Image URL",
    imageDropZone: "Drag and drop an racetrack image or click",
    confirm: "Confirm",
  },
  racetracksPage: {
    addNewRacetrack: "Add New Racetrack",
    searchRacetrack: "Search Racetrack",
    cardPropertiesKeysCountry: "Country",
    cardPropertiesKeysCity: "City",
    cardPropertiesKeysLengthInMeters: "Length [m]",
    racetrackLoadingError: "An error occurred while loading data",
    backHomePage: "Go back to home page",
  },
  racetrackDetailsPage: {
    name: "Name",
    country: "Country",
    city: "City",
    lengthInMeters: "Length [m]",
    turnsNumber: "Number of Turns",
    maximumExhaustLoudnessInDecibels: "Max Exhaust Loudness [dB]",
    minimumRideHeightInMillimeters: "Min Ride Height [mm]",
    description: "Description",
    deleteRacetrack: "Delete Racetrack",
    deleteRacetrackError: "Racetrack has not been deleted!",
    racetrackLoadingError: "An error occurred while loading data",
    backRacetracksPage: "Go back to racetracks page",
  },
  errorPage: {
    title: "404",
    message: "Page Not Found",
    redirectMessage: "Go back to home page",
  }
};

export default strings;

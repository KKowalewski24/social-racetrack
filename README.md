# Bachelor of Science Thesis

## Storage
#### [Firebase Hosting Deployed Project](https://social-racetrack.web.app/)
#### [Google Drive Report](https://drive.google.com/open?id=1QU418ihDzM2fBo6UxbA8GqxavGlbpZGK)

### Required Software
* Node.js
* Yarn 
* Browser (eg. Chrome, Firefox)

## Run Social-Racetrack in Development Mode
* Download source code
* In project main directory run `yarn install` and then run `yarn start` and wait till the development server will start up
* Open selected browser and open `localhost:3000`

## Firebase Backend Installation Process

#### Firebase Console 
* Go to `https://console.firebase.google.com/`
* Login or create Google account
* Create new project and set its name

#### Local Machine
* Go to project main directory and run `yarn install`
* Go to `functions` directory and run `npm install`
* Go back to project main directory
* Run below commands
```
npm install -g firebase-tools
firebase login
``` 

#### Project credentials 
* Go to settings -> General -> At the bottom of page choose config and then fill .env file 
with data with proper order

#### Deploy Authentication Rules
* There is no way to store Authentication Rules on local machine so there is need to do as it is written below
* Go to Authentication tab then choose Sign-in method and enable Email/Password authentication

#### Deploy Database Rules
* Run below command to deploy rules
```
firebase deploy --only firestore:rules
```
OR use preconfigured script
```
yarn fb:db
```

#### Deploy Storage Rules
* Run below command to deploy rules
```
firebase deploy --only storage:rules
```
OR use preconfigured script
```
yarn fb:stor
```

#### Deploy Cloud Functions
```
firebase deploy --only functions
```
OR use preconfigured script
```
yarn fb:fun
```

###### Important message
* Before next deployment remember to remove previous Cloud Function
* Remember that Deployment of Node.js 8 functions will no longer be allowed after 
February 15, 2021. Then, executions of already-deployed Node.js 8 functions 
will stop after March 15, 2021.
* Node.js 10 cloud functions require payments so finish BSC at the beginning of February

###### Creating first admin user
In exports.grantAdmin function comment out this parts of code
```
    if (context.auth?.token.admin !== true) {
        return {
            error: "Request Not Authorizated - Only admin can call this function"
        }
    }
```
```
    if (user.customClaims && (user.customClaims as any).admin === true) {
        return;
    }
```
Then 
* Delete old cloud functions
* Redeploy cloud functions
* In `AccountController` change
```
        grantStandardUser({email: email})
          .then((result) => console.log(result))
          .catch((error) => createUserErrorFunction());
```
To
```
    grantAdmin({email: email})
      .then((result) => console.log(result))
      .catch((error) => errorNotification(strings.adminPanelPage.grantAdminError));
```
* Create Account as always
* Then revert all changes in code, delete and redeploy cloud functions

#### Deploy to Firebase Hosting
* Run below command
```
yarn install
```
* Then run
```
yarn build
firebase deploy --only hosting
```
OR use preconfigured script
```
yarn fb:host
```

#### Access levels
Depends on user there are different functionality available
* Guess user(not log in) - Home Page, Racetrack Page, Racetrack Details Page
* Log in user - all functionality except of additionally for admin user
* Admin - all functionality - additionally admin user has possibility 
to create, delete racetrack, admin panel for grant admin user, deleting events

#### Database structure and refPath
DB contains 3 collections
* Racetracks (no refPath)
* Members (refPath to created or joined events)
* Events (refPath to racetrack, creator and people who participate)

Not generic DatabaseController e.g. EventDatabaseController fetch object 
or array of objects from DB and then fetch all refPath objects to have 'full' object
not only references to them 

#### Cascade delete 
* Deleting racetrack also deletes events on this racetrack
* Deleting event also deletes refPath from members who create event or join

#### Logical and legal assumptions
* All legal assumptions are stored in legal-constants.js file
* Member who creates event also participate in this event and he/she cannot 
cancel participation
* Event becomes past exactly one day (24h) before its start datetime
* Deleting member account is not possible

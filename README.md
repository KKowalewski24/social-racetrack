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
* In project main directory `yarn start` and wait till the development server will start up
* Open selected browser and open `localhost:3000`

## Firebase Backend Installation Process

#### Firebase Console 
* Go to `https://console.firebase.google.com/`
* Login or create Google account
* Create new project and set its name

#### Local Machine
* Go to project directory 
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

#### Deploy Storage Rules
* Run below command to deploy rules
```
firebase deploy --only storage
```

#### Deploy Cloud Functions
```
firebase deploy --only functions
```
Important message - before next deployment remember to remove old previous Cloud Function

#### Deploy to Firebase Hosting
* Run below command
```
yarn build
firebase deploy --only hosting
```

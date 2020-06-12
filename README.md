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

## Configuring Firebase Backend 
* Go to `https://console.firebase.google.com/`
* Login or create Google account
* Create new project - set name

#### Project credentials 
* Go to settings -> General -> At the bottom of page choose config and then fill .env file 
with data with proper order

#### Authentication
* Go to Authentication tab then choose Sign-in method and enable Email/Password authentication

#### Database
Rules
```

```

#### Storage
Rules
```

```

#### Hosting
Go to Hosting and do what the instruction shows
* `npm install -g firebase-tools`
* `firebase login`
* `firebase init`
* `firebase deploy`


## Deploy to Firebase Hosting
* Firebase Tools must be install globally `npm install -g firebase-tools`
* You must login `firebase login`
* Go to project directory
* Checkout branch to master `git checkout master`
* Pull changes `git pull`
* Run `yarn build` command
* Run `firebase deploy`

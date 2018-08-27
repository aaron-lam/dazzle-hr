## DazzleHR

<img src="https://lh3.googleusercontent.com/aomHjXLr8v1IbhdlpgCYTCEMtsBH-qe0xkYvrNa5jm_j_Qcl6rXrdwTFGTu5NSc3Eg=s360-rw" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="150" />

DazzleHR allows Human Resources managers to keep up to date on all important employees information straight from their smartphone. Human Resources managers can also text work schedules to employees through Messaging.

## Built With

* [React Native](https://facebook.github.io/react-native/) - one of the most popular hybrid app framework
* [Redux](https://redux.js.org/) - used to manage data flow and application states of the app
* [React Native Router Flux](https://github.com/viccalexander/Chameleon) - a library for resolving hybrid app navigation issue
* [Firebase](https://firebase.google.com/) - used to store user data on the cloud

## Getting Started
This project requires Firebase. Here are the steps to create your own firebase database:

1. Create a new Firebase project at https://console.firebase.google.com/
2. Go to Authetication -> Sign-in methods, enabled the "Email/Password" provider
3. Go to Database -> Rules. Replace the JSON Schema as below: 
```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```
4. After cloning the project, create a new "config.js" file in src folder.
5. Paste your config data in "config.js". Example is shown below:
```
const config = {
  apiKey: "your apiKey",
  authDomain: "your authDomain",
  databaseURL: "your databaseURL",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId"
};
```

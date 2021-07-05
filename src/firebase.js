// import firebase from "firebase/app";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  databaseURL: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
};
firebase.initializeApp(config);

export default firebase;

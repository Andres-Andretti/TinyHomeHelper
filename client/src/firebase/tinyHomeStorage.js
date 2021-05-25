import firebase from 'firebase/app'
import 'firebase/storage'
require("dotenv").config();

let FIREBASE_CONFIG = {
    apiKey: process.env.firebaseAPI,
    authDomain: "tinyhomeuploads.firebaseapp.com",
    projectId: "tinyhomeuploads",
    storageBucket: "tinyhomeuploads.appspot.com",
    messagingSenderId: "908738868846",
    appId: "1:908738868846:web:923969f983025e4fba587f",
    measurementId: "G-9ZFP2P4HDM"
  };


const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
console.log(firebaseApp)
const storage= firebase.storage();


export { storage, firebase as default };
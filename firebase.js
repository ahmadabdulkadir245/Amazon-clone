// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldpGdV_CgtMDJtOOXXmS4p3luexc8HX0",
  authDomain: "facebook-clone-6d601.firebaseapp.com",
  projectId: "facebook-clone-6d601",
  storageBucket: "facebook-clone-6d601.appspot.com",
  messagingSenderId: "744433558533",
  appId: "1:744433558533:web:14f22c871e3b803ec5e86c",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };

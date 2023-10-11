// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjfcO-1zvS7cEQjeu7xSvyljE8NlNqZOc",
  authDomain: "react-rick-and-morty-eeeca.firebaseapp.com",
  projectId: "react-rick-and-morty-eeeca",
  storageBucket: "react-rick-and-morty-eeeca.appspot.com",
  messagingSenderId: "191628497946",
  appId: "1:191628497946:web:308a0c7d41f5e20474ada3",
  measurementId: "G-NKPZKE8YCS"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase;
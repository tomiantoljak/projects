import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAABZPaznfl1SCsvC5Bu_ceDNobl3A04A",
    authDomain: "tinder-clone-1955f.firebaseapp.com",
    projectId: "tinder-clone-1955f",
    storageBucket: "tinder-clone-1955f.appspot.com",
    messagingSenderId: "1031210832402",
    appId: "1:1031210832402:web:80e9c8287b92dc92b07ecb",
    measurementId: "G-Q8CBF5EMHJ"
  };

// initialize firebase – basically connecting it to our files and access to database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;


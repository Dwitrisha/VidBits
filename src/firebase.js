import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi_0v_1eEexKaTDvAUXF5QG6XhsvGnPnw",
    authDomain: "vidbits-88d53.firebaseapp.com",
    projectId: "vidbits-88d53",
    storageBucket: "vidbits-88d53.appspot.com",
    messagingSenderId: "783866251249",
    appId: "1:783866251249:web:8ef2dfc4953a78118da650",
    measurementId: "G-TJ8HXNTDB7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

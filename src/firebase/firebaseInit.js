import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhxNR3vex58uwVtv76hMyp63QPLqiercY",
  authDomain: "mt-invoice-app.firebaseapp.com",
  projectId: "mt-invoice-app",
  storageBucket: "mt-invoice-app.appspot.com",
  messagingSenderId: "1085266184707",
  appId: "1:1085266184707:web:3ae1228b2375e86b719c36"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

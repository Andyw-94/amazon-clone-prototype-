import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMtKvhfqZlO1lh83aIjgES5KQmgtbqNc4",
  authDomain: "clone-56394.firebaseapp.com",
  databaseURL: "https://clone-56394.firebaseio.com",
  projectId: "clone-56394",
  storageBucket: "clone-56394.appspot.com",
  messagingSenderId: "526707809408",
  appId: "1:526707809408:web:ab9a99e78e6c7d463d9a65",
  measurementId: "G-F84J8GNGKT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

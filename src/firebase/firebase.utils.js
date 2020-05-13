import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3KsycmjjYUB4UX9UvaJKuQffpXUgTlrs",
  authDomain: "crown-db-9e3d8.firebaseapp.com",
  databaseURL: "https://crown-db-9e3d8.firebaseio.com",
  projectId: "crown-db-9e3d8",
  storageBucket: "crown-db-9e3d8.appspot.com",
  messagingSenderId: "489792022816",
  appId: "1:489792022816:web:1ef9e8b4744bdd4a368f45",
  measurementId: "G-YMPFCHXHP0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

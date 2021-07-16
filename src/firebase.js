import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn317myoxP9NB_AIHDq7xA1fx4mbPG4F0",
  authDomain: "disney-plus-c250f.firebaseapp.com",
  projectId: "disney-plus-c250f",
  storageBucket: "disney-plus-c250f.appspot.com",
  messagingSenderId: "845000272106",
  appId: "1:845000272106:web:d5080cd71c6467b6948f93",
  measurementId: "G-8LSCN1RP1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

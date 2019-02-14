import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "catchoftheday-rahuls360",
  storageBucket: "",
  messagingSenderId: "810992660213"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

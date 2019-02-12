import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCj5vngYIFeumD29cs1MBQbK1e00EBsZjo",
  authDomain: "catchoftheday-rahuls360.firebaseapp.com",
  databaseURL: "https://catchoftheday-rahuls360.firebaseio.com",
  projectId: "catchoftheday-rahuls360",
  storageBucket: "",
  messagingSenderId: "810992660213"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

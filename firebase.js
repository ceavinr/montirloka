import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoLnZjBJ2RBzZveX8y2ciSuaINgdrNoYk",
  authDomain: "hackfest-bbddb.firebaseapp.com",
  databaseURL: "https://hackfest-bbddb-default-rtdb.firebaseio.com",
  projectId: "hackfest-bbddb",
  storageBucket: "hackfest-bbddb.appspot.com",
  messagingSenderId: "702000794519",
  appId: "1:702000794519:web:c5e5ffb761d513dcae12d2",
  measurementId: "G-PFL9861DQY",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

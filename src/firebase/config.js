import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCODtaU6FppIzfAZqJLNyY7NcNHNPnwm4",
  authDomain: "image-gallery-8d0ec.firebaseapp.com",
  databaseURL: "https://image-gallery-8d0ec.firebaseio.com",
  projectId: "image-gallery-8d0ec",
  storageBucket: "image-gallery-8d0ec.appspot.com",
  messagingSenderId: "394476798961",
  appId: "1:394476798961:web:8b15a141b16d90949aba50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

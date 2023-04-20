// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmPZPpoSQNtL3YqBuTMlQkJJOZtJAIT4M",
  authDomain: "sample-site-7dd28.firebaseapp.com",
  projectId: "sample-site-7dd28",
  storageBucket: "sample-site-7dd28.appspot.com",
  messagingSenderId: "830109998964",
  appId: "1:830109998964:web:94084c64fc1e7328b51621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

initializeApp(firebaseConfig);
export const db = getFirestore()
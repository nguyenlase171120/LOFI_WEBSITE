// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXTsLT2y43HNLO6m3xoQNHgZMzskcWEHY",
  authDomain: "lofi-project-8c724.firebaseapp.com",
  projectId: "lofi-project-8c724",
  storageBucket: "lofi-project-8c724.appspot.com",
  messagingSenderId: "332217014690",
  appId: "1:332217014690:web:ebe7ffae43bedf5b1c7afb",
  measurementId: "G-48SRDXX9J7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

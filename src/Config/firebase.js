// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvrS2oykEIUR9vcfLn6vPgzx222odNJS8",
  authDomain: "advanceweb-a1cdc.firebaseapp.com",
  projectId: "advanceweb-a1cdc",
  storageBucket: "advanceweb-a1cdc.appspot.com",
  messagingSenderId: "244603214215",
  appId: "1:244603214215:web:7f7a0079172a5f35395b22",
  measurementId: "G-YV3EH09VJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export{auth,fs, storage}

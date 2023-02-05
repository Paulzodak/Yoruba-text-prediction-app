// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh1oScjPBO4da-flUYOFGA52120yF3vr4",
  authDomain: "text-42b95.firebaseapp.com",
  projectId: "text-42b95",
  storageBucket: "text-42b95.appspot.com",
  messagingSenderId: "314216231762",
  appId: "1:314216231762:web:4f892284a003eaaf40408b",
  measurementId: "G-3XV89R2K2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

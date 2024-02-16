// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbeVNxcaU46QZPQQytRSokqmzhuG9rp8k",
  authDomain: "netflixgpt-791fb.firebaseapp.com",
  projectId: "netflixgpt-791fb",
  storageBucket: "netflixgpt-791fb.appspot.com",
  messagingSenderId: "275674897002",
  appId: "1:275674897002:web:27a597726b792acc144813",
  measurementId: "G-XERJTYXGND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
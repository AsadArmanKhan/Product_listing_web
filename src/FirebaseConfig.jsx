// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC91eC9X2dzYN6QuiaXLYFqD4qHxssWBYM",
  authDomain: "login-d3aab.firebaseapp.com",
  projectId: "login-d3aab",
  storageBucket: "login-d3aab.firebasestorage.app",
  messagingSenderId: "520056120170",
  appId: "1:520056120170:web:5ed7e838c075babc5cbb13",
  measurementId: "G-QDG9SESLE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
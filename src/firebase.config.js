// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl4V9MyPjWUg_091VtAIrihjrn1DWl9hk",
  authDomain: "assignment-10-6741d.firebaseapp.com",
  projectId: "assignment-10-6741d",
  storageBucket: "assignment-10-6741d.appspot.com",
  messagingSenderId: "874685303090",
  appId: "1:874685303090:web:93fcadf8144ff946636f2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

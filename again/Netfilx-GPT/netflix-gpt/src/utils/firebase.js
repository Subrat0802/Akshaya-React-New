// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv-sfM3wLmgZGLJ9ReBvZiYI6c_oyp31A",
  authDomain: "netflixgpt-f726b.firebaseapp.com",
  projectId: "netflixgpt-f726b",
  storageBucket: "netflixgpt-f726b.appspot.com",
  messagingSenderId: "287128964423",
  appId: "1:287128964423:web:9f1f0eebb18f4f9780d062",
  measurementId: "G-M2WRKKR1T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
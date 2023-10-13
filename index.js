// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkBEYi9H66x5JuR8VZg36_mEn6OaaqU4U",
  authDomain: "test-6608c.firebaseapp.com",
  projectId: "test-6608c",
  storageBucket: "test-6608c.appspot.com",
  messagingSenderId: "867603097420",
  appId: "1:867603097420:web:d18b1444409dcbb4cb91e9",
  measurementId: "G-7X6LYQSYX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
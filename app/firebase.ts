// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEM0DQ7Vkdb0XdCA-afCpKVQ2RZaBiyVo",
  authDomain: "swiggy-clo-de4c3.firebaseapp.com",
  projectId: "swiggy-clo-de4c3",
  storageBucket: "swiggy-clo-de4c3.appspot.com",
  messagingSenderId: "928693271459",
  appId: "1:928693271459:web:c0ad07a904f0fb074c7816",
  measurementId: "G-M7VFH7XF56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

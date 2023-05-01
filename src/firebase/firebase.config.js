// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtgdRShr8lPrf2WCpJB2Tl9JWFyiCqF4s",
  authDomain: "recipe-and-riot.firebaseapp.com",
  projectId: "recipe-and-riot",
  storageBucket: "recipe-and-riot.appspot.com",
  messagingSenderId: "55547092703",
  appId: "1:55547092703:web:520ce82e381c183483d36a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

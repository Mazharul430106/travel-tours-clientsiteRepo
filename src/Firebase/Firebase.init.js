// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdXUBpobSReuq8-I0qMhE623eKgZkHad0",
  authDomain: "travel-tours-website.firebaseapp.com",
  projectId: "travel-tours-website",
  storageBucket: "travel-tours-website.appspot.com",
  messagingSenderId: "869790799862",
  appId: "1:869790799862:web:84fdb75c4b9dcfc35c19d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
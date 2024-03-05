// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "vault-app-c2870.firebaseapp.com",
  projectId: "vault-app-c2870",
  storageBucket: "vault-app-c2870.appspot.com",
  messagingSenderId: "68659366598",
  appId: "1:68659366598:web:221f56d5f0fadd2c55e5c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
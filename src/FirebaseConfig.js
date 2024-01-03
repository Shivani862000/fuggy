// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `" ${process.env.API}"`,
  authDomain: "fuggy-1e731.firebaseapp.com",
  projectId: "fuggy-1e731",
  storageBucket: "fuggy-1e731.appspot.com",
  messagingSenderId: "355356254606",
  appId: "1:355356254606:web:c21e18a6a7f844e7e884df",
  measurementId: "G-0S3ZXWLBLJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)

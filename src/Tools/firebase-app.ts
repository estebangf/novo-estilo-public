// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TESTING?
export const firebaseConfig = !true ? {
  apiKey: "AIzaSyDE2XJKDipZ5jjLyt4dMnQrlOzb6i60tr4",
  authDomain: "testing-e6f9f.firebaseapp.com",
  projectId: "testing-e6f9f",
  storageBucket: "testing-e6f9f.appspot.com",
  messagingSenderId: "694151712714",
  appId: "1:694151712714:web:e22874f8f61f9722854933",
  measurementId: "G-PRS16VPQFB"
} : {
  apiKey: "AIzaSyB_vOAPzcJBCk5UzjSGivwOQD9Ul5XOg-I",
  authDomain: "novo-estilo-app.firebaseapp.com",
  projectId: "novo-estilo-app",
  storageBucket: "novo-estilo-app.appspot.com",
  messagingSenderId: "767594572823",
  appId: "1:767594572823:web:37073295325b10479d8052",
  measurementId: "G-ZDFNSVB70F"
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgWTog9ZQPCSxRs3qgjKqXapc9GfH7_F4",
  authDomain: "firestore-2821a.firebaseapp.com",
  projectId: "firestore-2821a",
  storageBucket: "firestore-2821a.firebasestorage.app",
  messagingSenderId: "525076232407",
  appId: "1:525076232407:web:6668930bef24e573c15892",
  measurementId: "G-T58Y468M0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
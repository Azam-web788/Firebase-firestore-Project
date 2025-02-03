
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7sYJVABzTaT0sGp_Jbk8b8FFu2aPJIdE",
  authDomain: "firestore-c1495.firebaseapp.com",
  projectId: "firestore-c1495",
  storageBucket: "firestore-c1495.firebasestorage.app",
  messagingSenderId: "466207389273",
  appId: "1:466207389273:web:f947343ca6296fa0792348",
  measurementId: "G-MDKHGVGE9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

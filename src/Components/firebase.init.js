// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxn3dQp6B6WwrC_IxE4qA9yms7G9XsOzc",
  authDomain: "assingtment-11.firebaseapp.com",
  projectId: "assingtment-11",
  storageBucket: "assingtment-11.appspot.com",
  messagingSenderId: "458939184917",
  appId: "1:458939184917:web:8a14f51eac135f081bdb1c",
  measurementId: "G-C3V6FQ89C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
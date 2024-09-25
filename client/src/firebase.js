// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-75d34.firebaseapp.com",
  projectId: "mern-state-75d34",
  storageBucket: "mern-state-75d34.appspot.com",
  messagingSenderId: "905762066615",
  appId: "1:905762066615:web:7dc19d4f409c8dff773d32"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wVuFHWr6pHvJoTasjy_GpVA2OKfmUGM",
  authDomain: "visa-ease-1621f.firebaseapp.com",
  projectId: "visa-ease-1621f",
  storageBucket: "visa-ease-1621f.firebasestorage.app",
  messagingSenderId: "449398920729",
  appId: "1:449398920729:web:fceda484581cdff0e3bc88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

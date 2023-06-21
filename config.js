// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-QCx3Ycsd9fpGAHt-PBUkikITbjXH-Bg",
  authDomain: "e-library-8cf3a.firebaseapp.com",
  projectId: "e-library-8cf3a",
  storageBucket: "e-library-8cf3a.appspot.com",
  messagingSenderId: "872028053399",
  appId: "1:872028053399:web:2154fc22f37994beea2ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app)
export default db;

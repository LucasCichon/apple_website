// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GbH04X8J3Hn-L847y8J5NStWP_AHv2w",
  authDomain: "apple-website-763e2.firebaseapp.com",
  projectId: "apple-website-763e2",
  storageBucket: "apple-website-763e2.appspot.com",
  messagingSenderId: "426393953686",
  appId: "1:426393953686:web:1e52e19858569a876fe9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqt8dqvLobz24mendQa700arTWn3G8Yt4",
  authDomain: "nearby-acc18.firebaseapp.com",
  projectId: "nearby-acc18",
  storageBucket: "nearby-acc18.appspot.com",
  messagingSenderId: "806435048338",
  appId: "1:806435048338:web:521010d48c95aab0d18f4b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };

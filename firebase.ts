// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// See https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configure environment variables
// Is this necessary? Do the 3 things really need to be hidden?
import dotenv from "dotenv";
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig: any = {
  apiKey: process.env.API_KEY,
  authDomain: "headstarter-pantry-tracker.firebaseapp.com",
  projectId: "headstarter-pantry-tracker",
  storageBucket: "headstarter-pantry-tracker.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app: any = initializeApp(firebaseConfig);
const firestore: any = getFirestore(app);

// Exoprt Firebase app and configuration
export { firebaseConfig, app, firestore };
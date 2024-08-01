// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Configure environment variables
import "dotenv/config";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "headstarter-pantry-tracker.firebaseapp.com",
  projectId: "headstarter-pantry-tracker",
  storageBucket: "headstarter-pantry-tracker.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(app);

// Export Firebase app and configuration
export { firebaseConfig, app, firestore };
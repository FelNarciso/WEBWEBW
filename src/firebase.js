import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWENR18PMKVpXrEMmW15qNlL1Z7bn5HlI",
  authDomain: "ecom-f0853.firebaseapp.com",
  projectId: "ecom-f0853",
  storageBucket: "ecom-f0853.appspot.com",
  messagingSenderId: "151432078356",
  appId: "1:151432078356:web:61f9b2047a722931da3301" // Make sure this is correct!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // Export both auth and db
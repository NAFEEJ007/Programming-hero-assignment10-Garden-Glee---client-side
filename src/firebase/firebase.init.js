// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC02DARUle-pQaqC-oM9Y8sdWCJrB-gZ58",
  authDomain: "garden-glee.firebaseapp.com",
  projectId: "garden-glee",
  storageBucket: "garden-glee.firebasestorage.app",
  messagingSenderId: "852931948098",
  appId: "1:852931948098:web:a9c08fdbeb7d350396c7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOGm1_hfDf-3MCks25bFmo0mi4paBy0Ac",
  authDomain: "moviefaves-ebad5.firebaseapp.com",
  projectId: "moviefaves-ebad5",
  storageBucket: "moviefaves-ebad5.appspot.com",
  messagingSenderId: "845218286679",
  appId: "1:845218286679:web:b3e3078aa815c4a237e712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;
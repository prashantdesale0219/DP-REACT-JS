// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-rZZH7VxjkauJh3iWdFlPzxHVZXj7RI",
  authDomain: "dp-react-projects.firebaseapp.com",
  projectId: "dp-react-projects",
  storageBucket: "dp-react-projects.appspot.com",
  messagingSenderId: "821680612552",
  appId: "1:821680612552:web:9e65cd2d232356807eb1fd",
  measurementId: "G-KBKKV59Y0W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
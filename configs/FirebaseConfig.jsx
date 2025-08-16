// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "logo-maker-9bd46.firebaseapp.com",
  projectId: "logo-maker-9bd46",
  storageBucket: "logo-maker-9bd46.firebasestorage.app",
  messagingSenderId: "700031985044",
  appId: "1:700031985044:web:292ec6fc99074f1c599b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);

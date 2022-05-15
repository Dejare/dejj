// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFylUkDHZ3SUOX_nkB4ocurtKnOuzHn-g",
  authDomain: "roomie-d9955.firebaseapp.com",
  projectId: "roomie-d9955",
  storageBucket: "roomie-d9955.appspot.com",
  messagingSenderId: "538123839979",
  appId: "1:538123839979:web:dc692c6473c065c14e11ae",
  measurementId: "G-DRXE2MK6J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPoBqwcYfHLuPEMm2ROtr-EG37SjZKyuU",
  authDomain: "nextjslandingpage-dd392.firebaseapp.com",
  projectId: "nextjslandingpage-dd392",
  storageBucket: "nextjslandingpage-dd392.appspot.com",
  messagingSenderId: "751496263393",
  appId: "1:751496263393:web:1e91e1303504a5cd1429a0",
  measurementId: "G-85F3EPGB7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

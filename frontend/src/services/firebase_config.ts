// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUOaemAWIXCEWRPjvjVVwRVBmC4tsx4Y",
  authDomain: "ollivandersstore-37313.firebaseapp.com",
  projectId: "ollivandersstore-37313",
  storageBucket: "ollivandersstore-37313.appspot.com",
  messagingSenderId: "989951115223",
  appId: "1:989951115223:web:590deca7645f0ec9885592",
  measurementId: "G-M8HTBSZJVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

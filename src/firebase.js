// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpOljMZxXUMJBqMEvAL3UIzxf_6dOpzpE",
  authDomain: "fashion-store-auth-763df.firebaseapp.com",
  projectId: "fashion-store-auth-763df",
  storageBucket: "fashion-store-auth-763df.firebasestorage.app",
  messagingSenderId: "735621897850",
  appId: "1:735621897850:web:4b8d4059d42fe7a11fe5c3",
  measurementId: "G-C3745NSDHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
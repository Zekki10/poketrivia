// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcEfrJBNseGqXcgKVpxc4pUF5q-qqy7DI",
  authDomain: "poketrivia-3039f.firebaseapp.com",
  projectId: "poketrivia-3039f",
  storageBucket: "poketrivia-3039f.appspot.com",
  messagingSenderId: "173890191806",
  appId: "1:173890191806:web:2d9249f0fbbf818cb5b9ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
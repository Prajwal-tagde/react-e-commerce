// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDDSyl0qWsakXdRKeLaVXNAevoOcNYaLY",
  authDomain: "e-commerce-devknus.firebaseapp.com",
  projectId: "e-commerce-devknus",
  storageBucket: "e-commerce-devknus.appspot.com",
  messagingSenderId: "677106800757",
  appId: "1:677106800757:web:f21d1874bfddfe7891803c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const fireDB = getFirestore(app);

export { auth, fireDB };

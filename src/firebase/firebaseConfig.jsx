import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7_c6v1S56TE_WQvaBMcW1GuAyccO5GwY",
    authDomain: "mywebapp-71125.firebaseapp.com",
    projectId: "mywebapp-71125",
    storageBucket: "mywebapp-71125.appspot.com",
    messagingSenderId: "42029479204",
    appId: "1:42029479204:web:3e2e1d1953e0f67299afb1",
    measurementId: "G-KFV4LKDF2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
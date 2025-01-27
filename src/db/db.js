import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjv6NnqKcU_3pgTCDgJhr5vVa3GWLOrTQ",
  authDomain: "lutamania-2025.firebaseapp.com",
  projectId: "lutamania-2025",
  storageBucket: "lutamania-2025.firebasestorage.app",
  messagingSenderId: "491141556693",
  appId: "1:491141556693:web:990b9295292b424dcf755c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWPs7ynzUdih60oADzqhCUgyTIgMZToF4",
  authDomain: "susmessenger.firebaseapp.com",
  projectId: "susmessenger",
  storageBucket: "susmessenger.firestorage.app",
  messagingSenderId: "764108662382",
  appId: "1:764108662382:web:8c19c9b6f6fdcde6f9687f",
  measurementId: "G-DY5SD5Y4W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
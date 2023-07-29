import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nnn-indumentary.firebaseapp.com",
  projectId: "nnn-indumentary",
  storageBucket: "nnn-indumentary.appspot.com",
  messagingSenderId: "537805124633",
  appId: "1:537805124633:web:7909e813621f70a9cf6688"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
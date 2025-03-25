import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIR_APIKEY,
  authDomain: import.meta.env.VITE_FIR_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIR_PROJECTID,
  storageBucket: import.meta.env.VITE_FIR_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIR_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIR_APPID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
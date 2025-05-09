import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIPxRTdUC1s-aqsaYC7GZ1O0nqLBRIm64",
  authDomain: "cryptowallet-3af9a.firebaseapp.com",
  projectId: "cryptowallet-3af9a",
  storageBucket: "cryptowallet-3af9a.firebasestorage.app",
  messagingSenderId: "658239901097",
  appId: "1:658239901097:web:b01cad64ecdc9e52bb48b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

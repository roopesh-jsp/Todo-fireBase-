import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnL2Uj6qdONjPqZzDHIFFIPVxTgOgOmF8",
  authDomain: "todo-list-app-88ca4.firebaseapp.com",
  projectId: "todo-list-app-88ca4",
  storageBucket: "todo-list-app-88ca4.firebasestorage.app",
  messagingSenderId: "94178198135",
  appId: "1:94178198135:web:3eccc273b14402be20fc72",
  measurementId: "G-DNDYLFMZNT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

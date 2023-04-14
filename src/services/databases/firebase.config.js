
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDD6P1iAbDbaMLCoT6bKG8v7lntY3qLVM",
  authDomain: "stupid-15bfe.firebaseapp.com",
  projectId: "stupid-15bfe",
  storageBucket: "stupid-15bfe.appspot.com",
  messagingSenderId: "1033407596048",
  appId: "1:1033407596048:web:db90629df02d3ee971ec95",
  measurementId: "G-D7WPKTKN5F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const authentication = getAuth(app);
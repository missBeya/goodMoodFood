import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign in
function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Register
function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "./firebase-config.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

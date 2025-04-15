// auth-helper.js or wherever
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js"; // ✅ make sure this just exports config, not Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

// Optional: helper functions
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

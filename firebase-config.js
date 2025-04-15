// firebase-config.js

// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// Optional: Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Auth (optional, add if needed)
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTiLV8wLyZQc0W-YzdWQGooZq2KFoU00w",
  authDomain: "goodmoodfood-84f7b.firebaseapp.com",
  projectId: "goodmoodfood-84f7b",
  storageBucket: "goodmoodfood-84f7b.appspot.com",
  messagingSenderId: "715419127474",
  appId: "1:715419127474:web:6e86fbb1465bad30df83ab",
  measurementId: "G-E0LW67CGBQ"
};

// Initialize
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export to use in other files
export { app, db, auth };

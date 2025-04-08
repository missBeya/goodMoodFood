// Import Firebase SDK functions
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTiLV8wLyZQc0W-YzdWQGooZq2KFoU00w",
  authDomain: "goodmoodfood-84f7b.firebaseapp.com",
  projectId: "goodmoodfood-84f7b",
  storageBucket: "goodmoodfood-84f7b.appspot.com", // fix .app to .appspot.com
  messagingSenderId: "715419127474",
  appId: "1:715419127474:web:6e86fbb1465bad30df83ab",
  measurementId: "G-E0LW67CGBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export initialized app so it can be used in other files
export { app };

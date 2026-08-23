// ============================================================
// यहाँ अपनी Firebase project की details डालें।
// Firebase Console > Project Settings > General > "Your apps" > Web app > SDK setup and configuration
// से ये पूरा object copy होगा — बस नीचे paste कर दें।
//
// जब तक apiKey "YOUR_" से शुरू होगी, तब तक app सिर्फ local (isी browser में)
// mode में काम करेगा — cloud sync बंद रहेगा, कोई error नहीं आएगा।
//
// पूरे setup के steps README.md में दिए हैं।
// ============================================================


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUaMXTDxtHi4Zm9qyP719e-on4_5lge_0",
  authDomain: "day-diet-tracker.firebaseapp.com",
  projectId: "day-diet-tracker",
  storageBucket: "day-diet-tracker.firebasestorage.app",
  messagingSenderId: "257832871262",
  appId: "1:257832871262:web:1698567777fbb8d4895bcf",
  measurementId: "G-N9BL8QVQD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
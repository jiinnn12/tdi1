import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4X8yurtwFTHCQpRqcG-3ZurBqhBAIkHU",
  authDomain: "top-dongil.firebaseapp.com",
  projectId: "top-dongil",
  storageBucket: "top-dongil.firebasestorage.app",
  messagingSenderId: "501468638688",
  appId: "1:501468638688:web:ac8b4e1fd2816564c94f85"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfb9Srn3L36rStVrQ5BOHVx_zVpJBHBA",
  authDomain: "chatdemo-bfde1.firebaseapp.com",
  databaseURL: "https://chatdemo-bfde1-default-rtdb.firebaseio.com",
  projectId: "chatdemo-bfde1",
  storageBucket: "chatdemo-bfde1.firebasestorage.app",
  messagingSenderId: "108138978839",
  appId: "1:108138978839:web:b9a1ab5dde89398716c652"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

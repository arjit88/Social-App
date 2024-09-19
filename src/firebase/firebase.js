import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJJgxkCwGZsnplsY5BnRGD9nnszwhplZc",
  authDomain: "insta-clone-ca4c9.firebaseapp.com",
  projectId: "insta-clone-ca4c9",
  storageBucket: "insta-clone-ca4c9.appspot.com",
  messagingSenderId: "1078957208854",
  appId: "1:1078957208854:web:55b906179a4c7f26ad0c37",
  measurementId: "G-N8RK6ERY5Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

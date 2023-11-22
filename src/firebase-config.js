import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaj_udBW2a8UrruJYNhBYBskOlHpzKaqs",
  authDomain: "blogproject-018.firebaseapp.com",
  projectId: "blogproject-018",
  storageBucket: "blogproject-018.appspot.com",
  messagingSenderId: "294778432376",
  appId: "1:294778432376:web:5458757d8676923dca768d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
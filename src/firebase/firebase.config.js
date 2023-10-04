
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBsJRzSOZGEuPBhu9zPyO0rkzsezykMqsM",
  authDomain: "react-dragon-auth-route.firebaseapp.com",
  projectId: "react-dragon-auth-route",
  storageBucket: "react-dragon-auth-route.appspot.com",
  messagingSenderId: "519155649881",
  appId: "1:519155649881:web:a80c9ed64eee5996355048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
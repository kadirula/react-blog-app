import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCoXePXhqqtBmNss9gH5qfk7VMHtKdMz9s",
    authDomain: "blog-app-1520a.firebaseapp.com",
    projectId: "blog-app-1520a",
    storageBucket: "blog-app-1520a.appspot.com",
    messagingSenderId: "716524325173",
    appId: "1:716524325173:web:c58530aab447d777fe647c"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


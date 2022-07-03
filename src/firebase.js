import toast from 'react-hot-toast';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


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


// Kullanıcı Kayıt Fonksiyonu 
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      toast.success('Kayıt İşlemi Başarılı!');
      return user;
    }
  } catch (error) {
    toast.error(error.message);
  }
}

// Kullanıcı Giriş Fonksiyonu 
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      toast.success('Giriş Başarılı!');
      return user;
    }
  } catch (error) {
    toast.error(error.message);
  }
}

// Kullanıcı Çıkış Fonksiyonu
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
}

// Kullanıcı Kontrolü
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const authUser = {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      uid: user.uid
    }

    localStorage.setItem('user', JSON.stringify(authUser));

  } else {
    localStorage.removeItem('user');
  }
});
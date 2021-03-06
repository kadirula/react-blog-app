import toast from 'react-hot-toast';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore, collection, onSnapshot, doc,
  addDoc, query, getDocs, where
} from 'firebase/firestore';
import store from './store';
import { setBlogs, setAuthorBlogs } from './store/blogs';


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

// Veritabanı bağlantısı
const db = getFirestore();

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

// Veritabanına Kayıt Fonksiyonu
export const addBlog = async (data) => {
  try {
    const result = await addDoc(collection(db, 'blogs'), data);
    if (result != null) {
      toast.success('Kayıt İşlemi Başarılı');
      return true;
    }
    return false;

  } catch (error) {
    toast.error(error.message);
  }
}

// Tüm Blogları Çeken Fonksiyon
onSnapshot(collection(db, 'blogs'), (doc) => {
  store.dispatch(
    setBlogs(
      doc.docs.reduce((blogs, blog) => [...blogs, blog.data()], [])
    )
  )
})


// Kullanıcının Bloglarını Çeken Fonksiyon
const user = JSON.parse(localStorage.getItem('user'));

if (user !== null) {
  const q = query(collection(db, "blogs"), where("author", "==", user.email));

  onSnapshot(q, (doc) => {

    store.dispatch(
      setAuthorBlogs(
        doc.docs.reduce((authorBlogs, authorBlog) => [...authorBlogs, authorBlog.data()], [])
      )
    )

  })
}




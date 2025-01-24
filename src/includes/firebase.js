import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
// 呼叫 firebase 的 auth 方法，這是用來管理使用者的登入、登出、註冊等操作
const auth = firebase.auth();
// 呼叫 firebase 的 firestore 方法，這是用來管理資料庫的資料
const db = firebase.firestore();
// 呼叫 firestore 的 collection 方法，並指定 collection 的名稱為 users，這是用來管理使用者的資料
const usersCollection = db.collection("users");

export { auth, db, usersCollection };

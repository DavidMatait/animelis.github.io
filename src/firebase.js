import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCpV-pMy_zYjVcCC47_HSp5AXhY-IAAlSU",
  authDomain: "animelist-13d2d.firebaseapp.com",
  projectId: "animelist-13d2d",
  storageBucket: "animelist-13d2d.appspot.com",
  messagingSenderId: "532484349366",
  appId: "1:532484349366:web:bf0bc0364cc4289e44f517",
  measurementId: "G-17YP83F02J"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
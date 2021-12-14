import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH2KoSYHoFOZtDT_jgyvoRKCeLh8eZ0FI",
  authDomain: "disneyplus-build.firebaseapp.com",
  projectId: "disneyplus-build",
  storageBucket: "disneyplus-build.appspot.com",
  messagingSenderId: "224556056073",
  appId: "1:224556056073:web:cd2a48337df738c55b82d8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/database";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyC8nptl-pwPXS23EqiX8UHKWktSbvBdiaw",
  
    authDomain: "amgeodeta.firebaseapp.com",
  
    projectId: "amgeodeta",
  
    storageBucket: "amgeodeta.appspot.com",
  
    messagingSenderId: "943662819462",
  
    appId: "1:943662819462:web:f4247e98a56f6969884907"
  
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export default app;
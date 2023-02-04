// import * as firebase from 'firebase/app'
// import 'firebase/firestore'

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCZVGNDgINo6ahX1saRnxlO3LHwi4b2YAI",
//     authDomain: "react-bts-b7939.firebaseapp.com",
//     projectId: "react-bts-b7939",
//     storageBucket: "react-bts-b7939.appspot.com",
//     messagingSenderId: "951169781393",
//     appId: "1:951169781393:web:ea688f6ee78f483df27930"
// }
    
// )


// export function getFirebase(){
//     return app
// }

// export function getFirestore(){
//     return firebase.firestore(app);
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVGNDgINo6ahX1saRnxlO3LHwi4b2YAI",
  authDomain: "react-bts-b7939.firebaseapp.com",
  projectId: "react-bts-b7939",
  storageBucket: "react-bts-b7939.appspot.com",
  messagingSenderId: "951169781393",
  appId: "1:951169781393:web:ea688f6ee78f483df27930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
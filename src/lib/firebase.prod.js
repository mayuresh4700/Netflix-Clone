import Firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/auth'
// import { seedDatabase } from "../seed";
// we need to someHow seed the Database

// We need a config here

const config ={
    apiKey: "AIzaSyBW29d7tGdSH7_xvK8siaVBWHOtuUZy1D0",
    authDomain: "netflix-91856.firebaseapp.com",
    projectId: "netflix-91856",
    storageBucket: "netflix-91856.appspot.com",
    messagingSenderId: "145888896593",
    appId: "1:145888896593:web:41fcb0e0438914bb337a70",
    measurementId: "G-JZBJ5LPSE5"
}

const firebase = Firebase.initializeApp(config);
// seedDatabase (firebase)

export {firebase};
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0iodTIUSuL6m6MDboKLZcwhgGvvA1clA",
    authDomain: "mymoney-2c831.firebaseapp.com",
    projectId: "mymoney-2c831",
    storageBucket: "mymoney-2c831.appspot.com",
    messagingSenderId: "482428467289",
    appId: "1:482428467289:web:95d5dd460a18168d455948",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };

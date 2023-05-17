import { initializeApp, getApps } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMJsvVJrYQ7cnQLWhV22-Me2Bbzt1Rfm8",
    authDomain: "mis-project-b0e3d.firebaseapp.com",
    databaseURL: "https://mis-project-b0e3d-default-rtdb.firebaseio.com",
    projectId: "mis-project-b0e3d",
    storageBucket: "mis-project-b0e3d.appspot.com",
    messagingSenderId: "639473491312",
    appId: "1:639473491312:web:4caa0f5436e9612a8783b5",
    measurementId: "G-Z25QWTLG2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service


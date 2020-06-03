import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUVlkDjvRxh6h1KZXWoBGBk4GQDT8jogc",
    authDomain: "artsy-98316.firebaseapp.com",
    databaseURL: "https://artsy-98316.firebaseio.com",
    projectId: "artsy-98316",
    storageBucket: "artsy-98316.appspot.com",
    messagingSenderId: "737575955043",
    appId: "1:737575955043:web:fe24cd9c5464631657a656",
    measurementId: "G-DDQLMW3S16"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db };

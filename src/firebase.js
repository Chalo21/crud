import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRAiPxicRUqDhmlw2gi23wSri1Bds4a5k",
    authDomain: "crud-6589b.firebaseapp.com",
    projectId: "crud-6589b",
    storageBucket: "crud-6589b.appspot.com",
    messagingSenderId: "740972579209",
    appId: "1:740972579209:web:98a5b57a7055a90ed77958"
}

export const firebaseapp = firebase.initializeApp(firebaseConfig)
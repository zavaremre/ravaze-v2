import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXpj0J5vd4R2EZEiWExLF_RwyRf8Z6-kk",
    authDomain: "merhaba-4040d.firebaseapp.com",
    databaseURL: "https://merhaba-4040d.firebaseio.com",
    projectId: "merhaba-4040d",
    storageBucket: "merhaba-4040d.appspot.com",
    messagingSenderId: "912148055424",
    appId: "1:912148055424:web:7afe4ea55c900fc084ad65"
});

export const db = firebaseApp.firestore();
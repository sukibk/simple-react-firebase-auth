// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX8O4kuCZAjbHotul6umlaTbqyqmVxCaQ",
    authDomain: "react-http-app-9d66f.firebaseapp.com",
    databaseURL: "https://react-http-app-9d66f-default-rtdb.firebaseio.com",
    projectId: "react-http-app-9d66f",
    storageBucket: "react-http-app-9d66f.appspot.com",
    messagingSenderId: "153965878971",
    appId: "1:153965878971:web:094cbb85507a139c56d39e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
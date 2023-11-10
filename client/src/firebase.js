// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-estate-1c11f.firebaseapp.com",
	projectId: "mern-estate-1c11f",
	storageBucket: "mern-estate-1c11f.appspot.com",
	messagingSenderId: "171312791719",
	appId: "1:171312791719:web:e52a2da48cc093ab5b9b82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

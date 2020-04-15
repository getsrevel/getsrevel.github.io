import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAof7A2wpEylAFHsKWvqeJU8VkYN7G1VMI",
  authDomain: "coldhawaiiweather.firebaseapp.com",
  databaseURL: "https://coldhawaiiweather.firebaseio.com",
  projectId: "coldhawaiiweather",
  storageBucket: "coldhawaiiweather.appspot.com",
  messagingSenderId: "645018619046",
  appId: "1:645018619046:web:2ae11bff4009e1e965f867",
  measurementId: "G-61E1DX0Z3Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

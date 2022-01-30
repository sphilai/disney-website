
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";







const firebaseConfig = {
    apiKey: "AIzaSyAs2LH9niyL4l_JKfShb7927vLhwVQOZQI",
    authDomain: "disney-plus-e52e3.firebaseapp.com",
    projectId: "disney-plus-e52e3",
    storageBucket: "disney-plus-e52e3.appspot.com",
    messagingSenderId: "616191445343",
    appId: "1:616191445343:web:0204dc5aa72359aab10eea",
    measurementId: "G-24N8NJQ3HV"
  


};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();




export { auth, provider, storage };
export default db;




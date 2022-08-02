// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_FJoNO7Q0zT2eJf6PgevZFNAU4Sp74is",
  authDomain: "wheelcollectorreact.firebaseapp.com",
  projectId: "wheelcollectorreact",
  storageBucket: "wheelcollectorreact.appspot.com",
  messagingSenderId: "200342583347",
  appId: "1:200342583347:web:7c2c3b99bbb8d570098b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const db = getFirestore(app)

const docRef = doc(db, "products", "electro")

//getDoc(docRef).then((snapshot) => {
  //console.log({id: snapshot.id, ...snapshot.data()});
  //}
//)

const colRef = collection(db, 'products');
getDocs(colRef).then (snp => {
  console.log(
    snp.docs.map((document) => ({id: document.id, ...document.data()})))
})

console.log(docRef)
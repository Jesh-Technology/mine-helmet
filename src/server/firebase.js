// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnYOyF2YsTLTSq2crRrV7unMA8oO8ooLw",
  authDomain: "mine-helmet.firebaseapp.com",
  databaseURL: "https://mine-helmet-default-rtdb.firebaseio.com",
  projectId: "mine-helmet",
  storageBucket: "mine-helmet.appspot.com",
  messagingSenderId: "669108598900",
  appId: "1:669108598900:web:992ec2135a9c95535f3921",
  measurementId: "G-CHGEQ33W64"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}
var database = firebase.database();
  
export default database;
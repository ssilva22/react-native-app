import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBFsXQ5TWY9rdTWWVplSF1VfWo93jyGqB8",
  authDomain: "uber-eats-clone-178c3.firebaseapp.com",
  projectId: "uber-eats-clone-178c3",
  storageBucket: "uber-eats-clone-178c3.appspot.com",
  messagingSenderId: "737440428635",
  appId: "1:737440428635:web:a8245139fe230e228f457e",
  measurementId: "G-SZ040WP0MD",
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase

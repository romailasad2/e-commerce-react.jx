import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrNIook53CXVG6hp1YrTK2eC3lcMvypXU",
    authDomain: "crwn-db-17c49.firebaseapp.com",
    projectId: "crwn-db-17c49",
    storageBucket: "crwn-db-17c49.appspot.com",
    messagingSenderId: "361897330",
    appId: "1:361897330:web:156e2de28c5f01f8b9d1eb",
    measurementId: "G-4STZGTVR5R"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({params: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
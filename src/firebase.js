import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgHzy30HhgHCrHJ-f3RTQA3LD2Uo51jGY",
    authDomain: "ig-clone-3f621.firebaseapp.com",
    projectId: "ig-clone-3f621",
    storageBucket: "ig-clone-3f621.appspot.com",
    messagingSenderId: "442313785394",
    appId: "1:442313785394:web:f6e0035482c6a0734c3c2b"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

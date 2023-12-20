import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyD1-Z8-YpuRwJN3BIYCzqv-Mmj9l5hUvyw",
    authDomain: "contactapp-db772.firebaseapp.com",
    projectId: "contactapp-db772",
    storageBucket: "contactapp-db772.appspot.com",
    messagingSenderId: "111694299842",
    appId: "1:111694299842:web:6fee26280414fc08e1715b"
};



const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
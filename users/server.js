// Import the functions you need from the SDKs you need
import {
    getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import {
    getFirestore,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
import {
    initializeApp,
} from 'https:/www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCleEiMzuvJQxyVSLoW8bZnGDQisCboC7A",
    authDomain: "transferrwaitlist.firebaseapp.com",
    databaseURL: "https://transferrwaitlist-default-rtdb.firebaseio.com",
    projectId: "transferrwaitlist",
    storageBucket: "transferrwaitlist.appspot.com",
    messagingSenderId: "186248305358",
    appId: "1:186248305358:web:da0a74a9d2bdfed5c90e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
    doc,
    getDoc,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';

import {
    auth,
    db,
} from './server.js';

let User = {};
import { app } from './auth.js';

const auth = getAuth(app);




let loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', () => {
    Login();
});

async function Login() {
    let email = document.getElementById('email').value;
    

    try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        console.log(data)
        let activeUser = data.user.uid
        // window.location.replace("../dashboard/dashboard.html")
    } catch (err) {
        console.log(err.message);
    }
}

async function getUserData(userId) {
    try {
        const docRef = doc(db, 'users', userId);
        const userData = await getDoc(docRef);
        User = userData.data()
        showUser(User)
        // console.log(User)
    } catch {
        // console.log(err)
    }

}


function showUser(userData) {
    let email = document.getElementById('email')


    email.innerText = userData.email;
}


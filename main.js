
import { db } from './users/server.js'
import {
    doc, setDoc
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
let email = document.querySelector(".userEmail")
let getBtn = document.querySelector("#getUserEmail")



getBtn.addEventListener("click", async () => {
    let currEmail = email.value
    if (currEmail.length > 0) {
        try {
            const data = {
                email: currEmail
            }
            let randomUserId = 'VIC' + Math.floor(Math.random() * 23748495 + 20000)
            const docRef = doc(db, 'users', randomUserId)
            let res = await setDoc(docRef, data)
            console.log(res)
            alert("success")


        } catch (err) {
            console.log(err)
        }

    } else {
        console.log("Email is missing")
    }
})
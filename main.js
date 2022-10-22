
import { db } from './users/server.js'
import {
    doc, setDoc
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
let email = document.querySelector(".userEmail")
let getBtn = document.querySelector("#getUserEmail")
let errorMessage = document.getElementById('errorMessage')
let errorMessageOne = document.getElementById('errorMessageOne')
let errorMessageTwo = document.getElementById('errorMessageTwo')
const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

getBtn.addEventListener("click", async () => {
    if (!emailVal.test(email.value)) {
        errorMessageTwo.style.display = 'block';
        errorMessageTwo.innerText += `enter a vaild email address`
       
        window.location.reload()
    } else {
        errorMessage.style.display = 'block'
        errorMessage.innerText += `processing email address`
        let currEmail = email.value

        if (currEmail.length > 0) {
            try {
                const data = {
                    email: currEmail
                }
                let randomUserId = 'PHE' + Math.floor(Math.random() * 23748495 + 20000)
                const docRef = doc(db, 'users', randomUserId)
                let res = await setDoc(docRef, data)
                // console.log(res)
                errorMessage.style.display = 'none'
                errorMessageOne.style.display = 'block'
                errorMessageOne.innerText += `Email Registered Successfully!`
                // alert("success")
                window.location.reload()


            } catch (err) {
                console.log(err)
            }

        } else {
            console.log("Email is missing")
        }


    }


    // let currEmail = email.value



    // if (currEmail.length > 0) {
    //     try {
    //         const data = {
    //             email: currEmail
    //         }
    //         let randomUserId = 'VIC' + Math.floor(Math.random() * 23748495 + 20000)
    //         const docRef = doc(db, 'users', randomUserId)
    //         let res = await setDoc(docRef, data)
    //         // console.log(res)
    //         errorMessage.innerText +=`testing microphone`
    //         // alert("success")
    //         window.location.reload()


    //     } catch (err) {
    //         console.log(err)
    //     }

    // } else {
    //     console.log("Email is missing")
    // }
})

import { db } from './users/server.js'
import {
    doc, setDoc
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
let email = document.querySelector(".userEmail")
let getBtn = document.querySelector("#getUserEmail")
let errorMessage = document.getElementById('errorMessage')
let errorMessageOne = document.getElementById('errorMessageOne')
let errorMessageTwo = document.getElementById('errorMessageTwo')
let xOne = document.getElementById('xOne')
let xTwo = document.getElementById('xTwo')
let xThree = document.getElementById('xThree')
let popUp = document.getElementById('popUp') 
let canvas = document.getElementById('canvas') 
let homeBtn = document.getElementById('homeBtn')  
const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
xOne.addEventListener("click", () =>{
    errorMessageTwo.style.display = 'none';
})
xTwo.addEventListener("click", () =>{
    errorMessageOne.style.display = 'none'
    window.location.reload()
})
xThree.addEventListener("click", () =>{
    errorMessage.style.display = 'none'
})
homeBtn.addEventListener("click", () => {
    // popUp.style.display = 'none'
    window.location.reload()
})
getBtn.addEventListener("click", async () => {
    if (!emailVal.test(email.value)) {
        errorMessageTwo.style.display = 'flex';
        // errorMessageTwo.innerText += `enter a vaild email address`
       
        // window.location.reload()
    } else {
        errorMessage.style.display = 'flex'
        // errorMessage.innerText += `processing email address`
        errorMessageTwo.style.display = 'none';
        errorMessageOne.style.display = 'none'
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
                errorMessageTwo.style.display = 'none'
                // errorMessageOne.style.display = 'flex'
                // errorMessageOne.innerText += `Email Registered Successfully!`
                // alert("success")
                // window.location.reload()
                popUp.style.display = 'flex'

// animationnnnnnnn

                
                
// animationnnnnnnn

                canvas.style.display = 'flex'



            } catch (err) {
                console.log(err)
            }

        } else {
            console.log("Email is missing")
        }


    }
})
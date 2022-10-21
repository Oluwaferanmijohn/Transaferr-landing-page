import { db } from './server.js'
import {
    onSnapshot, collection
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';

let users = []
let listContainer = document.querySelector(".list-wrap")
GetWaitList()

function GetWaitList() {

    const docref = collection(db, "users")
    onSnapshot(docref, (snapshot) => {
        users = []
        snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })

        })

        DisplayList()
    })


}


function DisplayList() {
    listContainer.innerHTML = ''
    users.forEach((user) => {
        listContainer.innerHTML += `<li>${user.email}</li>`
    })


}